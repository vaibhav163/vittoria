/**
 * The eight business lines — copy taken as written from the Vittoria
 * Aviation Website Source Document (VA/WEB/SRC/2026/002, Sections 6.7–6.14).
 * Grouped into three families (Section 5.2). Do not paraphrase.
 */
export const FAMILIES = [
  {
    id: "technical",
    name: "Technical Services",
    line: "On the aircraft, and on the equipment that serves it",
    text: "CAR-145 maintenance in application, ground support equipment supply and after-sales, robotic dry wash and engine core wash.",
    image: "/images/service-mro.webp",
    alt: "Jet engine close-up on the apron",
  },
  {
    id: "operational",
    name: "Operational Services",
    line: "The clearances that let an aircraft and a workforce operate",
    text: "DGCA-cleared flight clearance and trip management, and BCAS-cleared aviation manpower with Airport Entry Permit sponsorship.",
    image: "/images/service-clearance.webp",
    alt: "Aircraft on final approach to land",
  },
  {
    id: "advisory",
    name: "Advisory and Development",
    line: "Building capability in other organisations",
    text: "Ground handling and cargo training to IATA standards, operational consulting delivered globally, and India market entry support.",
    image: "/images/service-consulting.webp",
    alt: "Consultants reviewing audit documents",
  },
];

