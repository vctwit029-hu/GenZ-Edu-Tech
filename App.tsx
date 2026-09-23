import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Compass,
  ExternalLink,
  Globe2,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Target,
  X,
} from 'lucide-react';

import './index.css';

const logoPath = '/assets/genz-logo.png';
const founderPath = '/assets/founder-megadharshini.png';

const enquiryLink = (courseName: string) =>
  `https://wa.me/916369216076?text=${encodeURIComponent(
    `Hello GenZ Edu Tech, I would like to enquire about the ${courseName} course.`,
  )}`;

const navItems = [
  ['About', '#about'],
  ['Courses', '#courses'],
  ['Why Us', '#why-us'],
  ['GenZ Developers', '#developers'],
  ['Testimonials', '#testimonials'],
  ['Founder', '#founder'],
  ['Contact', '#contact'],
];

const courses = [
  {
    number: '01',
    name: 'Digital Marketing',
    description:
      'Build a working foundation in campaigns, content and the digital customer journey.',
    meta: 'Reduced practical duration',
    syllabus: [
      'Digital marketing fundamentals',
      'Audience research and customer journeys',
      'Content and campaign planning',
      'Search and social media basics',
      'Campaign measurement and reporting',
    ],
  },
  {
    number: '02',
    name: 'Social Media Management',
    description:
      'Learn to plan, create and manage social content with a professional workflow.',
    meta: 'Reduced practical duration',
    syllabus: [
      'Platform and audience selection',
      'Content pillars and calendar planning',
      'Captions, creatives and brand voice',
      'Publishing and community management',
      'Insights, reporting and improvement',
    ],
  },
  {
    number: '03',
    name: 'Content Writing',
    description:
      'Find your voice, write for real audiences and create a portfolio you can share.',
    meta: 'Reduced practical duration',
    syllabus: [
      'Writing foundations and research',
      'Headlines, hooks and content structure',
      'Website, blog and social copy',
      'Editing, clarity and proofreading',
      'Portfolio-ready writing samples',
    ],
  },
  {
    number: '04',
    name: 'AI Courses',
    description:
      'Use modern AI tools thoughtfully to research, create and work with more clarity.',
    meta: 'Reduced practical duration',
    syllabus: [
      'AI basics and responsible use',
      'Prompt structure and iteration',
      'Research, summarising and ideation',
      'Content workflows with AI tools',
      'Reviewing accuracy and improving outputs',
    ],
  },
  {
    number: '05',
    name: 'Freelancing',
    description:
      'Understand profiles, proposals, practical experience and the rhythm of independent work.',
    meta: 'Reduced practical duration',
    syllabus: [
      'How freelancing works',
      'Choosing a useful skill and niche',
      'Profile and portfolio foundations',
      'Finding opportunities and writing proposals',
      'Client communication and work habits',
    ],
  },
  {
    number: '06',
    name: 'Python',
    description:
      'Move from first syntax to useful programming practice through small, guided builds.',
    meta: 'Reduced practical duration',
    syllabus: [
      'Python setup and syntax',
      'Variables, data types and operators',
      'Conditions, loops and functions',
      'Lists, dictionaries and file handling',
      'Small practical programs and debugging',
    ],
  },
  {
    number: '07',
    name: 'Java',
    description:
      'Strengthen programming fundamentals with a clear, application-led learning path.',
    meta: 'Reduced practical duration',
    syllabus: [
      'Java setup and program structure',
      'Variables, data types and control flow',
      'Methods, arrays and strings',
      'Object-oriented programming basics',
      'Practice problems and mini applications',
    ],
  },
  {
    number: '08',
    name: 'HTML & CSS',
    description:
      'Create responsive web pages and understand the building blocks of the web.',
    meta: 'Reduced practical duration',
    syllabus: [
      'HTML document structure and semantics',
      'Links, images, forms and accessible markup',
      'CSS selectors, spacing and typography',
      'Flexbox, grid and responsive layouts',
      'Build and publish a multi-section webpage',
    ],
  },
  {
    number: '09',
    name: 'Aptitude',
    description:
      'Build the speed, accuracy and confidence needed for assessments and interviews.',
    meta: 'Reduced practical duration',
    syllabus: [
      'Number systems and basic arithmetic',
      'Percentages, ratios and averages',
      'Time, work, speed and distance',
      'Data interpretation and logical reasoning',
      'Timed practice and test strategy',
    ],
  },
  {
    number: '10',
    name: 'Verbal Ability',
    description:
      'Improve communication for applications, interviews and the workplace.',
    meta: 'Reduced practical duration',
    syllabus: [
      'Grammar and sentence correction',
      'Vocabulary and contextual usage',
      'Reading comprehension',
      'Paragraph organisation and verbal reasoning',
      'Interview and workplace communication practice',
    ],
  },
  {
    number: '11',
    name: 'Placement Training',
    description:
      'Prepare with structure through practical guidance, practice and feedback.',
    meta: 'Placement guidance',
    syllabus: [
      'Resume and professional profile basics',
      'Aptitude and verbal practice',
      'Technical and role-based preparation',
      'Interview questions and mock practice',
      'Communication, confidence and next steps',
    ],
  },
  {
    number: '12',
    name: 'Career Awareness',
    description:
      'Explore future work possibilities and make more informed next steps.',
    meta: 'Guided conversations',
    syllabus: [
      'Understanding career and skill pathways',
      'Exploring digital and technology roles',
      'Freelancing and future work possibilities',
      'Identifying strengths and learning gaps',
      'Creating a practical next-step plan',
    ],
  },
];

