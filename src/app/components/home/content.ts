import { PARTNERS as PARTNER_LIST } from "../partners/content";
import { PEOPLE } from "../team/content";

// All text, numbers and images for the homepage sections below the hero.
// Anything marked TODO couldn't be read from the reference screenshot — paste
// ITFY's real wording there. The components never need to change.

const IMG = {
  coding: "/randomPictures/studentsBackcoding.jpg",
  group: "/randomPictures/happystudentscasual.jpg",
  graduation: "/randomPictures/mainGraduationpic.jpg",
};

export const WHY = {
  label: "Why we exist",
  title: "Ghana's digital future should belong to every young person, especially women.",
  // TODO: replace with ITFY's paragraph
  text: "Digital skills now decide who gets to take part in Ghana's growing economy. Too many young people, and young women most of all, never get a fair first step. We train them in practical skills, connect them with mentors and help them into work, study or their own ventures.",
  quote: "IT For Youth Ghana exists to close that gap with training that is practical, inclusive and measured by what young people go on to do.",
  action: { label: "Discover training pathways", href: "/apply" },
  image: { src: IMG.coding, alt: "Young learners working at computers in an ITFY class" },
  // Optional: a YouTube video ID (the part after watch?v=). With one, the photo gets a play button.
  youtubeId: "https://youtu.be/20kVHaxoPYc?si=pZd7UBw8JktYx5FA",
};

export const CHALLENGE = {
  label: "The challenge",
  title: "Talent is everywhere. Access is not.",
  text: "Ghana's digital divide keeps capable young people from the learning, connections and opportunities they need to take part in the digital economy.",
  // TODO: add what each figure measures, and its source
  stats: [
    { value: "30.1%", label: "TODO: what this figure measures" },
    { value: "77.3%", label: "TODO: what this figure measures" },
    { value: "25%", label: "TODO: what this figure measures" },
    { value: "70%", label: "TODO: what this figure measures" },
  ],
  divide: {
    title: "What the digital divide changes",
    without: {
      title: "Without digital access",
      points: [
        "Limited job opportunities in a growing digital economy",
        "Learning that stops at the classroom door",
        "Ideas that never become businesses",
      ],
    },
    with: {
      title: "With IT For Youth Ghana",
      points: [
        "Practical digital skills built through real projects",
        "Mentors and a cohort community that keep learners going",
        "Clear pathways into work, further study and enterprise",
      ],
    },
  },
  action: { label: "Choose a training pathway", href: "/apply" },
};

export const MISSION = {
  label: "Our mission",
  title: "Turn digital learning into real opportunity.",
  text: "We equip young Ghanaians, particularly women and underserved communities, with practical skills, mentorship and pathways into employment, further study and business building.",
  action: { label: "Discover who we are", href: "/who-we-are" },
  image: { src: IMG.group, alt: "ITFY learners celebrating together" },
  stats: [
    { value: "3,000+", label: "young people trained" },
    { value: "8,500+", label: "students reached through schools and communities" },
    { value: "40%", label: "female participation" },
    { value: "85%", label: "move into work, learning or enterprise within six months" },
  ],
};

export const PROGRAMMES = {
  label: "Our initiatives",
  title: "One mission. Eight connected initiatives.",
  text: "Each initiative reaches young people at a different stage, from a first coding club to launching a business.",
  // TODO: replace descriptions with ITFY's wording and each initiative's own photo
  items: [
    { title: "Girls in Tech", text: "Training, mentorship and community for young women starting out in technology.", href: "/what-we-do/girls-in-tech", image: IMG.group },
    { title: "Youth Tech Academy", text: "Cohort-based digital skills training with real projects and deadlines.", href: "/what-we-do/youth-tech-academy", image: IMG.coding },
    { title: "Entrepreneurship Hub", text: "Support for learners turning digital skills into businesses and freelance work.", href: "/what-we-do/entrepreneurship-hub", image: IMG.graduation },
    { title: "Code Impact Challenge", text: "Learners build technology solutions to problems in their own communities.", href: "/what-we-do/code-impact-challenge", image: IMG.group },
    { title: "Rural Tech Connect", text: "Bringing digital learning to young people outside Ghana's cities.", href: "/what-we-do/rural-tech-connect", image: IMG.coding },
    { title: "Community Outreach", text: "Workshops and events that bring digital skills to schools and neighbourhoods.", href: "/what-we-do/community-outreach", image: IMG.graduation },
    { title: "Advocacy", text: "Making the case for inclusive digital education across Ghana.", href: "/what-we-do/advocacy", image: IMG.coding },
    { title: "Tech Clubs", text: "School clubs where students explore coding, design and problem solving.", href: "/what-we-do/tech-clubs", image: IMG.group },
  ],
};

export const CAMPAIGN = {
  label: "Active campaign",
  title: "Fund scholarships for Cohort 8 learners.",
  text: "Scholarships cover training, devices and mentorship for young people who couldn't otherwise take part.",
  // TODO: real figures in GHS. The progress bar only shows once goal is above 0.
  goal: 0,
  raised: 0,
  action: { label: "Donate", href: "/donate" },
  secondary: { label: "See how donations are used", href: "/our-impact" },
};

export const GRADUATE = {
  label: "Graduate story",
  title: "From first steps to building production-ready products in six months.",
  // TODO: replace with the graduate's story, and their name if they've agreed to be named
  text: "One of our graduates arrived with curiosity and no coding experience. Six months later, they were building products used by real customers.",
  action: { label: "Read the story", href: "/our-impact/stories" },
  image: { src: IMG.coding, alt: "An ITFY graduate working on a laptop in class" },
};

export const STORIES = {
  label: "Student stories",
  title: "The human proof behind the numbers.",
  // Add more stories to this list and the arrows appear automatically.
  items: [
    {
      quote:
        "Before Girls in Tech, I was curious but unsure whether tech was for someone like me. The mentorship and cohort community made it feel achievable. I now work as a UX designer and mentor the next group of young women coming through the programme.",
      name: "Girls in Tech graduate", // TODO: name, if she has agreed to be named
      role: "UX designer and mentor",
      image: IMG.graduation,
    },
  ],
};

export const TEAM = {
  label: "Our people",
  title: "Meet the people behind the mission.",
  text: "Trainers, mentors and staff who work alongside learners every day.",
  action: { label: "Meet the whole team", href: "/who-we-are/team" },
  // Comes from the Our Team page's list (components/team/content.ts), so both stay in sync.
  members: PEOPLE.map((p) => ({ name: p.name, role: p.role, image: p.photo })),
};

export const PARTNERS = {
  label: "Our partners",
  title: "Trusted by organisations across Ghana and beyond.",
  // Comes from the Our Partners page's list (components/partners/content.ts), so both stay in sync.
  list: PARTNER_LIST,
  action: { label: "Partner with us", href: "/partner-with-us" },
};