export const CAPABILITIES = [
  {
    slug: "mro",
    num: "01",
    family: "technical",
    name: "Pan-India MRO",
    title: "Pan-India Aircraft MRO",
    strapline:
      "A CAR-145 Approved Maintenance Organisation, anchored by a customer that has already written to the regulator.",
    image: "/images/service-mro.webp",
    alt: "Jet engine close-up on the apron",
    blocks: [
      {
        text: "India holds an order backlog of roughly 1,800 aircraft against a domestic base of only 166 MRO facilities. Between 85 and 90 per cent of Indian aircraft maintenance is still performed abroad, draining more than USD 1.5 billion of foreign exchange every year. That gap is the opportunity.",
      },
      {
        lead: "Scope.",
        text: "Aircraft cabin, component and line maintenance, extending to base maintenance and a CAR-147 training organisation. Our application to the Directorate General of Civil Aviation is made under Rule 133B of the Aircraft Rules, 1937.",
      },
      {
        lead: "The anchor.",
        text: "A Letter of Intent from the engineering division of a leading Indian full-service carrier names Vittoria Aviation as a prospective MRO provider for cabin, component and line maintenance, subject to receipt of CAR-145 approval. The letter is expressly not an award of business, a contract or any binding commercial commitment, and we present it on exactly that basis.",
      },
      {
        text: "Phase one is asset-light: manpower, cabin and appearance work earns revenue before certification.",
      },
    ],
    highlight:
      "Status. We describe this as an application because that is what it is. We will describe it as an approval on the day it is granted, and not before. Indicative path to an initial CAR-145 certificate is fifteen to eighteen months from financial close.",
    cta: "Discuss the MRO programme",
  },
  {
    slug: "gse-leasing-and-maintenance",
    num: "02",
    family: "technical",
    name: "GSE Leasing and Maintenance",
    title: "GSE Leasing and Maintenance",
    strapline:
      "Indian ground support equipment is not lost on price. It is lost on after-sales — and after-sales is what we hold.",
    image: "/images/service-gse.webp",
    alt: "Pushback tug servicing an airliner",
    blocks: [
      {
        lead: "Supply.",
        text: "India representation for established ground support equipment manufacturers, covering passenger boarding bridges, tractors, loaders, ground power, air conditioning and ramp servicing equipment.",
      },
      {
        lead: "Leasing and pooling.",
        text: "A capital-light alternative for handlers and airports, generating recurring revenue on the same asset base.",
      },
      {
        lead: "Overhaul.",
        text: "As DGCA-approved workshops, calibration and non-destructive testing are established across India, structural, hydraulic and electrical overhaul becomes the highest-margin after-sales activity available.",
      },
      {
        lead: "Context.",
        text: "The Indian GSE market runs from USD 578 million in 2025 toward USD 843 million by 2034, with an airport decarbonisation replacement cycle retiring diesel equipment on top of that growth, and new capacity at Navi Mumbai, Noida International and across the metros. Our Chief Executive was directly accountable for GSE procurement at India’s largest handler, so we specify from the buyer’s side of the table.",
      },
      {
        lead: "On parts.",
        text: "We will not specify or fit non-approved components. Unapproved parts breach manufacturer requirements, create regulatory exposure and can invalidate insurance cover where an incident involves an aircraft or personnel.",
      },
    ],
    highlight:
      "After-sales — the difference. Our BCAS clearance permits our technicians to enter security-restricted areas and service equipment where it stands. Most distributors cannot legally do this and must subcontract. That single fact decides more GSE tenders in India than price does.",
    cta: "Request a GSE specification review",
  },
  {
    slug: "flight-clearance",
    num: "03",
    family: "operational",
    name: "Flight Clearance and Trip Management",
    title: "Flight Clearance and Trip Management",
    strapline:
      "The authorised intermediary between an aircraft operator and the Indian regulatory system.",
    image: "/images/service-clearance.webp",
    alt: "Aircraft on final approach to land",
    blocks: [
      {
        text: "We hold DGCA security clearance for enrolment as a Flight Clearing Agency under CAR Section 3, Series F, Part I — cleared at both company and board level.",
      },
      {
        lead: "Services.",
        text: "Landing and overflight clearances, non-scheduled and charter permissions, ferry and delivery flights, technical stops, AOG movements, medical evacuation, cargo charters and full trip support.",
      },
      {
        lead: "Trip management.",
        text: "Extending from permits into complete trip support — ground handling, fuel, catering, crew and slot coordination for non-scheduled operators.",
      },
      {
        text: "Because we hold the clearance ourselves rather than routing through a third party, we control the timeline and carry the accountability. For short-notice and irregular operations that difference is usually the whole difference.",
      },
      {
        text: "Demand is growing with aircraft deliveries, lease transitions, cargo charters and business aviation — and every foreign aircraft inducted for maintenance in India needs clearances in both directions.",
      },
    ],
    highlight: null,
    cta: "Enquire about a clearance",
  },
  {
    slug: "aviation-training",
    num: "04",
    family: "advisory",
    name: "Aviation Training",
    title: "Aviation Training — Ground Handling and Cargo",
    strapline:
      "India is adding aircraft and airports faster than it is adding trained people to run them.",
    image: "/images/service-training.webp",
    alt: "Training and operations team at work",
    blocks: [
      {
        lead: "Programmes.",
        text: "Ramp and aircraft turnaround, passenger and baggage services, load control, weight and balance, cargo acceptance and warehouse operations, dangerous goods awareness, and safety management systems.",
      },
      {
        lead: "Standards.",
        text: "Curricula built on IATA IGOM, AHM and ISAGO GOSM, with assessment records and certification maintained for every participant.",
      },
      {
        lead: "Delivery.",
        text: "Classroom, on-the-job and station-based, at the customer’s location, at our Delhi base, or embedded inside a live handling operation. Recurrent and refresher training is mandated rather than discretionary, so the relationship recurs by rule.",
      },
    ],
    highlight:
      "Approvals. Certified in-house trainers deliver today. Approved-institute status for regulated AVSEC and dangerous goods courses is a defined build item, not a present claim.",
    cta: "Discuss a training programme",
  },
  {
    slug: "aviation-consulting",
    num: "05",
    family: "advisory",
    name: "Aviation Consulting",
    title: "Aviation Consulting — Ground Handling and Cargo",
    strapline:
      "Operational transformation delivered by people who have run the operations themselves.",
    image: "/images/service-consulting.webp",
    alt: "Consultants reviewing audit documents",
    blocks: [
      {
        lead: "Practice areas.",
        text: "Ground handling and cargo operational assessment, resource and equipment modelling, service quality audits, tariff and commercial structuring, and station turnaround programmes.",
      },
      {
        lead: "Method.",
        text: "Assessments are conducted against IATA IGOM, AHM, ISAGO GOSM and SGHA standards, so findings are testable by any competent third party rather than a matter of opinion. Deliverables are built to withstand board, regulator and lender scrutiny.",
      },
      {
        lead: "Track record.",
        text: "Full advisory suites delivered internationally, including validated on-site diagnostics, resource and equipment models, and fifteen-year dual-case business cases for a national flag carrier engagement. Mandates executed across South Asia, the Gulf and Central Asia, with capacity to serve Europe and Africa.",
      },
    ],
    highlight: null,
    cta: "Discuss an assignment",
  },
  {
    slug: "robotic-dry-wash",
    num: "06",
    family: "technical",
    name: "Robotic Dry Wash and Engine Core Wash",
    title: "Aircraft Robotic Dry Wash and Engine Core Wash",
    strapline: "A business with a measurable payback for the airline.",
    image: "/images/service-drywash.webp",
    alt: "Private jet gleaming at sunset",
    blocks: [
      {
        lead: "Robotic dry wash.",
        text: "Automated aircraft exterior cleaning that removes water consumption, cuts cleaning time and improves finish consistency. Our Chief Executive led the first such operation in Asia and the Middle East, and served as its Accountable Manager.",
      },
      {
        lead: "Engine core wash.",
        text: "Restores exhaust gas temperature margin, improves fuel efficiency by up to 1 to 1.5 per cent, and reduces unplanned engine removals. Compatible with CFM56, V2500 and LEAP.",
      },
      {
        text: "Indian carriers operate in one of the most fuel-cost-sensitive environments in the world, where a one per cent efficiency gain is material. The exterior process is water-free, with quantifiable emissions reduction — a sustainability case that survives scrutiny rather than decorating a report.",
      },
      {
        text: "Delivered with an established technology partner. We act as training and implementation partner for airlines, airports and handlers in India and overseas.",
      },
    ],
    highlight: null,
    cta: "Request a wash programme assessment",
  },
  {
    slug: "aviation-manpower",
    num: "07",
    family: "operational",
    name: "Aviation Manpower",
    title: "Aviation Manpower Supply",
    strapline:
      "A workforce recruited, trained, badged and deployed by an organisation that holds the clearance to do it.",
    image: "/images/service-representation.webp",
    alt: "Airline cabin interior",
    blocks: [
      {
        lead: "Categories supplied.",
        text: "Aircraft cleaning and cabin staff, ground handling and ramp staff, cargo handling staff, helpers, drivers, supervisors, engineers and licensed technical personnel.",
      },
      {
        lead: "Government enlisted.",
        text: "Manpower services are registered under NIC codes 5224 and 5223 in our National Small Industries Corporation Government Purchase Enlistment, valid to August 2028.",
      },
      {
        lead: "International deployment.",
        text: "A trained resource pool available for the Gulf, South Asia, Africa and Europe, drawing on more than two decades of international handler relationships. India faces a structural deficit of licensed and type-rated engineers, and the same workforce upgrades into CAR-66 certifying staff as our maintenance scope widens.",
      },
    ],
    highlight:
      "The clearance advantage. Airport Entry Permit sponsorship and airside access flow from our BCAS clearance. Organisations without that clearance cannot badge their own staff — and buy that capability from us.",
    cta: "Discuss a manpower requirement",
  },
  {
    slug: "india-market-entry",
    num: "08",
    family: "advisory",
    name: "India Market Entry",
    title: "India Market Entry and Investment Partner",
    strapline:
      "Foreign entrants do not lack capital or technology. They lack someone who can get things done on the ground.",
    image: "/images/india-market.webp",
    alt: "Airliner in flight against a clear sky",
    blocks: [
      {
        lead: "The problem we solve.",
        text: "Equipment sold but never serviced, because the distributor could not badge an engineer. Ventures stalled eighteen months awaiting a clearance nobody scoped. Facilities built on land that took three years to allot.",
      },
      {
        lead: "What we provide.",
        text: "Regulatory navigation through BCAS, DGCA, the Ministry of Civil Aviation and the Ministry of Home Affairs; airport access negotiation with the Airports Authority of India and private operators; entity structuring; workforce build under Indian labour regulation; and customer access at decision level.",
      },
      {
        lead: "Structures.",
        text: "Joint venture, equity participation, exclusive distribution or representation, technology transfer with local delivery, or a pure advisory mandate with an option to convert.",
      },
      {
        text: "A greenfield entrant needs twelve to eighteen months for airside clearance alone. A partner joining Vittoria starts operating, not applying. One hundred per cent foreign direct investment is permitted in Indian MRO under the automatic route.",
      },
    ],
    highlight: null,
    cta: "Discuss entering the Indian market",
  },
];

