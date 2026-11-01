import type { Block } from "payload";
import { image, link, points, sectionLabel, stats } from "../fields";

// Sections first built for the homepage. Each one can be added to any page,
// reordered, edited or removed from the "Sections" list in the admin.

const rowLabel = { components: { RowLabel: "@/cms/admin/RowLabel#RowLabel" } };

export const AudienceHero: Block = {
  slug: "audienceHero",
  interfaceName: "AudienceHeroBlock",
  labels: { singular: "Hero with audience tabs", plural: "Heroes with audience tabs" },
  fields: [
    { name: "prompt", label: "Text before the tabs", type: "text", defaultValue: "I want to" },
    {
      name: "audiences",
      label: "Tabs",
      type: "array",
      minRows: 1,
      labels: { singular: "Tab", plural: "Tabs" },
      admin: rowLabel,
      fields: [
        { name: "tab", label: "Tab name", type: "text", required: true, admin: { description: "One word, e.g. learn" } },
        { name: "title", label: "Heading", type: "text", required: true },
        { name: "text", label: "Paragraph", type: "textarea" },
        image("image", "Photo", true),
        { name: "caption", label: "Caption on the photo", type: "text" },
        link("primary", "Main button"),
        link("secondary", "Second link", false),
      ],
    },
  ],
};

export const StatsTicker: Block = {
  slug: "statsTicker",
  interfaceName: "StatsTickerBlock",
  labels: { singular: "Scrolling figures band", plural: "Scrolling figures bands" },
  fields: [stats("items")],
};

export const VideoFeature: Block = {
  slug: "videoFeature",
  interfaceName: "VideoFeatureBlock",
  labels: { singular: "Photo or video with text", plural: "Photo or video with text" },
  fields: [
    sectionLabel,
    { name: "title", label: "Heading", type: "text", required: true },
    { name: "text", label: "Paragraph", type: "textarea" },
    { name: "quote", label: "Highlighted quote", type: "textarea" },
    link("action", "Button", false),
    image("image", "Photo", true),
    {
      name: "youtube",
      label: "YouTube video (optional)",
      type: "text",
      admin: { description: "Paste any YouTube link. The photo gets a play button and the video plays in its place." },
    },
  ],
};

export const Challenge: Block = {
  slug: "challenge",
  interfaceName: "ChallengeBlock",
  labels: { singular: "Challenge figures + before/after", plural: "Challenge figures + before/after" },
  fields: [
    sectionLabel,
    { name: "title", label: "Heading", type: "text", required: true },
    { name: "text", label: "Paragraph", type: "textarea" },
    stats(),
    {
      name: "divide",
      label: "Before / after comparison",
      type: "group",
      fields: [
        { name: "title", label: "Heading", type: "text" },
        {
          type: "row",
          fields: [
            {
              name: "without",
              label: "Left card (without)",
              type: "group",
              admin: { width: "50%" },
              fields: [{ name: "title", label: "Card heading", type: "text" }, points()],
            },
            {
              name: "with",
              label: "Right card (with)",
              type: "group",
              admin: { width: "50%" },
              fields: [{ name: "title", label: "Card heading", type: "text" }, points()],
            },
          ],
        },
      ],
    },
    link("action", "Button", false),
  ],
};

export const Mission: Block = {
  slug: "mission",
  interfaceName: "MissionBlock",
  labels: { singular: "Text, photo and figures", plural: "Text, photo and figures" },
  fields: [
    sectionLabel,
    { name: "title", label: "Heading", type: "text", required: true },
    { name: "text", label: "Paragraph", type: "textarea" },
    link("action", "Button", false),
    image("image", "Photo", true),
    stats(),
  ],
};

