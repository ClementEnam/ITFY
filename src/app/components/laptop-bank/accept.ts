// Content for Laptop Bank > What we accept (/laptop-bank/what-we-accept), from ITFY's page.

export const HERO = {
  label: "IT For Youth Laptop Bank",
  title: "What we accept",
  lead: "We are selective, and here is why.",
};

export const WHY = {
  title: "We are selective, and here is why.",
  text: "A computer that cannot run a supported operating system for at least three more years is not a gift to a student, it is a problem transferred to her. So we publish our minimums, we test every unit against them, and we say no in writing when equipment falls short. We would rather take twenty good machines than two hundred we have to bury.",
};

export const CHECK = {
  title: "Before you offer machines, check two things.",
  text: "Corporate laptops are usually enrolled in a device management platform and often carry a firmware password. Both must be cleared by your IT team before handover, because neither can be removed by us. A machine still enrolled cannot be reimaged and cannot be deployed, however good the hardware is. Your IT team will know this as releasing the device from management and clearing the BIOS or EFI password.",
  items: ["Released from all device management platforms", "No BIOS or EFI password"],
};

export const ACCEPTED = [
  { item: "Laptop processor", minimum: "Intel Core i5 8th generation or newer, or AMD Ryzen 3 2000 series or newer", note: "Anything older cannot run a supported operating system for a useful lifetime." },
  { item: "Memory", minimum: "8 GB, or 4 GB with a second slot", note: "Single-slot 4 GB units are Grade C at best." },
  { item: "Storage", minimum: "256 GB solid-state", note: "Mechanical drives accepted only where an SSD can be fitted from the parts pool." },
  { item: "Screen", minimum: "Intact, no cracks, no dead-pixel clusters", note: "Cracked screens are Grade C." },
  { item: "Battery", minimum: "60 per cent of rated capacity, or a replacement available", note: "Tested on every unit." },
  { item: "Charger", minimum: "One per unit", note: "Bulk offers without chargers are assessed case by case." },
  { item: "Firmware and management state", minimum: "No BIOS or EFI password, released from all device management platforms", note: "The most common reason a donation fails. Raise it before collection." },
  { item: "Provenance", minimum: "Named donor organisation with a signed Deed of Gift", note: "No anonymous bulk drops." },
  { item: "Peripherals and parts", minimum: "Monitors, docking stations, chargers, keyboards, mice, network switches, access points, memory and storage parts, projectors", note: "Actively wanted. These equip labs and clubs." },
];

export const NOT_ACCEPTED = [
  { item: "Below the processor floor", note: "Declined in writing with a referral to a licensed recycler." },
  { item: "Cathode-ray monitors and printers", note: "" },
  { item: "Water-damaged units", note: "" },
  { item: "Desktops without monitors", note: "" },
  { item: "Unknown-provenance devices", note: "" },
];

export const CTA = {
  text: "Not sure whether your equipment qualifies? Send us the model names and rough age and we will tell you. There is no obligation.",
  primary: { label: "Offer your equipment", href: "/laptop-bank/donate" },
  secondary: { label: "See how it works", href: "/laptop-bank" },
};
