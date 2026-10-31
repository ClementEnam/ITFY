import type { Initiative } from "./types";

// One entry per initiative. Add the other seven here and each gets its own page
// at /what-we-do/[slug] automatically.
//
// TODO lines: the reference screenshot was too small to read these. Paste ITFY's
// real wording/figures in. Lists left empty are hidden on the page (so nothing
// made-up appears), e.g. proof.stats, stories.items, partners.items.

const IMG = {
  group: "/randomPictures/happystudentscasual.jpg",
  coding: "/randomPictures/studentsBackcoding.jpg",
  graduation: "/randomPictures/mainGraduationpic.jpg",
};

export const INITIATIVES: Initiative[] = [
  {
    slug: "girls-in-tech",
    name: "Girls in Tech",
    hero: {
      // TODO: ITFY's exact hero text
      lead: "Building the next generation of confident, skilled young women in technology.",
      note: "Hands-on training, mentorship and a supportive community that help girls and young women move from first exposure to real skills, projects and pathways.",
      image: { src: IMG.group, alt: "Girls in Tech participants celebrating together" },
      primary: { label: "Apply to join", href: "/apply" },
      secondary: { label: "Partner with us", href: "/partner-with-us" },
    },
    overview: {
      title: "A focused pathway with clear outcomes",
      // TODO: ITFY's paragraphs and pull quote
      paragraphs: [
        "Girls in Tech is IT For Youth Ghana's flagship programme for girls and young women. It combines practical training, mentorship and a peer community so participants can build real skills and the confidence to use them.",
        "The programme is designed around outcomes: every participant builds projects, works with mentors and leaves with a clear next step into further study, work or enterprise.",
      ],
      quote: "Girls in Tech exists because talent is evenly spread, but access to technology and role models is not.",
      image: { src: IMG.group, alt: "A group of Girls in Tech participants in programme T-shirts" },
    },
    journey: {
      title: "A programme journey that moves from access to confidence",
      text: "Each cohort follows four stages, so participants always know what comes next.",
      // TODO: ITFY's wording for each stage
      steps: [
        { title: "Recruit", text: "We reach girls through schools, communities and partners, focusing on those with the least access to technology.", image: { src: IMG.coding, alt: "A classroom outreach session" } },
        { title: "Train", text: "Participants learn practical digital skills through hands-on projects, from coding basics to design and digital tools.", image: { src: IMG.graduation, alt: "Participants in a training session" } },
        { title: "Mentor", text: "Each participant is supported by mentors who help them stay on track and see what a career in tech can look like.", image: { src: IMG.group, alt: "Mentors with participants" } },
        { title: "Launch", text: "Graduates leave with a portfolio and a clear next step into further study, internships, work or their own ventures.", image: { src: IMG.coding, alt: "Participants presenting their work" } },
      ],
    },
    proof: {
      title: "Proof that the model is translating into real opportunity",
      // TODO: add Girls in Tech's four figures, e.g. { value: "400+", label: "Girls trained", text: "..." }
      stats: [],
    },
    audience: {
      title: "Who it's for",
      // TODO: confirm with ITFY
      text: "Girls in Tech is designed for girls and young women who are curious about technology and ready to commit to structured learning.",
      points: [
        "No prior coding experience needed",
        "Commitment to attend sessions and complete projects",
        "Interest in technology, design or digital work",
      ],
      eligibilityTitle: "Eligibility",
      eligibility: "Age range, location and session times vary by cohort. Check the current intake on the Apply page, or contact the team if you're unsure whether you qualify.",
    },
    gallery: {
      title: "Scenes from the classrooms, workshops and communities behind the work",
      // TODO: Girls in Tech photos and captions
      photos: [
        { src: IMG.group, alt: "Participants celebrating", caption: "Cohort celebration" },
        { src: IMG.coding, alt: "Participants at computers", caption: "Hands-on practical session" },
        { src: IMG.graduation, alt: "Graduates seated at a ceremony", caption: "Graduation day" },
        { src: IMG.coding, alt: "A participant presenting", caption: "Project presentations" },
      ],
    },
    stories: {
      title: "Stories that show what this initiative feels like from the inside",
      // TODO: add participant quotes (with their consent to be named)
      items: [],
    },
    partners: {
      title: "Organisations that help this initiative reach further",
      // TODO: add the partners shown on ITFY's page
      items: [],
    },
    faq: {
      title: "Answers to common questions about the initiative",
      // TODO: confirm questions and add ITFY's answers
      items: [
        { q: "Do participants need prior coding experience?", a: "No. Girls in Tech starts from the basics, so curiosity and commitment matter more than experience." },
        { q: "Is this separate from the Youth Tech Academy?", a: "Yes. Girls in Tech is designed specifically for girls and young women, with its own mentoring and community. Graduates can continue into Youth Tech Academy courses." },
        { q: "How do mentors get involved?", a: "Professionals can volunteer as mentors. Propose a mentoring window through the Join our team page and the team will be in touch." },
      ],
    },
    cta: {
      title: "Ready to explore Girls in Tech?",
      text: "Apply for the next intake, or partner with us to bring Girls in Tech to more schools and communities.",
      primary: { label: "Apply to join", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    explore: [
      { role: "Train", title: "Apply for training", text: "Browse courses and upcoming cohorts.", cta: "See courses", href: "/apply" },
      { role: "Partner", title: "Partner with us", text: "Fund, host or co-design a Girls in Tech cohort.", cta: "See partnership routes", href: "/partner-with-us" },
      { role: "Devices", title: "Her First Laptop", text: "Give a girl her first laptop to learn on.", cta: "Learn more", href: "/get-involved/her-first-laptop" },
    ],
  },
  {
    slug: "youth-tech-academy",
    name: "Youth Tech Academy",
    hero: {
      lead: "From curiosity to capability: a disciplined pathway into Ghana's digital workforce.",
      // TODO: ITFY's exact hero note
      note: "A 12-week, cohort-based programme that equips young Ghanaians with practical technical abilities, project experience and career readiness.",
      image: { src: IMG.coding, alt: "Youth Tech Academy learners coding at their workstations" },
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    overview: {
      title: "A focused pathway with clear outcomes",
      // TODO: ITFY's paragraphs and pull quote
      paragraphs: [
        "The Youth Tech Academy is IT For Youth Ghana's flagship training pathway. It combines hands-on instruction in software development, design and digital tools with real project work, mentorship and structured transition support.",
        "The academy exists to transform motivated young people into job-ready digital professionals by delivering rigorous, practical training and visible progression pathways.",
      ],
      quote: "Learners build in-demand technical skills through project-based learning, develop professional habits, and leave with portfolios that demonstrate what they can do.",
      image: { src: IMG.group, alt: "Youth Tech Academy learners celebrating together" },
    },
    journey: {
      title: "A programme journey that moves from access to confidence",
      text: "Each cohort follows four stages, so participants and partners know what to expect from first contact to measurable outcomes.",
      // TODO: ITFY's wording for each stage
      steps: [
        { title: "Apply & assess", text: "Candidates complete an application and short assessment. We select motivated learners ready for a demanding cohort.", image: { src: IMG.coding, alt: "Applicants during an assessment session" } },
        { title: "Train", text: "Participants complete daily technical sessions, assignments and collaborative projects under experienced facilitators.", image: { src: IMG.group, alt: "Learners in a facilitated training session" } },
        { title: "Build & present", text: "Each learner ships portfolio projects, receives feedback and presents work to peers, mentors and industry guests.", image: { src: IMG.coding, alt: "Learners working together on a project" } },
        { title: "Transition", text: "Graduates receive career support, portfolio reviews, interview preparation and direct introductions to hiring partners.", image: { src: IMG.graduation, alt: "Graduates at a transition event" } },
      ],
    },
    proof: {
      title: "Proof that the model is translating into real opportunity",
      text: "These indicators help show who the initiative is reaching, how consistently it is delivering and why it matters.",
      // TODO: confirm the labels and descriptions (the figures were readable, the small text wasn't)
      stats: [
        { value: "1,800+", label: "Graduates to date", text: "Young people who have completed the full academy programme." },
        { value: "85%", label: "Progression rate", text: "Graduates employed, in further training or building ventures within six months." },
        { value: "420+", label: "Portfolio projects", text: "Projects built and presented across recent cohorts." },
        { value: "65+", label: "Hiring partners", text: "Organisations that have engaged with or hired academy graduates." },
      ],
    },
    audience: {
      title: "Who it's for",
      // TODO: confirm age range and details with ITFY
      text: "The Youth Tech Academy is for young Ghanaians who are serious about building a career in technology and can commit to a full-time, 12-week intensive programme.",
      points: [
        "Recent secondary or tertiary graduates seeking their first technical role",
        "Career switchers with demonstrated motivation and basic digital literacy",
        "Young people from underserved communities who need structured access to quality training",
      ],
      eligibilityTitle: "Eligibility",
      eligibility: "Applicants need to be available for the full cohort duration, have basic computer literacy, and have reliable access to a device and internet. Strong preference is given to applicants who show initiative, resilience and clear career intent.",
    },
    gallery: {
      title: "Scenes from the classrooms, workshops and communities behind the work",
      // TODO: Youth Tech Academy photos and captions
      photos: [
        { src: IMG.coding, alt: "Learners at workstations during a coding session", caption: "Daily technical sessions" },
        { src: IMG.group, alt: "Learners collaborating on a project", caption: "Collaborative project work" },
        { src: IMG.graduation, alt: "A facilitator presenting to learners", caption: "Facilitator-led workshops" },
        { src: IMG.coding, alt: "A cohort working together in the lab", caption: "Cohort lab time" },
      ],
    },
    stories: {
      title: "Stories that show what this initiative feels like from the inside",
      // TODO: add the three learner/partner quotes from ITFY's page (with consent to be named)
      items: [],
    },
    partners: {
      title: "Organisations that help this initiative reach further",
      // TODO: add how each partner supports the academy, plus logos and websites
      items: [
        { name: "Microsoft", text: "" },
        { name: "Google.org", text: "" },
      ],
    },
    faq: {
      title: "Answers to common questions about the initiative",
      // TODO: confirm questions and add ITFY's answers
      items: [
        { q: "What kind of courses sit inside the academy?", a: "The academy covers software development, design, data and other digital skills. See the full list and start dates on the Apply page." },
        { q: "How much time does the programme take?", a: "Cohorts run full-time for 12 weeks, so learners need to be available for the whole programme." },
        { q: "What happens after graduation?", a: "Graduates get career support, portfolio reviews, interview preparation and introductions to hiring partners." },
      ],
    },
    cta: {
      title: "Ready to explore Youth Tech Academy?",
      text: "Apply for the next cohort, or partner with us to sponsor learners and hire graduates.",
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    explore: [
      { role: "Train", title: "Browse courses", text: "Compare courses by level, format and start date.", cta: "See courses", href: "/apply#courses" },
      { role: "Hire", title: "Hire our graduates", text: "Meet graduates with portfolios and real project delivery.", cta: "Hire graduates", href: "/for-organisations/hire" },
      { role: "Proof", title: "Impact reports", text: "The data behind every cohort.", cta: "Read the reports", href: "/our-impact/reports" },
    ],
  },
  {
    slug: "entrepreneurship-hub",
    name: "Entrepreneurship Hub",
    hero: {
      lead: "Where digital skills become ventures: disciplined entrepreneurship support for Ghana's next generation of founders.",
      // TODO: ITFY's exact hero note
      note: "A structured support pathway that helps young Ghanaians turn digital skills and ideas into viable ventures, products and income-generating opportunities.",
      image: { src: IMG.graduation, alt: "A founder presenting during an Entrepreneurship Hub session" },
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    overview: {
      title: "A focused pathway with clear outcomes",
      // TODO: ITFY's paragraphs and pull quote
      paragraphs: [
        "The Entrepreneurship Hub bridges technical capability and business execution. It gives learners and early founders the tools, feedback and networks they need to move from concept to customer, prototype to product, and idea to income.",
        "The hub exists to convert technical skill into sustainable economic opportunity by equipping young Ghanaians with the business discipline, market insight and support networks required to build and grow ventures.",
      ],
      quote: "Participants move from technical prototype to validated business idea, build practical skills in customer discovery, pricing and pitching, and leave with clear pathways into self-employment and venture creation.",
      image: { src: IMG.graduation, alt: "A speaker addressing Entrepreneurship Hub participants" },
    },
    journey: {
      title: "A programme journey that moves from access to confidence",
      text: "Each cohort follows four stages, so participants and partners know what to expect from first contact to measurable outcomes.",
      // TODO: ITFY's wording for each stage
      steps: [
        { title: "Discover", text: "Participants identify real problems, validate demand and define the value their idea could deliver.", image: { src: IMG.coding, alt: "Participants in a discovery workshop" } },
        { title: "Build", text: "Founders develop minimum viable products, test with real users and refine based on feedback.", image: { src: IMG.group, alt: "Founders building their products" } },
        { title: "Pitch & refine", text: "Regular pitch sessions and mentor clinics help founders sharpen their narrative and business model.", image: { src: IMG.coding, alt: "A founder pitching to mentors" } },
        { title: "Launch & scale", text: "Promising ventures receive introductions to partners, investors and growth programmes.", image: { src: IMG.graduation, alt: "Founders at a launch event" } },
      ],
    },
    proof: {
      title: "Proof that the model is translating into real opportunity",
      text: "These indicators help show who the initiative is reaching, how consistently it is delivering and why it matters.",
      // TODO: confirm the labels and descriptions (the figures were readable, the small text wasn't)
      stats: [
        { value: "320+", label: "Founders trained", text: "Young people who have completed entrepreneurship modules or hub programmes." },
        { value: "48", label: "Startups launched", text: "Businesses that began or were strengthened through ITFY support." },
        { value: "22", label: "Revenue-generating ventures", text: "Participants generating consistent income from their ventures." },
        { value: "85%", label: "Founder progression", text: "Hub participants who report improved business skills or traction within six months." },
      ],
    },
    audience: {
      title: "Who it's for",
      // TODO: confirm with ITFY
      text: "The Entrepreneurship Hub is for young Ghanaians who have technical or creative skills and want to build income-generating ventures rather than (or alongside) traditional employment.",
      points: [
        "Academy graduates ready to explore self-employment or product-based businesses",
        "Young founders with early ideas who need structure, feedback and accountability",
        "Women and youth from underserved communities seeking dignified economic pathways",
      ],
      eligibilityTitle: "Eligibility",
      eligibility: "Open to participants with ideas at any stage, from concept to early revenue. Applicants should have a clear problem they want to solve and be ready to engage with real customers. Priority is given to founders whose ventures address local problems or serve underserved markets.",
    },
    gallery: {
      title: "Scenes from the classrooms, workshops and communities behind the work",
      // TODO: Entrepreneurship Hub photos and captions
      photos: [
        { src: IMG.graduation, alt: "A founder presenting an idea", caption: "Founder pitch session" },
        { src: IMG.coding, alt: "Participants at a workshop", caption: "Venture-building workshop" },
        { src: IMG.group, alt: "Participants celebrating together", caption: "Cohort community" },
        { src: IMG.coding, alt: "Founders working on their products", caption: "Product build time" },
      ],
    },
    stories: {
      title: "Stories that show what this initiative feels like from the inside",
      // TODO: add the three participant/mentor quotes from ITFY's page (with consent to be named)
      items: [],
    },
    partners: {
      title: "Organisations that help this initiative reach further",
      // TODO: add how each partner supports the hub, plus logos and websites
      items: [
        { name: "Tony Elumelu Foundation", text: "" },
        { name: "Mastercard Foundation", text: "" },
      ],
    },
    faq: {
      title: "Answers to common questions about the initiative",
      // TODO: confirm questions and add ITFY's answers
      items: [
        { q: "Do participants need a registered business?", a: "No. Ideas at any stage are welcome, from an early concept to a business that is already earning." },
        { q: "Is there funding available?", a: "The hub focuses on skills, mentorship and introductions. Promising ventures may be introduced to partners, investors and growth programmes." },
        { q: "Can I join without completing the Youth Tech Academy?", a: "Yes. Academy graduates are welcome, but founders with skills from elsewhere can apply too." },
      ],
    },
    cta: {
      title: "Ready to explore Entrepreneurship Hub?",
      text: "Apply to join the next cohort, or partner with us to mentor, fund or open doors for young founders.",
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    explore: [
      { role: "Skills", title: "Youth Tech Academy", text: "Build the technical skills behind your venture.", cta: "Explore the academy", href: "/what-we-do/youth-tech-academy" },
      { role: "Train", title: "Apply for training", text: "Browse courses and upcoming cohorts.", cta: "See courses", href: "/apply" },
      { role: "Partner", title: "Partner with us", text: "Mentor, fund or open doors for young founders.", cta: "See partnership routes", href: "/partner-with-us" },
    ],
  },
  {
    slug: "code-impact-challenge",
    name: "Code Impact Challenge",
    hero: {
      lead: "Where technical skills meet real constraints: building, presenting and delivering under pressure.",
      note: "A challenge-led programme that connects technical learning with real-world problem solving through time-bound, team-based projects.",
      image: { src: IMG.group, alt: "Code Impact Challenge participants celebrating together" },
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    overview: {
      title: "A focused pathway with clear outcomes",
      paragraphs: [
        "The Code Impact Challenge gives learners a public, mission-focused format to apply their skills, collaborate under pressure and deliver solutions to meaningful local problems. It transforms classroom learning into visible, community-relevant impact.",
        "Code Impact Challenge turns technical learning into active problem-solving by giving young Ghanaians structured opportunities to build around real community needs, present under pressure and develop teamwork through challenge-based practice.",
      ],
      quote: "Strengthen problem-solving, collaboration and communication through purposeful, time-bound competition. Help learners practise applied building and public presentation, not only private classroom work. Create visible moments where communities, partners and stakeholders can see learner capability in action. Foster a culture of experimentation, iteration, feedback and professional delivery.",
      image: { src: IMG.coding, alt: "Challenge participants working at computers" },
    },
    journey: {
      title: "A programme journey that moves from access to confidence",
      text: "Each initiative uses a clear process so participants and partners know what to expect from first contact to measurable outcomes.",
      steps: [
        { title: "Frame", text: "Teams receive challenge prompts tied to local, social or ecosystem needs that require practical digital thinking and creative solutions.", image: { src: IMG.group, alt: "Teams receiving their challenge brief" } },
        { title: "Build", text: "Participants research, prototype, test and refine possible responses within a structured challenge window with clear milestones.", image: { src: IMG.coding, alt: "A team building their prototype" } },
        { title: "Present", text: "Teams pitch their work to peers, judges and invited stakeholders with transparent criteria, deadlines and constructive feedback.", image: { src: IMG.graduation, alt: "Participants presenting to judges" } },
        { title: "Reflect", text: "Feedback and debrief sessions help participants carry lessons forward into future projects, deeper programmes or venture work.", image: { src: IMG.group, alt: "A debrief session after the challenge" } },
      ],
    },
    proof: {
      title: "Proof that the model is translating into real opportunity",
      text: "These indicators help show who the initiative is reaching, how consistently it is delivering and why it matters.",
      stats: [
        { value: "28", label: "Prototype concepts", text: "Ideas developed into early challenge-ready solutions with real-world relevance." },
        { value: "11", label: "Judging mentors", text: "Partners and practitioners helping teams sharpen their thinking and delivery." },
        { value: "4", label: "Winning teams", text: "Outstanding participant groups recognised for execution, impact and collaboration." },
        { value: "88%", label: "Team completion", text: "A strong signal of engagement, accountability and collaborative follow-through." },
      ],
    },
    audience: {
      title: "Who it's for",
      text: "This initiative is best for learners who already have some technical exposure and want a more applied, collaborative and time-bound format to stretch their skills and build visible portfolios.",
      points: [
        "Participants ready to practise teamwork, problem-solving and public presentation.",
        "Learners who benefit from challenge deadlines, feedback loops and showcase moments.",
        "Young builders interested in innovation, prototyping and community-relevant solutions.",
      ],
      eligibilityTitle: "Eligibility",
      eligibility: "Works best for learners with some prior exposure to digital tools or technical learning pathways. Participants should be comfortable collaborating, presenting and iterating quickly under guidance. Teams may combine different strengths, including design, coding, research and storytelling.",
    },
    gallery: {
      title: "Scenes from the classrooms, workshops and communities behind the work",
      text: "See the people, learning environments and shared moments that bring this initiative to life.",
      // TODO: swap in ITFY's real Code Impact Challenge photos
      photos: [
        { src: IMG.group, alt: "Learners during a challenge session", caption: "Learners working intensely during a challenge session." },
        { src: IMG.coding, alt: "A team at their computers", caption: "A team collaborating during project development." },
        { src: IMG.graduation, alt: "Participants presenting to an audience", caption: "Participants presenting their work at the showcase." },
        { src: IMG.group, alt: "A participant giving a final presentation", caption: "A final demo presentation during the challenge format." },
      ],
    },
    stories: {
      title: "Stories that show what this initiative feels like from the inside",
      // TODO: add the three people's photos from ITFY's page
      items: [
        { quote: "The challenge forced us to think clearly, move faster, and explain our decisions in a way we never had before.", name: "Saah J.", role: "Challenge participant" },
        { quote: "It was one of the few experiences where you could see learners becoming more confident with every round.", name: "Amoako F.", role: "Volunteer judge" },
        { quote: "The strongest teams were not always the most technical. They were the ones that understood the problem best.", name: "Agboku E.", role: "Mentor and reviewer" },
      ],
    },
    partners: {
      title: "Organisations that help this initiative reach further",
      // TODO: partner logos and websites
      items: [
        { name: "GIZ", text: "Supports challenge-based approaches that connect youth skills to broader development and innovation themes." },
        { name: "USAID", text: "Represents public-interest alignment and the value of locally-led, challenge-driven problem solving." },
      ],
    },
    faq: {
      title: "Answers to common questions about the initiative",
      // TODO: ITFY's answers were collapsed in the screenshot; confirm these with the team
      items: [
        { q: "Is the challenge only for advanced coders?", a: "No. Some technical exposure helps, but teams mix strengths: design, research, storytelling and coding all matter. Understanding the problem well counts as much as technical depth." },
        { q: "Do participants work alone or in teams?", a: "In teams. The challenge is built to practise collaboration, so participants plan, build and present together." },
        { q: "What happens after the challenge ends?", a: "Teams take part in feedback and debrief sessions, then carry what they learned into future projects, deeper ITFY programmes or venture work through the Entrepreneurship Hub." },
      ],
    },
    cta: {
      title: "Ready to explore Code Impact Challenge?",
      text: "Cohort 8 is now open. Join a 12-week, project-driven programme with mentorship and clear progression into work, further study or entrepreneurship. Scholarships and device support are available for learners who need them. 85% of graduates progress within six months.",
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Ask a question", href: "/contact" },
    },
    note: {
      text: "Challenge teams are loaned machines from the IT For Youth Laptop Bank for the duration of the build.",
      link: { label: "About the Laptop Bank", href: "/laptop-bank" },
    },
    explore: [
      { role: "Impact", title: "Impact reports", text: "See how challenge-based learning fits into the wider mission and outcomes.", cta: "Read the reports", href: "/our-impact/reports" },
      { role: "Apply", title: "Apply for training", text: "Explore the routes that can prepare learners for future challenge participation.", cta: "See courses", href: "/apply" },
      { role: "Partner", title: "International development", text: "See how challenge-led work can connect with development partners.", cta: "Partner with us", href: "/partner-with-us" },
    ],
  },
];

export const getInitiative = (slug: string) => INITIATIVES.find((i) => i.slug === slug);
