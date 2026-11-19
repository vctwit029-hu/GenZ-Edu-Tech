import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, BookOpen, BriefcaseBusiness, Check, ChevronDown, Code2,
  GraduationCap, Globe, Lightbulb, Mail, Menu, MessageCircle, Moon, Bot, Mic, Send, Headphones,
  Phone, Rocket, Sparkles, Sun, Target, Users, X, ExternalLink, Volume2, Play, Pause, Square
} from 'lucide-react';
import companyLogo from './assets/genz-logo.png';
import founderPhoto from './assets/founder-megadharshini.png';
import ThreeHero from './ThreeHero';
import './index.css';

const PHONE = '916369216076';
const EMAIL = 'genzedutech01@gmail.com';
const WEBSITE = 'https://genzedutech.in';
const INSTAGRAM = 'https://www.instagram.com/genz_edu_tech/';
const whatsapp = (message: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

type Course = {
  name: string; duration: string; fee: number; feeUnit?: string; category: string; description: string;
  icon: typeof Lightbulb; syllabus: string[];
};

const courses: Course[] = [
  { name: 'Digital Marketing', duration: '45 days', fee: 14999, category: 'Digital Skills', description: 'Learn how to plan, promote and measure digital campaigns using practical activities.', icon: Lightbulb, syllabus: ['Digital marketing fundamentals and customer journeys', 'SEO basics and keyword research', 'Content strategy and campaign planning', 'Paid advertising concepts and budgeting', 'Analytics, reporting and a practical campaign plan'] },
  { name: 'Social Media Marketing', duration: '30 days', fee: 9999, category: 'Digital Skills', description: 'Plan content, manage social platforms and build an engaged online audience.', icon: Globe, syllabus: ['Platform selection and profile optimisation', 'Content calendars and creative briefs', 'Captions, hashtags and engagement', 'Community management and brand voice', 'Insights, reporting and a sample monthly plan'] },
  { name: 'Content Writing', duration: '30 days', fee: 7999, category: 'Digital Skills', description: 'Build clear writing, copywriting and digital content creation skills.', icon: BookOpen, syllabus: ['Writing fundamentals and audience research', 'Blogs, website copy and product descriptions', 'Headlines, calls to action and basic SEO writing', 'Editing, proofreading and tone of voice', 'Portfolio-ready writing samples'] },
  { name: 'Learning AI', duration: '30 days', fee: 19999, category: 'Digital Skills', description: 'Practise using AI tools for productivity, content and everyday workflows.', icon: Sparkles, syllabus: ['AI foundations and responsible use', 'Prompt writing and iterative improvement', 'Research, summarisation and document workflows', 'AI-assisted content and presentation creation', 'Productivity workflows and a final practical project'] },
  { name: 'Freelancing & Client Acquisition', duration: '30 days', fee: 9999, category: 'Career Skills', description: 'Learn to present your skills, approach clients and prepare professional proposals.', icon: BriefcaseBusiness, syllabus: ['Choosing a service and defining an offer', 'Portfolio and profile preparation', 'Finding and qualifying potential clients', 'Outreach messages, proposals and pricing basics', 'Client communication and delivery workflow'] },
  { name: 'Python Programming', duration: '60 days', fee: 14999, category: 'Programming', description: 'Build programming foundations through structured coding practice.', icon: Code2, syllabus: ['Setup, syntax, variables and data types', 'Conditions, loops and functions', 'Lists, tuples, dictionaries and sets', 'Files, exceptions and modules', 'Object-oriented basics and a practical project'] },
  { name: 'Java Programming', duration: '60 days', fee: 14999, category: 'Programming', description: 'Learn Java fundamentals, object-oriented programming and coding concepts.', icon: Code2, syllabus: ['Java setup, syntax and data types', 'Conditions, loops, arrays and methods', 'Classes, objects and constructors', 'Inheritance, polymorphism and interfaces', 'Collections, exceptions and a practical project'] },
  { name: 'HTML & CSS', duration: '30 days', fee: 9999, category: 'Programming', description: 'Create responsive websites and learn modern web layout fundamentals.', icon: Code2, syllabus: ['HTML structure, semantic elements and forms', 'CSS selectors, typography and spacing', 'Flexbox, Grid and responsive layouts', 'Navigation, cards and reusable components', 'Build and publish a responsive multi-section website'] },
  { name: 'Quantitative Aptitude', duration: '30 days', fee: 6999, category: 'Placement Preparation', description: 'Practise numerical reasoning and common placement aptitude topics.', icon: Target, syllabus: ['Number systems and simplification', 'Percentages, ratios and averages', 'Profit, loss, interest and time-work', 'Speed, distance and data interpretation', 'Timed practice tests and review strategies'] },
  { name: 'Verbal Ability', duration: '30 days', fee: 4999, category: 'Placement Preparation', description: 'Strengthen grammar, comprehension and verbal reasoning.', icon: BookOpen, syllabus: ['Grammar and sentence correction', 'Vocabulary and word usage', 'Reading comprehension', 'Sentence arrangement and verbal logic', 'Practice exercises and timed tests'] },
  { name: 'Placement Training', duration: '45 days', fee: 14999, category: 'Placement Preparation', description: 'Prepare for aptitude tests, interviews and professional communication.', icon: GraduationCap, syllabus: ['Placement process and job-readiness planning', 'Aptitude and reasoning practice', 'Resume structure and profile preparation', 'Interview questions and mock interview practice', 'Professional communication and action plan'] },
  { name: 'Career Awareness', duration: '7 days', fee: 2999, category: 'Career Skills', description: 'Explore career pathways, skill requirements and practical next steps.', icon: Rocket, syllabus: ['Career interests and strengths', 'Career paths and skill requirements', 'Understanding courses, roles and industries', 'Building a practical learning roadmap', 'Personal next-step action plan'] },
  { name: 'JavaScript', duration: '45 days', fee: 12999, category: 'Programming', description: 'Learn the language used to build interactive experiences for the web.', icon: Code2, syllabus: ['JavaScript fundamentals and syntax', 'Variables, functions and control flow', 'Arrays, objects and modern JavaScript', 'DOM interaction and browser events', 'Build an interactive web project'] },
  { name: 'C Programming', duration: '45 days', fee: 9999, category: 'Programming', description: 'Develop structured programming fundamentals using C.', icon: Code2, syllabus: ['C setup, syntax and data types', 'Operators, conditions and loops', 'Functions, arrays and strings', 'Pointers, structures and file handling', 'Problem-solving practice and a project'] },
  { name: 'C++ Programming', duration: '60 days', fee: 11999, category: 'Programming', description: 'Build programming skills with C++ fundamentals and object-oriented concepts.', icon: Code2, syllabus: ['C++ syntax and core programming', 'Functions, arrays and references', 'Classes and objects', 'Inheritance and polymorphism', 'Practical problem-solving project'] },
  { name: 'Frontend Development', duration: '75 days', fee: 19999, category: 'Programming', description: 'Learn to create responsive, accessible user interfaces for websites.', icon: Code2, syllabus: ['HTML, CSS and responsive design', 'JavaScript for interactive interfaces', 'Reusable components and UI structure', 'Forms, navigation and accessibility basics', 'Build a responsive frontend project'] },
  { name: 'Backend Development', duration: '75 days', fee: 24999, category: 'Programming', description: 'Understand server-side application development and data workflows.', icon: Code2, syllabus: ['Backend fundamentals and runtime setup', 'Routes, requests and responses', 'Working with databases', 'Authentication and API fundamentals', 'Build and test a backend service'] },
  { name: 'Full Stack Development', duration: '120 days', fee: 34999, category: 'Programming', description: 'Explore frontend, backend and database concepts in one learning path.', icon: Code2, syllabus: ['Frontend foundations and components', 'Server-side development fundamentals', 'Database design and integration', 'Connecting frontend and backend APIs', 'Build and deploy a full-stack project'] },
  { name: 'SQL & Database', duration: '30 days', fee: 12999, category: 'Programming', description: 'Learn how to organise, query and work with structured data.', icon: Code2, syllabus: ['Database concepts and relational models', 'Tables, keys and data types', 'SELECT queries and filtering', 'Joins, grouping and subqueries', 'Database design and practical exercises'] },
  { name: 'Git & GitHub', duration: '15 days', fee: 5999, category: 'Programming', description: 'Learn version control and collaborative development workflows.', icon: Code2, syllabus: ['Version control fundamentals', 'Repositories, commits and branches', 'Merging and resolving conflicts', 'GitHub collaboration and pull requests', 'Manage a project with Git and GitHub'] },
  { name: 'API Development', duration: '30 days', fee: 14999, category: 'Programming', description: 'Understand how applications communicate through web APIs.', icon: Code2, syllabus: ['HTTP and API fundamentals', 'REST conventions and endpoint design', 'Requests, responses and status codes', 'Validation, errors and API testing', 'Build and document a practical API'] },
  { name: 'Software Testing', duration: '30 days', fee: 14999, category: 'Programming', description: 'Learn structured approaches to checking software quality.', icon: Check, syllabus: ['Software testing fundamentals', 'Test scenarios and test cases', 'Functional and regression testing', 'Bug reporting and test documentation', 'Execute a practical testing cycle'] },
  { name: 'Data Structures & Algorithms', duration: '60 days', fee: 19999, category: 'Programming', description: 'Strengthen problem-solving through common data structures and algorithms.', icon: Code2, syllabus: ['Complexity and problem-solving basics', 'Arrays, strings and linked lists', 'Stacks, queues, trees and hash tables', 'Searching and sorting techniques', 'Algorithm practice and review'] },
  { name: 'Machine Learning', duration: '75 days', fee: 24999, category: 'Digital Skills', description: 'Explore machine-learning concepts and practical data-driven workflows.', icon: Sparkles, syllabus: ['Machine-learning concepts and use cases', 'Preparing and exploring datasets', 'Supervised learning fundamentals', 'Model evaluation and improvement', 'A guided practical model exercise'] },
  { name: 'Generative AI', duration: '30 days', fee: 14999, category: 'Digital Skills', description: 'Understand generative AI tools and practical creative workflows.', icon: Sparkles, syllabus: ['Generative AI concepts and responsible use', 'Prompt design and refinement', 'Text and image generation workflows', 'Evaluation, limitations and safe use', 'Create a practical AI-assisted output'] },
  { name: 'Data Analytics with Python', duration: '60 days', fee: 19999, category: 'Digital Skills', description: 'Explore data analysis workflows using Python and common data tools.', icon: Code2, syllabus: ['Python data analysis foundations', 'Working with tabular datasets', 'Cleaning and transforming data', 'Exploratory analysis and visualisation', 'Present findings from a practical dataset'] },
  { name: 'German', duration: '6 months', fee: 750, feeUnit: ' / hour', category: 'Languages', description: 'Build German language skills through guided lessons and practical practice.', icon: Globe, syllabus: ['Foundations: pronunciation and everyday vocabulary', 'Basic grammar and sentence formation', 'Listening and speaking practice', 'Reading and writing exercises', 'Practical conversation and review'] },
  { name: 'French', duration: '6 months', fee: 750, feeUnit: ' / hour', category: 'Languages', description: 'Develop French language skills with structured, practical learning.', icon: Globe, syllabus: ['Foundations: pronunciation and everyday vocabulary', 'Basic grammar and sentence formation', 'Listening and speaking practice', 'Reading and writing exercises', 'Practical conversation and review'] },
  { name: 'Japanese', duration: '6 months', fee: 750, feeUnit: ' / hour', category: 'Languages', description: 'Start learning Japanese through guided language and communication practice.', icon: Globe, syllabus: ['Foundations: scripts and everyday expressions', 'Basic grammar and sentence formation', 'Listening and speaking practice', 'Reading and writing exercises', 'Practical conversation and review'] },
  { name: 'Korean', duration: '6 months', fee: 750, feeUnit: ' / hour', category: 'Languages', description: 'Build Korean language skills through guided lessons and practical exercises.', icon: Globe, syllabus: ['Foundations: Hangul and everyday expressions', 'Basic grammar and sentence formation', 'Listening and speaking practice', 'Reading and writing exercises', 'Practical conversation and review'] },
  { name: 'Spanish', duration: '6 months', fee: 750, feeUnit: ' / hour', category: 'Languages', description: 'Learn Spanish through structured lessons and real-life communication practice.', icon: Globe, syllabus: ['Foundations: pronunciation and everyday vocabulary', 'Basic grammar and sentence formation', 'Listening and speaking practice', 'Reading and writing exercises', 'Practical conversation and review'] },
];

const packages = [
  { name: 'Essential Website', price: '₹9,999', description: 'A professional starting point for small businesses.', features: ['Up to 3 pages', 'Responsive website design', 'About, services and contact sections', 'WhatsApp contact button', 'Basic on-page SEO', 'Deployment and launch support'] },
  { name: 'Business Website', price: '₹14,999', description: 'A stronger digital presence for growing businesses.', featured: true, features: ['Up to 6 pages', 'Custom branded design', 'Enquiry and WhatsApp integration', 'Basic SEO setup', 'Mobile optimisation', 'Deployment and launch testing'] },
  { name: 'Premium Business', price: '₹24,999', description: 'A distinctive website for established businesses.', features: ['Up to 10 pages', 'Custom design and animations', 'Portfolio or service sections', 'Enquiry integration', 'SEO foundations', 'Performance optimisation'] },
  { name: 'E-commerce Website', price: 'From ₹39,999', description: 'For businesses selling products online.', features: ['Product catalogue', 'Shopping cart and checkout', 'Payment gateway integration', 'Order management setup', 'Responsive storefront', 'Testing and deployment'] },
  { name: 'Custom Web Application', price: 'From ₹59,999', description: 'For custom portals, dashboards and workflows.', features: ['Custom frontend and backend', 'Database and authentication if required', 'Admin dashboard', 'Business-specific workflows', 'Integration testing', 'Deployment planning'] },
  { name: 'Website Maintenance', price: 'From ₹1,499/mo', description: 'Keep your existing website updated and maintained.', features: ['Routine content updates', 'Basic technical checks', 'Small design adjustments', 'Link and form checks', 'Support based on agreed scope'] },
];

const portfolioProjects = [
  { name: 'Little Artisan Bloom Bakes', url: 'https://little-artisan-bloom-bakes.base44.app' },
  { name: 'APKS Organics', url: 'https://apks-organics.netlify.app' },
  { name: 'Smart Tally Path', url: 'https://smart-tally-path.base44.app' }
];

const filters = ['All', 'Digital Skills', 'Programming', 'Career Skills', 'Placement Preparation', 'Languages'];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [voiceStatus, setVoiceStatus] = useState<'idle' | 'speaking' | 'paused'>('idle');
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [voicePrompt, setVoicePrompt] = useState(false);
  const [assistantInput, setAssistantInput] = useState('');
  const [assistantBusy, setAssistantBusy] = useState(false);
  const [assistantMessages, setAssistantMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! Welcome to GenZ Edu Tech. I can guide you through our academy, courses, career training, language programmes and website services. What would you like to explore first?" }
  ]);
  const [darkMode, setDarkMode] = useState(() => {
    try { return localStorage.getItem('genz-theme') === 'dark'; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem('genz-theme', darkMode ? 'dark' : 'light'); } catch {}
  }, [darkMode]);

  // Ask once on the visitor's first visit. A "No" choice is remembered.
  useEffect(() => {
    try {
      if (!localStorage.getItem('genz-voice-choice')) setVoicePrompt(true);
    } catch { setVoicePrompt(true); }
  }, []);

  const chooseVoiceGuidance = (wantsGuidance: boolean) => {
    try { localStorage.setItem('genz-voice-choice', wantsGuidance ? 'yes' : 'no'); } catch {}
    setVoicePrompt(false);
    if (wantsGuidance) {
      setAssistantOpen(true);
      speakAssistantReply("Welcome to GenZ Edu Tech. We help learners build practical skills through academy courses, career readiness training, language learning and freelancing guidance. We also create websites and digital solutions for businesses through GenZ Developers. Which area would you like to explore first?");
    }
  };

  const speakAssistantReply = (message: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'en-IN';
    utterance.rate = 0.96;
    window.speechSynthesis.speak(utterance);
  };

  const sendAssistantMessage = async (rawMessage?: string) => {
    const message = (rawMessage ?? assistantInput).trim();
    if (!message || assistantBusy) return;
    const nextMessages = [...assistantMessages, { role: 'user' as const, content: message }];
    setAssistantMessages(nextMessages);
    setAssistantInput('');
    setAssistantBusy(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-12) })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'The assistant is temporarily unavailable.');
      const answer = String(data.answer || '').trim();
      if (!answer) throw new Error('I could not prepare an answer. Please try again.');
      setAssistantMessages(current => [...current, { role: 'assistant', content: answer }]);
      speakAssistantReply(answer);
    } catch (error) {
      const messageText = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setAssistantMessages(current => [...current, { role: 'assistant', content: messageText }]);
    } finally {
      setAssistantBusy(false);
    }
  };

  const startAssistantVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setAssistantMessages(current => [...current, { role: 'assistant', content: 'Voice input is not available in this browser. You can type your question here instead.' }]);
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: any) => {
      const transcript = event.results?.[0]?.[0]?.transcript;
      if (transcript) sendAssistantMessage(transcript);
    };
    recognition.onerror = () => setAssistantMessages(current => [...current, { role: 'assistant', content: 'I could not hear that clearly. Please try again or type your question.' }]);
    recognition.start();
  };

  const voiceGuideText = useMemo(() => {
    const courseDetails = courses.map((course) =>
      `${course.name}, ${course.duration}, fee ${course.fee.toLocaleString('en-IN')} rupees${course.feeUnit || ''}`
    ).join('. ');
    const serviceDetails = packages.map((item) =>
      `${item.name}, ${item.price}. ${item.description} ${item.features.join('. ')}`
    ).join('. ');
    return `Welcome to GenZ Edu Tech. Learn, build and grow. We are an education and digital solutions company focused on practical learning, career guidance, freelancing awareness and website development.

    At GenZ Academy, we offer practical courses for beginners, students, job seekers and people who want to build new skills. Our programming courses include Python, Java, JavaScript, C, C plus plus, HTML and CSS, frontend development, backend development, full stack development, SQL and databases, Git and GitHub, API development, software testing and data structures and algorithms.

    Our digital skills courses include digital marketing, social media marketing, content writing, learning artificial intelligence, generative AI, machine learning and data analytics with Python. Career and placement preparation includes freelancing and client acquisition, quantitative aptitude, verbal ability, placement training and career awareness.

    Our current course catalogue and published fees are as follows. ${courseDetails}. Fees and course details should be confirmed with our team before enrolment.

    We also offer foreign language learning in German, French, Japanese, Korean and Spanish. These programmes are planned over six months, at seven hundred and fifty rupees per hour. We offer a separate personalised online Tamil learning programme. Its duration is flexible and fee details are shared when you enquire.

    Our Career Readiness Training, also called C R T, helps learners prepare for the workplace through aptitude, verbal and reasoning practice, resume preparation, interview practice, communication and job readiness guidance. Ask our team about the current batch and programme details.

    Through GenZ Freelance learning, we help learners understand how to choose a service, build a portfolio, find potential clients, prepare proposals, communicate professionally and manage client work.

    Through GenZ Developers, we build websites and digital products for businesses. Our packages are: ${serviceDetails}. Final scope, timeline and pricing are confirmed after understanding your requirements.

    Our portfolio includes Little Artisan Bloom Bakes, APKS Organics and Smart Tally Path. You can explore these projects on our website.

    GenZ Edu Tech is led by founder Megadharshini Kandhan. Our approach is practical and beginner friendly: learn with clarity, practise with purpose and build skills that can be applied.

    To ask about courses, fees, batches, language learning or website development, contact our team by WhatsApp or phone at plus nine one, six three six nine two, one six zero seven six. You can also email genzedutech zero one at gmail dot com, or visit genzedutech dot in. Thank you for listening. We look forward to helping you learn, build and grow.`;
  }, []);

  const playVoiceGuide = () => {
    if (!('speechSynthesis' in window)) {
      window.alert('Voice playback is not supported in this browser. Please try the latest version of Chrome, Edge or Safari.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(voiceGuideText);
    utterance.lang = 'en-IN';
    utterance.rate = 0.94;
    utterance.pitch = 1;
    utterance.onstart = () => setVoiceStatus('speaking');
    utterance.onend = () => setVoiceStatus('idle');
    utterance.onerror = () => setVoiceStatus('idle');
    window.speechSynthesis.speak(utterance);
    setVoiceStatus('speaking');
  };

  const pauseVoiceGuide = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
    setVoiceStatus('paused');
  };

  const resumeVoiceGuide = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.resume();
    setVoiceStatus('speaking');
  };

  const stopVoiceGuide = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setVoiceStatus('idle');
  };

  useEffect(() => () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }, []);

  // Reveal key content as it enters the viewport. Motion is disabled for
  // visitors who request reduced motion, and elements remain visible if the
  // browser does not support IntersectionObserver.
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    const selectors = [
      '.section-heading', '.about-grid > *', '.trust-grid > div',
      '.course-card', '.crt-grid > *', '.benefit-card', '.freelance-panel',
      '.developer-intro > *', '.portfolio-card', '.price-card',
      '.impact-grid > *', '.quote-grid blockquote', '.founder-grid > *',
      '.contact-grid > *'
    ];
    const elements = document.querySelectorAll<HTMLElement>(selectors.join(','));
    elements.forEach((element) => {
      element.classList.add('reveal-on-scroll');
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((child) => child.classList.contains('reveal-on-scroll'))
        : [];
      element.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(element), 4) * 75}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const shownCourses = useMemo(
    () => filter === 'All' ? courses : courses.filter(c => c.category === filter),
    [filter]
  );

  const navLinks = [
    ['About', '#about'],
    ['Courses', '#courses'],
    ['CRT', '#crt'],
    ['Why Us', '#why-us'],
    ['GenZ Developers', '#developers'],
    ['Founder', '#founder'],
    ['Contact', '#contact']
  ];

  return <div className={`site ${darkMode ? 'dark-mode' : ''}`}>
    <div className="topline" />

    <header className="site-nav">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <img src={companyLogo} alt="GenZ Edu Tech logo" />
          <span>GenZ Edu Tech<small>LEARN · BUILD · GROW</small></span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(v => !v)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
          <a className="btn btn-primary nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's Talk <ArrowRight size={16} />
          </a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>



    <main>
      <section className="hero" id="home">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">PRACTICAL LEARNING · CAREER GROWTH</span>
            <h1>Build skills.<br /><span>Unlock your next.</span></h1>
            <p>Practical learning, career guidance and digital solutions designed to help students, job seekers and businesses move forward with confidence.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#courses">Explore Courses <ArrowRight size={18} /></a>
              <a className="btn btn-secondary" href="#developers">Build Your Website</a>
            </div>
            <div className="hero-points">
              <span><Check size={17} /> Practical-first learning</span>
              <span><Check size={17} /> Career-focused guidance</span>
              <span><Check size={17} /> Beginner-friendly support</span>
            </div>
          </div>

          <div className="hero-visual hero-visual-3d">
            <ThreeHero />
            <div className="orbit-card hero-3d-card">
              <span className="visual-word">YOUR FUTURE STARTS HERE</span>
              <div className="visual-core"><img src={companyLogo} alt="GenZ Edu Tech" /></div>
              <span className="orbit-label label-one"><BookOpen size={17} /> Learn</span>
              <span className="orbit-label label-two"><Rocket size={17} /> Build</span>
              <span className="orbit-label label-three"><Target size={17} /> Grow</span>
              <span className="hero-3d-ring hero-3d-ring-one" />
              <span className="hero-3d-ring hero-3d-ring-two" />
              <span className="hero-3d-satellite hero-3d-satellite-one"><Sparkles size={18}/></span>
              <span className="hero-3d-satellite hero-3d-satellite-two"><Code2 size={18}/></span>
            </div>
            <div className="floating-note">
              <Sparkles size={19} />
              <span><strong>Skills with purpose</strong><small>Learning made practical</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="site-container trust-grid">
          <div><strong>Practical-first</strong><span>Learn by doing</span></div>
          <div><strong>Career guidance</strong><span>Find your direction</span></div>
          <div><strong>Digital solutions</strong><span>Build a stronger presence</span></div>
          <div><strong>Community impact</strong><span>Grow together</span></div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="site-container about-grid">
          <div className="about-visual">
            <div className="about-panel">
              <span className="eyebrow">OUR PURPOSE</span>
              <h3>Learning should lead to action.</h3>
              <p>We connect knowledge with practical skills, career awareness and real-world digital work.</p>
              <div className="mini-stat">
                <span className="stat-icon"><Lightbulb /></span>
                <span><strong>Learn with clarity</strong><small>Understand what to learn and why</small></span>
              </div>
              <div className="mini-stat">
                <span className="stat-icon"><Target /></span>
                <span><strong>Practise with purpose</strong><small>Build confidence through action</small></span>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">ABOUT GENZ EDU TECH</span>
            <h2>Bridging the gap between learning and opportunity.</h2>
            <p>GenZ Edu Tech is built around one simple idea: skills become valuable when people can apply them. We support learners with practical training, career guidance, freelancing awareness and job-readiness support.</p>
            <p>We also help businesses strengthen their digital presence through professional website development and ongoing support.</p>
            <div className="check-list">
              <span><Check /> Practical and beginner-friendly approach</span>
              <span><Check /> Career and freelancing awareness</span>
              <span><Check /> Digital services for growing businesses</span>
              <span><Check /> Community-minded learning</span>
            </div>
            <a className="text-link" href="#contact">Connect with our team <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section courses-section" id="courses">
        <div className="site-container">
          <SectionHeading
            eyebrow="LEARN SOMETHING THAT MOVES YOU FORWARD"
            title="Courses built around practical skills"
            description="Choose a learning path, understand the syllabus and contact us for batch timings and enrolment details."
          />
          <div className="filter-row" role="group" aria-label="Filter courses">
            {filters.map(f => (
              <button key={f} className={`filter-btn ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className="course-grid">
            {shownCourses.map(course => {
              const Icon = course.icon;
              return <article className="course-card" key={course.name}>
                <div className="course-card-top">
                  <span className="course-icon"><Icon size={23} /></span>
                  <span className="course-duration">{course.duration}</span>
                </div>
                <span className="course-category">{course.category}</span>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <div className="course-bottom">
                  <div><small>{course.feeUnit ? 'Hourly fee' : 'Course fee'}</small><strong>₹{course.fee.toLocaleString('en-IN')}{course.feeUnit ?? ''}</strong></div>
                  <button className="syllabus-btn" onClick={() => setActiveCourse(course)}>
                    Explore Syllabus <ArrowRight size={15} />
                  </button>
                </div>
                <a
                  className="course-enquire"
                  href={whatsapp(`Hello GenZ Edu Tech, I am interested in the ${course.name} course (${course.duration}). Please share the batch timings and enrolment details.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire on WhatsApp <MessageCircle size={15} />
                </a>
              </article>;
            })}
          </div>
          <p className="course-note">Course fees and batch availability may be confirmed with our team. Contact us for the current schedule and course details.</p>
        </div>
      </section>

      <section className="section tamil-learning-section" id="tamil-learning">
        <div className="site-container">
          <SectionHeading
            eyebrow="LANGUAGE LEARNING"
            title="Learn Tamil from anywhere in the world"
            description="Personalized online Tamil lessons for foreigners, non-native speakers and anyone interested in learning Tamil language and culture."
          />
          <div className="developer-intro">
            <div className="dev-intro-card">
              <span className="dev-symbol"><Globe size={27} /></span>
              <h3>Tamil for every learner</h3>
              <p>Start from the basics and build confidence in Tamil through practical, beginner-friendly lessons tailored to your goals.</p>
              <div className="check-list">
                <span><Check /> Everyday conversations and speaking</span>
                <span><Check /> Vocabulary, pronunciation and grammar</span>
                <span><Check /> Reading and writing basics</span>
                <span><Check /> Practical Tamil for real-life situations</span>
              </div>
            </div>
            <div className="dev-intro-copy">
              <h3>Learn at your own pace.</h3>
              <p>Course duration is flexible and will be planned according to your learning capacity, progress and goals. Classes are offered online with personalized guidance.</p>
              <p><strong>Hourly-based payment:</strong> Fee details will be shared upon inquiry based on your preferred learning plan and session requirements.</p>
              <a
                className="text-link"
                href={whatsapp('Hello GenZ Edu Tech, I am interested in learning Tamil. Please share the hourly fee details and help me plan classes according to my learning pace.')}
              >
                Enquire about Tamil classes <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
            <section className="section crt-section" id="crt">
        <div className="site-container crt-grid">
          <div>
            <span className="eyebrow">CAREER READINESS TRAINING</span>
            <h2>Prepare with a plan, not guesswork.</h2>
            <p>Build confidence with structured aptitude practice, verbal ability, interview preparation and job-readiness guidance.</p>
            <a className="btn btn-light" href={whatsapp('Hello GenZ Edu Tech, I would like to know more about Career Readiness and Placement Training.')}>
              Ask about CRT <ArrowRight size={17} />
            </a>
          </div>
          <div className="crt-panel">
            {[
              'A structured preparation plan',
              'Quantitative aptitude practice',
              'Verbal ability and reasoning',
              'Resume and job-readiness guidance',
              'Interview and communication practice',
              'Progress review and next steps'
            ].map(item => (
              <div className="crt-item" key={item}><Check size={18} />{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section" id="why-us">
        <div className="site-container">
          <SectionHeading
            eyebrow="WHY GENZ EDU TECH"
            title="A practical approach to progress"
            description="Our focus is to make learning useful, approachable and connected to real goals."
          />
          <div className="benefit-grid">
            <article className="benefit-card">
              <span className="benefit-icon"><Lightbulb /></span>
              <h3>Practical-first</h3>
              <p>Work through exercises, examples and projects that turn concepts into usable skills.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon"><Users /></span>
              <h3>Beginner-friendly</h3>
              <p>Start with the basics and build up step by step with guidance along the way.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon"><Target /></span>
              <h3>Career-aware</h3>
              <p>Understand skill pathways, workplace expectations and practical next steps.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon"><Rocket /></span>
              <h3>Future-focused</h3>
              <p>Explore digital skills, freelancing and technology that can support your growth.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section freelancing-section">
        <div className="site-container freelance-panel">
          <div>
            <span className="eyebrow">FROM SKILLS TO OPPORTUNITIES</span>
            <h2>Know your options. Build your path.</h2>
            <p>Explore freelancing, client communication, personal branding and career pathways with practical guidance.</p>
          </div>
          <a className="btn btn-primary" href={whatsapp('Hello GenZ Edu Tech, I would like career and freelancing guidance.')}>
            Get Guidance <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="section developers-section" id="developers">
        <div className="site-container">
          <SectionHeading
            eyebrow="GENZ DEVELOPERS"
            title="A better digital presence for your business"
            description="Professional, responsive websites designed to help customers understand your business and contact you easily."
          />
          <div className="developer-intro">
            <div className="dev-intro-card">
              <span className="dev-symbol"><Code2 size={27} /></span>
              <h3>Websites with a purpose</h3>
              <p>From a clean business website to an online store or custom web application, we can discuss the right scope for your needs.</p>
              <div className="check-list">
                <span><Check /> Mobile-responsive layouts</span>
                <span><Check /> Brand-focused design</span>
                <span><Check /> Clear enquiry and contact paths</span>
                <span><Check /> Deployment support</span>
              </div>
            </div>
            <div className="dev-intro-copy">
              <h3>Your business deserves more than a placeholder page.</h3>
              <p>We help small businesses present their services clearly, build trust with visitors and make it easier for potential customers to take the next step.</p>
              <a className="text-link" href={whatsapp('Hello GenZ Edu Tech, I am interested in website development. Please discuss my requirements.')}>
                Discuss your website idea <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="portfolio-showcase">
            <div className="portfolio-heading">
              <span className="eyebrow">SELECTED DIGITAL WORK</span>
              <h3>Ideas brought to life on the web.</h3>
              <p>Explore a few live projects from the GenZ Developers portfolio.</p>
            </div>
            <div className="portfolio-grid">
              {portfolioProjects.map((project, index) => (
                <a className="portfolio-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
                  <span className="portfolio-index">0{index + 1}</span>
                  <span className="portfolio-card-icon"><Code2 size={25} /></span>
                  <strong>{project.name}</strong>
                  <span className="portfolio-link">View live project <ExternalLink size={15} /></span>
                </a>
              ))}
            </div>
          </div>

          <div className="package-grid">
            {packages.map((pkg, i) => (
              <article key={pkg.name} className={`price-card ${'featured' in pkg && pkg.featured ? 'featured' : ''}`}>
                <div className="package-top">
                  {'featured' in pkg && pkg.featured
                    ? <span className="popular-tag">MOST REQUESTED</span>
                    : <span className="package-number">0{i + 1}</span>}
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <strong className="package-price">{pkg.price}</strong>
                </div>
                <ul>
                  {pkg.features.map(feature => (
                    <li key={feature}><Check size={16} />{feature}</li>
                  ))}
                </ul>
                <a
                  className={`btn ${'featured' in pkg && pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                  href={whatsapp(`Hello GenZ Edu Tech, I am interested in the ${pkg.name} package (${pkg.price}). Please share the next steps.`)}
                >
                  Request a Quote <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
          <p className="package-note">Final pricing depends on project scope, content, integrations, hosting and third-party services. Any ongoing subscription or paid service will be discussed before work begins.</p>
        </div>
      </section>

      <section className="section impact-section">
        <div className="site-container impact-grid">
          <div>
            <span className="eyebrow">BEYOND THE CLASSROOM</span>
            <h2>Skills matter. Community matters too.</h2>
            <p>GenZ Edu Tech values accessible career awareness and community learning. Our outreach has included drug-awareness programmes, career guidance for school dropouts and conversations with college students about freelancing and future careers.</p>
          </div>
          <div className="impact-cards">
            <div><Users /><strong>Community-focused</strong><span>Sharing knowledge and awareness</span></div>
            <div><GraduationCap /><strong>Career guidance</strong><span>Helping learners explore their options</span></div>
            <div><Sparkles /><strong>Future skills</strong><span>Encouraging practical growth</span></div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="site-container">
          <SectionHeading
            eyebrow="OUR LEARNING PHILOSOPHY"
            title="Progress starts with one practical step"
            description="We want every learner to leave with more clarity, stronger skills and a next step they can act on."
          />
          <div className="quote-grid">
            <blockquote>
              <span className="quote-mark">“</span>
              <p>Make learning practical, approachable and connected to the goals that matter to each learner.</p>
              <footer>— GenZ Edu Tech philosophy</footer>
            </blockquote>
            <blockquote>
              <span className="quote-mark">“</span>
              <p>Small, consistent improvements in skills and confidence can open up new possibilities over time.</p>
              <footer>— Our approach to growth</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section founder-section" id="founder">
        <div className="site-container founder-grid">
          <div className="founder-photo-frame">
            <img src={founderPhoto} alt="Megadharshini Kandhan, Founder of GenZ Edu Tech" />
            <div className="founder-caption">
              <strong>Megadharshini Kandhan</strong>
              <span>Founder &amp; Business Operations Lead · GenZ Edu Tech</span>
            </div>
          </div>
          <div className="founder-copy">
            <span className="eyebrow">A NOTE FROM THE FOUNDER</span>
            <h2>Helping people move from uncertainty to action.</h2>
            <p>GenZ Edu Tech grew from a belief that people deserve clear guidance, practical learning and opportunities to explore their strengths. My aim is to make skills and career awareness easier to approach while building digital solutions that help businesses grow.</p>
            <p>Whether you are learning a new skill, exploring freelancing or looking for a website for your business, we welcome a conversation about your next step.</p>
            <a className="btn btn-primary" href="#contact">Connect with me <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="site-container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">LET'S START A CONVERSATION</span>
            <h2>Tell us what you want to build next.</h2>
            <p>Ask about course syllabuses, batch timings, career guidance or website development. We'll help you understand the next step.</p>
            <div className="contact-info">
              <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">
                <span><MessageCircle /></span>
                <div><small>WhatsApp / Phone</small><strong>+91 63692 16076</strong></div>
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`} target="_blank" rel="noreferrer">
                <span><Mail /></span>
                <div><small>Email</small><strong>{EMAIL}</strong></div>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                <span><Globe /></span>
                <div><small>Instagram</small><strong>@genz_edu_tech</strong></div>
              </a>
              <a href={WEBSITE} target="_blank" rel="noreferrer">
                <span><Phone /></span>
                <div><small>Website</small><strong>genzedutech.in</strong></div>
              </a>
            </div>
          </div>

          <div className="contact-action">
            <div className="contact-action-icon"><MessageCircle size={30} /></div>
            <h3>Ready to get started?</h3>
            <p>Send us a message and tell us whether you're interested in training, career guidance or web development.</p>
            <a className="btn btn-primary full-btn" href={whatsapp('Hello GenZ Edu Tech! I would like to know more about your courses and services.')}>
              Message GenZ Edu Tech <ArrowRight size={17} />
            </a>
            <a className="btn btn-secondary full-btn" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent('Enquiry for GenZ Edu Tech')}`} target="_blank" rel="noreferrer">
              Send an Email <Mail size={17} />
            </a>
            <small>We look forward to hearing from you.</small>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="site-container footer-main">
        <a className="brand footer-brand" href="#home">
          <img src={companyLogo} alt="" />
          <span>GenZ Edu Tech<small>LEARN · BUILD · GROW</small></span>
        </a>
        <p>Practical learning, career awareness and digital solutions for people and businesses ready to grow.</p>
        <div className="footer-links">
          {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="site-container">
          <span>© {new Date().getFullYear()} GenZ Edu Tech. All rights reserved.</span>
          <span>Built for learning, growth and opportunity.</span>
        </div>
      </div>
    </footer>

    <a
      className="floating-whatsapp"
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hello GenZ Edu Tech!')}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with GenZ Edu Tech on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>

    {activeCourse && (
      <div className="modal-backdrop" role="presentation" onClick={() => setActiveCourse(null)}>
        <section
          className="syllabus-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="syllabus-title"
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={() => setActiveCourse(null)} aria-label="Close syllabus">
            <X />
          </button>
          <span className="eyebrow">{activeCourse.category} · {activeCourse.duration}</span>
          <h2 id="syllabus-title">{activeCourse.name}</h2>
          <p>{activeCourse.description}</p>
          <h3>What you'll cover</h3>
          <ol>{activeCourse.syllabus.map(item => <li key={item}>{item}</li>)}</ol>
          <div className="modal-bottom">
            <strong>{activeCourse.feeUnit ? 'Hourly fee' : 'Course fee'}: ₹{activeCourse.fee.toLocaleString('en-IN')}{activeCourse.feeUnit ?? ''}</strong>
            <a
              className="btn btn-primary"
              href={whatsapp(`Hello GenZ Edu Tech, please share the current batch details for ${activeCourse.name} (fee ₹${activeCourse.fee.toLocaleString('en-IN')}${activeCourse.feeUnit ?? ''}).`)}
              target="_blank"
              rel="noreferrer"
            >
              Ask about this course <ArrowRight size={16} />
            </a>
          </div>
          <small className="modal-note">Syllabus topics may be adjusted to the batch plan. Contact us to confirm details.</small>
        </section>
      </div>
    )}

    {voicePrompt && (
      <div className="assistant-consent-backdrop" role="presentation">
        <section className="assistant-consent" role="dialog" aria-modal="true" aria-labelledby="assistant-consent-title">
          <span className="assistant-avatar"><Bot size={27} /></span>
          <span className="eyebrow">WELCOME TO GENZ EDU TECH</span>
          <h2 id="assistant-consent-title">Would you like a voice-guided tour?</h2>
          <p>I can introduce our academy and services, help you explore what interests you, and answer your questions in simple language.</p>
          <div className="assistant-consent-actions">
            <button className="btn btn-primary" onClick={() => chooseVoiceGuidance(true)}><Headphones size={17} /> Yes, guide me</button>
            <button className="btn btn-secondary" onClick={() => chooseVoiceGuidance(false)}>No, I'll explore myself</button>
          </div>
          <small>You can open the assistant any time using the chat button.</small>
        </section>
      </div>
    )}

    <div className="site-assistant">
      {assistantOpen && (
        <section className="assistant-panel" aria-label="GenZ Edu Tech AI assistant">
          <header className="assistant-header">
            <span className="assistant-avatar"><Bot size={23} /></span>
            <span><strong>GenZ AI Assistant</strong><small>Ask about courses and services</small></span>
            <button className="assistant-close" onClick={() => { setAssistantOpen(false); if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }} aria-label="Close assistant"><X size={19} /></button>
          </header>
          <div className="assistant-topics">
            {['Explore courses', 'Career training', 'Language learning', 'Website services'].map(topic =>
              <button key={topic} onClick={() => sendAssistantMessage(`I would like to explore ${topic.toLowerCase()}.`)}>{topic}</button>
            )}
          </div>
          <div className="assistant-messages" aria-live="polite">
            {assistantMessages.map((message, index) => (
              <div key={index} className={`assistant-message ${message.role}`}>{message.content}</div>
            ))}
            {assistantBusy && <div className="assistant-message assistant">One moment, I'm checking that for you…</div>}
          </div>
          <form className="assistant-compose" onSubmit={event => { event.preventDefault(); sendAssistantMessage(); }}>
            <input value={assistantInput} onChange={event => setAssistantInput(event.target.value)} placeholder="Ask me anything…" aria-label="Ask the GenZ assistant" maxLength={1200} />
            <button type="button" className="assistant-mic" onClick={startAssistantVoiceInput} aria-label="Speak your question"><Mic size={18} /></button>
            <button type="submit" disabled={!assistantInput.trim() || assistantBusy} aria-label="Send message"><Send size={18} /></button>
          </form>
          <div className="assistant-footer"><span>Say “wait” to pause the tour and ask a question.</span><a href={whatsapp('Hello GenZ Edu Tech, I need help with your courses or services.')} target="_blank" rel="noreferrer">Talk to our team</a></div>
        </section>
      )}
      <button className="assistant-launcher" onClick={() => setAssistantOpen(open => !open)} aria-label={assistantOpen ? 'Close AI assistant' : 'Open AI assistant'}>
        {assistantOpen ? <X size={23} /> : <><Bot size={23} /><span>Ask GenZ AI</span></>}
      </button>
    </div>
  </div>;
}
