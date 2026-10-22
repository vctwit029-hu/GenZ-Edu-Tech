
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
  MapPin,
  Globe,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

const courses = [
  { name: 'Digital Marketing', duration: '30 days', price: '₹2,999', description: 'Learn digital strategy, SEO, campaigns and practical marketing.' },
  { name: 'Social Media Marketing', duration: '30 days', price: '₹2,499', description: 'Build content plans and manage social media professionally.' },
  { name: 'Content Writing', duration: '20 days', price: '₹1,999', description: 'Develop writing, copywriting and content creation skills.' },
  { name: 'AI Tools', duration: '30 days', price: '₹2,999', description: 'Explore practical AI tools for productivity and digital work.' },
  { name: 'Freelancing & Client Acquisition', duration: '20 days', price: '₹2,499', description: 'Learn positioning, proposals and client communication.' },
  { name: 'Python Programming', duration: '45 days', price: '₹4,999', description: 'Build programming foundations through hands-on practice.' },
  { name: 'Java Programming', duration: '45 days', price: '₹4,499', description: 'Understand Java fundamentals and object-oriented concepts.' },
  { name: 'HTML & CSS', duration: '30 days', price: '₹3,999', description: 'Create responsive web pages and professional layouts.' },
  { name: 'Quantitative Aptitude', duration: '20 days', price: '₹1,999', description: 'Practice numerical reasoning and placement aptitude.' },
  { name: 'Verbal Ability', duration: '20 days', price: '₹1,499', description: 'Improve grammar, comprehension and communication.' },
  { name: 'Placement Training', duration: '30 days', price: '₹2,999', description: 'Prepare for aptitude rounds, interviews and job applications.' },
  { name: 'Career Awareness', duration: '7 days', price: '₹499', description: 'Explore career paths, skills and next steps.' },
];

const packages = [
  {
    name: 'Essential Website',
    price: '₹9,999',
    description: 'For startups, local businesses and professionals.',
    features: ['Up to 3 pages', 'Responsive design', 'About, services and contact sections', 'WhatsApp contact button', 'Basic on-page SEO', 'Deployment labour'],
  },
  {
    name: 'Business Website',
    price: '₹14,999',
    description: 'For growing businesses building their digital presence.',
    features: ['Up to 6 pages', 'Custom branded design', 'Enquiry and WhatsApp integration', 'Basic SEO setup', 'Mobile optimisation', 'Deployment and launch testing'],
  },
  {
    name: 'Premium Business',
    price: '₹24,999',
    description: 'For businesses needing a more distinctive website.',
    features: ['Up to 10 pages', 'Custom design and animations', 'Portfolio or service sections', 'Enquiry integration', 'SEO foundations', 'Performance optimisation'],
  },
  {
    name: 'E-commerce Website',
    price: 'From ₹39,999',
    description: 'For businesses planning to sell products online.',
    features: ['Product catalogue', 'Shopping cart and checkout', 'Payment gateway integration', 'Order management setup', 'Responsive storefront', 'Testing and deployment'],
  },
  {
    name: 'Custom Web Application',
    price: 'From ₹59,999',
    description: 'For portals, dashboards and business workflows.',
    features: ['Custom frontend and backend', 'Database and authentication if required', 'Admin dashboard', 'Custom workflows', 'Integration testing', 'Project-specific deployment'],
  },
];

const whatsapp = (message: string) =>
  `https://wa.me/916369216076?text=${encodeURIComponent(message)}`;

