
import { useState } from 'react';
import companyLogo from './assets/genz-logo.png';
import founderPhoto from './assets/founder-megadharshini.png';
import {
  ArrowRight,
  Check,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Lightbulb,
  Menu,
  X,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Target,
  BookOpen,
  Laptop,
  Users,
  ChevronRight,
} from 'lucide-react';

const PHONE = '916369216076';
const EMAIL = 'megakandhan0@gmail.com';

const courses = [
  { name: 'Digital Marketing', duration: '30 days', fee: 2999, category: 'Digital Skills', description: 'Explore SEO, digital strategy, campaign planning and practical marketing.', icon: Lightbulb },
  { name: 'Social Media Marketing (SMM)', duration: '30 days', fee: 2499, category: 'Digital Skills', description: 'Learn content planning, social media management and audience engagement.', icon: Globe },
  { name: 'Content Writing', duration: '20 days', fee: 1999, category: 'Creative Skills', description: 'Build writing, copywriting and digital content creation skills.', icon: BookOpen },
  { name: 'AI Tools', duration: '60 days', fee: 8997, category: 'Emerging Technology', description: 'Practise using AI tools for productivity, content and digital workflows.', icon: Sparkles },
  { name: 'Freelancing & Client Acquisition', duration: '20 days', fee: 2499, category: 'Career Skills', description: 'Learn how to present your skills, approach clients and prepare proposals.', icon: BriefcaseBusiness },
  { name: 'Python Programming', duration: '90 days', fee: 14999, category: 'Programming', description: 'Develop programming foundations through structured coding practice.', icon: Code2 },
  { name: 'Java Programming', duration: '60 days', fee: 11499, category: 'Programming', description: 'Study Java fundamentals, object-oriented concepts and coding exercises.', icon: Laptop },
  { name: 'HTML & CSS', duration: '30 days', fee: 4999, category: 'Web Development', description: 'Create responsive web pages and learn modern layout fundamentals.', icon: Code2 },
  { name: 'Quantitative Aptitude', duration: '30 days', fee: 2999, category: 'Placement Preparation', description: 'Practise numerical reasoning and common placement aptitude topics.', icon: Target },
  { name: 'Verbal Ability', duration: '20 days', fee: 1499, category: 'Placement Preparation', description: 'Strengthen grammar, comprehension and verbal reasoning.', icon: BookOpen },
  { name: 'Placement Training', duration: '30 days', fee: 2999, category: 'Career Skills', description: 'Prepare for aptitude tests, interviews and professional communication.', icon: BriefcaseBusiness },
  { name: 'Career Awareness', duration: '7 days', fee: 499, category: 'Career Skills', description: 'Explore career pathways, skill requirements and practical next steps.', icon: GraduationCap },
];

const websitePackages = [
  {
    name: 'Essential Website',
    price: '₹9,999',
    description: 'A professional starting point for small businesses.',
    features: ['Up to 3 pages', 'Responsive website design', 'About, services and contact sections', 'WhatsApp contact button', 'Basic on-page SEO', 'Deployment labour'],
  },
  {
    name: 'Business Website',
    price: '₹14,999',
    description: 'A stronger digital presence for growing businesses.',
    features: ['Up to 6 pages', 'Custom branded design', 'Enquiry and WhatsApp integration', 'Basic SEO setup', 'Mobile optimisation', 'Deployment and launch testing'],
  },
  {
    name: 'Premium Business',
    price: '₹24,999',
    description: 'A distinctive website for established businesses.',
    features: ['Up to 10 pages', 'Custom design and animations', 'Portfolio or service sections', 'Enquiry integration', 'SEO foundations', 'Performance optimisation'],
  },
  {
    name: 'E-commerce Website',
    price: 'From ₹39,999',
    description: 'For businesses selling products online.',
    features: ['Product catalogue', 'Shopping cart and checkout', 'Payment gateway integration', 'Order management setup', 'Responsive storefront', 'Testing and deployment'],
  },
  {
    name: 'Custom Web Application',
    price: 'From ₹59,999',
    description: 'For custom portals, dashboards and workflows.',
    features: ['Custom frontend and backend', 'Database and authentication if required', 'Admin dashboard', 'Business-specific workflows', 'Integration testing', 'Deployment planning'],
  },
];

