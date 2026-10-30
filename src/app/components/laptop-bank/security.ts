// Content for Laptop Bank > Data security (/laptop-bank/data-security), from ITFY's page.
//
// TODO: these three values were unfilled template codes on ITFY's live page.
// Until each is set, the sentence that uses it is left out (and Physical security is hidden).
export const VALUES = {
  wipeStandard: "", // e.g. "NIST SP 800-88 Rev. 1 (Purge)"
  certRetention: "", // e.g. "seven years"
  facilityStatement: "", // a sentence or two on how the facility is secured
};

// Where the downloadable statement lives once published, e.g. "/docs/data-handling-statement.pdf" in public/.
export const STATEMENT_PDF = "";

export const HERO = {
  label: "IT For Youth Laptop Bank",
  title: "Data security",
  lead: "The page an IT manager reads before signing off a fleet handover. Every claim here corresponds to a record we can produce.",
};

export type Section = { id: string; title: string; paragraphs: string[] };

const v = VALUES;

export const SECTIONS: Section[] = [
  {
    id: "commitment",
    title: "Our commitment",
    paragraphs: [
      "Every storage device entering our facility is sanitised before any other work begins, whether or not it has already been wiped. We assume nothing about the state of an incoming drive.",
    ],
  },
  {
    id: "method",
    title: "Method by drive type",
    paragraphs: [
      [
        "Full overwrite for mechanical drives. Secure erase or cryptographic erase for solid-state. Physical destruction where a drive fails to verify.",
        v.wipeStandard && `Every drive is sanitised to ${v.wipeStandard}.`,
      ]
        .filter(Boolean)
        .join(" "),
    ],
  },
  {
    id: "verification",
    title: "Verification",
    paragraphs: ["Every erase is verified. Any drive failing verification is physically destroyed rather than retried."],
  },
  {
    id: "certificates",
    title: "Certificates",
    paragraphs: [
      [
        "One per serial number, carrying the method, date, result and operator. A consolidated pack is issued to the donor.",
        v.certRetention && `We retain each certificate for ${v.certRetention}.`,
      ]
        .filter(Boolean)
        .join(" "),
    ],
  },
  {
    id: "custody",
    title: "Chain of custody",
    paragraphs: [
      "Units are counted at your premises against the manifest and signed for by both parties, travel sealed, and are counted and signed for again on arrival by a second member of staff. Any discrepancy is reported to you within one working day.",
    ],
  },
  {
    id: "physical",
    title: "Physical security",
    paragraphs: v.facilityStatement ? [v.facilityStatement] : [],
  },
  {
    id: "not-wiped",
    title: "Drives we do not wipe",
    paragraphs: ["Drives from units graded for parts or rejection are removed and destroyed, not sanitised and resold."],
  },
  {
    id: "branding",
    title: "Asset tags and branding",
    paragraphs: ["Donor asset tags, engravings and branding are removed before deployment."],
  },
  {
    id: "do-not-do",
    title: "What we do not do",
    paragraphs: [
      "We do not sell donated equipment. We do not pass units into the informal repair market. We do not deploy any machine that has not passed both sanitisation and quality assurance.",
    ],
  },
].filter((s) => s.paragraphs.length > 0); // sections with nothing confirmed yet are hidden