export const CardGrid: Block = {
  slug: "cardGrid",
  interfaceName: "CardGridBlock",
  labels: { singular: "Photo cards", plural: "Photo cards" },
  fields: [
    sectionLabel,
    { name: "title", label: "Heading", type: "text", required: true },
    { name: "text", label: "Paragraph", type: "textarea" },
    link("action", "Link under the heading", false),
    {
      name: "items",
      label: "Cards",
      type: "array",
      labels: { singular: "Card", plural: "Cards" },
      admin: rowLabel,
      fields: [
        { name: "title", label: "Title", type: "text", required: true },
        { name: "text", label: "Text", type: "textarea" },
        { name: "href", label: "Goes to", type: "text", required: true },
        image("image", "Photo", true),
      ],
    },
  ],
};

export const Campaign: Block = {
  slug: "campaign",
  interfaceName: "CampaignBlock",
  labels: { singular: "Campaign + feature story", plural: "Campaign + feature story" },
  fields: [
    {
      name: "campaign",
      label: "Campaign card (left)",
      type: "group",
      fields: [
        sectionLabel,
        { name: "title", label: "Heading", type: "text", required: true },
        { name: "text", label: "Paragraph", type: "textarea" },
        {
          type: "row",
          fields: [
            { name: "goal", label: "Goal (GHS)", type: "number", min: 0, admin: { width: "50%", description: "Leave at 0 to hide the progress bar" } },
            { name: "raised", label: "Raised so far (GHS)", type: "number", min: 0, admin: { width: "50%" } },
          ],
        },
        link("action", "Main button"),
        link("secondary", "Second link", false),
      ],
    },
    {
      name: "story",
      label: "Feature story card (right)",
      type: "group",
      fields: [
        sectionLabel,
        { name: "title", label: "Heading", type: "text", required: true },
        { name: "text", label: "Paragraph", type: "textarea" },
        link("action", "Link"),
        image("image", "Photo", true),
      ],
    },
  ],
};

export const Testimonials: Block = {
  slug: "testimonials",
  interfaceName: "TestimonialsBlock",
  labels: { singular: "Stories carousel", plural: "Stories carousels" },
  fields: [
    sectionLabel,
    { name: "title", label: "Heading", type: "text", required: true },
    { name: "text", label: "Paragraph", type: "textarea" },
    {
      name: "items",
      label: "Stories",
      type: "array",
      labels: { singular: "Story", plural: "Stories" },
      admin: rowLabel,
      fields: [
        { name: "quote", label: "Quote", type: "textarea", required: true },
        {
          type: "row",
          fields: [
            { name: "name", label: "Name", type: "text", required: true, admin: { width: "50%" } },
            { name: "role", label: "Role", type: "text", admin: { width: "50%" } },
          ],
        },
        image("image", "Photo (optional, initials show without one)"),
      ],
    },
  ],
};

export const TeamGrid: Block = {
  slug: "teamGrid",
  interfaceName: "TeamGridBlock",
  labels: { singular: "Team members", plural: "Team members" },
  fields: [
    sectionLabel,
    { name: "title", label: "Heading", type: "text", required: true },
    { name: "text", label: "Paragraph", type: "textarea" },
    link("action", "Button", false),
    {
      name: "limit",
      label: "How many people to show",
      type: "number",
      min: 0,
      admin: { description: "Leave empty to show everyone. People come from Team members, in that list's order." },
    },
  ],
};

export const PartnerStrip: Block = {
  slug: "partnerStrip",
  interfaceName: "PartnerStripBlock",
  labels: { singular: "Partner logos", plural: "Partner logos" },
  fields: [
    sectionLabel,
    {
      name: "title",
      label: "Heading",
      type: "text",
      required: true,
      admin: { description: "The logos come from the Partners list. Add, remove or reorder partners there." },
    },
    link("primary", "Main button", false),
    link("secondary", "Second button", false),
  ],
};

export const HOME_BLOCKS = [
  AudienceHero,
  StatsTicker,
  VideoFeature,
  Challenge,
  Mission,
  CardGrid,
  Campaign,
  Testimonials,
  TeamGrid,
  PartnerStrip,
];
