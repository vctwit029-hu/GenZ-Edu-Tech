
import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  Check,
  Code2,
  GraduationCap,
  Menu,
  MessageCircle,
  Monitor,
  Send,
  Sparkles,
  X,
} from 'lucide-react';

import companyLogo from './assets/genz-logo.png';
import founderPhoto from './assets/founder-megadharshini.png';

const PHONE = '916369216076';
const EMAIL = 'genzedutech@gmail.com';
const INSTAGRAM = 'https://www.instagram.com/genz_edu_tech/';

const wa = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const courses = [
  { name: 'Digital Marketing', category: 'Digital Skills', duration: '30 days', fee: 2999, description: 'Learn digital marketing fundamentals, campaign planning, SEO and practical promotion strategies.', tag: 'Marketing' },
  { name: 'Social Media Marketing', category: 'Digital Skills', duration: '30 days', fee: 2499, description: 'Understand content planning, platform growth, audience engagement and social media campaigns.', tag: 'Popular skill' },
  { name: 'Content Writing', category: 'Digital Skills', duration: '20 days', fee: 1999, description: 'Develop writing, research, editing and audience-focused content skills.', tag: 'Creative' },
  { name: 'AI Tools & Applications', category: 'Digital Skills', duration: '60 days', fee: 8999, description: 'Explore practical AI tools for productivity, content creation and everyday workflows.', tag: 'Future skills' },
  { name: 'Freelancing & Client Acquisition', category: 'Career Skills', duration: '20 days', fee: 2499, description: 'Learn service positioning, portfolio preparation, client outreach and proposal writing.', tag: 'Business skills' },
  { name: 'Python Programming', category: 'Programming', duration: '60 days', fee: 14999, description: 'Build programming foundations through syntax, logic, problem-solving and practical exercises.', tag: 'Programming' },
  { name: 'Java Programming', category: 'Programming', duration: '90 days', fee: 14499, description: 'Learn Java fundamentals, object-oriented programming and structured coding practice.', tag: 'Programming' },
  { name: 'HTML & CSS Web Development', category: 'Programming', duration: '30 days', fee: 7999, description: 'Create structured, responsive web pages using HTML and CSS.', tag: 'Build websites' },
  { name: 'Quantitative Aptitude', category: 'Placement Preparation', duration: '20 days', fee: 1999, description: 'Practise numerical ability, logical approaches and common placement aptitude questions.', tag: 'Placement prep' },
  { name: 'Verbal Ability', category: 'Placement Preparation', duration: '20 days', fee: 1499, description: 'Improve grammar, vocabulary, comprehension and verbal reasoning for assessments.', tag: 'Communication' },
  { name: 'Placement Training', category: 'Career Skills', duration: '30 days', fee: 3999, description: 'Prepare for recruitment with interview practice, resume guidance and workplace readiness.', tag: 'Career readiness' },
  { name: 'Career Awareness', category: 'Career Skills', duration: '7 days', fee: 499, description: 'Explore career paths, skill-building opportunities and ways to plan your next step.', tag: 'Start here' },
];

const categories = [
  'All',
  'Digital Skills',
  'Programming',
  'Career Skills',
  'Placement Preparation',
];

const packages = [
  {
    name: 'Essential Website',
    price: '₹9,999',
    detail: 'For individuals and small businesses getting started online.',
    features: ['Professional landing page', 'Mobile-responsive layout', 'Essential business information', 'Contact and enquiry links'],
  },
  {
    name: 'Business Website',
    price: '₹14,999',
    detail: 'A complete online presence for a growing business.',
    features: ['Up to 5 pages', 'Custom business-focused design', 'Responsive desktop and mobile layout', 'Contact form or enquiry integration'],
    featured: true,
  },
  {
    name: 'Premium Business',
    price: '₹24,999',
    detail: 'A more refined website for brands ready to stand out.',
    features: ['Premium UI and UX direction', 'Multi-section website', 'Advanced visual presentation', 'Responsive design and integration'],
  },
  {
    name: 'E-commerce Website',
    price: 'From ₹39,999',
    detail: 'For businesses looking to showcase and sell products online.',
    features: ['Product catalogue', 'Shopping experience', 'E-commerce integrations', 'Scope-based functionality'],
  },
  {
    name: 'Custom Web Application',
    price: 'From ₹59,999',
    detail: 'Custom-built digital experiences based on your requirements.',
    features: ['Requirement-based planning', 'Custom interface', 'Application functionality', 'Project-specific delivery plan'],
  },
];

