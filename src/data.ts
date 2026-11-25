export const SITE = {
  name: "Nextcode Studio",
  email: "internship@nextcode.studio",
};

export const NAV_LINKS = [
  { href: "#programs", label: "Programs" },
  { href: "#how", label: "How it works" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Learners trained" },
  { value: 12, suffix: "+", label: "Programs & tracks" },
  { value: 40, suffix: "+", label: "Projects shipped" },
  { value: 95, suffix: "%", label: "Completion rate" },
] as const;

export type Category = "dev" | "design" | "data" | "mkt";

export interface Program {
  title: string;
  desc: string;
  duration: string;
  category: Category;
  icon: string;
  tint: string;
}

export const CATEGORIES: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "dev", label: "Development" },
  { id: "design", label: "Design" },
  { id: "data", label: "Data & AI" },
  { id: "mkt", label: "Marketing" },
];

export const PROGRAMS: Program[] = [
  { title: "Full-Stack Web Development", desc: "HTML, CSS, JavaScript, React, Node and databases — build and deploy a complete app.", duration: "12 weeks", category: "dev", icon: "💻", tint: "bg-[#e8f0ff]" },
  { title: "Mobile App Development", desc: "Create cross-platform apps with Flutter or React Native and publish to the stores.", duration: "10 weeks", category: "dev", icon: "📱", tint: "bg-[#e8f0ff]" },
  { title: "Python & Backend", desc: "APIs, automation and clean backend architecture with Python, Django and FastAPI.", duration: "8 weeks", category: "dev", icon: "🐍", tint: "bg-[#e8f0ff]" },
  { title: "UI/UX Design", desc: "Research, wireframes, prototypes and design systems in Figma, reviewed by designers.", duration: "8 weeks", category: "design", icon: "🎨", tint: "bg-[#fff4dc]" },
  { title: "Data Analytics", desc: "SQL, Excel, Python and dashboards. Turn raw data into decisions.", duration: "8 weeks", category: "data", icon: "📊", tint: "bg-[#f0eaff]" },
  { title: "AI & Machine Learning", desc: "From models to LLM-powered apps — hands-on projects with modern AI tooling.", duration: "12 weeks", category: "data", icon: "🤖", tint: "bg-[#f0eaff]" },
  { title: "Digital Marketing", desc: "SEO, social, ads and analytics — run real campaigns for real brands.", duration: "6 weeks", category: "mkt", icon: "📈", tint: "bg-[#e9f9ee]" },
  { title: "Content & Social Media", desc: "Write, design and schedule content that grows an audience.", duration: "6 weeks", category: "mkt", icon: "✍️", tint: "bg-[#e9f9ee]" },
  { title: "Graphic & Motion Design", desc: "Brand visuals, social creatives and motion graphics from brief to delivery.", duration: "8 weeks", category: "design", icon: "🎬", tint: "bg-[#fff4dc]" },
];

export const STEPS = [
  { title: "Apply", desc: "Choose a track and fill a short form. No experience needed for beginner tracks." },
  { title: "Learn", desc: "Guided sessions, curated resources and weekly mentor check-ins." },
  { title: "Build", desc: "Work in a team on a live project with code reviews and real deadlines." },
  { title: "Get certified", desc: "Earn a verified certificate, a recommendation and a portfolio piece." },
] as const;

export const SERVICES = [
  "Websites, web apps and e-commerce stores",
  "Android & iOS mobile apps",
  "UI/UX design and brand identity",
  "Automation, AI chatbots and custom tools",
  "Digital marketing and SEO",
] as const;

export const FOCUS = [
  { label: "Clean, maintainable code", pct: 98 },
  { label: "On-time delivery", pct: 94 },
  { label: "Mentor-reviewed work", pct: 100 },
  { label: "Client satisfaction", pct: 96 },
] as const;

export const PROJECTS = [
  { title: "ShopLine Storefront", desc: "E-commerce site with cart, payments and an admin dashboard.", stack: ["React", "Node"], icon: "🛒", bg: "from-[#dbe8ff] to-[#f3f7ff]" },
  { title: "CareBook App", desc: "Appointment booking app for clinics with reminders.", stack: ["Flutter", "Firebase"], icon: "🏥", bg: "from-[#ffeccb] to-[#fff8ea]" },
  { title: "LearnHub Portal", desc: "Course platform with progress tracking and certificates.", stack: ["Next.js", "Postgres"], icon: "📚", bg: "from-[#e3d9ff] to-[#f6f2ff]" },
] as const;

export const REVIEWS = [
  { quote: "I finally understood how real projects work. The code reviews alone were worth it.", name: "Aarav S.", role: "Full-Stack Intern", color: "bg-brand" },
  { quote: "Mentors were patient and honest. I left with a portfolio and the confidence to apply.", name: "Priya M.", role: "UI/UX Intern", color: "bg-[#ff7a59]" },
  { quote: "Working on a live client project made interviews so much easier to talk through.", name: "Rohan K.", role: "Data Analytics Intern", color: "bg-[#22b573]" },
] as const;

export const FAQS = [
  { q: "Who can apply?", a: "Students, fresh graduates and career switchers. Beginner tracks need no prior experience." },
  { q: "Are the programs online?", a: "Yes. Sessions and projects run remotely, with flexible schedules around your studies or job." },
  { q: "Will I get a certificate?", a: "Everyone who completes the programme and project receives a certificate of completion." },
  { q: "Is there a fee?", a: "Fees depend on the track. Fill in the form and our team will share details and any available scholarships." },
  { q: "Do you build software for companies?", a: "Yes — websites, apps, design and automation. Use the form and choose “Hire Nextcode” to start a conversation." },
] as const;

export const FORM_TRACKS = [
  ...PROGRAMS.map((p) => p.title),
  "Hire Nextcode (project)",
];
