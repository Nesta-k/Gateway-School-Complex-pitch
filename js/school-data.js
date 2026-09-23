/**
 * GATEWAY SCHOOL COMPLEX — CENTRALIZED SCHOOL DATA & CONFIGURATION
 * 
 * This file serves as the centralized content management layer for Gateway School Complex MVP.
 * School management can effortlessly update phone numbers, emails, addresses, mission statements,
 * news articles, gallery photos, and program details here without touching the HTML markup.
 * 
 * Note: Following prompt guidelines, strict placeholder conventions are adhered to.
 * No fictional statistics, examination rankings, awards, or fake staff claims are invented.
 */

const SchoolData = {
  // Core Brand Configuration
  brand: {
    name: "Gateway School Complex",
    shortName: "Gateway",
    motto: "Excellence • Discipline • Integrity",
    eyebrow: "WELCOME TO GATEWAY SCHOOL COMPLEX",
    headline: "Building Strong Foundations for a Brighter Future",
    tagline: "Providing a supportive and engaging learning environment where children can grow academically, socially, and personally from Elementary through Junior High School.",
    gradesServed: "Elementary through Junior High School (JHS)",
    establishedYearNotice: "[School Foundation / Establishment Details to be provided by management]",
    developerCredit: "Designed & Developed for Gateway School Complex"
  },

  // Contact & Location Details (Strict Placeholders)
  contact: {
    phone: "[School Phone Number]",
    phoneDisplay: "+233 (0) 558663775",
    phoneSecondary: "[Alternative Phone Number]",
    email: "gatewayschoolcomplex.gmail.com",
    admissionsEmail: "[Admissions Email Address]",
    address: "Kasoa, Ghana, CP road",
    gpsLocation: "[Digital Address / GPS Coordinates]",
    officeHours: "Monday – Friday: 7:30 AM – 4:30 PM",
    weekendHours: "Saturday: By Prior Appointment (Office Closed on Sunday)",
    whatsappNumber: "000000000000",
    whatsappLink: "https://wa.me/000000000000?text=Hello%20Gateway%20School%20Complex,%20I%20would%20like%20to%20enquire%20about%20admissions."
  },

  // Social Media Presence (Placeholders)
  socials: {
    facebook: "#",
    instagram: "#",
    whatsapp: "#",
    youtube: "#",
    linkedin: "#"
  },

  // Proposed School Mission, Vision & Core Values
  ethos: {
    vision: "[Insert official school vision statement here. Proposed: To be a center of educational excellence that nurtures disciplined, inquisitive, and confident future leaders prepared for global opportunities.]",
    mission: "[Insert official school mission statement here. Proposed: Providing holistic, student-centered education through supportive teaching, character development, and academic rigor in a safe, inspiring environment.]",
    values: [
      {
        id: "excellence",
        name: "Excellence",
        tag: "Proposed Value",
        description: "Fostering high standards of curiosity, critical thinking, and dedicated effort in all academic and co-curricular pursuits.",
        icon: "award"
      },
      {
        id: "discipline",
        name: "Discipline",
        tag: "Proposed Value",
        description: "Instilling self-management, consistency, punctuality, and mutual responsibility in school life and community interactions.",
        icon: "shield"
      },
      {
        id: "integrity",
        name: "Integrity",
        tag: "Proposed Value",
        description: "Cultivating honesty, transparency, strong moral foundations, and personal accountability in every learner.",
        icon: "heart"
      },
      {
        id: "respect",
        name: "Respect",
        tag: "Proposed Value",
        description: "Valuing each child, educator, family member, and the broader community with empathy, kindness, and dignity.",
        icon: "users"
      },
      {
        id: "growth",
        name: "Growth",
        tag: "Proposed Value",
        description: "Celebrating individual progress, resilience, and personal evolution from early elementary through junior high school.",
        icon: "trending-up"
      }
    ]
  },

  // Academic Programs
  programs: [
    {
      id: "elementary",
      level: "Elementary Education",
      grades: "Lower & Upper Primary",
      image: "img/gateway-community-4.jpg",
      description: "Helping young learners develop strong academic foundations, curiosity, confidence, and essential learning skills in an engaging and supportive classroom setting.",
      highlights: [
        "Foundational literacy, phonics & reading comprehension",
        "Core mathematics & quantitative reasoning",
        "Introduction to science discovery & experimental thinking",
        "Character development & creative arts expression",
        "Physical education & guided collaborative play"
      ],
      link: "academics.html#elementary"
    },
    {
      id: "jhs",
      level: "Junior High School (JHS)",
      grades: "JHS 1 through JHS 3",
      image: "img/gateway-activities-1.jpg",
      description: "Supporting learners as they develop deeper subject mastery, independent study skills, critical thinking, and disciplined preparation for their next stage of education.",
      highlights: [
        "Advanced core academic subjects & analytical skills",
        "Science laboratory exploration & practical coursework",
        "ICT literacy, research skills & digital citizenship",
        "Guidance counseling & preparation for high school transition",
        "Leadership, debate & student council development"
      ],
      link: "academics.html#jhs"
    }
  ],

  // Why Families Choose Gateway
  whyChooseGateway: [
    {
      title: "Supportive Learning Environment",
      description: "A positive, secure, and structured environment where children are encouraged to question, explore, and reach their personal potential.",
      icon: "sun"
    },
    {
      title: "Dedicated Educators",
      description: "Passionate teachers focused on individual learner development, continuous mentorship, and fostering strong foundational understanding.",
      icon: "book-open"
    },
    {
      title: "Holistic Development",
      description: "Balanced educational focus combining core academic disciplines with arts, athletic physical education, and moral character growth.",
      icon: "compass"
    },
    {
      title: "Strong Foundations",
      description: "Systematic curriculum progression ensuring learners transition smoothly and successfully from elementary directly into Junior High School.",
      icon: "layers"
    },
    {
      title: "Safe & Welcoming Community",
      description: "An inclusive and caring campus culture that fosters mutual respect among students, faculty, and school families.",
      icon: "shield-check"
    },
    {
      title: "Active Parent Engagement",
      description: "Open communication, regular academic progress updates, and collaborative parent-teacher engagement throughout the term.",
      icon: "message-circle"
    }
  ],

  // 3-Step Admissions Process
  admissionSteps: [
    {
      step: "01",
      title: "Make an Enquiry",
      shortDesc: "Contact the school to learn more.",
      detail: "Reach out via our online enquiry form, phone call, or visit the school office to learn about grade availability and curriculum specifics."
    },
    {
      step: "02",
      title: "Submit Your Application",
      shortDesc: "Follow admission requirements & form.",
      detail: "Complete the official registration package along with required academic records from previous schooling and medical certification."
    },
    {
      step: "03",
      title: "Begin the Journey",
      shortDesc: "Complete admission & join Gateway.",
      detail: "Receive your enrollment orientation packet, arrange school uniforms and educational materials, and prepare for an exciting school year."
    }
  ],

  // Gallery Showcase Data (Curated educational photography from school campus)
  gallery: [
    {
      id: 1,
      title: "Interactive Classroom Learning",
      category: "Learning",
      caption: "Educator mentoring young learners around interactive digital tablets and coursebooks.",
      image: "img/gateway-hero.jpg"
    },
    {
      id: 2,
      title: "Science & Discovery Exploration",
      category: "Learning",
      caption: "Students exploring scientific principles through guided laboratory experiments and observation.",
      image: "img/gateway-activities-2.jpg"
    },
    {
      id: 3,
      title: "School Library & Reading Zone",
      category: "School Life",
      caption: "Elementary pupils discovering the joy of reading together in our school library.",
      image: "img/gateway-community-4.jpg"
    },
    {
      id: 4,
      title: "Sports & Physical Development",
      category: "Sports",
      caption: "Learners developing agility, teamwork, and healthy sportsmanship on the sports field.",
      image: "img/gateway-activities-3.jpg"
    },
    {
      id: 5,
      title: "Creative Arts & Cultural Expression",
      category: "Activities",
      caption: "Nurturing creative expression and fine motor skills through painting, craft, and visual arts.",
      image: "img/gateway-activities-4.jpg"
    },
    {
      id: 6,
      title: "JHS Group Discussion & Research",
      category: "Learning",
      caption: "Junior High School learners working collaboratively on group research and concept mastery.",
      image: "img/gateway-community-2.jpg"
    },
    {
      id: 7,
      title: "Campus Life & Courtyard Walkway",
      category: "School Life",
      caption: "Students walking through the serene, tree-lined Gateway School Complex campus courtyard.",
      image: "img/gateway-campus.jpg"
    },
    {
      id: 8,
      title: "High School Preparation & Technology",
      category: "Activities",
      caption: "JHS students and teacher collaborating on analytical research and computing projects.",
      image: "img/gateway-activities-1.jpg"
    },
    {
      id: 9,
      title: "Student Community & Friendship",
      category: "School Life",
      caption: "Positive, respectful relationships among students during school break and campus activities.",
      image: "img/gateway-campus.jpg"
    },
    {
      id: 10,
      title: "Annual Sports & Inter-House Fun",
      category: "Sports",
      caption: "Healthy competitive spirit and team solidarity during physical education events.",
      image: "img/gateway-activities-3.jpg"
    },
    {
      id: 11,
      title: "Hands-On Science Practicals",
      category: "Learning",
      caption: "Practical chemistry and biology experimentation fostering critical thinking.",
      image: "img/gateway-activities-2.jpg"
    },
    {
      id: 12,
      title: "Foundational Literacy & Phonics",
      category: "Learning",
      caption: "Early childhood literacy circles building strong foundations in vocabulary and comprehension.",
      image: "img/gateway-community-4.jpg"
    }
  ],

  // News & Events Data (Demonstration Content)
  newsAndEvents: [
    {
      id: "welcome-term",
      type: "news",
      category: "Announcements",
      title: "Welcome to the New Academic Year: Preparing for Excellence",
      date: "Demonstration Date",
      dateBadge: "TERM START",
      excerpt: "Gateway School Complex warmly welcomes all returning and new learners as we embark on another term of discovery, personal growth, and academic achievement.",
      image: "img/gateway-campus.jpg",
      content: `
        <p><strong>Note: This is a demonstration news article for the Gateway School Complex website prototype. Official school notices will replace this content.</strong></p>
        <p>We are delighted to welcome all our elementary and Junior High School learners, dedicated staff, and valued parents to the beginning of a vibrant academic session.</p>
        <p>This term, our educational team has prepared an enriching curriculum focused on foundational literacy, mathematics, scientific inquiry, and holistic co-curricular opportunities.</p>
        <p>Parents are encouraged to review the term calendar, ensure students have required textbooks and learning stationery, and maintain open communication with class teachers.</p>
        <p>We look forward to partnering together to make this term an inspiring journey of learning, discipline, and achievement for every child.</p>
      `
    },
    {
      id: "parent-forum",
      type: "event",
      category: "School Events",
      title: "Parent & Teacher Engagement Day: Strengthening Our Community",
      date: "Upcoming Event Placeholder",
      dateBadge: "COMMUNITY",
      excerpt: "Join us for our termly interactive parent-teacher session to review learner milestones, classroom progress, and collaborative goals for the coming months.",
      image: "img/gateway-hero.jpg",
      content: `
        <p><strong>Note: Demonstration event announcement for prototype review.</strong></p>
        <p>Effective education is built upon a strong partnership between the home and the classroom. Our upcoming Parent & Teacher Engagement Day provides a dedicated space for constructive dialogue.</p>
        <p>Agenda highlights include:</p>
        <ul>
          <li>Review of individual learner strengths and areas for focused support</li>
          <li>Overview of curriculum objectives for Elementary and JHS divisions</li>
          <li>Information on upcoming school activities, field visits, and co-curricular clubs</li>
          <li>Open Q&A with school administration and faculty</li>
        </ul>
        <p>Further scheduling details will be shared through official school channels.</p>
      `
    },
    {
      id: "stem-discovery",
      type: "news",
      category: "Academic Life",
      title: "Elementary & JHS Science Discovery Day",
      date: "Demonstration Date",
      dateBadge: "ACADEMICS",
      excerpt: "Learners showcase simple experiments, biological models, and creative problem-solving projects during our hands-on Science Discovery showcase.",
      image: "img/gateway-activities-2.jpg",
      content: `
        <p><strong>Note: Demonstration news article for prototype review.</strong></p>
        <p>Curiosity is the engine of intellectual growth. During our recent Science Discovery showcase, learners from both our Elementary and JHS classes participated in practical demonstrations.</p>
        <p>Elementary pupils investigated natural plant cycles, basic magnetism, and buoyancy, while JHS learners demonstrated chemical reactions, density principles, and energy conservation models.</p>
        <p>We commend our educators for cultivating an atmosphere where questions are celebrated and answers are uncovered through thoughtful exploration.</p>
      `
    },
    {
      id: "sports-showcase",
      type: "event",
      category: "Sports & Health",
      title: "Inter-House Sports and Physical Education Day",
      date: "Upcoming Event Placeholder",
      dateBadge: "ATHLETICS",
      excerpt: "Promoting physical fitness, teamwork, and healthy sportsmanship through track events, team games, and recreational athletics.",
      image: "img/gateway-activities-3.jpg",
      content: `
        <p><strong>Note: Demonstration event announcement for prototype review.</strong></p>
        <p>Physical education plays an integral role in balanced child development. Our upcoming Inter-House Sports Day offers learners the chance to develop endurance, coordination, and team solidarity.</p>
        <p>Events will cater to all age groups across Elementary and Junior High School, prioritizing participation, sportsmanship, and personal growth.</p>
      `
    }
  ],

  // Community Testimonials (Strictly Labeled Placeholders)
  testimonials: [
    {
      quote: "The environment at Gateway provides the structured guidance and warmth our children needed. The teachers take time to understand each pupil's pace and encourage them daily.",
      author: "Parent Testimonial — Placeholder",
      role: "Parent of Elementary Learner (Sample Feedback)",
      initials: "PE"
    },
    {
      quote: "Watching our learners transition from elementary fundamentals into confident, analytical Junior High School students is deeply rewarding. Communication between school and parents is a true priority.",
      author: "PTA Representative — Placeholder",
      role: "Parent-Teacher Association Sample",
      initials: "PT"
    },
    {
      quote: "The focus on core values like discipline, respect, and hard work creates a calm, focused classroom atmosphere where learners feel motivated to do their best.",
      author: "Parent Testimonial — Placeholder",
      role: "Parent of JHS Learner (Sample Feedback)",
      initials: "PJ"
    }
  ],

  // Frequently Asked Questions (for Admissions Page)
  faqs: [
    {
      q: "What age groups and grade levels does Gateway School Complex serve?",
      a: "Gateway School Complex provides comprehensive schooling from early Elementary levels up through Junior High School (JHS 1 to JHS 3), ensuring a seamless educational pathway for your child."
    },
    {
      q: "What is the admissions procedure for new learners?",
      a: "Our admission process follows 3 straightforward steps: (1) Initial enquiry and school visit, (2) Submission of standard application documents and learner assessment, and (3) Enrollment confirmation and preparation for the academic term."
    },
    {
      q: "What documents are typically required during application?",
      a: "[Placeholder Requirement Details]: Typically includes a completed application form, copy of child's birth certificate, recent passport-sized photographs, previous academic report cards (where applicable), and immunization/medical records."
    },
    {
      q: "Are co-curricular and club activities part of the curriculum?",
      a: "Yes. In addition to rigorous academic subjects, learners are encouraged to participate in sports, debate, creative arts, and science clubs to support holistic physical, intellectual, and social development."
    },
    {
      q: "How can parents communicate with teachers and school leadership?",
      a: "We maintain an active open-door communication policy through termly parent-teacher engagement days, formal consultation appointments, student communication diaries, and official school office contacts."
    }
  ]
};

// Export to window for global browser usage
if (typeof window !== 'undefined') {
  window.SchoolData = SchoolData;
}
