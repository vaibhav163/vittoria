#!/usr/bin/env python3
"""Convert the original Vittoria Aviation static HTML files to React JSX.
Reads ../user/files/*.html (the user's uploaded originals), extracts the
shared <header>, each page's <main>, and the two <footer> variants, and
writes JSX components into src/. Run: python3 scripts/convert.py <source_dir>
"""
import re, sys, pathlib
from lxml import html as lxml_html
from lxml.etree import Comment

SRC = pathlib.Path(sys.argv[1])
OUT = pathlib.Path(__file__).resolve().parent.parent / "src"

VOID = {"area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr","circle","path","rect","line","polyline","polygon","ellipse","stop","use"}
ATTR_MAP = {
    "class":"className","for":"htmlFor","viewbox":"viewBox","tabindex":"tabIndex",
    "colspan":"colSpan","rowspan":"rowSpan","maxlength":"maxLength","readonly":"readOnly",
    "stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin",
    "stroke-dasharray":"strokeDasharray","stroke-dashoffset":"strokeDashoffset","stroke-opacity":"strokeOpacity",
    "stroke-miterlimit":"strokeMiterlimit","fill-opacity":"fillOpacity","fill-rule":"fillRule","clip-rule":"clipRule",
    "text-anchor":"textAnchor","stop-color":"stopColor","stop-opacity":"stopOpacity",
    "gradientunits":"gradientUnits","gradienttransform":"gradientTransform","patternunits":"patternUnits",
    "preserveaspectratio":"preserveAspectRatio","marker-end":"markerEnd","marker-start":"markerStart",
    "font-family":"fontFamily","font-size":"fontSize","font-weight":"fontWeight","letter-spacing":"letterSpacing",
    "xlink:href":"href","xml:space":"xmlSpace","xmlns:xlink":"xmlnsXlink","basefrequency":"baseFrequency",
    "calcmode":"calcMode","keytimes":"keyTimes","repeatcount":"repeatCount","attributename":"attributeName",
    "cellpadding":"cellPadding","cellspacing":"cellSpacing","frameborder":"frameBorder","allowfullscreen":"allowFullScreen",
    "autocomplete":"autoComplete","autofocus":"autoFocus","enctype":"encType","novalidate":"noValidate",
}
BOOL = {"required","disabled","selected","checked","multiple","readOnly","autoFocus","controls","loop","muted","autoPlay","hidden","open"}
ROUTES = {"index":"/","services":"/services","governance":"/governance","compliance":"/compliance",
          "news":"/news","contact":"/contact","privacy":"/privacy","sitemap":"/sitemap"}

def map_href(h):
    if not h or h.startswith(("http://","https://","tel:","mailto:","#","data:")):
        return None
    base, _, frag = h.partition("#")
    name = base.rsplit("/",1)[-1].lower().replace(".html","")
    if name in ROUTES:
        r = ROUTES[name]
        return r + ("#"+frag if frag else "")
    return None

def esc_text(s):
    if not s: return ""
    s = s.replace("{", "{'{'}").replace("}", "{'}'}")
    return s

def esc_attr(s):
    return s.replace("&","&amp;").replace('"',"&quot;").replace("{","&#123;").replace("}","&#125;")

def style_obj(s):
    props = []
    for decl in s.split(";"):
        if ":" not in decl: continue
        k, v = decl.split(":",1)
        k = k.strip(); v = v.strip()
        if not k: continue
        kc = re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)
        props.append(f"{kc}: \"{v}\"")
    return "{{ " + ", ".join(props) + " }}"

def emit(el, form_variant=None):
    if isinstance(el, lxml_html.HtmlComment) or el.tag is Comment:
        txt = (el.text or "").strip()
        return "{/* " + txt.replace("*/","* /") + " */}"
    tag = el.tag
    if not isinstance(tag, str):
        return esc_text(el.text or "") + "".join(emit(c, form_variant) for c in el)
    if tag == "form" and "rfp-form" in (el.get("class") or ""):
        cls = el.get("class").replace("rfp-form","").strip()
        cls = re.sub(r"\s+"," ",cls)
        return f'<RfpForm variant="{form_variant}" className="{cls}" />'
    out_tag = tag
    attrs = []
    for k, v in el.attrib.items():
        kl = k.lower()
        if tag == "a" and kl == "href":
            r = map_href(v)
            if r is not None:
                out_tag = "Link"
                attrs.append(f'to="{esc_attr(r)}"')
                continue
        name = ATTR_MAP.get(kl, ATTR_MAP.get(k, k))
        if name in BOOL:
            attrs.append(name)
        elif name == "style":
            attrs.append(f"style={style_obj(v)}")
        else:
            attrs.append(f'{name}="{esc_attr(v)}"')
    attr_s = (" " + " ".join(attrs)) if attrs else ""
    inner = esc_text(el.text or "")
    for c in el:
        inner += emit(c, form_variant)
        inner += esc_text(c.tail or "")
    if tag in VOID and not inner.strip():
        return f"<{out_tag}{attr_s} />"
    return f"<{out_tag}{attr_s}>{inner}</{out_tag}>"

