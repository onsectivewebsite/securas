export const siteConfig = {
  name: "Securas Security Group Inc.",
  shortName: "Securas",
  legalName: "Securas Security Group Inc.",
  tagline: "Watching Over What Matters",
  description:
    "Securas Security Group Inc. delivers CCTV monitoring, alarm response, fire & life-safety monitoring, and professional guard services to homes and businesses across Brampton and the Greater Toronto Area.",
  url: "https://www.securassecuritygroup.com",
  phone: "343-558-9669",
  phoneHref: "+13435589669",
  email: "info@securassecuritygroup.com",
  address: {
    street: "22 Drexel Road",
    city: "Brampton",
    region: "ON",
    postalCode: "L6P 3V2",
    country: "CA",
  },
  hours: {
    office: "Mon–Fri, 9:00 AM – 6:00 PM",
    monitoring: "24 / 7 / 365 Monitoring & Emergency Dispatch",
  },
  serviceArea:
    "Brampton, the Greater Toronto Area, and communities across Ontario",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  icon: string;
  heroDescription: string;
  image?: string;
  imageAlt?: string;
  features: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "cctv-monitoring",
    name: "CCTV Monitoring",
    shortName: "CCTV Monitoring",
    icon: "camera",
    summary:
      "Live and recorded video surveillance watched by trained operators, day and night, so incidents are caught as they happen — not after the fact.",
    heroDescription:
      "Our monitoring team keeps eyes on your property around the clock, turning your camera network into an active line of defence instead of passive footage that only gets reviewed after something goes wrong.",
    features: [
      "Live remote video monitoring by trained operators",
      "Real-time motion and perimeter breach alerts",
      "Integration with existing IP and analog camera systems",
      "Nighttime and after-hours property watch for businesses",
      "Recorded footage retrieval for incidents and investigations",
      "Scalable coverage for single sites or multi-location businesses",
    ],
    process: [
      {
        title: "Site & Camera Assessment",
        description:
          "We review your current camera layout and coverage gaps, or help you plan a new system built for monitoring from day one.",
      },
      {
        title: "Connection & Testing",
        description:
          "Your feeds are linked into our monitoring centre and tested for image quality, blind spots, and alert accuracy.",
      },
      {
        title: "Active Monitoring",
        description:
          "Operators watch your feeds on the schedule you choose — overnight, after hours, or continuously — and log every notable event.",
      },
      {
        title: "Alert & Response",
        description:
          "When something is flagged, we notify you immediately and can dispatch a guard response or contact emergency services on your behalf.",
      },
    ],
    faqs: [
      {
        question: "Do I need new cameras to use your monitoring service?",
        answer:
          "In most cases, no. We can work with your existing camera system as long as it supports remote viewing. If you're starting from scratch or upgrading, we can advise on equipment that suits monitoring.",
      },
      {
        question: "What happens when your operators see something suspicious?",
        answer:
          "We follow an escalation plan built around your property: contacting you directly, triggering an audio warning on-site where supported, dispatching a mobile guard response, or contacting police or fire services when warranted.",
      },
      {
        question: "Can you monitor multiple locations for one business?",
        answer:
          "Yes. Multi-site monitoring is one of our most common commercial requests, with reporting broken out by location.",
      },
    ],
  },
  {
    slug: "security-alarm-systems",
    name: "Security Alarm Systems",
    shortName: "Alarm Systems",
    icon: "alarm",
    summary:
      "Intrusion alarms, monitored around the clock, with a real response plan behind every signal — not just a notification.",
    heroDescription:
      "An alarm that no one responds to is just a noise. We pair intrusion detection with a monitored response plan so every triggered signal is verified and acted on.",
    features: [
      "24/7 monitored intrusion and break-in alarms",
      "Door, window, and motion sensor coverage",
      "Panic button and duress alarm options",
      "Alarm verification to reduce false-alarm dispatch",
      "Instant notification to property owners and key holders",
      "Coordination with guard response and emergency services",
    ],
    process: [
      {
        title: "Consultation",
        description:
          "We walk your property (residential or commercial) to identify entry points and vulnerable areas that need sensor coverage.",
      },
      {
        title: "Installation or Integration",
        description:
          "New sensors are installed, or your existing alarm panel is connected into our monitoring centre.",
      },
      {
        title: "24/7 Monitoring",
        description:
          "Every signal is received, verified, and matched against your response instructions — no alarm goes unanswered.",
      },
      {
        title: "Verified Response",
        description:
          "Confirmed incidents trigger key-holder notification, a guard dispatch, or a call to police, depending on your plan.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between a monitored and unmonitored alarm?",
        answer:
          "An unmonitored alarm only makes noise on-site. A monitored alarm is watched by our centre 24/7, so a real person verifies the signal and initiates a response — even if no one is home or on-site.",
      },
      {
        question: "Do you install alarm equipment or only monitor existing systems?",
        answer:
          "Both. We can design and install a new sensor network, or connect your current alarm panel to our monitoring centre if it's compatible.",
      },
      {
        question: "Can key holders be notified before you dispatch a guard?",
        answer:
          "Yes, your response plan is configured to your preference — notify you first, dispatch immediately, or both in parallel.",
      },
    ],
  },
  {
    slug: "instant-emergency-response",
    name: "Instant Emergency Response",
    shortName: "Emergency Response",
    icon: "bolt",
    summary:
      "When a monitored alarm confirms trouble, minutes matter. Our response teams are positioned to reach your property fast.",
    heroDescription:
      "Detection is only half the job. Securas backs every monitored alarm and camera alert with a real dispatch process, so a confirmed incident is met with a physical response, not just a phone call.",
    image: "/images/guard-team-crop.jpg",
    imageAlt:
      "Two Securas Security Group officers beside a branded response vehicle, ready to deploy",
    features: [
      "Rapid mobile guard dispatch to confirmed alarms",
      "Coordinated hand-off to police, fire, or EMS when required",
      "Direct line to key holders and property managers",
      "Incident documentation and post-response reporting",
      "Response coverage for residential, retail, and commercial sites",
      "Escalation plans customized to each property",
    ],
    process: [
      {
        title: "Alert Confirmed",
        description:
          "An alarm signal or monitored camera event is verified by our operations centre.",
      },
      {
        title: "Response Dispatched",
        description:
          "A guard unit or response team is sent to the property based on your pre-set escalation plan.",
      },
      {
        title: "On-Site Assessment",
        description:
          "Our team assesses the situation on arrival and secures the property or the incident scene.",
      },
      {
        title: "Authorities & Reporting",
        description:
          "Police, fire, or EMS are contacted when needed, and you receive a full incident report afterward.",
      },
    ],
    faqs: [
      {
        question: "How fast can a response team reach my property?",
        answer:
          "Response time depends on your location within our coverage area and current dispatch load. We prioritize confirmed alarms and structure our coverage across the GTA to keep response times low.",
      },
      {
        question: "Will you contact police directly, or do I need to?",
        answer:
          "Your escalation plan determines this. We can contact police, fire, or EMS on your behalf as soon as an incident is confirmed, in parallel with dispatching our own team.",
      },
      {
        question: "Is emergency response included with monitoring, or a separate service?",
        answer:
          "Response is built into our monitoring and alarm plans. We tailor the level of response coverage to the property and the risk profile.",
      },
    ],
  },
  {
    slug: "fire-response-life-safety",
    name: "Fire Response & Life Safety",
    shortName: "Fire Response",
    icon: "flame",
    summary:
      "Monitored fire and life-safety alarms with immediate escalation — because a delayed response to a fire signal isn't an option.",
    heroDescription:
      "Fire and life-safety alarms get treated as the highest priority in our operations centre. Every signal is verified fast and escalated to fire services and your emergency contacts without delay.",
    features: [
      "24/7 monitored fire and smoke alarm signals",
      "Heat, smoke, and carbon monoxide detector integration",
      "Immediate escalation to fire department dispatch",
      "Emergency contact and property manager notification",
      "Life-safety monitoring for multi-tenant and commercial buildings",
      "Coordination with building fire safety plans",
    ],
    process: [
      {
        title: "System Integration",
        description:
          "Your fire panel or detectors are connected to our monitoring centre, or we advise on compatible equipment.",
      },
      {
        title: "24/7 Signal Monitoring",
        description:
          "Fire and life-safety signals are treated as top-priority alerts, monitored continuously without exception.",
      },
      {
        title: "Immediate Escalation",
        description:
          "Confirmed fire signals are escalated to fire services immediately, with no verification delay on life-safety events.",
      },
      {
        title: "Notification & Follow-Up",
        description:
          "Property owners, managers, and emergency contacts are notified, and a full incident report is provided.",
      },
    ],
    faqs: [
      {
        question: "Is a fire alarm signal treated differently from a burglar alarm?",
        answer:
          "Yes. Life-safety signals are escalated immediately to fire services without the verification steps used for intrusion alarms, because the response time tolerance is far lower.",
      },
      {
        question: "Can you monitor a multi-tenant building's fire panel?",
        answer:
          "Yes, we work with property managers and building owners to monitor centralized fire panels and life-safety systems across commercial and multi-tenant properties.",
      },
      {
        question: "Do you handle fire equipment inspection and maintenance?",
        answer:
          "Our core service is monitoring and emergency response. Ask our team about coordinating with your existing fire safety and inspection provider.",
      },
    ],
  },
  {
    slug: "security-guard-services",
    name: "Security Guard Services",
    shortName: "Guard Services",
    icon: "shield",
    summary:
      "Trained, uniformed guards for static posts, mobile patrol, event security, and access control — a visible deterrent backed by real judgment.",
    heroDescription:
      "Cameras and alarms detect. Guards deter, respond, and make decisions on the ground. Our guard teams are trained for the specific site they work, from retail floors to construction yards to corporate lobbies.",
    image: "/images/hero-guard.jpg",
    imageAlt: "Uniformed Securas Security Group officer on post in front of the Toronto skyline",
    features: [
      "Static guard posts for commercial and residential properties",
      "Mobile patrol across multi-building or large sites",
      "Concierge and front-desk security for corporate lobbies",
      "Construction site and vacant property security",
      "Event and crowd security for private and corporate events",
      "Detailed shift reporting and incident logs",
    ],
    process: [
      {
        title: "Site Risk Assessment",
        description:
          "We evaluate your property's layout, traffic, and risk factors to recommend the right guard coverage.",
      },
      {
        title: "Guard Assignment",
        description:
          "Guards are matched to your site type and briefed on your specific post orders and expectations.",
      },
      {
        title: "On-Site Presence",
        description:
          "Guards maintain static posts or patrol routes, log activity, and enforce your site's access rules.",
      },
      {
        title: "Reporting & Review",
        description:
          "You receive shift reports and incident logs, and we review coverage regularly to adjust as your needs change.",
      },
    ],
    faqs: [
      {
        question: "Are your guards licensed?",
        answer:
          "Our guards are trained and assigned according to the requirements of the site and applicable provincial regulations. Ask our team for documentation specific to your contract.",
      },
      {
        question: "Can I book guards for a one-time event instead of an ongoing contract?",
        answer:
          "Yes, we support both short-term event security and long-term static or mobile patrol contracts.",
      },
      {
        question: "Do guards coordinate with your monitoring centre?",
        answer:
          "Yes. On-site guards, alarm monitoring, and dispatch operate as one connected system, so a guard on-site can be redirected instantly if our centre flags an incident elsewhere on the property.",
      },
    ],
  },
  {
    slug: "access-control",
    name: "Access Control Systems",
    shortName: "Access Control",
    icon: "key",
    summary:
      "Manage exactly who can enter your building, and when, with keycard, fob, and credential-based access systems.",
    heroDescription:
      "Control who comes and goes without relying on keys that get copied or lost. Our access control systems give you a clear, auditable record of building activity.",
    features: [
      "Keycard, fob, and mobile credential access",
      "Door and entry point access scheduling",
      "Visitor management and temporary access credentials",
      "Access logs and audit trails for compliance",
      "Integration with CCTV and alarm systems",
      "Multi-door and multi-building access management",
    ],
    process: [
      {
        title: "Access Needs Review",
        description:
          "We map out your building's entry points and who needs access to each one, and when.",
      },
      {
        title: "System Design & Install",
        description:
          "Credential readers, door hardware, and controllers are installed or integrated with your existing infrastructure.",
      },
      {
        title: "Credential Setup",
        description:
          "Staff, tenants, or visitors are issued credentials with permissions matched to your access policy.",
      },
      {
        title: "Ongoing Management",
        description:
          "We support adding, revoking, and auditing access as your team and tenants change.",
      },
    ],
    faqs: [
      {
        question: "Can access control integrate with our existing CCTV and alarm setup?",
        answer:
          "Yes, access control is most effective when tied into your camera and alarm systems, so an unusual access event can trigger a camera check or alert automatically.",
      },
      {
        question: "What happens when an employee leaves or loses a fob?",
        answer:
          "Credentials can be revoked instantly, cutting off access without needing to re-key locks.",
      },
      {
        question: "Do you support visitor and contractor access?",
        answer:
          "Yes, temporary and scheduled credentials can be issued for visitors, contractors, or short-term staff.",
      },
    ],
  },
  {
    slug: "mobile-patrol",
    name: "Mobile Patrol",
    shortName: "Mobile Patrol",
    icon: "car",
    summary:
      "Scheduled and randomized patrol checks across your property or portfolio, with a visible presence that keeps opportunists away.",
    heroDescription:
      "For large sites, parking lots, and multi-property portfolios, a stationed guard isn't always the right fit. Mobile patrol delivers routine, verifiable checks and a visible deterrent across a wider footprint.",
    image: "/images/patrol-car-toronto.jpg",
    imageAlt: "Securas Security Group marked patrol vehicle with the Toronto skyline behind it",
    features: [
      "Scheduled and randomized patrol routes",
      "Coverage for parking lots, industrial sites, and vacant properties",
      "GPS-verified checkpoint patrols",
      "Multi-property patrol contracts for portfolios and property managers",
      "Lock-up and open-up checks for commercial premises",
      "Immediate escalation to guard or emergency response when needed",
    ],
    process: [
      {
        title: "Route Planning",
        description:
          "We design a patrol route and schedule based on your property's layout, risk areas, and hours of operation.",
      },
      {
        title: "Verified Patrols",
        description:
          "Patrol units complete checkpoint rounds, with visits logged and verified for accountability.",
      },
      {
        title: "Incident Handling",
        description:
          "Any issue found during a patrol — forced entry, vandalism, trespassing — is escalated immediately.",
      },
      {
        title: "Reporting",
        description:
          "You receive patrol logs and incident reports so you always know your property was checked, and what was found.",
      },
    ],
    faqs: [
      {
        question: "How often do patrol checks happen?",
        answer:
          "Patrol frequency is built around your property and risk profile, from multiple nightly checks to randomized rounds designed to avoid predictable patterns.",
      },
      {
        question: "Is mobile patrol suitable for a portfolio of properties?",
        answer:
          "Yes, property managers commonly use mobile patrol to cover several sites under a single contract instead of stationing guards at each one.",
      },
      {
        question: "What happens if a patrol finds a break-in in progress?",
        answer:
          "The patrol unit follows a safety-first escalation protocol: securing the perimeter, contacting our operations centre, and involving police immediately.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
