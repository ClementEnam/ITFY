// Content for Laptop Bank > How it works (/laptop-bank).
//
// TODO: `duration` values marked "" were template codes on ITFY's live page
// ({{SLA_REPLY}}, {{DUR_AGREEMENT}}, {{DUR_INTAKE}}, {{DUR_WIPE}}, {{DUR_REFURB}}).
// Fill them in (e.g. "Within 5 working days"); empty ones are simply not shown.
// TODO: `detail` and `owner` are placeholder wording; replace with ITFY's text.

export type Stage = {
  title: string;
  short: string; // name in the summary table
  duration: string;
  receive: string; // the document the donor gets
  owner: string;
  detail: string;
};

export const HERO = {
  label: "IT For Youth Laptop Bank",
  title: "How it works",
  lead: "Nine stages, from your first email to the certificate confirming a machine has reached the end of its useful life. Every stage produces a document, and you receive copies of the ones that concern your equipment.",
};

export const STAGES: Stage[] = [
  {
    short: "Offer and qualification",
    title: "Offer and qualification",
    duration: "",
    receive: "A written decision, including what we cannot take and why",
    owner: "Laptop Bank coordinator",
    detail: "You tell us what you have: device types, quantities, age and condition. We check it against what learners can use and reply in writing with what we can accept, what we can't, and the reasons.",
  },
  {
    short: "Agreement and transfer of title",
    title: "Agreement and transfer of title",
    duration: "",
    receive: "Signed Deed of Gift with your asset list annexed",
    owner: "Laptop Bank coordinator",
    detail: "We agree the list of accepted assets and sign a Deed of Gift, so ownership and responsibility pass to ITFY on a clear, documented basis.",
  },
  {
    short: "Collection",
    title: "Collection and chain of custody",
    duration: "By arrangement",
    receive: "Dual-signed collection manifest",
    owner: "Logistics",
    detail: "We collect at a time that suits you. Both sides sign a manifest listing every serial number, which starts the chain of custody for each device.",
  },
  {
    short: "Intake, tagging and grading",
    title: "Intake, tagging and grading",
    duration: "",
    receive: "Grading summary for your consignment",
    owner: "Technical team",
    detail: "Each device is tagged, logged against the manifest and graded on condition, so we know what can be refurbished, used for parts or recycled.",
  },
  {
    short: "Data sanitisation",
    title: "Data sanitisation",
    duration: "",
    receive: "A sanitisation certificate for every serial number",
    owner: "Technical team",
    detail: "Every storage device is wiped to a recognised standard before any other work begins. Each serial number gets its own sanitisation record.",
  },
  {
    short: "Refurbishment and quality assurance",
    title: "Refurbishment, imaging and quality assurance",
    duration: "",
    receive: "Available on request",
    owner: "Technical team",
    detail: "Devices are repaired, upgraded where useful, loaded with a standard learning image and tested before they are signed off as ready for a learner.",
  },
  {
    short: "Allocation and handover",
    title: "Allocation and handover",
    duration: "Next selection cycle",
    receive: "Named deployment report at 3 months",
    owner: "Programmes team",
    detail: "Ready devices are matched to learners in the next selection cycle, with priority for young women and learners without their own device, and handed over with basic training.",
  },
  {
    short: "In-life tracking",
    title: "In-life tracking and support",
    duration: "12 months",
    receive: "Outcome summary at 12 months",
    owner: "Programmes team",
    detail: "We support each device and learner for a year, track how the device is used for learning, and report back on outcomes.",
  },
  {
    short: "End of life and recycling",
    title: "End of life and recycling",
    duration: "As required",
    receive: "Certificate of destruction covering your rejected units",
    owner: "Technical team with a licensed recycler",
    detail: "Units that cannot be reused are recycled through a licensed partner, and you receive a certificate of destruction for them.",
  },
];

export const CTA = {
  title: "Have laptops your organisation no longer needs?",
  text: "Tell us what you have. We'll reply in writing with what we can accept.",
  primary: { label: "Offer your equipment", href: "/laptop-bank/donate" },
  secondary: { label: "How we handle your data", href: "/laptop-bank/data-security" },
};