const impactItems = [
  'Conducted 20 free drug awareness programs.',
  'Provided career guidance to school dropout students.',
  'Guided many college students regarding freelancing and future career opportunities.',
  'Built a community of 6000+ people.',
  'Helped people understand possible future work opportunities and practical career paths.',
  'Encouraged students and aspiring professionals to explore freelancing and skill-based careers.',
];

const principles = [
  'Practical-first learning',
  'Career-oriented guidance',
  'Freelancing guidance',
  'Beginner-friendly training',
  'Tamil + English learning support where applicable',
  'Certificate',
  'Real-world practice',
  'Community support',
  'Future-focused skills',
  'Accessible learning',
];

const freelancePoints = [
  'How freelancing works',
  'How to identify useful skills',
  'How to build practical experience',
  'How to approach opportunities',
  'How to develop a professional profile',
  'How to understand future work possibilities',
];

const processSteps = [
  ['01', 'Understand Your Business'],
  ['02', 'Plan Your Website'],
  ['03', 'Design the Experience'],
  ['04', 'Build & Optimize'],
  ['05', 'Launch'],
  ['06', 'Maintain & Support'],
];

const firstNames = [
  'Aarav',
  'Aadhya',
  'Abhinav',
  'Aditya',
  'Aishwarya',
  'Akash',
  'Amritha',
  'Ananya',
  'Arjun',
  'Bhavya',
  'Charan',
  'Deepak',
  'Dhivya',
  'Gaurav',
  'Harini',
  'Ishaan',
  'Jahnavi',
  'Karthik',
  'Keerthana',
  'Lavanya',
  'Manish',
  'Meera',
  'Nandhini',
  'Naveen',
  'Pooja',
];

const lastNames = [
  'Sharma',
  'Kumar',
  'Reddy',
  'Iyer',
  'Patel',
  'Nair',
  'Singh',
  'Verma',
  'Rao',
  'Pillai',
];

const testimonialCategories = [
  'All',
  'Learning',
  'Career',
  'Freelancing',
  'Technology',
  'Community',
];

const testimonialThemes = [
  'The first session helped me replace vague interest with a simple plan I could act on.',
  'I finally understood how to connect a skill to a real piece of work, not just another certificate.',
  'The guidance around careers felt honest; it gave me options without pretending there is one perfect route.',
  'What stayed with me was the patience given to beginner questions and the clarity of every explanation.',
  'I used the practice tasks to start a small portfolio and now I know what to improve next.',
  'The community made learning feel less lonely, especially when I was unsure where to begin.',
  'I came in looking for direction and left with a weekly routine that feels realistic for my schedule.',
  'The examples were close to real work, so the concepts became much easier to remember and use.',
  'I appreciate that the sessions talk about effort and opportunity with equal honesty.',
  'There is a thoughtful balance between learning a concept, trying it, and discussing what happened.',
];

