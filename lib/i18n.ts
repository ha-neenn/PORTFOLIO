export type Language = 'en' | 'ar'

export type Project = {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  liveUrl: string
  githubUrl: string
  overview: string
  features: string[]
}

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export type ExperienceItem = {
  role: string
  organization: string
  period: string
  description: string
  highlights: string[]
  tags: string[]
}

export type Dictionary = {
  name: string
  nav: {
    home: string
    about: string
    skills: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    badge: string
    role: string
    tagline: string
    viewProjects: string
    contactMe: string
    downloadCv: string
    scroll: string
    profileAlt: string
    techBadges: {
      react: string
      uiux: string
      frontend: string
    }
  }
  about: {
    heading: string
    lead: string
    body: string
    points: string[]
  }
  skills: {
    heading: string
    subheading: string
    passion: string
    categories: SkillCategory[]
  }
  experience: {
    heading: string
    subheading: string
    items: ExperienceItem[]
  }
  projects: {
    heading: string
    subheading: string
    liveDemo: string
    github: string
    viewDetails: string
    modal: {
      overview: string
      keyFeatures: string
      techStack: string
      visitLive: string
      viewCode: string
      close: string
    }
    items: Project[]
  }
  contact: {
    heading: string
    subheading: string
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
    sent: string
    connect: string
  }
  footer: {
    backToTop: string
    copyright: string
  }
}

export const skillList = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Bootstrap',
  'C++',
  'Git & GitHub',
]

