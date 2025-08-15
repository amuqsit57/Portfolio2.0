"use client";
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaArrowRight, FaMapMarkerAlt, FaCode, FaRocket, FaBolt } from "react-icons/fa";

const projects = [
  // Featured Projects
  {
    title: "Posture Detection Cricket App",
    description: "Mobile app in React Native x Java that detects user posture in real-time through camera. Identifies deviations from standard batting positions and generates performance reports.",
    tech: ["React Native", "Java", "Computer Vision", "Real-time Processing"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "featured",
    type: "mobile",
    image: "/projects/cricket-app.jpg"
  },
  {
    title: "AdvertiseAi - GenAI Ad Creative Tool",
    description: "Generative AI tool that transforms product information into high-performing ad creatives with copy, visuals, and ROAS predictions.",
    tech: ["AI/ML", "Next.js", "Python", "OpenAI API"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "featured",
    type: "web",
    image: "/projects/advertise-ai.jpg"
  },
  {
    title: "Super App (HR, Payroll, Chat)",
    description: "Unified enterprise application with backend in NestJS, GraphQL, and microservices architecture integrating payroll processing, HR tools, and real-time messaging.",
    tech: ["NestJS", "GraphQL", "Microservices", "Real-time Chat"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "featured",
    type: "microservices",
    image: "/projects/super-app.jpg"
  },

  // Web Applications
  {
    title: "Responsive Admin Panel with Zoom API",
    description: "Fully responsive admin panel in ReactJS enabling efficient management of meetings, user data, and reports with seamless Zoom API integration.",
    tech: ["React.js", "Node.js", "Express.js", "Zoom API"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "web",
    type: "web",
    image: "/projects/admin-panel.jpg"
  },
  {
    title: "User Portal for Tattoo Company",
    description: "User-facing web application for a tattoo startup allowing customers to explore designs and book appointments with artists.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "web",
    type: "web",
    image: "/projects/tattoo-portal.jpg"
  },
  {
    title: "Admin Panel for Wedding Décor Startup",
    description: "Efficient admin panel for wedding décor startup allowing management of bookings, inventory, décor packages, and client inquiries.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "web",
    type: "web",
    image: "/projects/wedding-admin.jpg"
  },
  {
    title: "Web-Based Game Issue Resolution",
    description: "Rectified issues in web-based game improving functionality and performance, with successful database migration to scalable solution.",
    tech: ["HTML", "CSS", "JavaScript", "Database Migration"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "web",
    type: "web",
    image: "/projects/web-game.jpg"
  },

  // Mobile Applications
  {
    title: "Smart Media Cleaner App",
    description: "React Native app with swipe-to-clean functionality and NestJS + GraphQL backend to identify and remove duplicate photos/videos using metadata and hash-based comparison.",
    tech: ["React Native", "NestJS", "GraphQL", "Hash Algorithms"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "mobile",
    type: "mobile",
    image: "/projects/media-cleaner.jpg"
  },
  {
    title: "Food Ordering App",
    description: "Cross-platform food ordering app with Stripe integration for secure payments, supported by scalable NestJS + GraphQL backend.",
    tech: ["React Native", "NestJS", "GraphQL", "Stripe"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "mobile",
    type: "mobile",
    image: "/projects/food-app.jpg"
  },
  {
    title: "Budgeter - Budget Management App",
    description: "Budget management app developed in Android Studio with Java, optimizing functionality and user experience for financial tracking.",
    tech: ["Android Studio", "Java", "SQLite"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "mobile",
    type: "mobile",
    image: "/projects/budgeter.jpg"
  },
  {
    title: "Eye Saver - Health App",
    description: "Android app promoting eye health with notification system reminding users to take breaks every 20 minutes of screen time.",
    tech: ["Android Studio", "Java", "Notifications API"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "mobile",
    type: "mobile",
    image: "/projects/eye-saver.jpg"
  },

  // Microservices & Scalable Projects
  {
    title: "AI/ML Cricket Shot Classification",
    description: "AI model classifying cricket shots using batting dataset, analyzing batting angles and identifying standard positions for optimal performance.",
    tech: ["Python", "MediaPipe", "Matplotlib", "NumPy", "Machine Learning"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "microservices",
    type: "microservices",
    image: "/projects/cricket-ai.jpg"
  },
  {
    title: "Automated Deployment Pipeline",
    description: "Fully automated CI/CD pipeline with Jenkins, Selenium testing, Dockerized AWS environment, and Kubernetes for auto-scaling and load balancing.",
    tech: ["Jenkins", "Docker", "Kubernetes", "AWS", "Selenium"],
    link: "https://github.com/amuqsit57",
    github: "https://github.com/amuqsit57",
    category: "microservices",
    type: "microservices",
    image: "/projects/cicd-pipeline.jpg"
  }
];

const skills = {
  frontend: {
    title: "FRONTEND DEVELOPMENT",
    description: "Crafting pixel-perfect, responsive interfaces with modern frameworks and cutting-edge animations. Specializing in React ecosystem with TypeScript for type-safe, maintainable applications.",
    technologies: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Responsive Design", "TypeScript"]
  },
  backend: {
    title: "BACKEND & MICROSERVICES", 
    description: "Building scalable, high-performance server architectures with Node.js ecosystem. Expert in microservices architecture, API development, and cloud deployment strategies.",
    technologies: ["Node.js", "NestJS", "Express.js", "GraphQL", "MongoDB", "PostgreSQL", "Microservices"]
  },
  mobile: {
    title: "MOBILE DEVELOPMENT",
    description: "Developing cross-platform mobile applications using React Native and native Android development with Java. Focus on performance optimization and intuitive user experiences.",
    technologies: ["React Native", "Android Studio", "Java", "Mobile UI/UX", "Cross-platform"]
  },
  devops: {
    title: "DEVOPS & AI/ML",
    description: "Implementing CI/CD pipelines, containerization, and emerging AI/ML technologies. Experience with deployment automation and machine learning model integration.",
    technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Python", "AI/ML Integration"]
  }
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [activeFilter, setActiveFilter] = useState('featured');

  useEffect(() => {
    setIsLoaded(true);
    
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        timeZone: 'Asia/Karachi'
      }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Scroll handling
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'works', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timeInterval);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80" />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-600/70 rounded-full animate-bounce shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="relative">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                ABDUL MUQSIT
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'HOME', icon: <FaRocket size={12} /> },
                { id: 'about', label: 'ABOUT', icon: <FaCode size={12} /> },
                { id: 'experience', label: 'EXPERIENCE', icon: <FaMapMarkerAlt size={12} /> },
                { id: 'skills', label: 'SKILLS', icon: <FaBolt size={12} /> },
                { id: 'works', label: 'WORKS', icon: <FaExternalLinkAlt size={12} /> },
                { id: 'contact', label: 'CONTACT', icon: <FaEnvelope size={12} /> }
              ].map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {icon}
                  <span className="text-xs font-semibold tracking-wider">{label}</span>
                </button>
              ))}
            </div>
            
            <div className="text-xs text-blue-600 font-mono">
              {currentTime} PKT
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {/* Glitch effect name */}
            <div className="relative mb-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent animate-pulse opacity-30 transform translate-x-1 translate-y-1">
                    AMUQSIT
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse opacity-30 transform -translate-x-1 -translate-y-1">
                    AMUQSIT
                  </span>
                  <span className="relative bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                    AMUQSIT
                  </span>
                </span>
              </h1>
              
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Animated subtitle */}
            <div className="mb-8 overflow-hidden">
              <h2 className="py-4 text-xl md:text-3xl font-light text-gray-600 tracking-[0.3em] animate-fade-in-up">
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>S</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>O</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>F</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>T</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>W</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>A</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>R</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>E</span>
                <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '0.9s' }}>•</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1s' }}>E</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1.1s' }}>N</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1.2s' }}>G</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1.3s' }}>I</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1.4s' }}>N</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1.5s' }}>E</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1.6s' }}>E</span>
                <span className="inline-block animate-bounce" style={{ animationDelay: '1.7s' }}>R</span>
              </h2>
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className="text-sm text-gray-600 font-mono">ISLAMABAD, PAKISTAN</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent animate-pulse" />
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 font-mono">AVAILABLE FOR WORK</span>
            </div>

            {/* Bio */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                Aspiring <span className="text-blue-600 font-semibold">Full Stack Developer</span> with 
                <span className="text-purple-600 font-semibold"> 1+ year</span> of development experience in 
                <span className="text-pink-600 font-semibold"> Web & Mobile</span> applications. 
                Proficient in <span className="text-blue-600 font-semibold">React.js, Next.js, React Native, NestJS, GraphQL</span> 
                and emerging <span className="text-green-600 font-semibold">AI/ML</span> technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollTo('works')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  VIEW PORTFOLIO
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button
                onClick={() => scrollTo('contact')}
                className="group relative px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:border-blue-500"
              >
                <span className="flex items-center gap-2">
                  LET&apos;S CONNECT
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left side - Interactive elements */}
            <div className="space-y-12">
              <div className="relative">
                <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SYSTEM STATUS
                </h3>
                
                <div className="space-y-6">
                  {[
                    { label: 'Building innovative solutions', status: 'ACTIVE', color: 'green' },
                    { label: 'Learning new technologies', status: 'ONLINE', color: 'blue' },
                    { label: 'Open for collaborations', status: 'READY', color: 'purple' },
                    { label: 'Coffee consumption', status: 'HIGH', color: 'yellow' },
                    { label: 'Code quality', status: 'OPTIMIZED', color: 'cyan' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                      <span className="text-gray-700 font-mono text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${item.color}-500 animate-pulse`} />
                        <span className={`text-${item.color}-600 font-bold text-xs tracking-wider`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '15+', label: 'Mobile Apps Built', icon: <FaRocket /> },
                  { number: '1+', label: 'Years Experience', icon: <FaCode /> },
                  { number: '3.91', label: 'CGPA', icon: <FaBolt /> },
                  { number: '24/7', label: 'Learning Mode', icon: <FaEnvelope /> }
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="text-blue-600 mb-2 transform group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Bio */}
            <div className="relative">
              <div className="sticky top-32">
                <div className="relative p-8 bg-white rounded-2xl border border-gray-200 shadow-lg backdrop-blur-sm">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-blue-600 mb-6 font-mono">&gt;&gt; README.md</h4>
                  
                  <div className="space-y-6 text-gray-800 font-mono text-sm leading-relaxed">
                    <p>
                      <span className="text-purple-600">const</span> <span className="text-blue-600">developer</span> = {'{'}
                    </p>
                    <div className="pl-4">
                      <p><span className="text-orange-600">name</span>: <span className="text-green-600">&apos;Abdul Muqsit&apos;</span>,</p>
                      <p><span className="text-orange-600">location</span>: <span className="text-green-600">&apos;Islamabad, Pakistan&apos;</span>,</p>
                      <p><span className="text-orange-600">role</span>: <span className="text-green-600">&apos;Software Engineer (Web &amp; Mobile)&apos;</span>,</p>
                      <p><span className="text-orange-600">experience</span>: <span className="text-blue-600">1</span>,</p>
                      <p><span className="text-orange-600">email</span>: <span className="text-green-600">&apos;Amuqsit57@gmail.com&apos;</span>,</p>
                      <p><span className="text-orange-600">education</span>: <span className="text-green-600">&apos;COMSATS University (3.91 CGPA)&apos;</span></p>
                    </div>
                    <p>{'};'}</p>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">
                        Aspiring Software Engineer - Full Stack Developer with around 1 year of development 
                        experience and solid foundation in NextJS, ReactJS, React Native, NestJS, GraphQL, 
                        NodeJS, JavaScript, Python. Proficient in creating interactive user interfaces with 
                        exposure to DevOps practices including CI/CD pipelines, Git version control, and 
                        deployment automation. Emerging interest in AI/ML with foundational knowledge of 
                        implementing machine learning models.
                      </p>
                      
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <h5 className="text-blue-600 font-semibold mb-3">Recent Experience:</h5>
                        <div className="space-y-2 text-xs">
                          <p><span className="text-purple-600">•</span> Full Stack Mobile Developer @ Hexler Tech</p>
                          <p><span className="text-purple-600">•</span> Full Stack Web Developer Intern @ Emumba Pvt. Ltd.</p>
                          <p><span className="text-purple-600">•</span> Front End Developer Intern @ Recapeo Pvt. Ltd.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                WORK EXPERIENCE
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light">Professional journey and milestones</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 rounded-full"></div>
            
            <div className="space-y-16">
              {/* Experience 1 - Hexler Tech */}
              <div className="relative flex flex-col md:flex-row md:items-center group">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <FaRocket className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Full Stack Mobile Developer</h3>
                        <p className="text-purple-600 font-semibold">Hexler Tech</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        April 2025 - Present • Onsite
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Developed cross-platform mobile applications using React Native and native Android (Java) for over 15 clients</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Designed and implemented scalable server-side applications using NestJS and GraphQL within microservices architecture</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Built and integrated RESTful APIs and developed scalable backend services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Created intuitive and responsive UI components tailored for mobile platforms</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["React Native", "Java", "NestJS", "GraphQL", "Microservices"].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-mono border border-purple-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-7 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="md:w-1/2 md:pl-12"></div>
              </div>

              {/* Experience 2 - Emumba */}
              <div className="relative flex flex-col md:flex-row md:items-center group">
                <div className="md:w-1/2"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-7 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <FaCode className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Full Stack Web Developer Intern</h3>
                        <p className="text-blue-600 font-semibold">Emumba Pvt. Ltd.</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        June 2024 - August 2024 • Onsite
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Contributed to development of full-stack web applications using React, Node.js, and Express</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Designed, built, and integrated RESTful APIs enabling smooth front-end and back-end communication</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Gained hands-on experience with MongoDB and PostgreSQL, optimizing database queries</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["React", "Node.js", "Express", "MongoDB", "PostgreSQL"].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-mono border border-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience 3 - Recapeo */}
              <div className="relative flex flex-col md:flex-row md:items-center group">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <FaBolt className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Front End Developer Intern</h3>
                        <p className="text-green-600 font-semibold">Recapeo Pvt. Ltd.</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Dec 2023 - Feb 2024 • Remote
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Designed and implemented responsive, dynamic, and intuitive user interfaces using HTML5, CSS3, and JavaScript</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Built and maintained front-end components using React.js</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Maintained version control of codebase using Git and GitHub</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["React.js", "HTML5", "CSS3", "JavaScript", "Git"].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-mono border border-green-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-7 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>

            {/* Education Section at Bottom */}
            <div className="mt-20 pt-16 border-t border-gray-200">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">EDUCATION</h3>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="text-white font-bold text-xl">CU</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h4>
                      <p className="text-blue-600 font-semibold">COMSATS University, Islamabad</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">2021 - 2025</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">3.91</span>
                      <span className="text-gray-600">CGPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                TECH ARSENAL
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light">Weapons of choice for digital warfare</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Frontend */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <FaCode className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{skills.frontend.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {skills.frontend.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills.frontend.technologies.map((tech, i) => (
                    <div key={tech} className="group/tech relative overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="text-sm font-semibold text-blue-600 mb-1">{tech}</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                            style={{ width: `${85 + Math.random() * 15}%` }}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 opacity-0 group-hover/tech:opacity-100 transition-opacity rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend & Microservices */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <FaRocket className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{skills.backend.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {skills.backend.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills.backend.technologies.map((tech, i) => (
                    <div key={tech} className="group/tech relative overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-gray-50 to-purple-50 p-4 rounded-lg border border-gray-200 hover:border-purple-400 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="text-sm font-semibold text-purple-600 mb-1">{tech}</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                            style={{ width: `${80 + Math.random() * 20}%` }}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 opacity-0 group-hover/tech:opacity-100 transition-opacity rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <FaBolt className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{skills.mobile.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {skills.mobile.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills.mobile.technologies.map((tech, i) => (
                    <div key={tech} className="group/tech relative overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-gray-50 to-green-50 p-4 rounded-lg border border-gray-200 hover:border-green-400 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="text-sm font-semibold text-green-600 mb-1">{tech}</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-1000"
                            style={{ width: `${85 + Math.random() * 15}%` }}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-teal-100/50 opacity-0 group-hover/tech:opacity-100 transition-opacity rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & AI/ML */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <FaExternalLinkAlt className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{skills.devops.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {skills.devops.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills.devops.technologies.map((tech, i) => (
                    <div key={tech} className="group/tech relative overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-gray-50 to-orange-50 p-4 rounded-lg border border-gray-200 hover:border-orange-400 transition-all duration-300 cursor-pointer"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="text-sm font-semibold text-orange-600 mb-1">{tech}</div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"
                            style={{ width: `${75 + Math.random() * 25}%` }}
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-red-100/50 opacity-0 group-hover/tech:opacity-100 transition-opacity rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                PROJECT PORTFOLIO
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light">Selected works from the development journey</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { key: 'featured', label: 'FEATURED', icon: <FaRocket size={14} /> },
              { key: 'web', label: 'WEB APPS', icon: <FaCode size={14} /> },
              { key: 'mobile', label: 'MOBILE APPS', icon: <FaBolt size={14} /> },
              { key: 'microservices', label: 'MICROSERVICES', icon: <FaExternalLinkAlt size={14} /> }
            ].map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-gray-900 hover:shadow-md'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.filter(project => project.category === activeFilter).map((project, i) => (
              <div key={project.title} className="group relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110" />
                
                <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Project Mockup */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
                    {project.type === 'mobile' ? (
                      // Mobile Mockup
                      <div className="relative">
                        <div className="w-24 h-48 bg-gray-900 rounded-2xl p-1 shadow-xl">
                          <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full" />
                            <div className="mt-4 px-2 space-y-1">
                              <div className="h-2 bg-blue-200 rounded" />
                              <div className="h-2 bg-purple-200 rounded w-3/4" />
                              <div className="h-2 bg-pink-200 rounded w-1/2" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    ) : project.type === 'microservices' ? (
                      // Microservices Diagram
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg" />
                        <div className="flex flex-col space-y-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        </div>
                        <div className="w-8 h-8 bg-purple-500 rounded-lg" />
                        <div className="flex flex-col space-y-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        </div>
                        <div className="w-8 h-8 bg-pink-500 rounded-lg" />
                      </div>
                    ) : (
                      // Laptop Mockup
                      <div className="relative">
                        <div className="w-32 h-20 bg-gray-900 rounded-t-lg p-1">
                          <div className="w-full h-full bg-white rounded-t-md overflow-hidden">
                            <div className="h-1 bg-gray-200" />
                            <div className="p-1 space-y-1">
                              <div className="h-1 bg-blue-200 rounded" />
                              <div className="h-1 bg-purple-200 rounded w-4/5" />
                              <div className="h-1 bg-pink-200 rounded w-3/5" />
                            </div>
                          </div>
                        </div>
                        <div className="w-36 h-1 bg-gray-800 rounded-b-lg" />
                        <div className="absolute top-0 right-2 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                          {project.type.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <a 
                          href={project.link} 
                          className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors group/link"
                        >
                          <FaExternalLinkAlt className="w-3 h-3 text-gray-600 group-hover/link:text-blue-600 transition-colors" />
                        </a>
                        <a 
                          href={project.github} 
                          className="p-2 bg-gray-100 rounded-lg hover:bg-purple-100 transition-colors group/link"
                        >
                          <FaGithub className="w-3 h-3 text-gray-600 group-hover/link:text-purple-600 transition-colors" />
                        </a>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-mono rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <a 
              href="https://github.com/amuqsit57" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold text-sm tracking-wider hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaGithub className="group-hover:rotate-12 transition-transform" />
              <span>VIEW ALL PROJECTS ON GITHUB</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                INITIATE CONTACT
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light">Ready to build something extraordinary?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl blur-xl" />
                <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">CONTACT PROTOCOLS</h3>
                  
                  <div className="space-y-6">
                    {[
                      { 
                        icon: <FaMapMarkerAlt />, 
                        label: 'LOCATION', 
                        value: 'Islamabad, Pakistan • Remote Worldwide',
                        color: 'text-green-600'
                      },
                      { 
                        icon: <FaEnvelope />, 
                        label: 'EMAIL', 
                        value: 'Amuqsit57@gmail.com',
                        color: 'text-blue-600'
                      },
                      { 
                        icon: <FaBolt />, 
                        label: 'RESPONSE TIME', 
                        value: '< 24 hours',
                        color: 'text-yellow-600'
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                        <div className={`w-12 h-12 ${item.color.replace('text-', 'bg-').replace('600', '100')} rounded-full flex items-center justify-center`}>
                          <div className={item.color}>
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider font-mono">
                            {item.label}
                          </div>
                          <div className="text-gray-900 font-semibold">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-4 uppercase tracking-wider font-mono">
                      SOCIAL NETWORKS
                    </div>
                    <div className="flex gap-4">
                      {[
                        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/abdul555/', color: 'hover:bg-blue-100' },
                        { icon: <FaGithub />, href: 'https://github.com/amuqsit57', color: 'hover:bg-gray-100' },
                        { icon: <FaEnvelope />, href: 'mailto:Amuqsit57@gmail.com', color: 'hover:bg-green-100' }
                      ].map((social, i) => (
                        <a 
                          key={i}
                          href={social.href}
                          className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-blue-300 text-gray-600 hover:text-gray-900`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur-xl" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">SEND MESSAGE</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs text-gray-600 uppercase tracking-wider font-mono mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-mono"
                        placeholder="Your name..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 uppercase tracking-wider font-mono mb-2">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-mono"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 uppercase tracking-wider font-mono mb-2">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none font-mono"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      LAUNCH PROJECT
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <div>
                <div className="text-gray-900 font-bold">AMUQSIT.DEV</div>
                <div className="text-xs text-gray-500">Full Stack Developer</div>
              </div>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <button onClick={() => scrollTo('works')} className="text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider font-mono">
                WORKS
              </button>
              <button onClick={() => scrollTo('about')} className="text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider font-mono">
                ABOUT
              </button>
              <button onClick={() => scrollTo('contact')} className="text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider font-mono">
                CONTACT
              </button>
            </div>
            
            <div className="text-xs text-gray-500 font-mono">
              © 2025 • ALL SYSTEMS OPERATIONAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