const principles = [
  {
    number: '01',
    title: 'Practical-first learning',
    description: 'Build understanding by practising skills and working through relevant examples.',
  },
  {
    number: '02',
    title: 'Career-focused guidance',
    description: 'Explore career options, build confidence and understand the next steps to take.',
  },
  {
    number: '03',
    title: 'Skills for real opportunities',
    description: 'Focus on useful digital, technical and professional skills that can support career growth.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const visibleCourses =
    activeCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="app-shell">
      <div className="announcement-bar">
        <span className="announcement-dot" />
        Practical learning. Digital skills. Career growth.
        <a href="#courses">
          Explore our courses <ArrowRight size={14} />
        </a>
      </div>

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="GenZ Edu Tech home">
            <img src={companyLogo} alt="GenZ Edu Tech logo" />
            <span className="brand-copy">
              <strong>GenZ Edu Tech</strong>
              <small>LEARN · BUILD · GROW</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#courses" onClick={closeMenu}>Courses</a>
            <a href="#crt" onClick={closeMenu}>Career Guidance</a>
            <a href="#why-us" onClick={closeMenu}>Why Us</a>
            <a href="#developers" onClick={closeMenu}>Web Development</a>
            <a href="#founder" onClick={closeMenu}>Founder</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's Talk <ArrowRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow">
                <Sparkles size={15} /> YOUR NEXT CHAPTER STARTS HERE
              </span>

              <h1>
                Build your skills.
                <br />
                Create your <span>future.</span>
              </h1>

              <p className="hero-description">
                Learn practical digital and technical skills, explore freelancing,
                and prepare for new career opportunities with GenZ Edu Tech.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#courses">
                  Explore Courses <ArrowRight size={17} />
                </a>
                <a className="btn btn-secondary" href="#developers">
                  Get a Website <ArrowDownRight size={17} />
                </a>
              </div>

              <div className="hero-note">
                <span className="hero-note-icon"><Check size={16} /></span>
                Beginner-friendly learning with practical direction
              </div>
            </div>

            <div className="hero-visual" aria-label="GenZ Edu Tech learning and technology">
              <div className="hero-visual-glow" />
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />

              <div className="hero-logo-card">
                <img src={companyLogo} alt="GenZ Edu Tech" />
                <span>LEARN WITH PURPOSE</span>
                <strong>Make your next move count.</strong>
              </div>

              <div className="floating-card floating-card-top">
                <span className="floating-icon"><GraduationCap size={21} /></span>
                <span><strong>Learn</strong><small>Build your foundation</small></span>
              </div>

              <div className="floating-card floating-card-bottom">
                <span className="floating-icon"><Code2 size={21} /></span>
                <span><strong>Create</strong><small>Turn skills into projects</small></span>
              </div>

              <div className="hero-index">GZ / 01</div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>SKILLS FOR TOMORROW</span>
            <div className="hero-bottom-line" />
            <a href="#about">Discover GenZ Edu Tech <ArrowDownRight size={15} /></a>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-intro">
              <span className="eyebrow">01 / WHO WE ARE</span>
              <h2>Education that moves you <span>forward.</span></h2>
            </div>

            <div className="about-content">
              <p className="about-lead">
                GenZ Edu Tech is built around one idea: learning should help people
                take meaningful steps towards their future.
              </p>
              <p>
                We focus on practical skill development, digital education,
                career awareness, freelancing guidance and website development.
                Our aim is to make useful knowledge easier to explore and apply.
              </p>
              <a className="text-link" href="#courses">
                Find your learning path <ArrowRight size={16} />
              </a>

              <div className="about-pillars">
                <div><span>01</span><strong>Learn</strong><small>Understand the essentials</small></div>
                <div><span>02</span><strong>Practise</strong><small>Apply what you learn</small></div>
                <div><span>03</span><strong>Progress</strong><small>Move towards your goals</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section courses-section" id="courses">
          <div className="container">
            <SectionHeading
              eyebrow="02 / LEARNING PROGRAMMES"
              title="Choose a skill. Start building."
              description="Explore our programmes in digital skills, programming, career development and placement preparation."
            />

            <div className="course-toolbar">
              <div className="filters" aria-label="Filter courses by category">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <span className="course-count">
                {visibleCourses.length} programmes
              </span>
            </div>

            <div className="course-grid">
              {visibleCourses.map((course, index) => (
                <article className="course-card" key={course.name}>
                  <div className="course-card-top">
                    <span className="course-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="course-tag">{course.tag}</span>
                  </div>

                  <span className="course-category">{course.category}</span>
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>

                  <div className="course-meta">
                    <span><Monitor size={15} /> {course.duration}</span>
                    <strong>₹{course.fee.toLocaleString('en-IN')}</strong>
                  </div>

                  <a
                    className="course-link"
                    href={wa(`Hello GenZ Edu Tech, I am interested in the ${course.name} course (${course.duration}, ₹${course.fee.toLocaleString('en-IN')}). Please share the syllabus, batch details and enrolment process.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire about course <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>

            <div className="course-footnote">
              <MessageCircle size={17} />
              <p>Want help choosing? Message us to discuss your goals and suitable learning options.</p>
              <a href={wa('Hello GenZ Edu Tech, please help me choose a suitable course.') } target="_blank" rel="noreferrer">
                Ask us <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="section guidance-section" id="crt">
          <div className="container guidance-layout">
            <div className="guidance-mark">
              <div className="guidance-icon"><GraduationCap size={35} /></div>
              <span>CAREER READINESS</span>
              <strong>Know your direction.<br />Take your next step.</strong>
            </div>

            <div className="guidance-content">
              <span className="eyebrow">03 / CAREER & FUTURE GUIDANCE</span>
              <h2>Your career path deserves a plan.</h2>
              <p>
                Whether you are a student, a job seeker or someone exploring a
                new direction, understanding your options is an important first step.
              </p>

              <div className="guidance-list">
                <div><Check size={17} /><span>Explore career paths and skill requirements</span></div>
                <div><Check size={17} /><span>Understand freelancing and client acquisition basics</span></div>
                <div><Check size={17} /><span>Identify learning priorities and practical next steps</span></div>
                <div><Check size={17} /><span>Build confidence in presenting your skills</span></div>
              </div>

              <a className="btn btn-primary" href={wa('Hello GenZ Edu Tech, I would like to enquire about career guidance and career readiness support.')} target="_blank" rel="noreferrer">
                Enquire about guidance <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section why-section" id="why-us">
          <div className="container">
            <SectionHeading
              eyebrow="04 / THE GENZ APPROACH"
              title="Learning with a purpose."
              description="Our approach is centred on helping learners develop useful skills and make informed decisions."
            />

            <div className="principles-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.number}>
                  <span className="principle-number">{principle.number}</span>
                  <div className="principle-rule" />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                  <ArrowDownRight className="principle-arrow" size={21} />
                </article>
              ))}
            </div>

            <div className="why-banner">
              <div>
                <span className="eyebrow">YOUR GROWTH, YOUR JOURNEY</span>
                <h3>Start where you are. Build from there.</h3>
              </div>
              <a className="btn btn-light" href="#contact">
                Connect with us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section developers-section" id="developers">
          <div className="container">
            <div className="developers-heading">
              <div>
                <span className="eyebrow">05 / GENZ DEVELOPERS</span>
                <h2>Give your business a stronger <span>digital presence.</span></h2>
              </div>
              <p>
                We design and develop websites to help businesses present their
                services clearly, build credibility and connect with customers.
              </p>
            </div>

            <div className="web-services-strip">
              <div><Monitor size={20} /><span>Business websites</span></div>
              <div><Code2 size={20} /><span>Custom development</span></div>
              <div><Sparkles size={20} /><span>Responsive design</span></div>
            </div>

            <div className="pricing-grid">
              {packages.map((item, index) => (
                <article
                  className={`price-card ${item.featured ? 'price-card-featured' : ''}`}
                  key={item.name}
                >
                  <div className="price-card-top">
                    <span>PACKAGE / 0{index + 1}</span>
                    {item.featured && <span className="popular-label">POPULAR</span>}
                  </div>

                  <h3>{item.name}</h3>
                  <div className="package-price">{item.price}</div>
                  <p className="package-description">{item.detail}</p>

                  <div className="package-divider" />

                  <ul className="package-features">
                    {item.features.map((feature) => (
                      <li key={feature}><Check size={16} /> {feature}</li>
                    ))}
                  </ul>

                  <a
                    className={`btn ${item.featured ? 'btn-primary' : 'btn-secondary'} package-cta`}
                    href={wa(`Hello GenZ Edu Tech, I am interested in the ${item.name} package (${item.price}). Please discuss my requirements and provide a quotation.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss this package <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>

            <div className="maintenance-card">
              <div className="maintenance-icon"><Code2 size={24} /></div>
              <div className="maintenance-copy">
                <span className="eyebrow">ONGOING SUPPORT</span>
                <h3>Website maintenance</h3>
                <p>For regular updates, content changes and agreed maintenance tasks.</p>
              </div>
              <strong>From ₹1,499<span>/month</span></strong>
              <a href={wa('Hello GenZ Edu Tech, I would like to enquire about website maintenance starting from ₹1,499 per month.')} target="_blank" rel="noreferrer">
                Discuss maintenance <ArrowRight size={16} />
              </a>
            </div>

            <p className="pricing-note">
              Final pricing depends on the agreed scope, features, integrations,
              third-party services and project requirements. Hosting, domain and
              other recurring charges will be discussed separately where applicable.
            </p>
          </div>
        </section>

        <section className="section commitment-section" id="testimonials">
          <div className="container commitment-layout">
            <div className="commitment-heading">
              <span className="eyebrow">06 / OUR COMMITMENT</span>
              <h2>More than learning. A step towards <span>possibility.</span></h2>
            </div>

            <div className="commitment-content">
              <p>
                We believe access to guidance and practical knowledge can help
                people make more informed choices about their future.
              </p>
              <div className="commitment-items">
                <div><span>01</span><p><strong>Practical knowledge</strong>Focus on applying what you learn.</p></div>
                <div><span>02</span><p><strong>Career awareness</strong>Explore options and plan your next step.</p></div>
                <div><span>03</span><p><strong>Community impact</strong>Encourage learning, awareness and growth.</p></div>
              </div>
              <a className="text-link" href={wa('Hello GenZ Edu Tech, I would like to learn more about your programmes and initiatives.')} target="_blank" rel="noreferrer">
                Learn more about our work <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section founder-section" id="founder">
          <div className="container founder-layout">
            <div className="founder-visual">
              <div className="founder-photo-frame">
                <img src={founderPhoto} alt="Megadharshini Kandhan, founder of GenZ Edu Tech" />
              </div>
              <div className="founder-photo-caption">
                <span>THE PERSON BEHIND THE VISION</span>
                <strong>Learn. Lead. Make an impact.</strong>
              </div>
              <div className="founder-accolade">
                <Award size={24} />
                <span><small>RECOGNITION</small><strong>Top Grade Innovation</strong></span>
              </div>
            </div>

            <div className="founder-content">
              <span className="eyebrow">07 / MEET THE FOUNDER</span>
              <h2>Building with purpose. <span>Growing with people.</span></h2>
              <p className="founder-name">Megadharshini Kandhan</p>
              <p className="founder-role">Founder · GenZ Edu Tech</p>

              <p>
                GenZ Edu Tech reflects my belief that practical learning and
                the right guidance can help people explore new possibilities.
                My focus is on creating useful learning experiences and digital
                solutions that support individuals and businesses.
              </p>

              <p>
                I have personally trained 300+ people about freelancing and
                client acquisition, helping them understand the fundamentals
                of presenting their skills and approaching potential clients.
              </p>

              <div className="founder-values">
                <div><Check size={16} /><span>Practical skill development</span></div>
                <div><Check size={16} /><span>Freelancing and client acquisition guidance</span></div>
                <div><Check size={16} /><span>Digital solutions for businesses</span></div>
              </div>

              <a className="btn btn-primary" href={wa('Hello Megadharshini, I would like to connect with GenZ Edu Tech.')} target="_blank" rel="noreferrer">
                Connect with us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <span className="eyebrow">08 / LET'S CONNECT</span>
                <h2>Have a goal in mind? <span>Let's talk.</span></h2>
                <p>
                  Looking for a course, career guidance or a website for your
                  business? Tell us what you need and let's explore the next step.
                </p>

                <div className="contact-details">
                  <a href={`mailto:${EMAIL}`}>
                    <span className="contact-detail-icon"><Send size={18} /></span>
                    <span><small>EMAIL US</small><strong>{EMAIL}</strong></span>
                  </a>
                  <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">
                    <span className="contact-detail-icon"><MessageCircle size={18} /></span>
                    <span><small>WHATSAPP / PHONE</small><strong>+91 63692 16076</strong></span>
                  </a>
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                    <span className="contact-detail-icon"><ArrowRight size={18} /></span>
                    <span><small>INSTAGRAM</small><strong>@genz_edu_tech</strong></span>
                  </a>
                </div>
              </div>

              <div className="contact-action">
                <div className="contact-action-icon"><Sparkles size={27} /></div>
                <span className="eyebrow">YOUR NEXT STEP STARTS HERE</span>
                <h3>Let's turn your idea into action.</h3>
                <p>Send us a message with your requirements. We'll take it from there.</p>
                <a
                  className="btn btn-primary"
                  href={wa('Hello GenZ Edu Tech! I would like to enquire about your courses, career guidance or website development services.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Message GenZ Edu Tech <ArrowRight size={17} />
                </a>
                <span className="contact-response-note">Courses · Career guidance · Website development</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <img src={companyLogo} alt="GenZ Edu Tech logo" />
            <span className="brand-copy">
              <strong>GenZ Edu Tech</strong>
              <small>LEARN · BUILD · GROW</small>
            </span>
          </a>

          <p>Practical learning and digital solutions for the next generation.</p>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#developers">Web development</a>
            <a href="#founder">Founder</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} GenZ Edu Tech. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
