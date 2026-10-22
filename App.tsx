
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
          color: #26384a;
          background: #fffdf9;
          scroll-behavior: smooth;
          --green: #205c50;
          --green-dark: #143f38;
          --gold: #e2ae59;
          --cream: #fff8eb;
          --muted: #718078;
          --border: #e9e8df;
        }

        * { box-sizing: border-box; }
        body { margin: 0; }
        a { color: inherit; text-decoration: none; }
        button, input { font: inherit; }
        button { cursor: pointer; }
        img { max-width: 100%; }
        .site { overflow: hidden; }
        .container { width: min(1160px, 92%); margin: auto; }
        .topline { height: 5px; background: linear-gradient(90deg, #205c50, #e2ae59, #a9c7b7); }

        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,253,249,.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
        }

        .nav {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
        }

        .brand { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
        .brand-logo {
          width: 53px;
          height: 53px;
          object-fit: contain;
          border-radius: 50%;
          background: white;
        }
        .brand-name {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          letter-spacing: -.6px;
          font-size: 17px;
          color: var(--green-dark);
        }
        .brand-tag {
          display: block;
          margin-top: 3px;
          color: #8a806c;
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .nav-links { display: flex; align-items: center; gap: 17px; }
        .nav-links > a:not(.btn) {
          color: #59675f;
          font-size: 11px;
          font-weight: 700;
          transition: color .2s;
        }
        .nav-links > a:hover { color: #b27b2e; }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 1px solid transparent;
          border-radius: 10px;
          padding: 13px 17px;
          background: var(--green);
          color: white;
          font-size: 12px;
          font-weight: 800;
          transition: transform .2s, box-shadow .2s, background .2s;
          text-align: center;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px #205c5025;
          background: var(--green-dark);
        }
        .btn-gold { background: var(--gold); color: #26384a; }
        .btn-gold:hover { background: #d39b3f; color: #26384a; }
        .btn-light { background: white; color: var(--green); border-color: #dce7df; }
        .btn-light:hover { background: #f1f6f1; color: var(--green); }
        .btn-small { padding: 11px 13px; font-size: 11px; }
        .mobile-toggle {
          display: none;
          border: 1px solid var(--border);
          background: white;
          color: var(--green);
          padding: 10px;
          border-radius: 10px;
        }

        .hero {
          position: relative;
          padding: 82px 0 76px;
          background:
            radial-gradient(ellipse at 85% 25%, #f6e7c8 0, transparent 33%),
            radial-gradient(ellipse at 8% 85%, #e1eee4 0, transparent 35%),
            linear-gradient(130deg, #fffdf9 10%, #f6f7ef 100%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          align-items: center;
          gap: 48px;
        }
        .eyebrow {
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 2.1px;
          font-size: 10px;
          font-weight: 800;
          color: #ad7b35;
          margin-bottom: 14px;
        }
        h1, h2, h3 { font-family: Manrope, sans-serif; }
        .hero h1 {
          font-size: clamp(40px, 5.2vw, 67px);
          line-height: 1.08;
          letter-spacing: -2.8px;
          margin: 0 0 22px;
          color: #20374a;
        }
        .hero h1 em { color: var(--green); font-style: normal; }
        .hero-copy {
          max-width: 590px;
          color: #69786f;
          font-size: 15px;
          line-height: 1.9;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
        .hero-footnote { color: #7d897f; font-size: 11px; margin-top: 22px; }
        .hero-visual {
          position: relative;
          min-height: 400px;
          display: grid;
          place-items: center;
        }
        .hero-orbit {
          width: min(345px, 80vw);
          aspect-ratio: 1;
          border-radius: 50%;
          background: linear-gradient(145deg, #2c7565, #143f38);
          display: grid;
          place-items: center;
          position: relative;
          box-shadow: 0 30px 70px #205c5028;
        }
        .hero-orbit::before {
          content: '';
          position: absolute;
          inset: 17px;
          border: 1px solid #f1d69a8c;
          border-radius: 50%;
        }
        .hero-orbit img {
          width: 64%;
          height: 64%;
          object-fit: contain;
          border-radius: 50%;
          background: white;
          padding: 12px;
        }
        .float-card {
          position: absolute;
          display: flex;
          gap: 10px;
          align-items: center;
          padding: 13px 16px;
          background: white;
          border: 1px solid #eee8dc;
          border-radius: 14px;
          box-shadow: 0 16px 40px #1b382516;
          color: var(--green);
          font-size: 12px;
          font-weight: 800;
        }
        .float-card small { display: block; font-size: 10px; color: #829087; font-weight: 500; margin-top: 4px; }
        .float-one { left: -4px; top: 55px; }
        .float-two { right: -4px; bottom: 53px; }

        .trust-band { padding: 22px 0; background: white; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .trust-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; text-align: center; }
        .trust-grid strong { display: block; font-family: Manrope, sans-serif; font-size: 14px; color: var(--green); }
        .trust-grid span { display: block; margin-top: 5px; font-size: 11px; color: #7c887f; }

        .section { padding: 84px 0; scroll-margin-top: 85px; }
        .section-heading { max-width: 760px; text-align: center; margin: 0 auto 42px; }
        .section-heading h2 {
          font-size: clamp(29px, 4vw, 44px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          color: #20374a;
          margin: 0 0 14px;
        }
        .section-heading p { margin: 0; font-size: 13px; line-height: 1.9; color: var(--muted); }
        .section-heading .eyebrow { margin-bottom: 12px; }

        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 42px; align-items: center; }
        .about-copy h2 { font-size: clamp(30px,4vw,43px); line-height: 1.2; letter-spacing: -1.6px; margin: 0 0 18px; }
        .about-copy p { font-size: 13px; line-height: 1.95; color: var(--muted); }
        .about-panel {
          padding: 32px;
          border-radius: 24px;
          background: linear-gradient(140deg, #eef5ed, #faf4e7);
          border: 1px solid #e6e9dc;
        }
        .about-panel h3 { margin: 0 0 12px; font-size: 24px; line-height: 1.3; }
        .about-panel p { color: #728077; font-size: 13px; line-height: 1.8; }
        .check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px 10px; margin-top: 24px; }
        .check-item { display: flex; gap: 8px; align-items: flex-start; font-size: 11px; font-weight: 700; line-height: 1.6; }
        .check-item svg { color: var(--green); flex-shrink: 0; }

        .courses-section { background: #fff9ef; }
        .filters { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin: -14px 0 30px; }
        .filter-btn {
          border: 1px solid #e6e5db;
          background: white;
          color: #65736a;
          border-radius: 25px;
          padding: 9px 14px;
          font-size: 11px;
          font-weight: 700;
        }
        .filter-btn.active { background: var(--green); color: white; border-color: var(--green); }
        .course-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
        .course-card {
          display: flex;
          flex-direction: column;
          padding: 23px;
          background: white;
          border: 1px solid #eee8dd;
          border-radius: 18px;
          box-shadow: 0 5px 18px #243e2c04;
          transition: transform .22s, box-shadow .22s;
        }
        .course-card:hover { transform: translateY(-4px); box-shadow: 0 16px 35px #243e2c10; }
        .course-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 13px; background: #edf4ee; color: var(--green); margin-bottom: 16px; }
        .course-category { color: #ad7b35; font-size: 9px; text-transform: uppercase; letter-spacing: 1.3px; font-weight: 800; }
        .course-card h3 { font-size: 16px; letter-spacing: -.3px; line-height: 1.4; margin: 8px 0 9px; }
        .course-card p { color: #77837a; font-size: 11px; line-height: 1.8; margin: 0 0 15px; }
        .course-meta { display: flex; justify-content: space-between; gap: 8px; align-items: center; padding: 13px 0; border-top: 1px solid #f0ede6; margin-top: auto; }
        .course-duration { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: #68766e; }
        .course-price { font-family: Manrope, sans-serif; font-size: 20px; font-weight: 800; color: var(--green); }
        .course-card .btn { width: 100%; margin-top: 5px; }

        .why-section { background: #f0f5ef; }
        .feature-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .feature-card { padding: 23px; background: #fffdf9; border: 1px solid #e8eadf; border-radius: 17px; }
        .feature-card h3 { font-size: 15px; letter-spacing: -.3px; }
        .feature-card p { font-size: 11px; line-height: 1.8; color: var(--muted); }

        .crt-section { background: linear-gradient(140deg, #183f38, #245e51); color: white; }
        .crt-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 42px; align-items: center; }
        .crt-section .eyebrow { color: #f0cc86; }
        .crt-section h2 { font-size: clamp(31px,4vw,45px); line-height: 1.2; letter-spacing: -1.5px; margin: 0 0 17px; }
        .crt-section p { color: #d4e3db; font-size: 13px; line-height: 1.9; }
        .crt-list { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 12px; margin: 24px 0 29px; }
        .crt-list .check-item { color: #f0f4ef; }
        .crt-list .check-item svg { color: #f0cc86; }
        .crt-panel { background: #fffdf9; color: #26384a; padding: 28px; border-radius: 22px; }
        .crt-panel h3 { margin: 0 0 10px; font-size: 23px; }
        .crt-panel p { color: #758178; }
        .crt-panel .course-icon { width: 50px; height: 50px; }

        .dev-intro { display: grid; grid-template-columns: 1fr .85fr; gap: 28px; align-items: end; margin-bottom: 34px; }
        .dev-intro h2 { font-size: clamp(30px,4vw,43px); line-height: 1.2; letter-spacing: -1.5px; margin: 0; }
        .dev-intro p { font-size: 13px; line-height: 1.9; color: var(--muted); }
        .pricing-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 17px; }
        .price-card { padding: 25px; border-radius: 18px; border: 1px solid var(--border); background: white; display: flex; flex-direction: column; }
        .price-card.featured { border: 2px solid var(--gold); box-shadow: 0 14px 36px #dba64b17; }
        .popular { align-self: flex-start; background: #f8e8c9; color: #84571c; padding: 6px 10px; border-radius: 20px; font-size: 9px; font-weight: 800; margin-bottom: 12px; }
        .price-card h3 { text-transform: uppercase; font-size: 14px; letter-spacing: .3px; }
        .price { font-family: Manrope, sans-serif; font-size: 28px; font-weight: 800; color: var(--green); }
        .price-card > p { font-size: 11px; line-height: 1.8; color: var(--muted); min-height: 40px; }
        .price-card ul { list-style: none; padding: 14px 0; margin: 10px 0 15px; border-top: 1px solid var(--border); flex: 1; }
        .price-card li { display: flex; gap: 8px; align-items: flex-start; font-size: 11px; line-height: 1.7; color: #5f6e64; margin: 10px 0; }
        .price-card li svg { flex-shrink: 0; color: #2c856d; margin-top: 2px; }
        .pricing-note { text-align: center; max-width: 850px; margin: 23px auto 0; color: #7b867e; font-size: 11px; line-height: 1.8; }
        .service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 28px; }
        .service-box { padding: 28px; border-radius: 18px; background: #f0f5ef; }
        .service-box.light { background: #fff3df; }
        .service-box h3 { font-size: 21px; margin: 0 0 10px; }
        .service-box p, .service-box li { font-size: 11px; line-height: 1.9; color: #68776e; }
        .service-box ul { padding-left: 18px; }

        .commitment-section { background: #fff9ef; }
        .commitment-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 17px; }
        .commitment-card { padding: 26px; background: white; border: 1px solid var(--border); border-radius: 18px; }
        .commitment-card svg { color: #b78337; }
        .commitment-card h3 { font-size: 16px; }
        .commitment-card p { font-size: 12px; line-height: 1.9; color: var(--muted); }

        .founder-section { background: #f0f5ef; }
        .founder-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 55px; align-items: center; }
        .founder-photo-wrap { position: relative; max-width: 370px; margin: auto; }
        .founder-photo-frame { background: #dce9dc; padding: 13px; border-radius: 28px; transform: rotate(-2deg); }
        .founder-photo { width: 100%; aspect-ratio: 4/5; object-fit: cover; object-position: center top; display: block; border-radius: 19px; transform: rotate(2deg); }
        .founder-caption { position: relative; margin: -30px -8px 0 24px; padding: 17px 19px; background: white; border: 1px solid var(--border); border-radius: 14px; box-shadow: 0 10px 30px #203d2810; }
        .founder-caption strong { display: block; font-family: Manrope, sans-serif; color: var(--green); font-size: 14px; }
        .founder-caption span { display: block; margin-top: 5px; font-size: 10px; color: #79867d; }
        .founder-copy h2 { font-size: clamp(30px,4vw,43px); line-height: 1.2; letter-spacing: -1.5px; margin: 0 0 16px; }
        .founder-copy p { font-size: 13px; line-height: 1.95; color: #6c7a70; }

        .contact-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 22px; }
        .contact-info, .contact-action { padding: 30px; border-radius: 20px; border: 1px solid var(--border); }
        .contact-info { background: #f0f5ef; }
        .contact-info h3, .contact-action h3 { font-size: 23px; margin: 0 0 12px; }
        .contact-info > p, .contact-action > p { color: var(--muted); font-size: 12px; line-height: 1.9; }
        .contact-item { display: flex; gap: 13px; align-items: flex-start; margin-top: 23px; color: var(--green); }
        .contact-item svg { flex-shrink: 0; }
        .contact-item strong { display: block; color: #26384a; font-size: 12px; margin-bottom: 5px; }
        .contact-item span { color: #6d7b71; font-size: 12px; line-height: 1.7; overflow-wrap: anywhere; }
        .contact-buttons { display: grid; gap: 11px; margin-top: 23px; }

        footer { background: #17352f; color: #e7eee8; padding: 35px 0; }
        .footer-row { display: flex; justify-content: space-between; gap: 24px; align-items: center; flex-wrap: wrap; }
        .footer-row p { font-size: 11px; line-height: 1.8; color: #b4c7bb; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 14px; }
        .footer-links a { font-size: 10px; color: #d6e3da; }
        .footer-links a:hover { color: #f1cc84; }
        .footer-logo { width: 48px; height: 48px; object-fit: contain; border-radius: 50%; background: white; }

        @media(max-width:1100px) {
          .nav-links { gap: 10px; }
          .nav-links > a:not(.btn) { font-size: 10px; }
          .brand-name { font-size: 15px; }
          .brand-logo { width: 45px; height: 45px; }
          .feature-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media(max-width:850px) {
          .nav { min-height: 72px; }
          .mobile-toggle { display: inline-flex; }
          .nav-links {
            display: none;
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            padding: 15px 5% 22px;
            background: #fffdf9;
            border-bottom: 1px solid var(--border);
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .nav-links.open { display: flex; }
          .nav-links > a:not(.btn) { padding: 13px 0; border-bottom: 1px solid #f0ede5; font-size: 13px; }
          .nav-links .btn { margin-top: 13px; }
          .hero { padding: 58px 0; }
          .hero-grid, .about-grid, .crt-grid, .dev-intro, .founder-grid, .contact-grid { grid-template-columns: 1fr; }
          .hero-grid { gap: 20px; }
          .hero-visual { min-height: 340px; max-width: 520px; width: 100%; margin: auto; }
          .hero-copy { font-size: 14px; }
          .course-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .pricing-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .founder-grid { gap: 35px; }
          .founder-photo-wrap { width: min(340px, 100%); }
          .dev-intro { gap: 8px; }
          .crt-grid { gap: 20px; }
        }
        @media(max-width:540px) {
          .container { width: 90%; }
          .brand-name { font-size: 14px; }
          .brand-tag { font-size: 8px; letter-spacing: 1.4px; }
          .brand-logo { width: 42px; height: 42px; }
          .hero h1 { font-size: 42px; letter-spacing: -2px; }
          .hero-visual { min-height: 290px; }
          .hero-orbit { width: 255px; }
          .float-card { padding: 10px 11px; font-size: 10px; }
          .float-card small { font-size: 9px; }
          .float-one { left: -2px; top: 25px; }
          .float-two { right: -2px; bottom: 27px; }
          .trust-grid { grid-template-columns: 1fr; gap: 18px; }
          .section { padding: 62px 0; }
          .section-heading { margin-bottom: 30px; }
          .section-heading h2 { letter-spacing: -1px; }
          .course-grid, .pricing-grid, .feature-grid, .service-grid, .commitment-grid { grid-template-columns: 1fr; }
          .course-card p { min-height: 0; }
          .course-meta { align-items: center; }
          .check-grid, .crt-list { grid-template-columns: 1fr; }
          .about-panel, .service-box, .contact-info, .contact-action { padding: 23px; }
          .filters { justify-content: flex-start; }
          .filter-btn { font-size: 10px; }
          .footer-row { align-items: flex-start; flex-direction: column; }
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
