
import { useState } from 'react';
import companyLogo from './assets/genz-logo.png';
import founderPhoto from './assets/founder-megadharshini.png';
import {
  ArrowRight,
  Check,
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
const EMAIL = 'genzedutech@gmail.com';
const WEBSITE = 'https://genzedutech.in';
const INSTAGRAM = 'https://www.instagram.com/genz_edu_tech/';

const courses = [
  {
    name: 'Digital Marketing',
    duration: '30 days',
    fee: 2999,
    category: 'Digital Skills',
    description:
      'Learn SEO, digital strategy, campaign planning and practical marketing.',
    icon: Lightbulb,
  },
  {
    name: 'Social Media Management',
    duration: '30 days',
    fee: 2499,
    category: 'Digital Skills',
    description:
      'Learn content planning, social media management and audience engagement.',
    icon: Globe,
  },
  {
    name: 'Content Writing',
    duration: '20 days',
    fee: 1999,
    category: 'Digital Skills',
    description:
      'Build writing, copywriting and digital content creation skills.',
    icon: BookOpen,
  },
  {
    name: 'AI Tools & Applications',
    duration: '60 days',
    fee: 8999,
    category: 'Digital Skills',
    description:
      'Practise using AI tools for productivity, content creation and digital workflows.',
    icon: Sparkles,
  },
  {
    name: 'Freelancing & Client Acquisition',
    duration: '20 days',
    fee: 2499,
    category: 'Career Skills',
    description:
      'Learn to present your skills, approach clients and prepare professional proposals.',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Python Programming',
    duration: '60 days',
    fee: 14999,
    category: 'Programming',
    description:
      'Develop programming foundations through structured coding practice.',
    icon: Code2,
  },
  {
    name: 'Java Programming',
    duration: '90 days',
    fee: 14499,
    category: 'Programming',
    description:
      'Learn Java fundamentals, object-oriented programming and coding concepts.',
    icon: Laptop,
  },
  {
    name: 'HTML & CSS Web Development',
    duration: '30 days',
    fee: 7999,
    category: 'Programming',
    description:
      'Create responsive websites and learn modern web layout fundamentals.',
    icon: Code2,
  },
  {
    name: 'Quantitative Aptitude',
    duration: '20 days',
    fee: 1999,
    category: 'Placement Preparation',
    description:
      'Practise numerical reasoning and common placement aptitude topics.',
    icon: Target,
  },
  {
    name: 'Verbal Ability',
    duration: '20 days',
    fee: 1499,
    category: 'Placement Preparation',
    description:
      'Strengthen grammar, comprehension and verbal reasoning.',
    icon: BookOpen,
  },
  {
    name: 'Placement Training',
    duration: '30 days',
    fee: 3999,
    category: 'Placement Preparation',
    description:
      'Prepare for aptitude tests, interviews and professional communication.',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Career Awareness',
    duration: '7 days',
    fee: 499,
    category: 'Career Skills',
    description:
      'Explore career pathways, skill requirements and practical next steps.',
    icon: GraduationCap,
  },
];

const websitePackages = [
  {
    name: 'Essential Website',
    price: '₹9,999',
    description: 'A professional starting point for small businesses.',
    features: [
      'Up to 3 pages',
      'Responsive website design',
      'About, services and contact sections',
      'WhatsApp contact button',
      'Basic on-page SEO',
      'Deployment labour',
    ],
  },
  {
    name: 'Business Website',
    price: '₹14,999',
    description: 'A stronger digital presence for growing businesses.',
    features: [
      'Up to 6 pages',
      'Custom branded design',
      'Enquiry and WhatsApp integration',
      'Basic SEO setup',
      'Mobile optimisation',
      'Deployment and launch testing',
    ],
  },
  {
    name: 'Premium Business',
    price: '₹24,999',
    description: 'A distinctive website for established businesses.',
    features: [
      'Up to 10 pages',
      'Custom design and animations',
      'Portfolio or service sections',
      'Enquiry integration',
      'SEO foundations',
      'Performance optimisation',
    ],
  },
  {
    name: 'E-commerce Website',
    price: 'From ₹39,999',
    description: 'For businesses selling products online.',
    features: [
      'Product catalogue',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Order management setup',
      'Responsive storefront',
      'Testing and deployment',
    ],
  },
  {
    name: 'Custom Web Application',
    price: 'From ₹59,999',
    description: 'For custom portals, dashboards and workflows.',
    features: [
      'Custom frontend and backend',
      'Database and authentication if required',
      'Admin dashboard',
      'Business-specific workflows',
      'Integration testing',
      'Deployment planning',
    ],
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

        body {
          margin: 0;
          background: #f8faff;
          color: #16325c;
        }

        body, button, input, textarea, select {
          font-family: 'DM Sans', sans-serif;
        }

        img {
          max-width: 100%;
        }

        a {
          transition: color 180ms ease, background 180ms ease,
            border-color 180ms ease, transform 180ms ease;
        }

        button {
          cursor: pointer;
        }

        .site {
          background: #f8faff;
          color: #16325c;
          overflow: hidden;
        }

        .topline {
          height: 4px;
          background: linear-gradient(
            90deg, #061d44, #1d6dff, #f4b400, #ffd95a
          );
        }

        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #dfe6f2;
        }

        .container {
          width: min(1160px, calc(100% - 48px));
          margin-inline: auto;
        }

        .nav {
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .brand-logo,
        .footer-logo {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: contain;
          background: white;
          border: 1px solid #e4eaf5;
          padding: 4px;
          box-sizing: border-box;
        }

        .brand-name {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .brand-tag {
          color: #a77500;
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 800;
        }

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 22px;
        }

        .nav-links > a:not(.btn) {
          color: #465873;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-links > a:not(.btn):hover {
          color: #1d6dff;
        }

        .mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          color: #0a2f6b;
          background: #f0f4ff;
          border: 1px solid #dfe6f2;
          border-radius: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 19px;
          box-sizing: border-box;
          border: 1px solid #0a2f6b;
          border-radius: 10px;
          background: #0a2f6b;
          color: white;
          text-decoration: none;
          text-align: center;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.35;
          box-shadow: 0 6px 16px #0a2f6b12;
        }

        .btn:hover {
          background: #061d44;
          border-color: #061d44;
          color: white;
          transform: translateY(-1px);
        }

        .btn-small {
          min-height: 40px;
          padding: 0 14px;
          border-radius: 9px;
          font-size: 11px;
        }

        .btn-gold {
          background: #f4b400;
          color: #061d44;
          border-color: #f4b400;
        }

        .btn-gold:hover {
          background: #ffd95a;
          color: #061d44;
          border-color: #ffd95a;
        }

        .btn-light {
          background: white;
          color: #0a2f6b;
          border-color: #d5e1f5;
        }

        .btn-light:hover {
          background: #eef3ff;
          color: #061d44;
          border-color: #b9cae8;
        }

        .hero {
          position: relative;
          padding: 92px 0 86px;
          background:
            radial-gradient(ellipse at 85% 25%, #fff0bf 0, transparent 35%),
            radial-gradient(ellipse at 8% 85%, #e5edff 0, transparent 38%),
            linear-gradient(135deg, #ffffff, #f3f6ff);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          align-items: center;
          gap: 70px;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: #a77500;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 0;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(42px, 5.5vw, 68px);
          font-weight: 800;
          letter-spacing: -3px;
          line-height: 1.08;
        }

        .hero h1 em {
          color: #1d6dff;
          font-style: normal;
        }

        .hero-copy {
          max-width: 590px;
          margin: 25px 0 0;
          color: #5d6f89;
          font-size: 16px;
          line-height: 1.9;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .hero-footnote {
          margin-top: 22px;
          color: #63748c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .hero-visual {
          position: relative;
          display: flex;
          min-height: 380px;
          align-items: center;
          justify-content: center;
        }

        .hero-orbit {
          position: relative;
          display: flex;
          width: min(310px, 76vw);
          aspect-ratio: 1;
          align-items: center;
          justify-content: center;
          border: 12px solid #ffffffa8;
          border-radius: 50%;
          background: linear-gradient(145deg, #1d6dff, #061d44);
          box-shadow: 0 30px 70px #0a2f6b24;
        }

        .hero-orbit::before {
          position: absolute;
          inset: -30px;
          border: 1px solid #1d6dff35;
          border-radius: 50%;
          content: '';
        }

        .hero-orbit img {
          width: 72%;
          height: 72%;
          border-radius: 50%;
          object-fit: contain;
          background: #ffffff;
          padding: 14px;
          box-sizing: border-box;
        }

        .float-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 205px;
          padding: 15px 17px;
          border: 1px solid #e3eaf6;
          border-radius: 15px;
          background: #ffffff;
          color: #1d6dff;
          box-shadow: 0 15px 45px #0a2f6b14;
          font-size: 12px;
          font-weight: 800;
        }

        .float-card small {
          display: block;
          margin-top: 4px;
          color: #63748c;
          font-size: 10px;
          font-weight: 500;
          line-height: 1.5;
        }

        .float-one {
          top: 46px;
          left: -12px;
        }

        .float-two {
          right: -8px;
          bottom: 44px;
        }

        .trust-band {
          border-top: 1px solid #dfe6f2;
          border-bottom: 1px solid #dfe6f2;
          background: white;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding-block: 24px;
        }

        .trust-grid > div {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 3px 25px;
          border-right: 1px solid #e8edf6;
        }

        .trust-grid > div:first-child {
          padding-left: 0;
        }

        .trust-grid > div:last-child {
          border-right: 0;
        }

        .trust-grid strong {
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
        }

        .trust-grid span {
          color: #63748c;
          font-size: 11px;
          line-height: 1.6;
        }

        .section {
          padding: 90px 0;
          scroll-margin-top: 90px;
        }

        .section-heading {
          max-width: 730px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .section-heading .eyebrow {
          margin-bottom: 12px;
        }

        .section-heading h2,
        .about-copy h2,
        .dev-intro h2,
        .founder-copy h2,
        .crt-grid h2 {
          margin: 0;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: clamp(30px, 4vw, 43px);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.2;
        }

        .section-heading > p {
          max-width: 660px;
          margin: 16px auto 0;
          color: #63748c;
          font-size: 14px;
          line-height: 1.85;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          align-items: center;
          gap: 65px;
        }

        .about-copy h2 {
          margin-bottom: 20px;
        }

        .about-copy p,
        .founder-copy p,
        .dev-intro > p,
        .crt-grid > div > p {
          color: #5e7089;
          font-size: 14px;
          line-height: 1.95;
        }

        .about-copy .btn {
          margin-top: 14px;
        }

        .about-panel {
          padding: 35px;
          border: 1px solid #dfe6f2;
          border-radius: 22px;
          background: #f0f4ff;
        }

        .about-panel h3,
        .crt-panel h3 {
          margin: 0 0 12px;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 24px;
          letter-spacing: -0.6px;
          line-height: 1.35;
        }

        .about-panel > p,
        .crt-panel > p {
          color: #63748c;
          font-size: 13px;
          line-height: 1.85;
        }

        .check-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin-top: 24px;
        }

        .check-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #344b6b;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.65;
        }

        .check-item svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #1d6dff;
        }

        .courses-section,
        .commitment-section {
          background: #f3f6ff;
        }

        .filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
          margin-bottom: 32px;
        }

        .filter-btn {
          min-height: 40px;
          padding: 0 16px;
          border: 1px solid #d9e3f3;
          border-radius: 999px;
          background: white;
          color: #536783;
          font-size: 12px;
          font-weight: 700;
        }

        .filter-btn:hover {
          border-color: #1d6dff;
          color: #0a2f6b;
        }

        .filter-btn.active {
          border-color: #0a2f6b;
          background: #0a2f6b;
          color: white;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .course-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: flex-start;
          padding: 25px;
          border: 1px solid #dfe6f2;
          border-radius: 18px;
          background: white;
          box-shadow: 0 5px 20px #0a2f6b06;
          transition: transform 180ms ease, box-shadow 180ms ease,
            border-color 180ms ease;
        }

        .course-card:hover {
          transform: translateY(-4px);
          border-color: #b9cbed;
          box-shadow: 0 18px 35px #0a2f6b0d;
        }

        .course-icon {
          display: flex;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #eaf0ff;
          color: #1d6dff;
        }

        .course-category {
          margin: 19px 0 8px;
          color: #a77500;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .course-card h3 {
          margin: 0;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.4px;
          line-height: 1.4;
        }

        .course-card > p {
          flex: 1;
          margin: 12px 0 20px;
          color: #63748c;
          font-size: 12px;
          line-height: 1.8;
        }

        .course-meta {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 19px;
          padding-top: 15px;
          border-top: 1px solid #e8edf6;
        }

        .course-duration {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #63748c;
          font-size: 11px;
          font-weight: 700;
        }

        .course-price {
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 21px;
          font-weight: 800;
          white-space: nowrap;
        }

        .course-card > .btn {
          width: 100%;
          margin-top: auto;
          font-size: 11px;
        }

        .pricing-note {
          margin: 25px auto 0;
          color: #6c7d95;
          font-size: 11px;
          line-height: 1.8;
          text-align: center;
        }

        .crt-section {
          background: linear-gradient(135deg, #061d44, #0a2f6b);
        }

        .crt-grid {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          align-items: center;
          gap: 70px;
        }

        .crt-grid .eyebrow {
          color: #ffd95a;
        }

        .crt-grid h2 {
          color: white;
        }

        .crt-grid > div > p {
          color: #d4e0f6;
        }

        .crt-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 17px;
          margin: 25px 0 30px;
        }

        .crt-list .check-item {
          color: #f2f6ff;
        }

        .crt-list .check-item svg {
          color: #ffd95a;
        }

        .crt-panel {
          padding: 35px;
          border: 1px solid #ffffff30;
          border-radius: 22px;
          background: white;
          color: #16325c;
        }

        .crt-panel .eyebrow {
          margin-top: 20px;
          color: #a77500;
        }

        .crt-panel h3 {
          margin-top: 0;
        }

        .why-section,
        .founder-section {
          background: #eaf0ff;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .feature-card {
          padding: 26px 23px;
          border: 1px solid #dce5f5;
          border-radius: 17px;
          background: white;
        }

        .feature-card h3,
        .commitment-card h3 {
          margin: 20px 0 10px;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.45;
        }

        .feature-card p,
        .commitment-card p {
          margin: 0;
          color: #63748c;
          font-size: 12px;
          line-height: 1.85;
        }

        .dev-intro {
          display: grid;
          grid-template-columns: 1.05fr 0.8fr;
          align-items: end;
          gap: 60px;
          margin-bottom: 42px;
        }

        .dev-intro h2 {
          max-width: 650px;
        }

        .dev-intro > p {
          margin: 0;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: stretch;
          gap: 20px;
        }

        .price-card {
          position: relative;
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 28px;
          border: 1px solid #dfe6f2;
          border-radius: 19px;
          background: white;
          box-shadow: 0 6px 22px #0a2f6b07;
        }

        .price-card.featured {
          border: 2px solid #f4b400;
          box-shadow: 0 15px 35px #f4b40018;
        }

        .popular {
          align-self: flex-start;
          margin-bottom: 17px;
          padding: 7px 10px;
          border-radius: 999px;
          background: #fff0bf;
          color: #765000;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .price-card h3 {
          margin: 0;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 19px;
          font-weight: 800;
          line-height: 1.4;
        }

        .price {
          margin-top: 17px;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 31px;
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .price-card > p {
          min-height: 43px;
          margin: 12px 0 20px;
          color: #63748c;
          font-size: 12px;
          line-height: 1.8;
        }

        .price-card ul,
        .service-box ul {
          display: grid;
          gap: 13px;
          margin: 0 0 25px;
          padding: 0;
          list-style: none;
        }

        .price-card ul {
          flex: 1;
        }

        .price-card li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #435873;
          font-size: 11px;
          line-height: 1.65;
        }

        .price-card li svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #1d6dff;
        }

        .price-card > .btn {
          width: 100%;
          margin-top: auto;
          font-size: 11px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin-top: 35px;
        }

        .service-box {
          padding: 32px;
          border: 1px solid #dfe6f2;
          border-radius: 19px;
          background: #f0f4ff;
        }

        .service-box.light {
          background: #fff6dc;
        }

        .service-box h3 {
          margin: 0 0 12px;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 23px;
          font-weight: 800;
          line-height: 1.35;
        }

        .service-box > p {
          color: #63748c;
          font-size: 13px;
          line-height: 1.8;
        }

        .service-box .price {
          margin-bottom: 12px;
          font-size: 25px;
        }

        .service-box ul {
          margin-top: 22px;
        }

        .service-box li {
          position: relative;
          padding-left: 18px;
          color: #435873;
          font-size: 12px;
          line-height: 1.7;
        }

        .service-box li::before {
          position: absolute;
          top: 0;
          left: 0;
          color: #1d6dff;
          font-weight: 900;
          content: '✓';
        }

        .service-box .btn {
          margin-top: 5px;
        }

        .commitment-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .commitment-card {
          padding: 30px;
          border: 1px solid #dfe6f2;
          border-radius: 18px;
          background: white;
          color: #1d6dff;
        }

        .commitment-card h3 {
          margin-top: 17px;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          align-items: center;
          gap: 75px;
        }

        .founder-photo-wrap {
          max-width: 370px;
          margin-inline: auto;
          text-align: center;
        }

        .founder-photo-frame {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          border: 10px solid white;
          border-radius: 24px;
          background: #d9e5ff;
          box-shadow: 0 20px 50px #0a2f6b18;
        }

        .founder-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .founder-caption {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 20px;
        }

        .founder-caption strong {
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 19px;
          font-weight: 800;
        }

        .founder-caption span {
          color: #63748c;
          font-size: 12px;
        }

        .founder-copy h2 {
          margin-bottom: 20px;
        }

        .founder-copy .btn {
          margin-top: 12px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 25px;
        }

        .contact-info,
        .contact-action {
          padding: 34px;
          border: 1px solid #dfe6f2;
          border-radius: 20px;
          background: white;
        }

        .contact-info h3,
        .contact-action h3 {
          margin: 0 0 12px;
          color: #0a2f6b;
          font-family: 'Manrope', sans-serif;
          font-size: 23px;
          font-weight: 800;
          line-height: 1.4;
        }

        .contact-info > p,
        .contact-action > p {
          margin-bottom: 26px;
          color: #63748c;
          font-size: 13px;
          line-height: 1.8;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-top: 22px;
          color: #1d6dff;
        }

        .contact-item > svg {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .contact-item > span {
          display: flex;
          flex-direction: column;
          gap: 5px;
          color: #465873;
          font-size: 13px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .contact-item strong {
          color: #0a2f6b;
          font-size: 12px;
        }

        .contact-item a {
          color: #465873;
          text-decoration: none;
        }

        .contact-item a:hover {
          color: #1d6dff;
        }

        .contact-buttons {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .contact-buttons .btn {
          width: 100%;
          min-height: 54px;
          padding-inline: 12px;
          font-size: 11px;
        }

        footer {
          padding: 42px 0;
          background: #061d44;
          color: white;
        }

        .footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-logo {
          border-color: #ffffff40;
        }

        footer .brand-name {
          color: white;
        }

        footer .brand-tag {
          color: #d7e3ff;
        }

        .footer-row p {
          max-width: 420px;
          margin: 16px 0 0;
          color: #d7e3ff;
          font-size: 11px;
          line-height: 1.8;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(2, max-content);
          gap: 13px 24px;
        }

        .footer-links a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #d7e3ff;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #ffd95a;
        }

        @media (min-width: 1500px) {
          .container {
            width: min(1240px, calc(100% - 80px));
          }
        }

        @media (max-width: 1050px) {
          .nav-links {
            gap: 13px;
          }

          .nav-links > a:not(.btn) {
            font-size: 11px;
          }

          .hero-grid {
            gap: 35px;
          }

          .course-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pricing-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .founder-grid {
            gap: 45px;
          }
        }

        @media (max-width: 760px) {
          .container {
            width: min(100% - 34px, 560px);
          }

          .nav {
            min-height: 72px;
          }

          .brand-logo {
            width: 47px;
            height: 47px;
          }

          .brand-name {
            font-size: 15px;
          }

          .brand-tag {
            font-size: 8px;
            letter-spacing: 1.1px;
          }

          .mobile-toggle {
            display: inline-flex;
          }

          .nav-links {
            position: absolute;
            top: calc(100% + 1px);
            right: 0;
            left: 0;
            display: none;
            align-items: stretch;
            gap: 0;
            padding: 12px 20px 20px;
            border-bottom: 1px solid #dfe6f2;
            background: white;
            box-shadow: 0 18px 25px #0a2f6b0d;
          }

          .nav-links.open {
            display: flex;
            flex-direction: column;
          }

          .nav-links > a:not(.btn) {
            padding: 13px 5px;
            border-bottom: 1px solid #edf1f8;
            font-size: 13px;
          }

          .nav-links .btn {
            margin-top: 13px;
          }

          .hero {
            padding: 65px 0 55px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .hero h1 {
            font-size: clamp(39px, 10vw, 56px);
            letter-spacing: -2px;
          }

          .hero-copy {
            font-size: 14px;
          }

          .hero-visual {
            min-height: 330px;
          }

          .hero-orbit {
            width: min(250px, 62vw);
          }

          .float-one {
            top: 28px;
            left: 0;
          }

          .float-two {
            right: 0;
            bottom: 28px;
          }

          .float-card {
            max-width: 175px;
            padding: 12px;
            font-size: 11px;
          }

          .trust-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding-block: 10px;
          }

          .trust-grid > div,
          .trust-grid > div:first-child {
            padding: 14px 2px;
            border-right: 0;
            border-bottom: 1px solid #e8edf6;
          }

          .trust-grid > div:last-child {
            border-bottom: 0;
          }

          .section {
            padding: 64px 0;
            scroll-margin-top: 74px;
          }

          .section-heading {
            margin-bottom: 30px;
          }

          .section-heading h2,
          .about-copy h2,
          .dev-intro h2,
          .founder-copy h2,
          .crt-grid h2 {
            font-size: clamp(29px, 7vw, 38px);
            letter-spacing: -1px;
          }

          .about-grid,
          .crt-grid,
          .dev-intro,
          .founder-grid,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .about-panel,
          .crt-panel,
          .service-box,
          .contact-info,
          .contact-action {
            padding: 24px;
          }

          .course-grid,
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .course-card,
          .price-card {
            padding: 23px;
          }

          .filters {
            justify-content: flex-start;
          }

          .filter-btn {
            min-height: 38px;
            padding-inline: 13px;
            font-size: 11px;
          }

          .crt-list {
            grid-template-columns: 1fr;
          }

          .feature-grid,
          .commitment-grid,
          .service-grid {
            grid-template-columns: 1fr;
          }

          .dev-intro {
            gap: 12px;
            margin-bottom: 30px;
          }

          .founder-photo-wrap {
            width: min(100%, 330px);
          }

          .founder-grid {
            gap: 38px;
          }

          .contact-buttons {
            grid-template-columns: 1fr;
          }

          .footer-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 30px;
          }

          .footer-links {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
          }
        }

        @media (max-width: 380px) {
          .container {
            width: calc(100% - 26px);
          }

          .hero h1 {
            font-size: 37px;
          }

          .hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .hero-actions .btn {
            width: 100%;
          }

          .float-card {
            max-width: 155px;
            gap: 8px;
            font-size: 10px;
          }

          .check-grid {
            grid-template-columns: 1fr;
          }

          .course-price {
            font-size: 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="site">
        <div className="topline" />

        <header>
          <div className="container nav">
            <a className="brand" href="#home" aria-label="GenZ Edu Tech home">
              <img
                className="brand-logo"
                src={companyLogo}
                alt="GenZ Edu Tech logo"
              />
              <span className="brand-name">
                GenZ Edu Tech
                <span className="brand-tag">LEARN · BUILD · GROW</span>
              </span>
            </a>

            <nav
              id="primary-navigation"
              className={`nav-links ${menuOpen ? 'open' : ''}`}
            >
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                className="btn btn-small"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Let's Talk <ArrowRight size={14} />
              </a>
            </nav>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="container hero-grid">
              <div>
                <span className="eyebrow">
                  Practical learning · Digital innovation
                </span>
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
                    Get a Website <Globe size={16} />
                  </a>
                </div>
                <p className="hero-footnote">
                  Digital skills · Career readiness · Website development
                </p>
              </div>

              <div className="hero-visual">
                <div className="hero-orbit">
                  <img src={companyLogo} alt="GenZ Edu Tech emblem" />
                </div>
                <div className="float-card float-one">
                  <GraduationCap size={21} />
                  <div>
                    Learn by doing
                    <small>Practical-first learning</small>
                  </div>
                </div>
                <div className="float-card float-two">
                  <Code2 size={20} />
                  <div>
                    Build with purpose
                    <small>Skills and digital solutions</small>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="trust-band">
            <div className="container trust-grid">
              <div>
                <strong>Practical Learning</strong>
                <span>Learn concepts through practice</span>
              </div>
              <div>
                <strong>Career Preparation</strong>
                <span>Build job-readiness skills</span>
              </div>
              <div>
                <strong>Digital Solutions</strong>
                <span>Websites for growing businesses</span>
              </div>
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
                <a className="btn" href="#contact">
                  Connect With Us <ArrowRight size={15} />
                </a>
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
                    <div className="check-item" key={item}>
                      <Check size={16} />
                      {item}
                    </div>
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
                description="Explore our courses, fees and durations. Enquire to receive the syllabus, batch schedule and enrolment details."
              />

              <div className="filters" aria-label="Filter courses">
                {filters.map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    className={`filter-btn ${
                      courseFilter === filter ? 'active' : ''
                    }`}
                    onClick={() => setCourseFilter(filter)}
                    aria-pressed={courseFilter === filter}
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
                      <div className="course-icon">
                        <CourseIcon size={22} />
                      </div>
                      <span className="course-category">
                        {course.category}
                      </span>
                      <h3>{course.name}</h3>
                      <p>{course.description}</p>

                      <div className="course-meta">
                        <span className="course-duration">
                          <BookOpen size={14} />
                          {course.duration}
                        </span>
                        <span className="course-price">
                          ₹{course.fee.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <a
                        className="btn btn-small"
                        href={wa(
                          `Hello GenZ Edu Tech, I would like to enquire about the ${course.name} course. The listed fee is ₹${course.fee.toLocaleString(
                            'en-IN'
                          )} and the duration is ${course.duration}. Please share the syllabus, class schedule, learning format and enrolment details.`
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
                Course fees and durations are listed as provided by GenZ Edu
                Tech. Please enquire to confirm the latest batch schedule and
                course details.
              </p>
            </div>
          </section>

          <section className="section crt-section" id="crt">
            <div className="container crt-grid">
              <div>
                <span className="eyebrow">
                  Campus Recruitment Training
                </span>
                <h2>Prepare for your next placement opportunity.</h2>
                <p>
                  Our CRT section is dedicated to helping students prepare
                  for campus recruitment and entry-level selection processes.
                  Training can cover aptitude, verbal ability, reasoning,
                  communication and interview preparation.
                </p>

                <div className="crt-list">
                  {trainingBenefits.map((item) => (
                    <div className="check-item" key={item}>
                      <Check size={16} />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  className="btn btn-gold"
                  href={wa(
                    'Hello GenZ Edu Tech, I would like to enquire about Campus Recruitment Training (CRT). Please share the syllabus, duration, fee and upcoming batch schedule.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire About CRT <ArrowRight size={15} />
                </a>
              </div>

              <div className="crt-panel">
                <div className="course-icon">
                  <Target size={25} />
                </div>
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
                    <div className="check-item" key={item}>
                      <Check size={16} />
                      {item}
                    </div>
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
                  {
                    icon: <GraduationCap size={23} />,
                    title: 'Structured Learning',
                    text: 'Build foundational knowledge and progress through a planned learning path.',
                  },
                  {
                    icon: <Code2 size={23} />,
                    title: 'Practical Activities',
                    text: 'Strengthen your understanding through exercises and hands-on practice.',
                  },
                  {
                    icon: <BriefcaseBusiness size={23} />,
                    title: 'Career Preparation',
                    text: 'Develop job-readiness skills, professional communication and interview confidence.',
                  },
                  {
                    icon: <Laptop size={23} />,
                    title: 'Digital Solutions',
                    text: 'Explore website options tailored to your business needs and budget.',
                  },
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
                  <h2>
                    Give your business a stronger online presence.
                  </h2>
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
                  <article
                    className={`price-card ${
                      index === 1 ? 'featured' : ''
                    }`}
                    key={pkg.name}
                  >
                    {index === 1 && (
                      <span className="popular">Popular Choice</span>
                    )}
                    <h3>{pkg.name}</h3>
                    <div className="price">{pkg.price}</div>
                    <p>{pkg.description}</p>
                    <ul>
                      {pkg.features.map((feature) => (
                        <li key={feature}>
                          <Check size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      className={`btn ${
                        index === 1 ? 'btn-gold' : ''
                      }`}
                      href={wa(
                        `Hello GenZ Edu Tech, I would like to enquire about your ${pkg.name} package (${pkg.price}). Please share the detailed scope, timeline, domain and hosting costs, and quotation.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Discuss This Package <ArrowRight size={14} />
                    </a>
                  </article>
                ))}
              </div>

              <p className="pricing-note">
                Website package prices are indicative. Domain registration,
                hosting subscriptions, paid plugins, APIs, payment gateway fees
                and other third-party charges may be additional. Custom features
                and final delivery timelines will be agreed before work begins.
              </p>

              <div className="service-grid">
                <article className="service-box">
                  <span className="eyebrow">Domain & hosting</span>
                  <h3>Get your website online</h3>
                  <p>
                    We can help you understand domain registration and hosting
                    options based on your requirements.
                  </p>
                  <ul>
                    <li>Domain registration and renewal guidance</li>
                    <li>Hosting setup and deployment support</li>
                    <li>SSL configuration where supported</li>
                    <li>Third-party costs explained in advance</li>
                  </ul>
                  <a
                    className="btn"
                    href={wa(
                      'Hello GenZ Edu Tech, I would like to discuss domain registration and hosting options for my website.'
                    )}
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
                  <p>
                    Optional maintenance plans can cover agreed updates and
                    basic technical support.
                  </p>
                  <ul>
                    <li>Content and text updates</li>
                    <li>Basic functionality checks</li>
                    <li>Technical support within agreed scope</li>
                    <li>New features quoted separately</li>
                  </ul>
                  <a
                    className="btn"
                    href={wa(
                      'Hello GenZ Edu Tech, I would like to enquire about website maintenance starting from ₹1,499 per month. Please share the scope and terms.'
                    )}
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
                  {
                    icon: <Sparkles size={22} />,
                    title: 'Practical Focus',
                    text: 'We aim to connect learning with exercises and skills that learners can continue developing.',
                  },
                  {
                    icon: <Users size={22} />,
                    title: 'Clear Communication',
                    text: 'We discuss goals, requirements and next steps so expectations are understood.',
                  },
                  {
                    icon: <Check size={22} />,
                    title: 'Transparent Scope',
                    text: 'For website projects, we clarify deliverables, costs and support before work begins.',
                  },
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
                    src={founderPhoto}
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
                  GenZ Edu Tech was built around a vision of making practical
                  learning, career guidance and digital opportunities more
                  accessible. We help learners build useful skills and help
                  businesses strengthen their online presence through
                  thoughtful website solutions.
                </p>
                <p>
                  Through my work, I have personally trained 300+ people in
                  freelancing and client acquisition, helping them understand
                  how to present their skills, approach potential clients and
                  take practical steps towards their professional goals.
                </p>
                <p>
                  GenZ Edu Tech has also received a Top Grade Innovation
                  accolade. I remain committed to continuous improvement,
                  practical education and creating meaningful opportunities
                  for learners and businesses.
                </p>
                <a className="btn" href="#contact">
                  Connect With Us <ArrowRight size={15} />
                </a>
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
                  <p>
                    Tell us what you would like to learn or what you need for
                    your business.
                  </p>

                  <div className="contact-item">
                    <Phone size={20} />
                    <span>
                      <strong>Phone / WhatsApp</strong>
                      <a
                        href={wa(
                          'Hello GenZ Edu Tech, I would like to get in touch.'
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        +91 63692 16076
                      </a>
                    </span>
                  </div>

                  <div className="contact-item">
                    <Mail size={20} />
                    <span>
                      <strong>Email</strong>
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                    </span>
                  </div>

                  <div className="contact-item">
                    <Globe size={20} />
                    <span>
                      <strong>Website</strong>
                      <a
                        href={WEBSITE}
                        target="_blank"
                        rel="noreferrer"
                      >
                        genzedutech.in
                      </a>
                    </span>
                  </div>

                  <div className="contact-item">
                    <Users size={20} />
                    <span>
                      <strong>Instagram</strong>
                      <a
                        href={INSTAGRAM}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @genz_edu_tech
                      </a>
                    </span>
                  </div>
                </div>

                <div className="contact-action">
                  <span className="eyebrow">Start a conversation</span>
                  <h3>How can we help you?</h3>
                  <p>
                    Choose an option to open WhatsApp with a ready-to-send
                    enquiry message.
                  </p>

                  <div className="contact-buttons">
                    <a
                      className="btn"
                      href={wa(
                        'Hello GenZ Edu Tech, I would like to enquire about your courses. Please share the syllabus and batch details.'
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GraduationCap size={17} />
                      Course Enquiry <ArrowRight size={15} />
                    </a>

                    <a
                      className="btn btn-gold"
                      href={wa(
                        'Hello GenZ Edu Tech, I would like to enquire about Campus Recruitment Training (CRT). Please share the course details.'
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Target size={17} />
                      CRT Enquiry <ArrowRight size={15} />
                    </a>

                    <a
                      className="btn btn-light"
                      href={wa(
                        'Hello GenZ Edu Tech, I need a website for my business. I would like to discuss my requirements and see a sample design.'
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Code2 size={17} />
                      Website Development <ArrowRight size={15} />
                    </a>

                    <a className="btn btn-light" href={`mailto:${EMAIL}`}>
                      <Mail size={17} />
                      Send an Email
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
                <img
                  className="footer-logo"
                  src={companyLogo}
                  alt="GenZ Edu Tech logo"
                />
                <span className="brand-name">
                  GenZ Edu Tech
                  <span className="brand-tag">
                    LEARN · BUILD · GROW
                  </span>
                </span>
              </a>
              <p>
                Practical learning, career preparation and digital solutions.
              </p>
              <p>
                © {new Date().getFullYear()} GenZ Edu Tech. All rights reserved.
              </p>
            </div>

            <div className="footer-links">
              {navLinks.map(([label, href]) => (
                <a href={href} key={href}>
                  {label}
                  <ChevronRight
                    size={11}
                    style={{
                      display: 'inline',
                      verticalAlign: 'middle',
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

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
/* GenZ Edu Tech — logo-matched colour theme */

body,
.site {
  background: #f8faff;
  color: #16325c;
}

header {
  background: rgba(255, 255, 255, 0.97);
  border-bottom-color: #dfe6f2;
}

.topline {
  background: linear-gradient(
    90deg,
    #061d44,
    #1d6dff,
    #f4b400,
    #ffd95a
  );
}

.brand-name,
.hero h1,
.section-heading h2,
.about-copy h2,
.dev-intro h2,
.founder-copy h2 {
  color: #0a2f6b;
}

.brand-tag {
  color: #b78300;
}

.hero {
  background:
    radial-gradient(ellipse at 85% 25%, #fff0bf 0, transparent 35%),
    radial-gradient(ellipse at 8% 85%, #e5edff 0, transparent 38%),
    linear-gradient(135deg, #ffffff, #f3f6ff);
}

.hero h1 em {
  color: #1d6dff;
}

.hero-orbit {
  background: linear-gradient(145deg, #1d6dff, #061d44);
  box-shadow: 0 30px 70px #0a2f6b24;
}

.btn {
  background: #0a2f6b;
  color: #ffffff;
}

.btn:hover {
  background: #061d44;
}

.btn-gold {
  background: #f4b400;
  color: #061d44;
}

.btn-gold:hover {
  background: #ffd95a;
  color: #061d44;
}

.btn-light {
  background: #ffffff;
  color: #0a2f6b;
  border-color: #d5e1f5;
}

.eyebrow,
.course-category {
  color: #a77500;
}

.trust-band {
  background: #ffffff;
  border-color: #dfe6f2;
}

.trust-grid strong,
.course-price,
.price,
.contact-item {
  color: #0a2f6b;
}

.courses-section,
.commitment-section {
  background: #f3f6ff;
}

.course-card,
.price-card,
.commitment-card,
.contact-info,
.contact-action {
  background: #ffffff;
  border-color: #dfe6f2;
}

.course-icon {
  background: #eaf0ff;
  color: #1d6dff;
}

.filter-btn.active {
  background: #0a2f6b;
  border-color: #0a2f6b;
}

.price-card.featured {
  border-color: #f4b400;
}

.popular {
  background: #fff0bf;
  color: #765000;
}

.why-section,
.founder-section {
  background: #eaf0ff;
}

.about-panel,
.service-box {
  background: #f0f4ff;
  border-color: #dfe6f2;
}

.service-box.light {
  background: #fff6dc;
}

.crt-section {
  background: linear-gradient(135deg, #061d44, #0a2f6b);
}

.crt-section .eyebrow {
  color: #ffd95a;
}

.crt-panel {
  background: #ffffff;
  color: #16325c;
}

.crt-list .check-item svg {
  color: #ffd95a;
}

.founder-photo-frame {
  background: #d9e5ff;
}

.founder-caption strong {
  color: #0a2f6b;
}

footer {
  background: #061d44;
  color: #ffffff;
}

.footer-row p,
.footer-links a {
  color: #d7e3ff;
}

.footer-links a:hover {
  color: #ffd95a;
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