export const translations: Record<Language, Dictionary> = {
  en: {
    name: 'Haneen Abdellatif',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for freelance work & full-time roles',
      role: 'Front-End Web Developer & UI Enthusiast',
      tagline:
        'I craft clean, interactive, and responsive web experiences that feel effortless and look beautiful on every screen.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      downloadCv: 'Download CV',
      scroll: 'Scroll to explore',
      profileAlt: 'Portrait of Haneen Abdellatif - Front-End Web Developer',
      techBadges: {
        react: 'React.js Specialist',
        uiux: 'Clean & Modern UI',
        frontend: 'Responsive Design',
      },
    },
    about: {
      heading: 'About Me',
      lead: 'Turning ideas into polished, user-friendly interfaces.',
      body: 'I am a front-end developer who loves the details — from pixel-perfect layouts to smooth interactions. My focus is on writing clean code and building web experiences that are accessible, fast, and delightful to use.',
      points: [
        'Clean, thoughtful UI design',
        'Interactive web experiences',
        'Creative problem-solving',
      ],
    },
    skills: {
      heading: 'Skills & Technologies',
      subheading: 'A curated toolkit I use to build scalable, high-performance web applications.',
      passion: 'Core Strength',
      categories: [
        {
          title: 'Core Languages',
          description: 'The foundation of modern, resilient web architecture and algorithms.',
          skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'C++'],
        },
        {
          title: 'Frameworks & Libraries',
          description: 'Modern component-driven ecosystems for building dynamic user interfaces.',
          skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
        },
        {
          title: 'Tools & Fundamentals',
          description: 'Engineering workflows, performance standards, and user experience design.',
          skills: [
            'Git & GitHub',
            'Responsive Design',
            'REST APIs',
            'DOM Manipulation',
            'UI/UX Principles',
          ],
        },
      ],
    },
    experience: {
      heading: 'Experience',
      subheading: 'Hands-on front-end engineering training within Egypt\'s leading digital initiative.',
      items: [
        {
          role: 'Front-End Development Trainee',
          organization: 'Digital Egypt Pioneers Initiative (DEPI)',
          period: 'Jul 2026 - Dec 2026',
          description:
            'Comprehensive development track centered on modern front-end architectures and scalable component design.',
          highlights: [
            'Build responsive web interfaces using React.js and modern JavaScript standards.',
            'Implement interactive user interface components following modern web performance and responsive design practices.',
            'Practice clean code, responsive UI implementation, and maintainable front-end development.',
          ],
          tags: ['React.js', 'Modern JavaScript', 'Responsive UI', 'Web Standards'],
        },
      ],
    },
    projects: {
      heading: 'Featured Projects',
      subheading: 'A selection of real-world web applications crafted with precision.',
      liveDemo: 'Live Demo',
      github: 'GitHub',
      viewDetails: 'View Details',
      modal: {
        overview: 'Project Overview',
        keyFeatures: 'Key Technical Features',
        techStack: 'Technologies Used',
        visitLive: 'Open Live Demo',
        viewCode: 'View Source Code',
        close: 'Close',
      },
      items: [
        {
          id: 'sol-and-haven',
          title: 'Sol & Haven Static Restaurant Website',
          category: 'Culinary & Dining Website',
          description:
            'An authentic culinary landing site featuring an earthy cream and warm terracotta palette, artisanal menu displays, and mobile-first design.',
          tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
          image: '/projects/sol-and-haven.png',
          liveUrl: 'https://ha-neenn.github.io/Resturant/',
          githubUrl: 'https://github.com/ha-neenn/Resturant',
          overview:
            'A warm and inviting culinary web presence created for Sol & Haven restaurant. The project emphasizes typography hierarchy, artisanal menu layouts, smooth scrolling transitions, and a seamless mobile dining browsing experience.',
          features: [
            'Warm culinary aesthetic with rich terracotta accents and clean typography hierarchy',
            'Interactive categorized menu display with pricing, ingredients, and dish highlights',
            'Mobile-optimized reservation call-to-action flow with accessible touch targets',
            'Fast static asset loading and semantic HTML5 structure with zero bloat',
          ],
        },
        {
          id: 'glowik-dashboard',
          title: 'Glowik Beauty Admin Dashboard',
          category: 'E-Commerce Admin Dashboard',
          description:
            'A modern cosmetics e-commerce management panel designed in a soft pastel aesthetic, presenting sales analytics, inventory tracking, and orders.',
          tags: ['React', 'Tailwind CSS', 'Admin UI', 'Dashboard'],
          image: '/projects/glowik-dashboard.png',
          liveUrl: 'https://ha-neenn.github.io/glowik-dashboard./',
          githubUrl: 'https://github.com/ha-neenn/glowik-dashboard.',
          overview:
            'Glowik Beauty Admin Dashboard provides cosmetics store managers with an intuitive, visually pleasant portal to track vital business metrics. Features revenue data visualizations, order statuses, product catalog tables, and responsive drawer navigation.',
          features: [
            'Soft pastel pink design system tailored specifically for beauty & cosmetics retail',
            'Sales analytics cards with revenue statistics and real-time order tracking',
            'Inventory and product catalog management interface with quick category filters',
            'Responsive sidebar navigation with seamless desktop and mobile viewports',
          ],
        },
        {
          id: 'digital-agency',
          title: 'Digital Agency Landing Page',
          category: 'Agency & Creative Studio',
          description:
            'A bold, modern marketing layout for an innovative digital agency, featuring high-impact hero typography, case study showcases, and consultation CTAs.',
          tags: ['HTML5', 'CSS3', 'JavaScript', 'Modern UI'],
          image: '/projects/digital-agency.png',
          liveUrl: 'https://ha-neenn.github.io/digital-agency/',
          githubUrl: 'https://github.com/ha-neenn/digital-agency',
          overview:
            'Designed to help creative agencies convert visitors into high-value clients, this landing page blends bold editorial typography with spacious layouts, dynamic project previews, and an accessible contact funnel.',
          features: [
            'Editorial typography layout with dynamic responsive scaling across all screen sizes',
            'Modular service blocks highlighting branding, web design, and digital marketing capabilities',
            'Featured case study cards with interactive hover previews and sleek transitions',
            'High-conversion consultation schedule and lead capture call-to-actions',
          ],
        },
      ],
    },
    contact: {
      heading: 'Get In Touch',
      subheading:
        'Have a project in mind, an opportunity, or just want to connect? Send me a message.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
      sent: 'Thanks! Your message has been sent.',
      connect: 'Or reach me directly on',
    },
    footer: {
      backToTop: 'Back to Top ↑',
      copyright: '© 2026 Haneen Abdellatif. Built with care.',
    },
  },
  ar: {
    name: 'حنين عبداللطيف',
    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      skills: 'المهارات',
      experience: 'الخبرات',
      projects: 'المشاريع',
      contact: 'تواصل',
    },
    hero: {
      badge: 'متاحة للعمل الحر وفرص العمل بدوام كامل',
      role: 'مطوّرة واجهات أمامية وشغوفة بتصميم الواجهات',
      tagline:
        'أصمّم تجارب ويب نظيفة وتفاعلية ومتجاوبة، تبدو أنيقة وسلسة على كل الشاشات وتوفر أداءً استثنائياً.',
      viewProjects: 'عرض المشاريع',
      contactMe: 'تواصل معي',
      downloadCv: 'تحميل السيرة الذاتية',
      scroll: 'مرّر للأسفل للاستكشاف',
      profileAlt: 'صورة شخصية لحنين عبداللطيف - مطورة واجهات أمامية',
      techBadges: {
        react: 'متخصصة React.js',
        uiux: 'تصميم واجهات أنيق',
        frontend: 'تصميم متجاوب وسريع',
      },
    },
    about: {
      heading: 'نبذة عني',
      lead: 'أحوّل الأفكار إلى واجهات أنيقة وسهلة الاستخدام.',
      body: 'أنا مطوّرة واجهات أمامية أحب التفاصيل — من التخطيطات الدقيقة إلى التفاعلات السلسة. أركّز على كتابة كود نظيف وبناء تجارب ويب سريعة وسهلة الوصول وممتعة في الاستخدام.',
      points: [
        'تصميم واجهات نظيف ومدروس',
        'تجارب ويب تفاعلية وسريعة',
        'حلّ المشكلات البرمجية بإبداع',
      ],
    },
    skills: {
      heading: 'المهارات والتقنيات',
      subheading: 'الأدوات والتقنيات التي أعتمد عليها في بناء تطبيقات ويب عصرية وعالية الأداء.',
      passion: 'نقطة قوة أساسية',
      categories: [
        {
          title: 'اللغات الأساسية',
          description: 'الأساس المتين لبناء بنية ويب قوية وخوارزميات برمجية نظيفة.',
          skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'C++'],
        },
        {
          title: 'أطر العمل والمكتبات',
          description: 'منظومات برمجية قائمة على المكونات لبناء واجهات مستخدم تفاعلية وسلسة.',
          skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
        },
        {
          title: 'الأدوات والمفاهيم الهندسية',
          description: 'سير عمل التطوير، ومعايير أداء الويب، ومبادئ تجربة المستخدم الحديثة.',
          skills: [
            'Git & GitHub',
            'التصميم المتجاوب',
            'واجهات REST APIs',
            'التحكم في الـ DOM',
            'مبادئ UI/UX',
          ],
        },
      ],
    },
    experience: {
      heading: 'الخبرات',
      subheading: 'تدريب عملي في مجال هندسة الواجهات الأمامية ضمن مبادرة مصر الرقمية.',
      items: [
        {
          role: 'متدربة تطوير واجهات أمامية',
          organization: 'مبادرة رواد مصر الرقمية (DEPI)',
          period: 'يوليو 2026 - ديسمبر 2026',
          description:
            'مسار تدريبي شامل يركز على معمارية الواجهات الحديثة وبناء تطبيقات قائمة على المكونات القابلة للتوسع.',
          highlights: [
            'بناء واجهات ويب متجاوبة وسريعة باستخدام React.js ومعايير جافاسكريبت الحديثة.',
            'تنفيذ مكونات واجهات تفاعلية وفق أفضل معايير أداء الويب والتصميم المتجاوب.',
            'الالتزام بكتابة كود نظيف وسهل الصيانة وهيكلة معمارية واضحة للواجهات الأمامية.',
          ],
          tags: ['React.js', 'جافاسكريبت الحديثة', 'تصميم متجاوب', 'معايير الويب'],
        },
      ],
    },
    projects: {
      heading: 'مشاريع مختارة',
      subheading: 'مجموعة من التطبيقات الحقيقية التي قمت بتصميمها وتطويرها بدقة.',
      liveDemo: 'معاينة مباشرة',
      github: 'جيت هاب',
      viewDetails: 'تفاصيل المشروع',
      modal: {
        overview: 'نظرة عامة على المشروع',
        keyFeatures: 'أبرز الميزات التقنية',
        techStack: 'التقنيات المستخدمة',
        visitLive: 'فتح الموقع المباشر',
        viewCode: 'عرض الكود المصدري',
        close: 'إغلاق',
      },
      items: [
        {
          id: 'sol-and-haven',
          title: 'موقع مطعم Sol & Haven',
          category: 'موقع مطعم وتجربة طعام',
          description:
            'موقع أنيق لمطعم Sol & Haven بتدرجات دافئة من اللون البني والكريمي، يضم قوائم طعام تفاعلية، وقسم للحجوزات، وتصميماً متجاوباً بالكامل.',
          tags: ['HTML5', 'CSS3', 'JavaScript', 'تصميم متجاوب'],
          image: '/projects/sol-and-haven.png',
          liveUrl: 'https://ha-neenn.github.io/Resturant/',
          githubUrl: 'https://github.com/ha-neenn/Resturant',
          overview:
            'تجربة ويب راقية مصممة لمطعم Sol & Haven تركز على التناسق البصري والألوان الدافئة، مع عرض جذاب لقوائم الطعام وتجربة تصفح سلسة ومريحة للزوار على مختلف الأجهزة.',
          features: [
            'هوية بصرية دافئة مستوحاة من ألوان الأرض وتدرجات الطين الدافئة مع تايبوجرافي أنيق',
            'عرض تفاعلي لأصناف القائمة مصنفة مع الأسعار والمكونات ومميزات الأطباق',
            'واجهة حجز سهلة وسريعة الاستخدام عبر الهواتف الذكية مع استجابة فورية',
            'بنية كود سريعة وسيمانتك متوافقة مع أحدث معايير الويب ومحركات البحث',
          ],
        },
        {
          id: 'glowik-dashboard',
          title: 'لوحة تحكم متجر Glowik لمستحضرات التجميل',
          category: 'لوحة تحكم متجر إلكتروني',
          description:
            'لوحة تحكم عصرية لإدارة متجر مستحضرات تجميل بتصميم وردي ناعم، تتيح مراقبة المبيعات، وتتبع الطلبات، وإدارة المنتجات والمخزون.',
          tags: ['React', 'Tailwind CSS', 'واجهات إدارية', 'لوحة تحكم'],
          image: '/projects/glowik-dashboard.png',
          liveUrl: 'https://ha-neenn.github.io/glowik-dashboard./',
          githubUrl: 'https://github.com/ha-neenn/glowik-dashboard.',
          overview:
            'توفر لوحة تحكم Glowik تجربة استخدام سهلة لإدارة المتاجر الإلكترونية مع رسوم بيانية تفاعلية للمبيعات، وجداول متقدمة لتتبع المخزون والطلبات وإحصائيات الأداء في الوقت الفعلي.',
          features: [
            'نظام تصميم وردي ناعم مخصص لقطاع التجميل والمستحضرات العصرية',
            'رسوم بيانية توضح تحليلات المبيعات والإيرادات وحالات الطلبات المختلفة',
            'واجهة لإدارة المخزون والمنتجات مع إمكانية الفلترة السريعة والبحث المتقدم',
            'شريط جانبي متجاوب وتصميم مرن يعمل بسلاسة على شاشات الحواسيب والأجهزة اللوحية',
          ],
        },
        {
          id: 'digital-agency',
          title: 'موقع وكالة رقمية إبداعية',
          category: 'موقع استوديو رقمي وتسويق',
          description:
            'صفحة هبوط تسويقية حديثة لوكالة رقمية إبداعية، تتميز بعناوين جريئة، وعرض جذاب لدراسات الحالة، واستعراض للخدمات مع أزرار طلب استشارة.',
          tags: ['HTML5', 'CSS3', 'JavaScript', 'تصميم عصري'],
          image: '/projects/digital-agency.png',
          liveUrl: 'https://ha-neenn.github.io/digital-agency/',
          githubUrl: 'https://github.com/ha-neenn/digital-agency',
          overview:
            'صُممت هذه الصفحة لمساعدة الوكالات الإبداعية على جذب العملاء، حيث تدمج بين التايبوجرافي المميز والمساحات البيضاء المريحة مع استعراض سلس للأعمال ودعوات واضحة لاتخاذ إجراء.',
          features: [
            'تايبوجرافي جريء ومتناسق يتكيف بسلاسة مع مختلف مقاسات الشاشات',
            'أقسام خدمات تفاعلية تعرض قدرات الوكالة في الهوية البصرية وتصميم الويب والتسويق',
            'بطاقات مميزة لدراسات الحالة مع تأثيرات تفاعلية ناعمة عند التمرير',
            'مسار تواصل مصمم لزيادة معدل التحويل وتسهيل حجز الاستشارات الفورية',
          ],
        },
      ],
    },
    contact: {
      heading: 'تواصل معي',
      subheading: 'لديك فكرة مشروع، أو فرصة عمل، أو ترغب في التواصل المباشر؟ أرسل لي رسالة.',
      name: 'الاسم',
      namePlaceholder: 'اسمك الكريم',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'you@example.com',
      message: 'الرسالة',
      messagePlaceholder: 'أخبرني عن مشروعك أو استفسارك...',
      send: 'إرسال الرسالة',
      sent: 'شكراً! تم استلام رسالتك بنجاح.',
      connect: 'أو تواصل معي مباشرة عبر',
    },
    footer: {
      backToTop: 'العودة للأعلى ↑',
      copyright: '© 2026 حنين عبداللطيف. صُمّم وبُني بعناية.',
    },
  },
}
