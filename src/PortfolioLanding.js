import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Linkedin, Mail, ChevronDown, ExternalLink, FileCode, Instagram } from 'lucide-react';

const PortfolioLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans scroll-smooth">
      {/* SEO Meta Tags */}
      <head>
        <title>YourName - Portfolio</title>
        <meta name="description" content="Welcome to YourName's portfolio. I build amazing web experiences." />
        <meta name="keywords" content="developer, portfolio, web development, react" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="font-bold text-xl text-indigo-400">YourName</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {['home', 'projects', 'about', 'skills', 'testimonials', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`py-4 px-2 font-semibold hover:text-indigo-400 transition duration-300 ${
                    activeSection === item ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-300'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                {isMenuOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          {['home', 'projects', 'about', 'skills', 'testimonials', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block py-2 px-4 text-sm hover:bg-gray-700 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mb-8 text-gray-400">I'm a passionate developer creating amazing web experiences</p>
          <a
            href="#projects"
            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 inline-flex items-center group"
          >
            View My Work
            <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={`/api/placeholder/400/200`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover lazyload"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-indigo-300">Project {project}</h3>
                  <p className="text-gray-400 mb-4">A brief description of project {project} and its key features.</p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                    Learn More <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Skills</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            {['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git', 'MongoDB'].map((skill) => (
              <span key={skill} className="text-gray-400 bg-gray-700 px-4 py-2 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">"Amazing work, delivered ahead of schedule!"</p>
              <h4 className="text-indigo-400 font-semibold">Client Name</h4>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 italic mb-4">"Highly recommend for any web development needs."</p>
              <h4 className="text-indigo-400 font-semibold">Client Name</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">About Me</h2>
          <p className="text-gray-300 mb-6 text-center">
            I'm a passionate web developer with expertise in modern technologies. My goal is to create
            beautiful, functional, and user-friendly web applications that solve real-world problems.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              <FileCode className="w-6 h-6" />
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PortfolioLanding;