function SectionTitle({ eyebrow, title, description }: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    ['About', '#about'],
    ['Courses', '#courses'],
    ['Why Us', '#why-us'],
    ['GenZ Developers', '#developers'],
    ['Testimonials', '#testimonials'],
    ['Founder', '#founder'],
    ['Contact', '#contact'],
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        :root{font-family:'DM Sans',sans-serif;color:#233047;background:#fffdf9;scroll-behavior:smooth}
        *{box-sizing:border-box}
        body{margin:0}
        a{color:inherit;text-decoration:none}
        button{font:inherit}
        .site{overflow:hidden}
        .container{width:min(1160px,92%);margin:auto}
        .topline{height:5px;background:linear-gradient(90deg,#e8a84b,#f4d9a0,#28665c)}
        header{position:sticky;top:0;z-index:20;background:rgba(255,253,249,.96);backdrop-filter:blur(14px);border-bottom:1px solid #eee8dd}
        .nav{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:20px}
        .brand{display:flex;align-items:center;gap:11px;font-family:Manrope,sans-serif;font-weight:800;font-size:18px;letter-spacing:-.5px}
        .brand-mark{width:44px;height:44px;border-radius:15px;display:grid;place-items:center;background:#245c52;color:#f4d59b;box-shadow:0 5px 14px #245c5222}
        .brand small{display:block;font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:2px;color:#778175;font-weight:700;margin-top:2px}
        .navlinks{display:flex;align-items:center;gap:19px;font-size:12px;font-weight:700;color:#566171}
        .navlinks a:hover{color:#bd8433}
        .nav-cta,.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border:0;border-radius:10px;padding:13px 18px;background:#245c52;color:white;font-weight:700;font-size:13px;transition:transform .2s,background .2s}
        .nav-cta:hover,.btn:hover{transform:translateY(-2px);background:#17473f}
        .btn-gold{background:#dca34b;color:#253047}
        .btn-gold:hover{background:#c68c33}
        .btn-outline{background:transparent;color:#245c52;border:1px solid #b9cfc7}
        .btn-outline:hover{background:#edf4ef;color:#245c52}
        .mobile-toggle{display:none;border:0;background:#f0eee7;border-radius:9px;padding:10px;color:#245c52}
        .hero{position:relative;background:radial-gradient(ellipse at 80% 25%,#f7e9cc 0,transparent 36%),linear-gradient(135deg,#fffdf9 0%,#f4f6ef 100%);padding:90px 0 82px}
        .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;align-items:center;gap:55px}
        .eyebrow{display:inline-block;text-transform:uppercase;letter-spacing:2.2px;font-size:10px;font-weight:800;color:#ad792f;margin-bottom:16px}
        h1,h2,h3{font-family:Manrope,sans-serif;letter-spacing:-1px}
        h1{font-size:clamp(38px,5.2vw,66px);line-height:1.1;margin:0 0 23px;color:#203047}
        h1 em{font-style:normal;color:#27665a}
        .hero-copy{font-size:16px;line-height:1.85;color:#697383;max-width:600px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
        .hero-note{margin-top:23px;color:#778175;font-size:12px}
        .hero-art{min-height:390px;position:relative;display:grid;place-items:center}
        .art-circle{width:min(350px,85vw);aspect-ratio:1;border-radius:50%;background:linear-gradient(145deg,#245c52,#163d38);display:grid;place-items:center;position:relative;box-shadow:0 35px 70px #245c5229}
        .art-inner{width:72%;aspect-ratio:1;border:1px solid #e8c7838c;border-radius:50%;display:grid;place-items:center;color:#f3d49a}
        .art-inner svg{width:46%;height:46%;stroke-width:1.1}
        .art-label{position:absolute;background:#fffdf9;border:1px solid #eee5d6;border-radius:15px;padding:14px 17px;box-shadow:0 14px 35px #273b3012;font-size:12px;font-weight:700;color:#344257}
        .art-label span{display:block;color:#7c8792;font-size:10px;font-weight:500;margin-top:4px}
        .label-one{left:0;top:55px}.label-two{right:-3px;bottom:70px}
        .trust-row{border-top:1px solid #ece7dc;border-bottom:1px solid #ece7dc;background:#fff;padding:20px 0}
        .trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;text-align:center}
        .trust-grid strong{display:block;color:#245c52;font-family:Manrope,sans-serif;font-size:15px}
        .trust-grid span{display:block;color:#7c8792;font-size:11px;margin-top:4px}
        section.content-section{padding:86px 0}
        .section-title{text-align:center;max-width:740px;margin:0 auto 42px}
        .section-title h2{font-size:clamp(29px,4vw,43px);line-height:1.2;margin:0 0 15px;color:#203047}
        .section-title p{font-size:14px;line-height:1.8;color:#778175;margin:0}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}
        .about-panel{background:#edf3ec;border-radius:25px;padding:35px}
        .about-panel h3{font-size:25px;margin:0 0 14px}
        .about-panel p,.about-copy p{font-size:14px;line-height:1.9;color:#6e7987}
        .about-points{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-top:25px}
        .point{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700}
        .point svg{color:#27715f;flex-shrink:0}
        .course-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:17px}
        .course-card,.price-card,.feature-card{background:white;border:1px solid #eee8dd;border-radius:17px;padding:23px;transition:transform .2s,box-shadow .2s}
        .course-card:hover,.price-card:hover,.feature-card:hover{transform:translateY(-4px);box-shadow:0 15px 38px #243e2c0b}
        .course-icon{width:42px;height:42px;border-radius:13px;display:grid;place-items:center;background:#edf4ef;color:#245c52;margin-bottom:17px}
        .course-card h3{font-size:17px;letter-spacing:-.3px;margin:0 0 9px}
        .course-card p{font-size:12px;line-height:1.7;color:#778175;min-height:61px}
        .course-meta{display:flex;justify-content:space-between;gap:10px;align-items:center;border-top:1px solid #f0ece4;padding-top:14px;margin-top:15px}
        .course-meta strong{color:#245c52;font-size:15px}
        .course-meta span{font-size:11px;color:#89918c}
        .course-link{display:inline-flex;align-items:center;gap:6px;margin-top:16px;color:#a9752c;font-size:12px;font-weight:800}
        .why-section{background:#f2f5ef}
        .feature-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .feature-card{background:#fffdf9}
        .feature-card h3{font-size:16px;letter-spacing:-.3px}
        .feature-card p{font-size:12px;line-height:1.8;color:#778175}
        .dev-intro{display:grid;grid-template-columns:1fr .8fr;gap:25px;align-items:end;margin-bottom:34px}
        .dev-intro h2{font-size:clamp(30px,4vw,43px);line-height:1.2;margin:0}
        .dev-intro p{font-size:13px;line-height:1.8;color:#778175}
        .pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:17px}
        .price-card{position:relative;padding:26px}
        .price-card.featured{border:2px solid #d9a44f;box-shadow:0 16px 40px #d9a44f18}
        .popular{display:inline-block;background:#f8e8c9;color:#84571c;padding:6px 9px;border-radius:20px;font-size:9px;font-weight:800;margin-bottom:12px}
        .price-card h3{font-size:16px;letter-spacing:.2px;text-transform:uppercase;margin:0 0 12px}
        .price{font-family:Manrope,sans-serif;font-size:29px;font-weight:800;color:#245c52;letter-spacing:-1px}
        .price-card>p{font-size:12px;line-height:1.7;color:#778175;min-height:42px}
        .price-card ul{list-style:none;padding:15px 0 0;margin:15px 0 20px;border-top:1px solid #eee8dd}
        .price-card li{display:flex;align-items:flex-start;gap:9px;font-size:11px;line-height:1.65;color:#586574;margin:11px 0}
        .price-card li svg{flex-shrink:0;color:#32806b;margin-top:2px}
        .price-card .btn{width:100%;font-size:11px;padding:12px 9px}
        .pricing-note{text-align:center;font-size:11px;color:#778175;line-height:1.8;margin:23px auto 0;max-width:800px}
        .service-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:28px}
        .service-box{padding:28px;border-radius:18px;background:#f1f5ef}
        .service-box.light{background:#fbf1df}
        .service-box h3{font-size:20px;margin:0 0 12px}
        .service-box p,.service-box li{font-size:12px;line-height:1.8;color:#6d7884}
        .service-box ul{padding-left:18px}
        .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .quote-card{padding:26px;border-radius:18px;background:#f4f5ef}
        .quote-card svg{color:#c28d3a}
        .quote-card h3{font-size:17px;letter-spacing:-.3px}
        .quote-card p{font-size:13px;line-height:1.8;color:#6e7987}
        .quote-card small{font-size:10px;color:#8b928c}
        .founder-section{background:#245c52;color:white}
        .founder-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:45px;align-items:center}
        .founder-mark{width:190px;height:190px;border:1px solid #e8c78388;border-radius:50%;display:grid;place-items:center;margin:auto;color:#f1d49b}
        .founder-mark svg{width:85px;height:85px;stroke-width:1}
        .founder-section .eyebrow{color:#f1d49b}
        .founder-section h2{font-size:clamp(30px,4vw,43px);margin:0 0 16px}
        .founder-section p{font-size:14px;line-height:1.9;color:#e0ebe5}
        .founder-name{font-weight:800;color:#f1d49b}
        .contact-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:35px}
        .contact-info{background:#f1f5ef;padding:30px;border-radius:20px}
        .contact-info h3{font-size:24px;margin-top:0}
        .contact-item{display:flex;gap:13px;align-items:flex-start;margin:23px 0;color:#245c52}
        .contact-item span{font-size:12px;color:#667383;line-height:1.7;overflow-wrap:anywhere}
        .contact-item strong{display:block;color:#26354a;font-size:13px}
        .contact-cta{padding:30px;border:1px solid #eee8dd;border-radius:20px}
        .contact-cta h3{font-size:25px;margin:0 0 12px}
        .contact-cta p{font-size:13px;line-height:1.8;color:#778175}
        footer{background:#192d2b;color:#e5ede8;padding:35px 0}
        .footer-row{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
        footer p{font-size:11px;color:#aabbb2;line-height:1.8}
        .footer-links{display:flex;gap:15px;flex-wrap:wrap;font-size:11px;color:#d8e2dc}
        .footer-links a:hover{color:#f1d49b}
        @media(max-width:1050px){.navlinks{gap:11px;font-size:11px}.nav-cta{padding:11px}.hero-grid{gap:25px}.feature-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:800px){.nav{min-height:70px}.mobile-toggle{display:inline-flex}.navlinks{display:none;position:absolute;top:70px;left:0;right:0;background:#fffdf9;border-bottom:1px solid #eee8dd;padding:20px 5%;flex-direction:column;align-items:stretch;gap:0}.navlinks.open{display:flex}.navlinks a{padding:12px 0;border-bottom:1px solid #f1ece4;font-size:13px}.navlinks .nav-cta{margin-top:12px}.hero{padding:58px 0}.hero-grid,.about-grid,.dev-intro,.founder-grid,.contact-grid{grid-template-columns:1fr}.hero-art{min-height:330px;max-width:500px;width:100%;margin:auto}.hero-copy{font-size:14px}.course-grid{grid-template-columns:repeat(2,1fr)}.pricing-grid{grid-template-columns:repeat(2,1fr)}.testimonials-grid{grid-template-columns:1fr}.dev-intro{gap:10px}.founder-mark{width:140px;height:140px}.founder-mark svg{width:65px;height:65px}}
        @media(max-width:520px){.container{width:90%}.brand{font-size:15px}.brand-mark{width:39px;height:39px}.hero-grid{gap:15px}h1{font-size:39px}.hero-art{min-height:285px}.art-circle{width:260px}.label-one{left:-2px;top:28px}.label-two{right:-2px;bottom:35px}.art-label{padding:10px 12px;font-size:10px}.trust-grid{grid-template-columns:1fr;gap:17px}.trust-grid strong{font-size:14px}section.content-section{padding:62px 0}.course-grid,.pricing-grid,.feature-grid,.service-grid{grid-template-columns:1fr}.course-card p,.price-card>p{min-height:0}.about-panel{padding:24px}.about-points{grid-template-columns:1fr}.section-title{margin-bottom:30px}.price-card{padding:23px}.footer-row{align-items:flex-start;flex-direction:column}}
      `}</style>

      <div className="site">
        <div className="topline" />
        <header>
          <div className="container nav">
            <a className="brand" href="#home" aria-label="GenZ Edu Tech home">
              <span className="brand-mark"><GraduationCap size={25} /></span>
              <span>GenZ Edu Tech<small>LEARN · BUILD · GROW</small></span>
            </a>

            <nav className={`navlinks ${menuOpen ? 'open' : ''}`}>
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
              <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
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
                <span className="eyebrow">Practical skills. Real-world thinking.</span>
                <h1>Build your skills.<br />Create your <em>future.</em></h1>
                <p className="hero-copy">
                  At GenZ Edu Tech, we help learners develop practical digital
                  skills and help businesses build a stronger online presence
                  through professional website development.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#courses">Explore Courses <ArrowRight size={16} /></a>
                  <a className="btn btn-outline" href="#developers">Build My Website <Globe size={16} /></a>
                </div>
                <p className="hero-note">Practical learning · Career development · Website solutions</p>
              </div>
              <div className="hero-art" aria-label="Learning and innovation illustration">
                <div className="art-circle">
                  <div className="art-inner"><GraduationCap /></div>
                </div>
                <div className="art-label label-one"><Sparkles size={15} /> Learn by doing<span>Practical-first approach</span></div>
                <div className="art-label label-two"><Code2 size={17} /> Create with confidence<span>Skills for a changing world</span></div>
              </div>
            </div>
          </section>

          <div className="trust-row">
            <div className="container trust-grid">
              <div><strong>Practical Learning</strong><span>Skills you can practise</span></div>
              <div><strong>Career Development</strong><span>Build confidence for your next step</span></div>
              <div><strong>Website Solutions</strong><span>Digital presence for businesses</span></div>
            </div>
          </div>

          <section className="content-section" id="about">
            <div className="container about-grid">
              <div className="about-copy">
                <span className="eyebrow">About GenZ Edu Tech</span>
                <h2 style={{ fontFamily: 'Manrope', fontSize: 'clamp(30px,4vw,43px)', lineHeight: 1.2, margin: '0 0 18px' }}>
                  Learning that moves you forward.
                </h2>
                <p>
                  GenZ Edu Tech is focused on practical education, digital skills,
                  career development and technology services. Our goal is to make
                  learning approachable and help learners take meaningful steps
                  towards their ambitions.
                </p>
                <p>
                  We also work with businesses that need modern websites to
                  present their services, communicate with customers and grow
                  their online presence.
                </p>
                <a className="btn" href="#contact">Connect With Us <ArrowRight size={15} /></a>
              </div>
              <div className="about-panel">
                <span className="eyebrow">Our approach</span>
                <h3>Learn with purpose. Build with confidence.</h3>
                <p>We combine accessible training with practical exercises and a focus on skills that can be developed over time.</p>
                <div className="about-points">
                  {['Beginner-friendly guidance', 'Practical exercises', 'Career-focused learning', 'Business website solutions'].map(item => (
                    <div className="point" key={item}><Check size={16} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="content-section" id="courses" style={{ background: '#fffaf1' }}>
            <div className="container">
              <SectionTitle
                eyebrow="Explore our courses"
                title="Skills for your next opportunity"
                description="Explore our training options in digital marketing, programming, freelancing, AI tools and career preparation."
              />
              <div className="course-grid">
                {courses.map((course, index) => (
                  <article className="course-card" key={course.name}>
                    <div className="course-icon">
                      {index % 3 === 0 ? <Lightbulb size={21} /> : index % 3 === 1 ? <Code2 size={21} /> : <GraduationCap size={21} />}
                    </div>
                    <h3>{course.name}</h3>
                    <p>{course.description}</p>
                    <div className="course-meta">
                      <span>{course.duration}</span><strong>{course.price}</strong>
                    </div>
                    <a className="course-link" href={whatsapp(`Hello GenZ Edu Tech, I would like to know more about the ${course.name} course (${course.price}). Please share the syllabus, schedule and enrolment details.`)} target="_blank" rel="noreferrer">
                      Enquire About Course <ArrowRight size={14} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section why-section" id="why-us">
            <div className="container">
              <SectionTitle
                eyebrow="Why GenZ Edu Tech"
                title="Designed around your growth"
                description="Our focus is on making the learning process practical, supportive and relevant to your goals."
              />
              <div className="feature-grid">
                {[
                  { icon: <GraduationCap size={23} />, title: 'Structured Learning', text: 'Follow a learning path from foundational concepts towards more advanced skills.' },
                  { icon: <Code2 size={23} />, title: 'Hands-on Practice', text: 'Apply concepts through exercises and practical activities wherever appropriate.' },
                  { icon: <BriefcaseBusiness size={23} />, title: 'Career Preparation', text: 'Develop professional communication, job-readiness and freelancing awareness.' },
                  { icon: <Lightbulb size={23} />, title: 'Practical Guidance', text: 'Get clarity on the skills, projects and next steps that match your goals.' },
                ].map(feature => (
                  <article className="feature-card" key={feature.title}>
                    <div className="course-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section" id="developers">
            <div className="container">
              <div className="dev-intro">
                <div>
                  <span className="eyebrow">GenZ Developers</span>
                  <h2>Need a website for your business?</h2>
                </div>
                <p>
                  We design modern, professional and mobile-friendly websites
                  that help businesses showcase services and connect with
                  customers. We can discuss a new website or a redesign of your
                  existing one.
                </p>
              </div>

              <div className="pricing-grid">
                {packages.map((pkg, index) => (
                  <article className={`price-card ${index === 1 ? 'featured' : ''}`} key={pkg.name}>
                    {index === 1 && <span className="popular">Popular Choice</span>}
                    <h3>{pkg.name}</h3>
                    <div className="price">{pkg.price}</div>
                    <p>{pkg.description}</p>
                    <ul>
                      {pkg.features.map(feature => (
                        <li key={feature}><Check size={15} />{feature}</li>
                      ))}
                    </ul>
                    <a
                      className={`btn ${index === 1 ? 'btn-gold' : ''}`}
                      href={whatsapp(`Hello GenZ Edu Tech, I would like to enquire about your ${pkg.name} package (${pkg.price}). Please share the scope, timeline, domain and hosting costs, and quotation details.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Discuss This Package <ArrowRight size={14} />
                    </a>
                  </article>
                ))}
              </div>

              <p className="pricing-note">
                Prices are indicative and subject to the agreed scope. Domain registration,
                hosting subscriptions, paid plugins, APIs, payment gateway fees and other
                third-party charges may be additional. Backend, database and custom
                integrations will be scoped before work begins.
              </p>

              <div className="service-grid">
                <article className="service-box">
                  <span className="eyebrow">Domain & hosting</span>
                  <h3>Your website, online</h3>
                  <p>We can help you understand domain registration and choose suitable hosting for your requirements.</p>
                  <ul>
                    <li>Domain registration and renewal guidance</li>
                    <li>Hosting setup based on website requirements</li>
                    <li>SSL and deployment configuration where supported</li>
                    <li>Third-party service costs explained in advance</li>
                  </ul>
                  <a className="btn" href={whatsapp('Hello GenZ Edu Tech, I would like advice on domain registration and hosting for my website.')} target="_blank" rel="noreferrer">
                    Ask About Hosting <ArrowRight size={14} />
                  </a>
                </article>
                <article className="service-box light">
                  <span className="eyebrow">Ongoing support</span>
                  <h3>Keep your website up to date</h3>
                  <div className="price">From ₹1,499 / month</div>
                  <p>Optional maintenance packages can include agreed content updates and basic technical support.</p>
                  <ul>
                    <li>Website text and content changes</li>
                    <li>Basic functionality checks</li>
                    <li>Technical support within agreed scope</li>
                    <li>New features quoted separately</li>
                  </ul>
                  <a className="btn" href={whatsapp('Hello GenZ Edu Tech, I would like to discuss website maintenance from ₹1,499 per month. Please share the scope and terms.')} target="_blank" rel="noreferrer">
                    Discuss Maintenance <ArrowRight size={14} />
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section className="content-section" id="testimonials" style={{ background: '#fffaf1' }}>
            <div className="container">
              <SectionTitle
                eyebrow="Our commitment"
                title="What you can expect from us"
                description="We aim to create a positive learning and project experience through clear communication and practical guidance."
              />
              <div className="testimonials-grid">
                {[
                  { title: 'Clear Communication', text: 'We discuss your learning goals or website requirements so expectations are clear before we begin.', tag: 'Our promise' },
                  { title: 'Practical Focus', text: 'Our approach emphasises practice, useful skills and a clear understanding of the work involved.', tag: 'Our approach' },
                  { title: 'Transparent Scope', text: 'For website projects, we clarify deliverables, pricing, third-party costs and support before work begins.', tag: 'Our process' },
                ].map(item => (
                  <article className="quote-card" key={item.title}>
                    <Sparkles size={21} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <small>{item.tag}</small>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="content-section founder-section" id="founder">
            <div className="container founder-grid">
              <div className="founder-mark"><GraduationCap /></div>
              <div>
                <span className="eyebrow">A note from our founder</span>
                <h2>Helping people learn, create and grow.</h2>
                <p>
                  GenZ Edu Tech was built around the idea that practical skills
                  and access to guidance can help people take the next step in
                  their careers. We bring together learning, career development
                  and digital solutions for businesses.
                </p>
                <p>
                  Our goal is to keep improving the way we teach, build and
                  support our learners and clients—with a focus on useful work,
                  clear communication and continuous growth.
                </p>
                <div className="founder-name">Megadharshini Kandhan</div>
                <div style={{ color: '#d1e2d9', fontSize: 12, marginTop: 5 }}>Founder & Business Operations Lead · GenZ Edu Tech</div>
              </div>
            </div>
          </section>

          <section className="content-section" id="contact">
            <div className="container">
              <SectionTitle
                eyebrow="Get in touch"
                title="Let's discuss your next step"
                description="Ask us about courses, career development or a website for your business."
              />
              <div className="contact-grid">
                <div className="contact-info">
                  <h3>Contact GenZ Edu Tech</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.8, color: '#778175' }}>
                    Send us your questions and tell us what you would like to achieve.
                  </p>
                  <div className="contact-item"><Phone size={20} /><span><strong>Phone / WhatsApp</strong><a href="https://wa.me/916369216076">+91 63692 16076</a></span></div>
                  <div className="contact-item"><Mail size={20} /><span><strong>Email</strong><a href="mailto:megakandhan0@gmail.com">megakandhan0@gmail.com</a></span></div>
                  <div className="contact-item"><Globe size={20} /><span><strong>Website</strong>GenZ Edu Tech</span></div>
                </div>
                <div className="contact-cta">
                  <span className="eyebrow">Start a conversation</span>
                  <h3>How can we help you?</h3>
                  <p>Choose an option below and send us a WhatsApp message. We can discuss your requirements and the next steps.</p>
                  <div style={{ display: 'grid', gap: 12, marginTop: 24 }}>
                    <a className="btn" href={whatsapp('Hello GenZ Edu Tech, I would like to enquire about your courses. Please share the available options and details.')} target="_blank" rel="noreferrer">
                      <GraduationCap size={17} /> Course Enquiry <ArrowRight size={15} />
                    </a>
                    <a className="btn btn-gold" href={whatsapp('Hello GenZ Edu Tech, I need a website for my business. I would like to discuss my requirements and see a sample design.')} target="_blank" rel="noreferrer">
                      <Code2 size={17} /> Website Development <ArrowRight size={15} />
                    </a>
                    <a className="btn btn-outline" href="mailto:megakandhan0@gmail.com">
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
                <span className="brand-mark"><GraduationCap size={24} /></span>
                <span>GenZ Edu Tech<small style={{ color: '#b6c9bf' }}>LEARN · BUILD · GROW</small></span>
              </a>
              <p>Practical learning, career development and digital solutions.</p>
              <p>© {new Date().getFullYear()} GenZ Edu Tech. All rights reserved.</p>
            </div>
            <div className="footer-links">
              {navLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
