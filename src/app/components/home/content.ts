import { PARTNERS as PARTNER_LIST } from "../partners/content";
import { PEOPLE } from "../team/content";

// All text, numbers and images for the homepage sections below the hero.
// Anything marked TODO couldn't be read from the reference screenshot — paste
// ITFY's real wording there. The components never need to change.

const IMG = {
  coding: "/randomPictures/studentsBackcoding.jpg",
  group: "/randomPictures/happystudentscasual.jpg",
  graduation: "/randomPictures/mainGraduationpic.jpg",
  juniorDev: "/people/benedicta.jpg",
  uxDev: "/people/danielle.jpg",
  ictHead: "/people/mensah.jpg",
  girlsInTech:"/randomPictures/group_girls.jpg",
  entrepreneurshipHub:"/randomPictures/studentpresenting.jpg",
  techConnect:"/randomPictures/children_holding_sign_in_streets.jpg",
  communityOutreach:"/randomPictures/girlstaslkingUX.jpg",
  techClubs:"/randomPictures/groupofgirlsentrance.jpg",
  advocacy:"/randomPictures/studentpresentin.jpg"

};

export const WHY = {
  label: "Why we exist",
  title: "Ghana's digital future should belong to every young person, especially women.",
  // TODO: replace with ITFY's paragraph
  text: "Our digital economy is growing fast, and teh opportunities in it are real. They are just not reaching everyone. Training sits in a handful of cities. A computer of her own is out of reach for most students. And too many young people leave school having never met anyone who does this work for a living",
  quote: "IT For Youth Ghana exists to close that gap with training that is practical, inclusive and measured by what young people go on to do.",
  action: { label: "Discover training pathways", href: "/apply" },
  image: { src: IMG.coding, alt: "Young learners working at computers in an ITFY class" },
  // Optional: paste the YouTube link here, e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX".
  // With one, the photo gets a play button. The photo shows until someone presses play.
  youtubeId: "https://youtu.be/20kVHaxoPYc?si=fFcXF8rGaB5M6Y95",
};

export const CHALLENGE = {
  label: "The challenge",
  title: "Talent is everywhere. Access is not.",
  text: "Ghana's digital divide keeps capable young people from the learning, connections and opportunities they need to take part in the digital economy.",
  // TODO: add what each figure measures, and its source
  stats: [
    { value: "30.1%", label: "Offline Population: \n 10.5M people without internet access" },
    { value: "77.3%", label: "Rural Digital Gap: \n Rural Residents without internet" },
    { value: "25%", label: "Limited Access: \n Rural areas lack mobile coverage" },
    { value: "70%", label: "Skills Gap: \n Youth lack digital skills" },
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
  image: { src: IMG.graduation, alt: "ITFY learners celebrating together" },
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
    { title: "Girls in Tech", text: "Mentorship, confidence-building, and technical training designed to increase the participation and leadership of young women in Ghana's digital economy", href: "/what-we-do/girls-in-tech", image: IMG.girlsInTech },
    { title: "Youth Tech Academy", text: "Cohort-based digital skills training that takes young people from foundational skills to job-ready portfolios in 12 focused weeks", href: "/what-we-do/youth-tech-academy", image: IMG.coding },
    { title: "Entrepreneurship Hub", text: "Practical support for young founder turning digital skills into ideas, prototypes, and early stage ventures that address local challenges", href: "/what-we-do/entrepreneurship-hub", image: IMG.entrepreneurshipHub },
    { title: "Code Impact Challenge", text: "Time-bound, team-based challenges where participants build real solutions to problems that matter in their communities", href: "/what-we-do/code-impact-challenge", image: IMG.group },
    { title: "Rural Tech Connect", text: "Extending training, devices, and opportunity to young people in communities beyond Accra through local school and community", href: "/what-we-do/rural-tech-connect", image: IMG.techConnect },
    { title: "Community Outreach", text: "School visits, activations, and events that convert first exposure into sustained interest and clear next steps for thousands of students", href: "/what-we-do/community-outreach", image: IMG.communityOutreach },
    { title: "Advocacy", text: "Thought leadership and coalition-building that elevates youth digital opportunity as a priority for institutions, policymakers, and funders.", href: "/what-we-do/advocacy", image: IMG.advocacy },
    { title: "Tech Clubs", text: "Recurring, school-based clubs that provide students  with consistent practice, peer learning, and sustained skill development over time.", href: "/what-we-do/tech-clubs", image: IMG.techClubs },
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

export type Story = {
  quote: string;
  name: string;
  role: string;
  image?: string; // optional photo; without one, their initials are shown
};

export const STORIES: { label: string; title: string; text: string; items: Story[] } = {
  label: "Student stories",
  title: "The human proof behind the numbers.",
  text: "One strong story can do what a long paragraph cannot.",
  // Add as many stories as you like. The carousel, dots and arrows adjust automatically.
  items: [
    {
      quote:
        "Before Girls in Tech, I was curious but unsure whether tech was for someone like me. The mentorship and cohort community made it feel achievable. I now work as a UX designer and mentor the next group of young women coming through the programme.",
      name: "Efua Asante", 
      role: "UX Designer",
      image: IMG.uxDev,
    },
    {
      quote:
        "The academy gave me structure and accountability I had never experienced. I moved from not knowing what a portfolio was to presenting real projects to mentors. Six months after graduating, I started as a junior developer in Accra.",
      name: "Ama Kofi",
      role: "Junior Developer", 
      image: IMG.juniorDev,
    },
    {
      quote:
        "We partnered with IT For Youth Ghana to run tech clubs in our school. The consistency of the sessions transformed how our students see technology. Several have now joined the academy, and one is already interning with a local tech company.",
      name: "Mr. Isaac Mensah", 
      role: "Head of ICT", 
      image: IMG.ictHead,
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