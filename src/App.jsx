import React, { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: "Python", level: "Intermediate" },
    { name: "HTML5 & CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Beginner / Learning" },
    { name: "SQL & Databases", level: "Intermediate" },
    { name: "Networking", level: "Intermediate" }
  ];

  const projects = [
    {
      title: "Scan Attendance System",
      desc: "A full-stack attendance tracking system built with Node.js, Express, and MySQL for staff and teachers.",
      tags: ["Node.js", "Express", "MySQL", "Git"]
    },
    {
      title: "Python 2D Action Game",
      desc: "A complete 2D action game built using Python, Pygame-ce, and PyTMX tiled maps, packaged into a standalone executable.",
      tags: ["Python", "Pygame-ce", "Game Dev"]
    },
    {
      title: "Coffee Shop POS System",
      desc: "CLI and web-based Point of Sale application built using Python and Flask as part of academic coursework.",
      tags: ["Python", "Flask", "POS"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 font-sans antialiased selection:bg-indigo-500 selection:text-white scroll-smooth">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-stone-900 flex items-center gap-2">
            <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
            Sokraksa<span className="text-indigo-600">.</span>dev
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
            <a href="#experience" className="hover:text-indigo-600 transition">Experience</a>
            <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow-sm hover:bg-indigo-700 transition">Contact Me</a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-stone-700 hover:text-black focus:outline-none">
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-4 shadow-md">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-stone-600 hover:text-indigo-600 font-medium">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-stone-600 hover:text-indigo-600 font-medium">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-stone-600 hover:text-indigo-600 font-medium">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-stone-600 hover:text-indigo-600 font-medium">Projects</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-indigo-600 font-semibold">Contact Me</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 flex items-center justify-center bg-gradient-to-b from-white to-stone-100 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold tracking-wide text-indigo-700 uppercase bg-indigo-50 border border-indigo-100 rounded-full">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Available for opportunities
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-stone-900 mb-6 leading-tight">
            Hi, I'm <span className="text-indigo-600">Chhonn Sokraksa</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A 20-year-old Year 2 Computer Science student at Western University. Nutrition Assistant and Digital Marketer at Nom PoPok.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-7 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition">
              Explore Projects
            </a>
            <a href="#contact" className="px-7 py-3.5 bg-white border border-stone-300 text-stone-700 font-semibold rounded-xl hover:bg-stone-50 transition shadow-xs">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-stone-900 flex items-center gap-3">
              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span> About Me
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4 text-base">
              I am a second-year Computer Science undergraduate at Western University in Phnom Penh, Cambodia. I enjoy building software applications, exploring networking concepts, and turning ideas into clean code.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-base">
              Alongside my tech studies, I work as a Nutrition Assistant and handle Digital Marketing at <span className="text-indigo-600 font-semibold">Nom PoPok</span>, helping promote healthy nutrition and educational workshops.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
                <span className="block text-indigo-600 font-bold text-xl mb-1">20</span>
                <span className="text-stone-500 font-medium">Years Old</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs">
                <span className="block text-indigo-600 font-bold text-xl mb-1">Year 2</span>
                <span className="text-stone-500 font-medium">Western University</span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-stone-200 p-8 rounded-3xl shadow-sm relative">
            <div className="absolute -top-3.5 right-6 bg-indigo-600 text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Student & Developer
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-6">Quick Overview</h3>
            <ul className="space-y-4 text-stone-600 text-sm">
              <li className="flex items-center gap-3.5 bg-stone-50 p-3 rounded-xl border border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <span>Computer Science Major</span>
              </li>
              <li className="flex items-center gap-3.5 bg-stone-50 p-3 rounded-xl border border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-apple-whole"></i>
                </div>
                <span>Nutrition Assistant at Nom PoPok</span>
              </li>
              <li className="flex items-center gap-3.5 bg-stone-50 p-3 rounded-xl border border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-bullhorn"></i>
                </div>
                <span>Digital Marketing & Content</span>
              </li>
              <li className="flex items-center gap-3.5 bg-stone-50 p-3 rounded-xl border border-stone-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>Phnom Penh, Cambodia</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-stone-100/70 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">Technical Skills</h2>
            <p className="text-stone-600">Core technologies and tools I work with daily</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white border border-stone-200/80 p-6 rounded-2xl shadow-xs hover:shadow-md transition group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-stone-900 font-bold group-hover:text-indigo-600 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-700 font-medium rounded-full">
                    {skill.level}
                  </span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full w-4/5 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Work */}
      <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">Work & Experience</h2>
          <p className="text-stone-600">Professional background and contributions</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white border border-stone-200 p-8 rounded-3xl shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-stone-900">Nutrition Assistant & Digital Marketer</h3>
              <p className="text-indigo-600 font-semibold">Nom PoPok (នំពពក)</p>
            </div>
            <span className="self-start sm:self-auto text-xs px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium rounded-full">
              Current Role
            </span>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed">
            Promoting healthy local snacks, creating digital marketing content, and assisting with nutrition workshop operations and educational outreach.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-stone-100/70 border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">Featured Projects</h2>
            <p className="text-stone-600">Software applications and systems I have built</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-stone-200/80 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{project.title}</h3>
                  <p className="text-stone-600 text-sm mb-6 leading-relaxed">{project.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-700 font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 mb-4">Let's Connect</h2>
        <p className="text-stone-600 mb-10 max-w-lg mx-auto leading-relaxed">
          Have a question, want to collaborate on a project, or just want to say hi? My inbox is always open!
        </p>
        <div className="flex justify-center gap-5">
          <a href="mailto:contact@example.com" className="w-14 h-14 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-stone-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition">
            <i className="fa-solid fa-envelope text-xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-stone-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-stone-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md transition">
            <i className="fa-brands fa-linkedin-in text-xl"></i>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-stone-900 text-stone-400 text-center text-xs tracking-wide">
        <p>&copy; 2026 Chhonn Sokraksa. Built with Vite, React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}