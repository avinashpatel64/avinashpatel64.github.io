/* ============================================================
   CONTENT.JS — ALL WORDS AND LINKS ON THE SITE LIVE HERE.
   ------------------------------------------------------------
   Two ways to edit:
     1. Open admin.html, change things, click "Download content.js",
        then upload the new file to GitHub (replacing this one).
     2. Or edit this file directly. Keep the quotes and commas.

   Anything wrapped in [[ ]] is a placeholder to replace.
   ============================================================ */

window.SITE_CONTENT = {

  /* ---------- SITE-WIDE ---------- */
  site: {
    name:        "Avinash Patel",
    initials:    "AP",
    logoImage:   "",                       /* e.g. "images/logo.png" — leave "" to use initials */
    role:        "Product Design at Salesforce",
    tagline:     "Enterprise product design, systems and team leadership.",
    email:       "[[your@email.com]]",
    location:    "Pune, Maharashtra, India",
    linkedin:    "https://www.linkedin.com/in/[[your-linkedin-handle]]",
    resumeUrl:   "[[resume.pdf]]",
    footerBlurb: "Product designer working on enterprise software — systems, complex workflows, and the teams that build them.",
    copyright:   "© 2026 Avinash Patel. All rights reserved."
  },

  /* ---------- NAVIGATION ---------- */
  nav: [
    { label: "Home",    href: "index.html" },
    { label: "Work",    href: "work.html" },
    { label: "About",   href: "about.html" },
    { label: "Contact", href: "contact.html" }
  ],
  navButtons: [
    { label: "Résumé",   href: "[[resume.pdf]]", style: "ghost" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/[[your-linkedin-handle]]", style: "primary" }
  ],

  /* ---------- FOOTER COLUMNS ---------- */
  footer: [
    { title: "Navigation", links: [
      { label: "Work",    href: "work.html" },
      { label: "About",   href: "about.html" },
      { label: "Contact", href: "contact.html" }
    ]},
    { title: "Work", links: [
      { label: "Salesforce",  href: "case.html?id=salesforce-ux" },
      { label: "BMC Software", href: "case.html?id=bmc-innovation-labs" },
      { label: "Clarice",     href: "case.html?id=clarice-data-platforms" }
    ]},
    { title: "Elsewhere", links: [
      { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/[[your-linkedin-handle]]" },
      { label: "Email",      href: "mailto:[[your@email.com]]" }
    ]}
  ],

  /* ---------- HOME PAGE ---------- */
  home: {
    eyebrow:  "Avinash Patel · Product Design at Salesforce",
    headline: "Enterprise software, made usable.",
    intro:    "Twenty years designing complex products — data platforms, IT service management, healthcare and insurance systems — and leading the design teams behind them.",
    buttons: [
      { label: "View work",   href: "work.html",  style: "primary" },
      { label: "About me",    href: "about.html", style: "ghost" }
    ],
    portrait: { src: "", alt: "Portrait of Avinash Patel" },

    facts: [
      { title: "Enterprise depth",
        text: "Two decades across data centre, big data, ITSM, healthcare and insurance products at Salesforce, VMware, BMC and Clarice." },
      { title: "Design leadership",
        text: "Led interaction design teams, ran Innovation Labs design efforts, and mentored designers through cross-functional delivery." },
      { title: "NID-trained",
        text: "MDes in Information and Digital Design from the National Institute of Design, with a background in electronics engineering." }
    ],

    workHeading: "Selected work",
    workIntro:   "Three projects that show how I work through complexity — from research to shipped system.",

    ctaEyebrow: "Let's connect",
    ctaTitle:   "Interested in working together?",
    ctaText:    "Open to conversations about enterprise product design, design systems, and design leadership roles.",
    ctaButtons: [
      { label: "Get in touch", href: "contact.html", style: "primary" },
      { label: "LinkedIn ↗",   href: "https://www.linkedin.com/in/[[your-linkedin-handle]]", style: "ghost" }
    ]
  },

  /* ---------- WORK PAGE ---------- */
  work: {
    title: "Work",
    intro: "Case studies from enterprise product teams. Each one covers the problem, the process, and what changed for users."
  },

  /* ---------- ABOUT PAGE ---------- */
  about: {
    title: "About",
    intro: "Seasoned UX professional with extensive experience designing software products for enterprise teams.",
    body: [
      "I've spent close to twenty years designing enterprise software — the kind people use for eight hours a day and rarely choose for themselves. Data centre and storage tools, big data analytics, IT service management, health insurance exchanges, hospital systems.",
      "My work sits between research and delivery: understanding how specialists actually do their jobs, then shaping workflows, information architecture and interfaces that hold up under real complexity. Alongside the craft, I lead and mentor design teams inside cross-functional product organisations.",
      "I trained at the National Institute of Design in Ahmedabad and have been based in Pune since. [[Add a line here about what you care about outside work.]]"
    ],
    photo: { src: "", alt: "Avinash Patel" },

    skillsTitle: "Skills",
    skills: [
      "User Experience (UX)", "Wireframing", "Coaching & Mentoring",
      "User Requirements", "User Flows", "Cross-functional Team Leadership",
      "Mockups", "Usability Testing", "Creative Ideation", "Creative Problem Solving"
    ],

    educationTitle: "Education",
    education: [
      { when: "2004 – 2006", degree: "MDes, Information and Digital Design",
        school: "National Institute of Design",
        note: "Design research, task analysis, information architecture, user interface, usability, data visualization." },
      { when: "2000 – 2004", degree: "BE, Electronics and Telecommunication Engineering",
        school: "Oriental Institute of Science and Technology",
        note: "Majors in satellite communication and mobile communication." }
    ]
  },

  /* ---------- CAREER TIMELINE (used on Home + About) ---------- */
  experienceTitle: "Career",
  experience: [
    { when: "Mar 2024 – Present", role: "User Experience Lead", org: "Salesforce",
      location: "", note: "" },
    { when: "May 2022 – Dec 2023", role: "Staff Product Designer", org: "VMware",
      location: "Pune District, Maharashtra, India", note: "" },
    { when: "Nov 2017 – Apr 2022", role: "Lead Designer", org: "BMC Software",
      location: "Pune / Pimpri-Chinchwad Area",
      note: "Led UX design efforts for multiple products in Innovation Labs along with Business Workflows. Earlier contributed to Remedyforce and Innovation Suite." },
    { when: "Jan 2016 – Nov 2017", role: "Sr UX Design Specialist", org: "BMC Software",
      location: "Pune Division, Maharashtra, India", note: "" },
    { when: "Apr 2013 – Dec 2015", role: "Lead User Experience Designer", org: "Clarice Technologies",
      location: "Pune / Pimpri-Chinchwad Area",
      note: "Led a team of interaction designers building enterprise software products in the data centre / storage and big data / analytics domains." },
    { when: "Apr 2012 – Feb 2013", role: "User Experience Lead", org: "hCentive, Inc.",
      location: "Noida, Uttar Pradesh, India",
      note: "Designed interactions and led a team of designers and web developers to create HIX." },
    { when: "Mar 2008 – Dec 2011", role: "Senior User Experience Design Consultant", org: "Texity Systems Pvt. Ltd",
      location: "Pune / Pimpri-Chinchwad Area",
      note: "Led a team of designers to research and design the HOPSYS-Biomed application for medium-sized hospitals." },
    { when: "Dec 2006 – Feb 2008", role: "Software Product Designer", org: "MangoSpring",
      location: "Pune / Pimpri-Chinchwad Area",
      note: "Third employee at the startup; designed the event management application PurpleTrail from scratch." },
    { when: "Feb 2006 – Aug 2006", role: "Interaction Designer", org: "Capgemini (formerly Kanbay)",
      location: "Pune / Pimpri-Chinchwad Area", note: "" }
  ],

  /* ---------- CONTACT PAGE ---------- */
  contact: {
    title: "Contact",
    eyebrow: "Get in touch",
    intro: "Whether you're shaping a product direction, hiring for a design role, or just want another set of eyes on something — I'm happy to talk.",

    /* Quick links shown as pills under the intro */
    links: [
      { label: "Résumé",   href: "[[resume.pdf]]" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/[[your-linkedin-handle]]" },
      { label: "Email",    href: "mailto:[[your@email.com]]" }
    ],

    methods: [
      { label: "Email",    value: "[[your@email.com]]", href: "mailto:[[your@email.com]]" },
      { label: "Based in", value: "Pune, Maharashtra, India", href: "" }
    ],
    note: "For recruiters: my résumé is linked in the top navigation.",

    /* --------------------------------------------------------
       CONTACT FORM
       Leave endpoint empty and the form is hidden — the page
       falls back to the links above, which always work.

       Web3Forms (free, no account needed):
         1. web3forms.com -> enter your email -> they send you a key
         2. endpoint:  https://api.web3forms.com/submit
         3. accessKey: paste the key they emailed

       Formspree (free, 50/month, needs an account):
         1. formspree.io -> New form -> copy the endpoint
         2. endpoint:  https://formspree.io/f/YOURFORMID
         3. accessKey: leave empty
       -------------------------------------------------------- */
    form: {
      endpoint:  "",
      accessKey: "",
      subject:   "New message from your portfolio site",
      heading:   "Send a message",
      buttonLabel: "Send message",
      sendingLabel: "Sending…",
      successMessage: "Thanks — your message is on its way. I'll reply to the email address you gave.",
      errorMessage: "That didn't send. Please email me directly instead."
    }
  },

  /* ============================================================
     CASE STUDIES
     Each case study is one entry below. Blocks render in order.
     Block types: "text", "image", "stats", "quote", "list", "gallery"
     ============================================================ */
  cases: [
    {
      id: "salesforce-ux",
      title: "Leading experience design at scale",
      client: "Salesforce",
      subtitle: "Enterprise UX leadership",
      summary: "Leading user experience for enterprise products used daily by large distributed teams.",
      tags: ["Product Design", "Team Leadership", "Enterprise UX"],
      cover: { src: "", alt: "Salesforce project cover image" },
      meta: [
        { label: "Role",     value: "User Experience Lead" },
        { label: "Company",  value: "Salesforce" },
        { label: "Scope",    value: "[[Team size / product area]]" },
        { label: "Duration", value: "Mar 2024 – Present" }
      ],
      blocks: [
        { type: "text", eyebrow: "Context", heading: "What this product does",
          body: "[[Two or three sentences on the product, who uses it, and why it matters to the business. Keep it non-confidential.]]" },
        { type: "text", eyebrow: "The problem", heading: "Where the experience was breaking down",
          body: "[[Describe the user problem in plain language. What was slow, confusing, or error-prone before the work started?]]" },
        { type: "stats", eyebrow: "Impact", heading: "What changed",
          items: [
            { num: "[[+00%]]", label: "[[Metric one]]" },
            { num: "[[-00%]]", label: "[[Metric two]]" },
            { num: "[[00]]",   label: "[[Metric three]]" },
            { num: "[[00]]",   label: "[[Metric four]]" }
          ]},
        { type: "image", src: "", alt: "Key screen from the project",
          caption: "[[Add a screenshot or diagram. Put the file in the images folder and set the path in admin.]]" },
        { type: "text", eyebrow: "Approach", heading: "How the team worked",
          body: "[[How you framed the problem, who you involved, what research or facilitation you ran, and how design fit into the delivery cadence.]]" },
        { type: "quote", quote: "[[A real quote from a user, stakeholder, or teammate.]]", cite: "[[Role, Company]]" },
        { type: "list", eyebrow: "Decisions", heading: "Choices that shaped the design",
          items: [
            "[[Decision one — and the reason behind it.]]",
            "[[Decision two — and the trade-off you accepted.]]",
            "[[Decision three — and how you validated it.]]"
          ]},
        { type: "text", eyebrow: "Closing", heading: "What I'd take forward",
          body: "[[One honest paragraph on what worked, what you'd do differently, and what the work taught you.]]" }
      ]
    },

    {
      id: "bmc-innovation-labs",
      title: "Designing business workflows in Innovation Labs",
      client: "BMC Software",
      subtitle: "IT service management",
      summary: "Leading UX across multiple Innovation Labs products and the business workflow experience.",
      tags: ["Product Design", "Workflows", "Design Leadership"],
      cover: { src: "", alt: "BMC Software project cover image" },
      meta: [
        { label: "Role",     value: "Lead Designer" },
        { label: "Company",  value: "BMC Software" },
        { label: "Scope",    value: "Innovation Labs, Business Workflows" },
        { label: "Duration", value: "Nov 2017 – Apr 2022" }
      ],
      blocks: [
        { type: "text", eyebrow: "Context", heading: "Multiple products, one design voice",
          body: "Led UX design efforts for multiple products in Innovation Labs alongside Business Workflows, having earlier contributed to Remedyforce and the Innovation Suite. [[Expand with what these products did and who used them.]]" },
        { type: "text", eyebrow: "The problem", heading: "[[Name the core problem]]",
          body: "[[What made workflow design hard here? Volume of steps, roles involved, legacy constraints, admin vs end-user needs?]]" },
        { type: "image", src: "", alt: "Workflow diagram", caption: "[[A flow, map, or before/after screen.]]" },
        { type: "list", eyebrow: "Process", heading: "How the work ran",
          items: [
            "[[Research or discovery activity.]]",
            "[[Concept and validation loop.]]",
            "[[Handoff and delivery with engineering.]]"
          ]},
        { type: "stats", eyebrow: "Outcome", heading: "Results",
          items: [
            { num: "[[00]]", label: "[[Metric]]" },
            { num: "[[00]]", label: "[[Metric]]" },
            { num: "[[00]]", label: "[[Metric]]" },
            { num: "[[00]]", label: "[[Metric]]" }
          ]},
        { type: "text", eyebrow: "Closing", heading: "Reflection",
          body: "[[What this five-year run taught you about designing inside a large enterprise org.]]" }
      ]
    },

    {
      id: "clarice-data-platforms",
      title: "Making big data legible",
      client: "Clarice Technologies",
      subtitle: "Data centre, storage and analytics",
      summary: "Leading a team of interaction designers building enterprise products across data centre, storage and big data analytics.",
      tags: ["Data Visualization", "Interaction Design", "Team Leadership"],
      cover: { src: "", alt: "Clarice Technologies project cover image" },
      meta: [
        { label: "Role",     value: "Lead User Experience Designer" },
        { label: "Company",  value: "Clarice Technologies" },
        { label: "Scope",    value: "Data centre / storage, big data / analytics" },
        { label: "Duration", value: "Apr 2013 – Dec 2015" }
      ],
      blocks: [
        { type: "text", eyebrow: "Context", heading: "Designing for specialists",
          body: "Led a team of interaction designers creating enterprise software in the data centre / storage and big data / analytics domains. [[Add which clients or product types, at whatever level of detail you're allowed to share.]]" },
        { type: "text", eyebrow: "The problem", heading: "[[Name the core problem]]",
          body: "[[What made these interfaces hard? Density of data, expert users, monitoring vs investigation, alarm fatigue?]]" },
        { type: "image", src: "", alt: "Dashboard design", caption: "[[Dashboard, visualization, or system map.]]" },
        { type: "quote", quote: "[[A quote from a user or client stakeholder.]]", cite: "[[Role, Company]]" },
        { type: "text", eyebrow: "Closing", heading: "Reflection",
          body: "[[What leading a team here taught you.]]" }
      ]
    }
  ],

  /* ============================================================
     EXTRA PAGES
     Add pages here (or from admin.html) and they appear at
     page.html?id=the-id. Add them to `nav` or `footer` to link them.
     Templates: "text" | "links" | "gallery"
     ============================================================ */
  pages: [
    {
      id: "writing",
      title: "Writing",
      template: "links",
      intro: "Notes on enterprise design, systems, and working with product teams.",
      items: [
        { label: "[[Article title]]", href: "#", note: "[[Short description]]" }
      ]
    }
  ]
};