export const CREDENTIALS = [
  {
    short: "BCAS",
    name: "BCAS security clearance",
    detail:
      "Auxiliary Service Provider security clearance, valid to December 2029",
    full: "Bureau of Civil Aviation Security, Ministry of Civil Aviation. Auxiliary Service Provider at airports. File No. 15/156/2024-DELHI-BCAS (E-260061), dated 9 December 2024. A location-specific Security Programme is filed under AVSEC Order 01/2019 for each place of operation.",
    validity: "Five years from issue — to December 2029",
  },
  {
    short: "DGCA",
    name: "DGCA security clearance",
    detail:
      "Security clearance for enrolment as a Flight Clearing Agency, CAR Section 3 Series F Part I",
    full: "Directorate General of Civil Aviation. Security clearance of the Company and its Board for enrolment as a Flight Clearing Agency under CAR Section 3, Series F, Part I. F. No. DGCA-14014/22/2026-AT-1 (Comp. No. 290987), dated 5 August 2026.",
    validity: "Co-terminus with the period of enrolment",
  },
  {
    short: "MCA",
    name: "Corporate identity",
    detail: "Private Limited company since 2017, object clause widened to aviation services in 2026",
    full: "Ministry of Corporate Affairs, Registrar of Companies. Private Limited Company incorporated 25 April 2017. CIN U52231DL2017PTC316712. Object clause widened by special resolution on 23 February 2026 under Section 13(1) of the Companies Act, 2013.",
    validity: "Active",
  },
  {
    short: "NSIC",
    name: "NSIC Government Purchase Enlistment",
    detail: "Government Purchase Enlistment for aviation and manpower services, valid to August 2028",
    full: "National Small Industries Corporation Limited, a Government of India enterprise. NSIC/GP/DEL/2026/0057928, dated 4 August 2026. Aviation services under NIC 5223 and manpower services under NIC 5224 and 5223. Establishes eligibility under the Central Government Store Purchase Programme with exemption from Earnest Money Deposit.",
    validity: "4 August 2026 to 3 August 2028",
  },
  {
    short: "DPIIT",
    name: "DPIIT Startup India recognition",
    detail: "Recognised startup, Airport Operations sector",
    full: "Ministry of Commerce and Industry. Certificate DIPP241882, issued 31 January 2026. Recognised sector: Airport Operations.",
    validity: "To 24 April 2027",
  },
  {
    short: "GST",
    name: "GST registration",
    detail: "Registered since 2017, Delhi jurisdiction",
    full: "Form GST REG-06 under Rule 10(1). GSTIN 07AAFCV8947H1ZS. Registered 14 November 2017, Delhi jurisdiction. PAN AAFCV8947H.",
    validity: "Regular registration, currently valid",
  },
];
