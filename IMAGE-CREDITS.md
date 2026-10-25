# Image Credits

All photos in `public/images/` are free-to-use stock photos (Unsplash License /
Pexels License — free for commercial use, no attribution required). They are
downloaded into the project, so the site does not depend on any external
image host. To replace any photo, drop a new file with the same name into
`public/images/` — no code change is needed.

| File | Used on | Source |
|---|---|---|
| hero-aircraft.webp | Home hero band | Unsplash — images.unsplash.com/photo-1436491865332-7a61a109cc05 |
| home-operations.webp | Home, above Partners | Unsplash — images.unsplash.com/photo-1569154941061-e231b4725ef1 |
| service-leasing.webp | Services — Aircraft Leasing | Unsplash — images.unsplash.com/photo-1540962351504-03099e0a754b |
| service-mro.webp | Services — MRO & Cabin Maintenance | Pexels — images.pexels.com/photos/912050 |
| service-representation.webp | Services — Airline Representation | Unsplash — images.unsplash.com/photo-1540339832862-474599807836 |
| service-gse.webp | Services — Ground Support Equipment | Unsplash — images.unsplash.com/photo-1473862170180-84427c485aca |
| service-clearance.webp | Services — Flight Clearance Agency | Unsplash — images.unsplash.com/photo-1556388158-158ea5ccacbd |
| service-cargo.webp | Services — Airport & Cargo Management | Unsplash — images.unsplash.com/photo-1559297434-fae8a1916a79 |
| service-consulting.webp | Services — Consulting & Quality Audits | Unsplash — images.unsplash.com/photo-1454165804606-c3d57bc86b40 |
| service-training.webp | Services — Training & Manpower | Unsplash — images.unsplash.com/photo-1521737604893-d14cc237f11d |
| service-drywash.webp | Services — Robotic Dry Wash | Unsplash — images.unsplash.com/photo-1474302770737-173ee21bab63 |
| governance.webp | Governance hero banner | Unsplash — images.unsplash.com/photo-1486406146926-c627a92ad1ab |
| compliance.webp | Compliance hero banner | Unsplash — images.unsplash.com/photo-1520437358207-323b43b50729 |
| news.webp | News hero banner | Unsplash — images.unsplash.com/photo-1529074963764-98f45c47344b |
| contact.webp | Contact hero banner | Unsplash — images.unsplash.com/photo-1530521954074-e64f6810b32d |

## Partner logos (public/logos/)

Used in the Home page "Partners & Clients" section. Each logo was taken
from the company's own official website (header logo, touch icon or
favicon) and visually verified. Logos are trademarks of their owners and
are shown only to identify the partners named on the site.

| File | Company | Source |
|---|---|---|
| air-india.png | Air India | Current Air India wordmark (Wikimedia Commons rendering of the 2023 logo) |
| spicejet.png | SpiceJet | SpiceJet wordmark (Wikimedia Commons) |
| us-bangla.png | US-Bangla Airlines | usbair.com — header logo |
| aerowash.png | Aerowash | aerowash.com — header logo |
| guangtai.jpg | Guangtai | guangtai.com.cn — header logo |
| vhr.png | VHR | v-hr.com — touch icon |
| aerotech.png | Aerotech (Aerotech Aviation Services Pvt. Ltd.) | aerotechindia.com — site icon |

CCA Ltd and Akitu Aviation have no official logo file publicly available
on the web (checked 23 Oct 2026), so they are shown as text in the same
grid. If the client sends their logo files, drop them into `public/logos/`
as `cca.png` / `akitu.png` and replace their text tiles in
`src/pages/Home.jsx` with the same `<img>` pattern as the other partners.

Note: two photos show real airline liveries in ordinary airport operations
(a United aircraft with a pushback tug, and an Air Canada aircraft in
flight). If the client prefers no airline branding, replace
`service-gse.webp` and `news.webp` with unbranded photos of the same names.

| `india-market.webp` | Partnerships / India Market hero, Capability 08 | Airliner in flight, clear sky (photo-1569629743817) — Unsplash |
| `india-sky.webp` | Partnerships / Investment split | Aircraft wing over mountain ranges (photo-1483304528321) — Unsplash |

## Hero video (homepage)

| File | Source |
|---|---|
| `public/videos/hero-loop.mp4` / `hero-loop.webm` | Wing over clouds, Pixabay video 142647 (free Pixabay licence) — trimmed to a 16s muted loop, 1920x1080, H.264 1.2 MB + VP9 WebM 0.3 MB. Poster: `public/images/hero-poster.webp` (frame from the clip). Interim asset — replace with the commissioned V-01 hero loop when shot (Source Document, Section 8). |