def extract(text, tag):
    m = re.search(rf"<{tag}[\s>].*?</{tag}>", text, re.S|re.I)
    return m.group(0) if m else ""

def convert_fragment(html_str, form_variant=None):
    frag = lxml_html.fragment_fromstring(html_str, create_parent="div")
    # fragment_fromstring wraps in div; emit its children (the single root)
    roots = list(frag)
    assert len(roots) == 1, f"expected 1 root, got {len(roots)}"
    return emit(roots[0], form_variant)

def title_of(text):
    m = re.search(r"<title>(.*?)</title>", text, re.S|re.I)
    t = (m.group(1).strip() if m else "Vittoria Aviation Private Limited")
    return t.replace("&amp;","&")

PAGES = [("index.html","Home","/"),("Services.html","Services","/services"),
         ("Governance.html","Governance","/governance"),("Compliance.html","Compliance","/compliance"),
         ("News.html","News","/news"),("Contact.html","Contact","/contact"),("Privacy.html","Privacy","/privacy")]

for fname, comp, route in PAGES:
    text = (SRC/fname).read_text(errors="ignore")
    main = extract(text, "main")
    # index.html (invalidly) nests its <footer> inside <main>; the footer is a
    # shared component in React, so strip it from every page's main.
    main = re.sub(r"<footer[\s>].*?</footer>", "", main, flags=re.S|re.I)
    fv = "full" if comp == "Contact" else None
    jsx = convert_fragment(main, form_variant=fv)
    imports = ['import { useEffect } from "react";']
    if "<Link" in jsx: imports.append('import { Link } from "react-router-dom";')
    if "<RfpForm" in jsx: imports.append('import RfpForm from "../components/RfpForm";')
    title = title_of(text).replace('"','\\"')
    body = "\n".join(imports) + f"""

export default function {comp}() {{
  useEffect(() => {{ document.title = "{title}"; }}, []);
  return (
    {jsx}
  );
}}
"""
    (OUT/"pages"/f"{comp}.jsx").write_text(body)
    print("page", comp, len(body))

# Header from index (identical on all pages)
text = (SRC/"index.html").read_text(errors="ignore")
header_jsx = convert_fragment(extract(text, "header"))
# Mobile menu wiring: menu button toggles state, mobile menu shows/hides
header_jsx = header_jsx.replace('id="menuBtn" ', '').replace('id="mobileMenu" ', '')
header_jsx = re.sub(
    r'<button className="lg:hidden p-2 text-abus-900" aria-label="Open menu" aria-expanded="false">',
    '<button className="lg:hidden p-2 text-abus-900" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>',
    header_jsx)
header_jsx = header_jsx.replace(
    'className="hidden lg:hidden border-t border-line bg-white px-6 py-5 space-y-1 font-medium text-ink-700"',
    'className={(menuOpen ? "" : "hidden ") + "lg:hidden border-t border-line bg-white px-6 py-5 space-y-1 font-medium text-ink-700"}')
header_jsx = header_jsx.replace('id="menuBtn" ', '')
header_body = f'''import {{ useState }} from "react";
import {{ Link }} from "react-router-dom";

export default function Header() {{
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    {header_jsx}
  );
}}
'''
(OUT/"components"/"Header.jsx").write_text(header_body)
print("header", len(header_body))

# Footers: home variant (with short form) + standard variant (CTA)
home_footer = convert_fragment(extract(text, "footer"), form_variant="short")
std_text = (SRC/"Contact.html").read_text(errors="ignore")
std_footer = convert_fragment(extract(std_text, "footer"))
footer_body = f'''import {{ Link }} from "react-router-dom";
import RfpForm from "./RfpForm";

export default function Footer({{ variant }}) {{
  if (variant === "home") {{
    return (
      {home_footer}
    );
  }}
  return (
    {std_footer}
  );
}}
'''
(OUT/"components"/"Footer.jsx").write_text(footer_body)
print("footer", len(footer_body))
print("DONE")