const trainingBenefits = [
  'A structured preparation plan',
  'Quantitative aptitude practice',
  'Verbal ability and reasoning',
  'Interview and communication preparation',
  'Resume and job-readiness guidance',
  'Practice activities and progress review',
];

const wa = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseFilter, setCourseFilter] = useState('All');

  const filters = [
    'All',
    'Digital Skills',
    'Programming',
    'Career Skills',
    'Placement Preparation',
  ];

  const visibleCourses =
    courseFilter === 'All'
      ? courses
      : courses.filter((course) => course.category === courseFilter);

  const navLinks = [
    ['About', '#about'],
    ['Courses', '#courses'],
    ['CRT', '#crt'],
    ['Why Us', '#why-us'],
    ['GenZ Developers', '#developers'],
    ['Founder', '#founder'],
    ['Contact', '#contact'],
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');

        :root {
  font-family: 'DM Sans', sans-serif;
  color: #16325c;
  background: #f8faff;
  scroll-behavior: smooth;

  --green: #0a2f6b;
  --green-dark: #061d44;
  --gold: #f4b400;
  --cream: #f8faff;
  --muted: #63748c;
  --border: #dfe6f2;

  --navy: #0a2f6b;
  --royal-blue: #1d6dff;
  --gold-light: #ffd95a;
  --white: #ffffff;
}
      `}</style>

      <div className="site">
        <div className="topline" />

        <header>
          <div className="container nav">
            <a className="brand" href="#home" aria-label="GenZ Edu Tech home">
              <img className="brand-logo" src="/assets/genz-logo.png" alt="GenZ Edu Tech logo" />
              <span className="brand-name">
                GenZ Edu Tech
                <span className="brand-tag">LEARN · BUILD · GROW</span>
              </span>
            </a>

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
              <a className="btn btn-small" href="#contact" onClick={() => setMenuOpen(false)}>
                Let's Talk <ArrowRight size={14} />
              </a>
            </nav>

            <button
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="container hero-grid">
              <div>
                <span className="eyebrow">Practical learning · Digital innovation</span>
                <h1>
                  Build your skills.
                  <br />
                  Create your <em>future.</em>
                </h1>
                <p className="hero-copy">
                  GenZ Edu Tech brings together practical skill development,
                  career preparation and professional website solutions.
                  Learn new skills, prepare for opportunities and bring your
                  business online with confidence.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#courses">
                    Explore Courses <ArrowRight size={16} />
                  </a>
                  <a className="btn btn-light" href="#developers">
                    Build My Website <Globe size={16} />
                  </a>
                </div>
                <p className="hero-footnote">
                  Digital skills · Career readiness · Website development
                </p>
              </div>

              <div className="hero-visual">
                <div className="hero-orbit">
                  <img src="/assets/genz-logo.png" alt="GenZ Edu Tech emblem" />
                </div>
                <div className="float-card float-one">
                  <GraduationCap size={21} />
                  <div>Learn by doing<small>Practical-first learning</small></div>
                </div>
                <div className="float-card float-two">
                  <Code2 size={20} />
                  <div>Build with purpose<small>Skills and digital solutions</small></div>
                </div>
              </div>
            </div>
          </section>

          <div className="trust-band">
            <div className="container trust-grid">
              <div><strong>Practical Learning</strong><span>Learn concepts through practice</span></div>
              <div><strong>Career Preparation</strong><span>Build job-readiness skills</span></div>
              <div><strong>Digital Solutions</strong><span>Websites for growing businesses</span></div>
            </div>
          </div>

          <section className="section" id="about">
            <div className="container about-grid">
              <div className="about-copy">
                <span className="eyebrow">About GenZ Edu Tech</span>
                <h2>Learn with purpose. Grow with confidence.</h2>
                <p>
                  GenZ Edu Tech focuses on practical education, digital skills,
                  career development and technology services. We aim to make
                  learning approachable and help learners build skills relevant
                  to their goals.
                </p>
                <p>
                  We also help businesses establish or improve their online
                  presence through professional websites designed around their
                  services, customers and requirements.
                </p>
                <a className="btn" href="#contact">Connect With Us <ArrowRight size={15} /></a>
              </div>

              <div className="about-panel">
                <span className="eyebrow">Our approach</span>
                <h3>Practical skills for real-world goals.</h3>
                <p>
                  Our focus is on structured learning, useful practice,
                  career awareness and transparent project communication.
                </p>
                <div className="check-grid">
                  {[
                    'Beginner-friendly learning',
                    'Practical skill development',
                    'Career preparation',
                    'Website design solutions',
                  ].map((item) => (
                    <div className="check-item" key={item}><Check size={16} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section courses-section" id="courses">
            <div className="container">
              <SectionHeading
                eyebrow="Our course catalogue"
                title="Find the skills you want to build"
                description="Explore our current course offerings, fees and durations. Select an enquiry button under any course to ask for its syllabus, schedule and enrolment details."
              />

              <div className="filters" aria-label="Filter courses">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={`filter-btn ${courseFilter === filter ? 'active' : ''}`}
                    onClick={() => setCourseFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="course-grid">
                {visibleCourses.map((course) => {
                  const CourseIcon = course.icon;
                  return (
                    <article className="course-card" key={course.name}>
                      <div className="course-icon"><CourseIcon size={22} /></div>
                      <span className="course-category">{course.category}</span>
                      <h3>{course.name}</h3>
                      <p>{course.description}</p>

                      <div className="course-meta">
                        <span className="course-duration">
                          <BookOpen size={14} /> {course.duration}
                        </span>
                        <span className="course-price">
                          ₹{course.fee.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <a
                        className="btn btn-small"
                        href={wa(
                          `Hello GenZ Edu Tech, I would like to enquire about the ${course.name} course. The listed fee is ₹${course.fee.toLocaleString('en-IN')} and the duration is ${course.duration}. Please share the syllabus, class schedule, learning format and enrolment details.`
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enquire About This Course <ArrowRight size={14} />
                      </a>
                    </article>
                  );
                })}
              </div>

              <p className="pricing-note">
                Course fees and durations are displayed as provided by GenZ Edu Tech.
                Please enquire for the latest batch schedule and course details.
              </p>
            </div>
          </section>

          <section className="section crt-section" id="crt">
            <div className="container crt-grid">
              <div>
                <span className="eyebrow">Campus Recruitment Training</span>
                <h2>Prepare for your next placement opportunity.</h2>
                <p>
                  Our CRT section is dedicated to helping students prepare
                  for campus recruitment and entry-level selection processes.
                  Training can cover aptitude, verbal ability, reasoning,
                  communication and interview preparation.
                </p>

                <div className="crt-list">
                  {trainingBenefits.map((item) => (
                    <div className="check-item" key={item}><Check size={16} />{item}</div>
                  ))}
                </div>

                <a
                  className="btn btn-gold"
                  href={wa('Hello GenZ Edu Tech, I would like to enquire about Campus Recruitment Training (CRT). Please share the syllabus, duration, fee and upcoming batch schedule.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire About CRT <ArrowRight size={15} />
                </a>
              </div>

              <div className="crt-panel">
                <div className="course-icon"><Target size={25} /></div>
                <span className="eyebrow">Placement readiness</span>
                <h3>Practise. Prepare. Present yourself confidently.</h3>
                <p>
                  Get in touch to confirm the CRT syllabus, available batch,
                  course duration and fees before enrolling.
                </p>
                <div className="check-grid">
                  {[
                    'Aptitude practice',
                    'Verbal and reasoning',
                    'Interview preparation',
                    'Professional communication',
                  ].map((item) => (
                    <div className="check-item" key={item}><Check size={16} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section why-section" id="why-us">
            <div className="container">
              <SectionHeading
                eyebrow="Why choose us"
                title="A practical approach to your growth"
                description="We focus on useful skills, clear communication and helping learners and businesses move towards their goals."
              />

              <div className="feature-grid">
                {[
                  { icon: <GraduationCap size={23} />, title: 'Structured Learning', text: 'Build foundational knowledge and progress through a planned learning path.' },
                  { icon: <Code2 size={23} />, title: 'Practical Activities', text: 'Strengthen your understanding through exercises and hands-on practice.' },
                  { icon: <BriefcaseBusiness size={23} />, title: 'Career Preparation', text: 'Develop job-readiness skills, professional communication and interview confidence.' },
                  { icon: <Laptop size={23} />, title: 'Digital Solutions', text: 'Explore website options tailored to your business needs and budget.' },
                ].map((feature) => (
                  <article className="feature-card" key={feature.title}>
                    <div className="course-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="developers">
            <div className="container">
              <div className="dev-intro">
                <div>
                  <span className="eyebrow">GenZ Developers</span>
                  <h2>Give your business a stronger online presence.</h2>
                </div>
                <p>
                  We can create a new website or modernise an existing one.
                  Our process begins with understanding your requirements,
                  proposing a suitable design and confirming the scope and
                  quotation before development.
                </p>
              </div>

              <div className="pricing-grid">
                {websitePackages.map((pkg, index) => (
                  <article className={`price-card ${index === 1 ? 'featured' : ''}`} key={pkg.name}>
                    {index === 1 && <span className="popular">Popular Choice</span>}
                    <h3>{pkg.name}</h3>
                    <div className="price">{pkg.price}</div>
                    <p>{pkg.description}</p>
                    <ul>
                      {pkg.features.map((feature) => (
                        <li key={feature}><Check size={14} />{feature}</li>
                      ))}
                    </ul>
                    <a
                      className={`btn ${index === 1 ? 'btn-gold' : ''}`}
                      href={wa(`Hello GenZ Edu Tech, I would like to enquire about your ${pkg.name} package (${pkg.price}). Please share the detailed scope, timeline, domain and hosting costs, and quotation.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Discuss This Package <ArrowRight size={14} />
                    </a>
                  </article>
                ))}
              </div>

              <p className="pricing-note">
                Website package prices are indicative. Domain registration, hosting
                subscriptions, paid plugins, APIs, payment gateway fees and other
                third-party charges may be additional. Custom features and final
                delivery timelines will be agreed before work begins.
              </p>

              <div className="service-grid">
                <article className="service-box">
                  <span className="eyebrow">Domain & hosting</span>
                  <h3>Get your website online</h3>
                  <p>We can help you understand domain registration and hosting options based on your requirements.</p>
                  <ul>
                    <li>Domain registration and renewal guidance</li>
                    <li>Hosting setup and deployment support</li>
                    <li>SSL configuration where supported</li>
                    <li>Third-party costs explained in advance</li>
                  </ul>
                  <a
                    className="btn"
                    href={wa('Hello GenZ Edu Tech, I would like to discuss domain registration and hosting options for my website.')}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ask About Hosting <ArrowRight size={14} />
                  </a>
                </article>

                <article className="service-box light">
                  <span className="eyebrow">Ongoing support</span>
                  <h3>Website maintenance</h3>
                  <div className="price">From ₹1,499 / month</div>
                  <p>Optional maintenance plans can cover agreed updates and basic technical support.</p>
                  <ul>
                    <li>Content and text updates</li>
                    <li>Basic functionality checks</li>
                    <li>Technical support within agreed scope</li>
                    <li>New features quoted separately</li>
                  </ul>
                  <a
                    className="btn"
                    href={wa('Hello GenZ Edu Tech, I would like to enquire about website maintenance starting from ₹1,499 per month. Please share the scope and terms.')}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discuss Maintenance <ArrowRight size={14} />
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section className="section commitment-section" id="testimonials">
            <div className="container">
              <SectionHeading
                eyebrow="Our commitment"
                title="What you can expect from us"
                description="We value practical work, transparent communication and clarity about the learning or development process."
              />
              <div className="commitment-grid">
                {[
                  { icon: <Sparkles size={22} />, title: 'Practical Focus', text: 'We aim to connect learning with exercises and skills that learners can continue developing.' },
                  { icon: <Users size={22} />, title: 'Clear Communication', text: 'We discuss goals, requirements and next steps so expectations are understood.' },
                  { icon: <Check size={22} />, title: 'Transparent Scope', text: 'For website projects, we clarify deliverables, costs and support before work begins.' },
                ].map((item) => (
                  <article className="commitment-card" key={item.title}>
                    {item.icon}
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section founder-section" id="founder">
            <div className="container founder-grid">
              <div className="founder-photo-wrap">
                <div className="founder-photo-frame">
                  <img
                    className="founder-photo"
                    src="/assets/founder-megadharshini.png"
                    alt="Megadharshini Kandhan, Founder of GenZ Edu Tech"
                    loading="lazy"
                  />
                </div>
                <div className="founder-caption">
                  <strong>Megadharshini Kandhan</strong>
                  <span>Founder & Business Operations Lead</span>
                </div>
              </div>

              <div className="founder-copy">
                <span className="eyebrow">A note from our founder</span>
                <h2>Helping people learn, create and grow.</h2>
                <p>
                  GenZ Edu Tech is built around the belief that practical skills,
                  access to guidance and opportunities to practise can help people
                  move towards their goals.
                </p>
                <p>
                  Through training, career development and website services, we
                  aim to support learners and businesses with useful skills,
                  thoughtful solutions and clear communication.
                </p>
                <p>
                  Our focus is continuous improvement—helping people take their
                  next step with greater clarity and confidence.
                </p>
                <a className="btn" href="#contact">Connect With Us <ArrowRight size={15} /></a>
              </div>
            </div>
          </section>

          <section className="section" id="contact">
            <div className="container">
              <SectionHeading
                eyebrow="Get in touch"
                title="Let's discuss your next step"
                description="Contact us about course enrolment, CRT, career preparation or a website for your business."
              />

              <div className="contact-grid">
                <div className="contact-info">
                  <h3>Contact GenZ Edu Tech</h3>
                  <p>Tell us what you would like to learn or what you need for your business.</p>
                  <div className="contact-item">
                    <Phone size={20} />
                    <span><strong>Phone / WhatsApp</strong><a href={`https://wa.me/${PHONE}`}>+91 63692 16076</a></span>
                  </div>
                  <div className="contact-item">
                    <Mail size={20} />
                    <span><strong>Email</strong><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
                  </div>
                  <div className="contact-item">
                    <Globe size={20} />
                    <span><strong>Website</strong>GenZ Edu Tech</span>
                  </div>
                </div>

                <div className="contact-action">
                  <span className="eyebrow">Start a conversation</span>
                  <h3>How can we help you?</h3>
                  <p>Choose an option to open WhatsApp with a ready-to-send enquiry message.</p>
                  <div className="contact-buttons">
                    <a className="btn" href={wa('Hello GenZ Edu Tech, I would like to enquire about your courses. Please share the syllabus and batch details.')} target="_blank" rel="noreferrer">
                      <GraduationCap size={17} /> Course Enquiry <ArrowRight size={15} />
                    </a>
                    <a className="btn btn-gold" href={wa('Hello GenZ Edu Tech, I would like to enquire about Campus Recruitment Training (CRT). Please share the course details.')} target="_blank" rel="noreferrer">
                      <Target size={17} /> CRT Enquiry <ArrowRight size={15} />
                    </a>
                    <a className="btn btn-light" href={wa('Hello GenZ Edu Tech, I need a website for my business. I would like to discuss my requirements and see a sample design.')} target="_blank" rel="noreferrer">
                      <Code2 size={17} /> Website Development <ArrowRight size={15} />
                    </a>
                    <a className="btn btn-light" href={`mailto:${EMAIL}`}>
                      <Mail size={17} /> Send an Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container footer-row">
            <div>
              <a className="brand" href="#home">
                <img className="footer-logo" src="/assets/genz-logo.png" alt="GenZ Edu Tech logo" />
                <span className="brand-name" style={{ color: '#ffffff' }}>
                  GenZ Edu Tech
                  <span className="brand-tag" style={{ color: '#c3d2c7' }}>LEARN · BUILD · GROW</span>
                </span>
              </a>
              <p>Practical learning, career preparation and digital solutions.</p>
              <p>© {new Date().getFullYear()} GenZ Edu Tech. All rights reserved.</p>
            </div>
            <div className="footer-links">
              {navLinks.map(([label, href]) => (
                <a href={href} key={href}>{label}<ChevronRight size={11} style={{ display: 'inline', verticalAlign: 'middle' }} /></a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
