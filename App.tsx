
import { useState } from 'react';
import { Menu, X, ArrowRight, Check, MessageCircle } from 'lucide-react';
import companyLogo from './assets/genz-logo.png';
import founderPhoto from './assets/founder-megadharshini.png';
import { useEffect, useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Check,
  MessageCircle,
  Moon,
  Sun,
} from 'lucide-react';

const PHONE = '916369216076';
const EMAIL = 'genzedutech@gmail.com';

const whatsapp = (message: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

const courses = [
  { name: 'Digital Marketing', category: 'Digital Skills', duration: '30 days', fee: 2999 },
  { name: 'Social Media Marketing', category: 'Digital Skills', duration: '30 days', fee: 2499 },
  { name: 'Content Writing', category: 'Digital Skills', duration: '20 days', fee: 1999 },
  { name: 'AI Tools & Applications', category: 'Digital Skills', duration: '60 days', fee: 8999 },
  { name: 'Freelancing & Client Acquisition', category: 'Career Skills', duration: '20 days', fee: 2499 },
  { name: 'Python Programming', category: 'Programming', duration: '60 days', fee: 14999 },
  { name: 'Java Programming', category: 'Programming', duration: '90 days', fee: 14499 },
  { name: 'HTML & CSS Web Development', category: 'Programming', duration: '30 days', fee: 7999 },
  { name: 'Quantitative Aptitude', category: 'Placement Preparation', duration: '20 days', fee: 1999 },
  { name: 'Verbal Ability', category: 'Placement Preparation', duration: '20 days', fee: 1499 },
  { name: 'Placement Training', category: 'Career Skills', duration: '30 days', fee: 3999 },
  { name: 'Career Awareness', category: 'Career Skills', duration: '7 days', fee: 499 },
];

const packages = [
  { name: 'Essential Website', price: '₹9,999', description: 'A professional starting point for your online presence.', features: ['Landing page', 'Mobile-friendly design', 'Business information', 'Contact links'] },
  { name: 'Business Website', price: '₹14,999', description: 'A complete website for your business.', features: ['Up to 5 pages', 'Responsive design', 'Services and about pages', 'Contact enquiry options'], popular: true },
  { name: 'Premium Business', price: '₹24,999', description: 'A more customised website for a growing brand.', features: ['Premium visual design', 'Multiple sections and pages', 'Responsive layout', 'Agreed advanced features'] },
  { name: 'E-commerce Website', price: 'From ₹39,999', description: 'Showcase products and sell online.', features: ['Product catalogue', 'Shopping features', 'Payment integration as agreed', 'Order workflow as agreed'] },
  { name: 'Custom Web Application', price: 'From ₹59,999', description: 'A custom digital solution for your business needs.', features: ['Requirement planning', 'Custom interface', 'Project-specific features', 'Agreed delivery plan'] },
];

const filters = ['All', 'Digital Skills', 'Programming', 'Career Skills', 'Placement Preparation'];

export default function App() {
  const [category, setCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);

  const displayedCourses = category === 'All'
    ? courses
    : courses.filter((course) => course.category === category);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src={companyLogo} alt="GenZ Edu Tech logo" />
            <span>
              <strong>GenZ Edu Tech</strong>
              <small>LEARN · BUILD · GROW</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#courses" onClick={closeMenu}>Courses</a>
            <a href="#career" onClick={closeMenu}>Career Guidance</a>
            <a href="#developers" onClick={closeMenu}>Developers</a>
            <a href="#founder" onClick={closeMenu}>Founder</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact Us</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-layout">
            <div className="hero-content">
              <span className="eyebrow">PRACTICAL LEARNING · DIGITAL SOLUTIONS</span>
              <h1>Build your skills.<br /><span>Create your future.</span></h1>
              <p>
                Learn useful skills, explore career options and build your
                business's online presence with GenZ Edu Tech.
              </p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#courses">Explore Courses <ArrowRight size={17} /></a>
                <a className="button button-outline" href="#developers">Website Services</a>
              </div>
              <p className="hero-note">Learn practical skills. Take your next step with confidence.</p>
            </div>
            <div className="hero-image">
              <img src={companyLogo} alt="GenZ Edu Tech" />
              <div className="hero-image-caption">
                <strong>Learn. Build. Grow.</strong>
                <span>Skills and solutions for the future.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container two-column">
            <div>
              <span className="eyebrow">ABOUT US</span>
              <h2>Practical learning for real goals.</h2>
            </div>
            <div>
              <p>
                GenZ Edu Tech supports learners and businesses through skill
                development, career guidance, freelancing education and website
                development.
              </p>
              <p>
                Our focus is simple: make information easier to understand and
                help people take practical steps towards their goals.
              </p>
              <a className="text-link" href="#contact">Talk to our team <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="courses">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">OUR COURSES</span>
              <h2>Choose the skill you want to learn.</h2>
              <p>Compare course fees and durations, then contact us for the syllabus and batch details.</p>
            </div>

            <div className="filters">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? 'filter active' : 'filter'}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="course-grid">
              {displayedCourses.map((course) => (
                <article className="course-card" key={course.name}>
                  <span className="course-category">{course.category}</span>
                  <h3>{course.name}</h3>
                  <div className="course-details">
                    <span>Duration: {course.duration}</span>
                    <strong>₹{course.fee.toLocaleString('en-IN')}</strong>
                  </div>
                  <a
                    className="text-link"
                    href={whatsapp(`Hello GenZ Edu Tech, I am interested in ${course.name}. Please share the syllabus, batch details and enrolment process.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire about course <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="career">
          <div className="container two-column">
            <div>
              <span className="eyebrow">CAREER GUIDANCE</span>
              <h2>Understand your options. Plan your next step.</h2>
            </div>
            <div>
              <p>
                Explore career paths, learn about freelancing and client
                acquisition, and identify skills that may help you prepare
                for future opportunities.
              </p>
              <ul className="check-list">
                <li><Check size={18} /> Career path awareness</li>
                <li><Check size={18} /> Freelancing fundamentals</li>
                <li><Check size={18} /> Resume and interview preparation guidance</li>
                <li><Check size={18} /> Practical skill development</li>
              </ul>
              <a className="button button-primary" href={whatsapp('Hello GenZ Edu Tech, I would like to enquire about career guidance.') } target="_blank" rel="noreferrer">
                Ask about career guidance <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="developers">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">GENZ DEVELOPERS</span>
              <h2>Website development for your business.</h2>
              <p>
                We help businesses create a professional online presence with
                websites designed around their needs.
              </p>
            </div>

            <div className="service-intro">
              <h3>Our website services</h3>
              <p>Choose a package below. Contact us to discuss your requirements and final project scope.</p>
            </div>

            <div className="package-grid">
              {packages.map((item) => (
                <article className={`package-card ${item.popular ? 'package-popular' : ''}`} key={item.name}>
                  {item.popular && <span className="popular-label">MOST REQUESTED</span>}
                  <h3>{item.name}</h3>
                  <div className="package-price">{item.price}</div>
                  <p>{item.description}</p>
                  <ul className="check-list">
                    {item.features.map((feature) => (
                      <li key={feature}><Check size={17} /> {feature}</li>
                    ))}
                  </ul>
                  <a
                    className="button button-primary package-button"
                    href={whatsapp(`Hello GenZ Edu Tech, I am interested in the ${item.name} package (${item.price}). Please discuss my requirements.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get a quotation <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>

            <div className="maintenance">
              <div>
                <span className="eyebrow">ONGOING SUPPORT</span>
                <h3>Website Maintenance</h3>
                <p>Regular updates and content changes based on the agreed scope.</p>
              </div>
              <strong>From ₹1,499/month</strong>
              <a className="button button-outline" href={whatsapp('Hello GenZ Edu Tech, I would like to enquire about website maintenance from ₹1,499 per month.')} target="_blank" rel="noreferrer">
                Enquire now <ArrowRight size={16} />
              </a>
            </div>

            <p className="pricing-note">
              Final pricing depends on the features and scope agreed for the project.
              Domain, hosting, paid tools and third-party charges may be separate.
            </p>
          </div>
        </section>

        <section className="section" id="why-us">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">WHY GENZ EDU TECH</span>
              <h2>Clear learning. Practical support.</h2>
            </div>
            <div className="benefit-grid">
              <article><span>01</span><h3>Practical approach</h3><p>Focus on understanding and applying skills through practice.</p></article>
              <article><span>02</span><h3>Career awareness</h3><p>Learn about career paths and ways to develop relevant skills.</p></article>
              <article><span>03</span><h3>Learning and services</h3><p>Explore training programmes and website solutions in one place.</p></article>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="founder">
          <div className="container founder-layout">
            <div className="founder-image">
              <img src={founderPhoto} alt="Megadharshini Kandhan, founder of GenZ Edu Tech" />
            </div>
            <div className="founder-content">
              <span className="eyebrow">MEET THE FOUNDER</span>
              <h2>Megadharshini Kandhan</h2>
              <p className="founder-title">Founder, GenZ Edu Tech</p>
              <p>
                GenZ Edu Tech was built around the idea of making practical
                learning, career awareness and digital services more accessible.
              </p>
              <p>
                I have personally trained 300+ people about freelancing and
                client acquisition, helping them understand the basics of
                presenting their skills and approaching potential clients.
              </p>
              <div className="recognition"><Check size={18} /> Top Grade Innovation accolade</div>
              <a className="button button-primary" href={whatsapp('Hello, I would like to connect with GenZ Edu Tech.') } target="_blank" rel="noreferrer">
                Connect with us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-panel">
            <div>
              <span className="eyebrow">CONTACT US</span>
              <h2>How can we help you?</h2>
              <p>Contact us about courses, career guidance or website development.</p>
            </div>
            <div className="contact-details">
              <a href={`mailto:${EMAIL}`}><strong>Email</strong><span>{EMAIL}</span></a>
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"><strong>WhatsApp</strong><span>+91 63692 16076</span></a>
              <a href="https://www.instagram.com/genz_edu_tech/" target="_blank" rel="noreferrer"><strong>Instagram</strong><span>@genz_edu_tech</span></a>
              <a className="button button-primary" href={whatsapp('Hello GenZ Edu Tech, I would like to know more about your services.')} target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> Message us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <img src={companyLogo} alt="GenZ Edu Tech logo" />
            <span><strong>GenZ Edu Tech</strong><small>LEARN · BUILD · GROW</small></span>
          </a>
          <p>Practical learning and digital solutions.</p>
          <span>© {new Date().getFullYear()} GenZ Edu Tech</span>
        </div>
      </footer>
    </div>
  );
}