const testimonialEndings = [
  'It was a useful turning point for me.',
  'I would recommend the approach to a curious beginner.',
  'That practical shift has made a real difference in my confidence.',
  'The next step feels much clearer now.',
  'I am still learning, but I no longer feel stuck.',
  'It gave me momentum without pressure.',
  'The advice was specific enough to use immediately.',
  'I found the experience grounded and encouraging.',
  'It felt like guidance from people who understand the starting point.',
  'This is learning I can carry into my next opportunity.',
];

const testimonials = Array.from({ length: 250 }, (_, index) => {
  const first = firstNames[index % firstNames.length];
  const last = lastNames[Math.floor(index / firstNames.length)];
  const themeIndex = index % testimonialThemes.length;
  const endingIndex = Math.floor(index / testimonialThemes.length) % testimonialEndings.length;
  const category =
    ['Learning', 'Career', 'Freelancing', 'Technology', 'Community'][
      index % 5
    ];

  return {
    id: index + 1,
    name: `${first} ${last}`,
    category,
    text: `${testimonialThemes[themeIndex]} ${testimonialEndings[endingIndex]}`,
  };
});

function Logo({ size = 'normal' }: { size?: 'normal' | 'large' }) {
  return (
    <span className={`logo-circle ${size === 'large' ? 'logo-large' : ''}`}>
      <img src={logoPath} alt="GenZ Edu Tech circular logo" />
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-nav">
      <nav
        className="site-container nav-inner"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="brand"
          data-testid="link-brand"
          onClick={closeMenu}
        >
          <Logo />
          <span>
            <strong>GenZ Edu Tech</strong>
            <small>Practical. Future-ready.</small>
          </span>
        </a>

        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              data-testid={`link-nav-${label
                .toLowerCase()
                .replaceAll(' ', '-')}`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn btn-primary nav-cta"
          data-testid="link-nav-talk"
        >
          Talk to Us <ArrowDownRight size={15} />
        </a>

        <button
          className="mobile-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          data-testid="button-mobile-menu"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        {open && (
          <div className="mobile-menu">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                data-testid={`link-mobile-${label
                  .toLowerCase()
                  .replaceAll(' ', '-')}`}
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className="btn btn-primary"
              onClick={closeMenu}
              data-testid="link-mobile-talk"
            >
              Talk to Us <ArrowDownRight size={15} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow reveal">
            Education with a point of view
          </div>

          <h1 className="reveal delay-1">
            Learn practically.
            <br />
            <span>Build confidently.</span>
            <br />
            Grow globally.
          </h1>

          <p className="reveal delay-2">
            GenZ Edu Tech helps students, professionals and aspiring
            freelancers build practical skills in digital marketing,
            programming, AI, freelancing, career development and placement
            preparation.
          </p>

          <div className="hero-actions reveal delay-2">
            <a
              href="#courses"
              className="btn btn-primary"
              data-testid="link-hero-explore"
            >
              Explore Courses <ArrowDownRight size={16} />
            </a>

            <a
              href="#contact"
              className="btn btn-ghost"
              data-testid="link-hero-talk"
            >
              Talk to Us
            </a>
          </div>

          <div className="trust-strip reveal delay-3">
            <span>Practical Learning</span>
            <span>Freelancing</span>
            <span>Career Guidance</span>
            <span>Digital Skills</span>
          </div>
        </div>

        <div
          className="hero-visual reveal delay-2"
          aria-label="GenZ Edu Tech learning areas"
        >
          <div className="orbit-card float">
            <span className="visual-word">A clearer way forward</span>

            <div className="visual-core">
              <div className="visual-core-mark">
                <img src={logoPath} alt="GenZ Edu Tech logo" />
              </div>
            </div>

            <div className="orbit-chip chip-one">
              <Code2 size={15} /> Build
            </div>

            <div className="orbit-chip chip-two">
              <Compass size={15} /> Explore
            </div>

            <div className="orbit-chip chip-three">
              <Globe2 size={15} /> Grow
            </div>

            <div className="orbit-chip chip-four">
              <Sparkles size={15} /> Practice
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">Scroll to explore</div>
    </section>
  );
}

function Philosophy() {
  return (
    <section
      className="dark-section philosophy"
      aria-labelledby="philosophy-heading"
    >
      <div className="site-container philosophy-grid">
        <div>
          <div className="quote-mark">“</div>
          <div className="eyebrow">Our learning philosophy</div>
        </div>

        <div>
          <h2 id="philosophy-heading">
            If a person tries to learn by looking at a book, it will take a
            very long time. But if they do the work{' '}
            <span>practically</span>, they will learn it immediately.
          </h2>

          <p>
            At GenZ Edu Tech, we believe skills become powerful when you
            actually use them. Our approach focuses on practical learning,
            real-world tasks, guided practice and career-oriented skills.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
    >
      <div className="site-container about-grid">
        <div className="about-copy">
          <div className="section-heading">
            <div className="eyebrow">The work behind the name</div>

            <h2 id="about-heading">
              Skills that make the future feel less abstract.
            </h2>
          </div>

          <p>
            <p>
  GenZ Edu Tech provides practical training in digital marketing,
  programming, AI, freelancing, career development and placement
  preparation. We help students, professionals and aspiring freelancers
  develop job-ready skills, explore career opportunities and gain
  practical experience for the digital world.
</p>
          </p>

          <a
            href="#courses"
            className="btn btn-gold"
            data-testid="link-about-courses"
          >
            See learning paths <ArrowRight size={16} />
          </a>
        </div>

        <div className="impact-list" aria-label="Our impact">
          {impactItems.map((item, index) => (
            <div className="impact-item" key={item}>
              <b>0{index + 1}</b>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="site-container stats-row">
        <div className="stat" data-testid="stat-community">
          <strong>6000+</strong>
          <span>Community</span>
        </div>

        <div className="stat" data-testid="stat-programs">
          <strong>20+</strong>
          <span>Free Awareness Programs</span>
        </div>

        <div className="stat" data-testid="stat-experiences">
          <strong>250+</strong>
          <span>Student Experiences</span>
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section
      id="founder"
      className="section founder-section"
      aria-labelledby="founder-heading"
    >
      <div className="site-container founder-grid">
        <div className="portrait-frame">
          <img
            src={founderPath}
            alt="Megadharshini Kandhan, Founder of GenZ Edu Tech"
            loading="lazy"
          />

          <div className="portrait-caption">Founder & entrepreneur</div>
        </div>

        <div className="founder-copy">
          <div className="eyebrow">Meet the founder</div>

          <h2 id="founder-heading">
            A practical education initiative, built close to the community.
          </h2>

          <p>
            Megadharshini Kandhan is the founder of GenZ Edu Tech, an
            initiative focused on practical education, digital skills,
            freelancing guidance and career awareness.
          </p>

          <p>
            Her work includes conducting free drug awareness programs,
            providing career guidance to school dropout students, guiding
            college students interested in freelancing, and building a
            community of 6000+ people interested in learning, career
            development and future work opportunities.
          </p>

          <div className="signature">
            Megadharshini Kandhan
            <small>Founder & Entrepreneur, GenZ Edu Tech</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section
      id="courses"
      className="section"
      aria-labelledby="courses-heading"
    >
      <div className="site-container">
        <div className="course-intro">
          <div className="section-heading">
            <div className="eyebrow">Learning paths</div>

            <h2 id="courses-heading">
              Learn less theory.
              <br />
              <span style={{ color: 'hsl(var(--accent))' }}>Do more.</span>
            </h2>
          </div>

          <p className="side-note">
            Shorter, practical durations. Each path is built around exposure,
            practice and useful next steps. Fees remain available through our
            counselling team.
          </p>
        </div>

        <div className="course-list">
          {courses.map(
            ({ number, name, description, meta, syllabus }) => (
              <article
                className="course-card"
                key={name}
                data-testid={`card-course-${number}`}
              >
                <span className="course-number">{number}</span>

                <h3>{name}</h3>

                <p>{description}</p>

                <details className="course-syllabus">
                  <summary>
                    <span>View syllabus</span>
                    <ChevronDown size={15} aria-hidden="true" />
                  </summary>

                  <ul>
                    {syllabus.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </details>

                <div className="course-meta">
                  <b>{meta}</b>
                  <span>Fee on request · Certificate</span>
                </div>

                <a
                  href={enquiryLink(name)}
                  className="course-enquiry"
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`link-course-enquiry-${number}`}
                >
                  Enquire about this course <ArrowRight size={14} />
                </a>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section
      id="why-us"
      className="section why-section"
      aria-labelledby="why-heading"
    >
      <div className="site-container why-grid">
        <div className="section-heading">
          <div className="eyebrow">Why GenZ Edu Tech?</div>

          <h2 id="why-heading">
            A little less noise. A lot more direction.
          </h2>

          <p>
            Learning should feel accessible, considered and connected to the
            world you want to enter.
          </p>
        </div>

        <div className="principles">
          {principles.map((principle) => (
            <div className="principle" key={principle}>
              <Check size={18} />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Freelancing() {
  return (
    <section
      className="dark-section section"
      aria-labelledby="freelancing-heading"
    >
      <div className="site-container freelance-banner">
        <div>
          <div className="eyebrow">A more independent path</div>

          <h2 id="freelancing-heading">
            Turn skills into{' '}
            <span style={{ color: 'hsl(var(--accent))' }}>
              opportunities.
            </span>
          </h2>

          <p>
            GenZ Edu Tech helps learners understand the steps between learning
            a skill and approaching the world of work. No guaranteed income
            claims — just clearer practice, better questions and a
            professional starting point.
          </p>

          <a
            href="#contact"
            className="btn btn-gold"
            data-testid="link-freelance-start"
          >
            Start Your Learning Journey <ArrowDownRight size={16} />
          </a>
        </div>

        <div className="freelance-points">
          {freelancePoints.map((point) => (
            <div key={point}>
              <Target size={16} />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Developers() {
  const packages: Array<[string, string, string[]]> = [
    [
      'LANDING PAGE',
      '₹5,000',
      [
        'Single-page website',
        'Mobile-friendly design',
        'Professional layout',
      ],
    ],
    [
      'BASIC BUSINESS',
      '₹10,000',
      [
        '4–5 professional pages',
        'Mobile responsive',
        'Contact form included',
      ],
    ],
    [
      'PROFESSIONAL',
      '₹20,000',
      [
        'Premium UI/UX design',
        'Advanced features',
        'Fully responsive',
      ],
    ],
  ];

  return (
    <section
      id="developers"
      className="section developers"
      aria-labelledby="developers-heading"
    >
      <div className="site-container">
        <div className="dev-head">
          <div className="section-heading">
            <div className="eyebrow">GenZ Developers</div>

            <h2 id="developers-heading">
              Need a website for your business?
            </h2>
          </div>

          <p>
            GenZ Developers creates modern, professional and mobile-friendly
            websites designed to help businesses build a strong online
            presence.
          </p>
        </div>

        <div className="dev-pricing">
          {packages.map(([name, price, features], index) => (
            <article
              className={`price-card ${index === 1 ? 'featured' : ''}`}
              key={name}
              data-testid={`card-package-${name
                .toLowerCase()
                .replaceAll(' ', '-')}`}
            >
              {index === 1 && (
                <span className="popular">Most requested</span>
              )}

              <h3>{name}</h3>

              <div className="price">{price}</div>

              <ul>
                {features.map((feature) => (
                  <li key={feature}>
                    <Check size={14} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`btn ${
                  index === 1 ? 'btn-gold' : 'btn-primary'
                }`}
                data-testid={`link-package-${name
                  .toLowerCase()
                  .replaceAll(' ', '-')}`}
              >
                Discuss this package <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <p className="dev-note">
          All packages include free consultation, custom design & fast
          delivery.
        </p>

        <div className="services-row">
          <article className="service-panel">
            <h3>E-COMMERCE WEBSITE</h3>

            <div className="service-price">₹15,000 – ₹40,000+</div>

            <ul>
              <li>Online store setup</li>
              <li>Product showcase</li>
              <li>Shopping cart</li>
              <li>Professional e-commerce design</li>
            </ul>
          </article>

          <article className="service-panel light">
            <h3>Keep Your Website Fresh & Running</h3>

            <div className="service-price">
              ₹1,000 – ₹3,000 / Month
            </div>

            <ul>
              <li>Regular website updates</li>
              <li>Content changes</li>
              <li>Basic technical support</li>
              <li>Performance monitoring</li>
            </ul>

            <p
              style={{
                marginTop: 22,
                fontSize: '.78rem',
                color: 'hsl(var(--muted-foreground))',
              }}
            >
              An affordable option for small businesses.
            </p>
          </article>
        </div>

        <div className="process">
          <h3>
            From first conversation to a site that earns its place.
          </h3>

          <div className="process-list">
            {processSteps.map(([number, label]) => (
              <div className="process-step" key={number}>
                <b>{number}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SmallBusiness() {
  return (
    <section
      className="section"
      aria-labelledby="small-business-heading"
    >
      <div className="site-container freelance-banner">
        <div>
          <div className="eyebrow">For the people building locally</div>

          <h2 id="small-business-heading">
            Professional websites.{' '}
            <span style={{ color: 'hsl(var(--accent))' }}>
              Affordable
            </span>{' '}
            for small businesses.
          </h2>
        </div>

        <div>
          <p>
            We believe small businesses should not need a huge budget to
            build a professional digital presence.
          </p>

          <p
            style={{
              color: 'hsl(var(--muted-foreground))',
              fontSize: '.9rem',
            }}
          >
            Affordable solutions for small businesses, local businesses,
            freelancers, personal brands, startups, shops, service providers
            and professionals.
          </p>

          <a
            href="#contact"
            className="btn btn-primary"
            data-testid="link-build-website"
          >
            Build My Website <ArrowDownRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(0);

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? testimonials
        : testimonials.filter(
            (testimonial) => testimonial.category === filter,
          ),
    [filter],
  );

  const pageCount = Math.ceil(filtered.length / 2);

  const shown = [
    filtered[(page * 2) % filtered.length],
    filtered[(page * 2 + 1) % filtered.length],
  ];

  useEffect(() => {
    const timer = window.setInterval(
      () => setPage((current) => (current + 1) % pageCount),
      6500,
    );

    return () => window.clearInterval(timer);
  }, [pageCount]);

  const changeFilter = (value: string) => {
    setFilter(value);
    setPage(0);
  };

  const changePage = (direction: number) =>
    setPage(
      (current) => (current + direction + pageCount) % pageCount,
    );

  return (
    <section
      id="testimonials"
      className="section testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="site-container">
        <div className="testimonial-top">
          <div className="section-heading">
            <div className="eyebrow">Student voices</div>

            <h2 id="testimonials-heading">
              Small shifts. Real momentum.
            </h2>
          </div>

          <p>
            Explore sample student feedback across learning, careers,
            technology and community. These are presented as sample feedback
            where verified reviews have not been supplied.
          </p>
        </div>

        <div
          className="filters"
          role="tablist"
          aria-label="Testimonial categories"
        >
          {testimonialCategories.map((value) => (
            <button
              key={value}
              className={`filter ${
                filter === value ? 'active' : ''
              }`}
              onClick={() => changeFilter(value)}
              role="tab"
              aria-selected={filter === value}
              data-testid={`button-testimonial-filter-${value.toLowerCase()}`}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="testimonial-stage" aria-live="polite">
          {shown.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.id}
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <div className="stars" aria-label="Sample feedback">
                ★★★★★
              </div>

              <blockquote>“{testimonial.text}”</blockquote>

              <div className="testimonial-author">
                <b>{testimonial.name}</b>
                <span>
                  {testimonial.category} · Sample feedback
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="slider-controls">
          <small data-testid="text-testimonial-pagination">
            Showing {page * 2 + 1}–
            {Math.min(page * 2 + 2, filtered.length)} of{' '}
            {filtered.length} sample entries
          </small>

          <div style={{ display: 'flex', gap: 9 }}>
            <button
              className="arrow-btn"
              onClick={() => changePage(-1)}
              aria-label="Previous testimonials"
              data-testid="button-testimonial-previous"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              className="arrow-btn"
              onClick={() => changePage(1)}
              aria-label="Next testimonials"
              data-testid="button-testimonial-next"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section
      className="section community"
      aria-labelledby="community-heading"
    >
      <div className="site-container">
        <div className="eyebrow">You do not have to build alone</div>

        <h2 id="community-heading" className="section-heading">
          Join a community of 6000+ people.
        </h2>

        <p>
          Learning becomes more powerful when you learn with people who are
          building their future alongside you.
        </p>

        <div className="community-stat" data-testid="text-community-count">
          <strong>6000+</strong>
          <span>Community</span>
        </div>

        <a
          href="#contact"
          className="btn btn-primary"
          data-testid="link-community-connect"
        >
          Connect With Us <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <div className="site-container contact-grid">
        <div className="contact-copy">
          <div className="eyebrow">Start a conversation</div>

          <h2 id="contact-heading" className="section-heading">
            Your next practical step can start here.
          </h2>

          <p>
            Tell us what you are learning, building or trying to understand.
            We will point you toward the right place to begin.
          </p>

          <div className="contact-details">
            <a
              href="tel:6369216076"
              data-testid="link-contact-call"
            >
              <Phone size={17} />
              6369216076
            </a>

            <a
              href="mailto:megakandhan0@gmail.com"
              data-testid="link-contact-email"
            >
              <Mail size={17} />
              megakandhan0@gmail.com
            </a>

            <a
              href="https://instagram.com/genz_edu_tech"
              target="_blank"
              rel="noreferrer"
              data-testid="link-contact-instagram"
            >
              <Instagram size={17} />
              @genz_edu_tech <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <div className="eyebrow">GenZ Edu Tech</div>

          <h3>Let’s find the useful next step.</h3>

          <p>
            No backend forms. Just direct, human contact through the channel
            that works for you.
          </p>

          <div className="contact-buttons">
            <a
              className="btn btn-gold"
              href="https://wa.me/916369216076?text=Hello%20GenZ%20Edu%20Tech"
              target="_blank"
              rel="noreferrer"
              data-testid="link-contact-whatsapp"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            <a
              className="btn btn-ghost"
              href="tel:6369216076"
              data-testid="link-contact-call-button"
            >
              <Phone size={16} />
              Call
            </a>

            <a
              className="btn btn-ghost"
              href="mailto:megakandhan0@gmail.com"
              data-testid="link-contact-email-button"
            >
              <Send size={16} />
              Email
            </a>

            <a
              className="btn btn-ghost"
              href="https://instagram.com/genz_edu_tech"
              target="_blank"
              rel="noreferrer"
              data-testid="link-contact-instagram-button"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="#home"
              className="brand"
              data-testid="link-footer-brand"
            >
              <Logo size="large" />

              <span>
                <strong>GenZ Edu Tech</strong>
                <small>Practical. Future-ready.</small>
              </span>
            </a>

            <p>
              Practical Skills. Real Opportunities. Future Ready.
            </p>
          </div>

          <div>
            <div className="footer-title">Quick links</div>

            <div className="footer-links">
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Courses', '#courses'],
                ['GenZ Developers', '#developers'],
                ['Testimonials', '#testimonials'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  href={href}
                  key={href}
                  data-testid={`link-footer-${label
                    .toLowerCase()
                    .replaceAll(' ', '-')}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-title">Services</div>

            <div className="footer-links">
              <a href="#courses">
                Education & Skill Development
              </a>

              <a href="#freelancing">
                Freelancing Guidance
              </a>

              <a href="#about">Career Guidance</a>

              <a href="#developers">
                Website Development
              </a>

              <a href="#developers">
                Website Maintenance
              </a>
            </div>
          </div>

          <div>
            <div className="footer-title">Contact</div>

            <div className="footer-links">
              <a href="tel:6369216076">6369216076</a>

              <a href="mailto:megakandhan0@gmail.com">
                megakandhan0@gmail.com
              </a>

              <a
                href="https://instagram.com/genz_edu_tech"
                target="_blank"
                rel="noreferrer"
              >
                @genz_edu_tech
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 GenZ Edu Tech. All Rights Reserved.</span>
          <span>Founder: Megadharshini Kandhan</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        <Philosophy />

        <About />

        <Founder />

        <Courses />

        <WhyUs />

        <section id="freelancing">
          <Freelancing />
        </section>

        <Developers />

        <SmallBusiness />

        <Testimonials />

        <Community />

        <section
          className="final-cta"
          aria-labelledby="final-cta-heading"
        >
          <div className="site-container">
            <div className="eyebrow">
              Start before you feel ready
            </div>

            <h2 id="final-cta-heading">
              Your future doesn’t need to wait.
            </h2>

            <p>
              Start learning practical skills, explore freelancing and
              discover new career possibilities.
            </p>

            <div className="hero-actions">
              <a
                href="#courses"
                className="btn btn-primary"
                data-testid="link-final-courses"
              >
                Explore Courses <ArrowDownRight size={16} />
              </a>

              <a
                href="#contact"
                className="btn btn-ghost"
                data-testid="link-final-talk"
              >
                Talk to GenZ Edu Tech
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return <Home />;
}

export default App;
