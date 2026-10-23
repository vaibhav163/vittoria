#!/usr/bin/env python3
"""Insert the photos from public/images/ into the React pages.
Run after convert.py. Idempotent: skips a page if its image is already in.
Images live in public/images/ so the client can replace any photo by
dropping in a file with the same name — no code change needed.
"""
import pathlib, re

SRC = pathlib.Path(__file__).resolve().parent.parent / "src" / "pages"

def img(src, alt, cls, eager=False):
    load = "" if eager else ' loading="lazy"'
    return f'<img src="{src}" alt="{alt}"{load} className="{cls}" />'

def insert_after_hero(page_file, markup):
    p = SRC / page_file
    t = p.read_text()
    if markup.split('"')[1] in t:
        print(page_file, "already has image, skip"); return
    idx = t.find("</section>")
    assert idx != -1, page_file
    idx += len("</section>")
    t = t[:idx] + "\n\n" + markup + t[idx:]
    p.write_text(t)
    print(page_file, "hero banner added")

# ---- Home: full-width photo under the hero, second photo above Partners ----
home = SRC / "Home.jsx"
t = home.read_text()
if "/images/hero-aircraft.webp" not in t:
    strip = ('<section className="relative border-b border-line">\n'
             '  ' + img("/images/hero-aircraft.webp", "Aircraft wing above the clouds at sunset",
                         "w-full h-[280px] lg:h-[440px] object-cover", eager=True) + "\n</section>")
    marker = "{/* ============ STATS BAR ============ */}"
    assert marker in t
    t = t.replace(marker, strip + "\n\n" + marker, 1)
if "/images/home-operations.webp" not in t:
    strip2 = ('<section className="relative border-b border-line">\n'
              '  ' + img("/images/home-operations.webp", "Airliner parked at the terminal",
                          "w-full h-[260px] lg:h-[380px] object-cover") + "\n</section>")
    marker2 = "{/* ============ PARTNERS ============ */}"
    assert marker2 in t
    t = t.replace(marker2, strip2 + "\n\n" + marker2, 1)
home.write_text(t)
print("Home done")

# ---- Services: one photo in the left column of each of the 9 sections ----
services = {
    "leasing":        ("service-leasing.webp", "Private jet on the apron, ready for lease"),
    "mro":            ("service-mro.webp", "Jet engine close-up on the apron"),
    "representation": ("service-representation.webp", "Airline cabin interior"),
    "gse":            ("service-gse.webp", "Pushback tug servicing an airliner"),
    "clearance":      ("service-clearance.webp", "Aircraft on final approach to land"),
    "cargo":          ("service-cargo.webp", "Air cargo containers at a freight terminal"),
    "consulting":     ("service-consulting.webp", "Consultants reviewing audit documents"),
    "training":       ("service-training.webp", "Training and operations team at work"),
    "drywash":        ("service-drywash.webp", "Private jet gleaming at sunset"),
}
p = SRC / "Services.jsx"
t = p.read_text()
for sid, (fn, alt) in services.items():
    if f"/images/{fn}" in t:
        print(sid, "already, skip"); continue
    start = t.find(f'<section id="{sid}"')
    assert start != -1, sid
    endp = t.find("</p>", start)
    assert endp != -1 and endp - start < 1200, (sid, endp - start)
    endp += len("</p>")
    markup = "\n      " + img(f"/images/{fn}", alt, "mt-6 w-full h-44 object-cover")
    t = t[:endp] + markup + t[endp:]
p.write_text(t)
print("Services done")

# ---- Page hero banners ----
insert_after_hero("Governance.jsx",
    '<section className="relative border-b border-line">\n  ' +
    img("/images/governance.webp", "Modern corporate office building", "w-full h-[240px] lg:h-[340px] object-cover") + "\n</section>")
insert_after_hero("Compliance.jsx",
    '<section className="relative border-b border-line">\n  ' +
    img("/images/compliance.webp", "Aircraft landing at dusk", "w-full h-[240px] lg:h-[340px] object-cover") + "\n</section>")
insert_after_hero("News.jsx",
    '<section className="relative border-b border-line">\n  ' +
    img("/images/news.webp", "Airliner in flight", "w-full h-[240px] lg:h-[340px] object-cover") + "\n</section>")
insert_after_hero("Contact.jsx",
    '<section className="relative border-b border-line">\n  ' +
    img("/images/contact.webp", "Passenger relaxing in an airport lounge", "w-full h-[240px] lg:h-[340px] object-cover") + "\n</section>")
print("ALL DONE")
