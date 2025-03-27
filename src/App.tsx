import React from 'react';
import { Github, Linkedin, Mail, Code2, Database, Layout, Server, ExternalLink, Star, Rocket, Zap, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="gradient-text">Portfolio</span>
            </h1>
            <div className="flex space-x-6">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Tech Theme */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated tech background */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0, 112, 243, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
              linear-gradient(to bottom right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95))
            `,
          }}></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute h-[150vh] w-[150vw] -top-[25vh] -left-[25vw]" style={{
              backgroundImage: `
                repeating-linear-gradient(transparent, transparent 50px, rgba(63, 63, 63, 0.1) 50px, rgba(63, 63, 63, 0.1) 51px),
                repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(63, 63, 63, 0.1) 50px, rgba(63, 63, 63, 0.1) 51px)
              `,
              transform: 'rotate(45deg)',
            }}></div>
          </div>
          {/* Floating tech elements */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  backgroundColor: `hsl(${Math.random() * 60 + 200}, 70%, 70%)`,
                  animation: `float ${Math.random() * 10 + 20}s linear infinite`,
                  animationDelay: `-${Math.random() * 20}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 py-32">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 text-white">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Shadrack Mwendwa</span>
            </h1>
            <p className="text-2xl mb-12 text-blue-100 font-light">
              Full Stack Developer | Tech Enthusiast 
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/mwesh599" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 hover:rotate-12 duration-300">
                <Github className="w-7 h-7 text-blue-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 hover:-rotate-12 duration-300">
                <Linkedin className="w-7 h-7 text-blue-300" />
              </a>
              <a href="mailto:shadrackmwendwa319@gmail.com"
                className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110 hover:rotate-12 duration-300">
                <Mail className="w-7 h-7 text-blue-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-1 h-8 rounded-full bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-400 animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer with 5 years of experience crafting digital solutions
                that make a difference. My journey began with a simple curiosity about how websites work,
                and it has evolved into a deep love for creating innovative web applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Innovation Driven</h3>
                  <p className="text-gray-600">Always exploring new technologies and solutions</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast Learner</h3>
                  <p className="text-gray-600">Quick to adapt and master new skills</p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Problem Solver</h3>
                  <p className="text-gray-600">Turning complex challenges into elegant solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my expertise in different areas of web development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card group">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm">Built with modern e-commerce best practices</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                  A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Node.js</span>
                  <span className="project-tag">PostgreSQL</span>
                  <span className="project-tag">Stripe</span>
                </div>
              </div>
            </div>

            <div className="project-card group">
              <div className="h-64 bg-[url('https://plus.unsplash.com/premium_photo-1684330691489-2eb2620db612?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFza3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm"> Task management and optimization</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">To Do List App</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                  Smart task management app that uses AI to categorize, prioritize, and suggest optimal scheduling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="project-tag">Kotlin</span>
                  <span className="project-tag">Xml</span>
                  <span className="project-tag">Firebase</span>
                  <span className="project-tag">Android</span>
                </div>
              </div>
            </div>

            <div className="project-card group">
              <div className="h-64 bg-[url('https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm">Real-time collaboration platform</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">School  Students Portal</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                  Real-time collaboration platform with video calls, document sharing, and team chat functionality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="project-tag">Xampp</span>
                  <span className="project-tag">php</span>
                  <span className="project-tag">Javascript</span>
                  <span className="project-tag">Css</span>
                </div>
              </div>
            </div>

           



            
          </div>
         
        </div>
      </section>


      {/* events Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Events Attended</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These Are the Events I Attended: A Journey of Learning, Networking, and Professional Growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card group">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUklMjBlY29ub215fGVufDB8fDB8fHww')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm">Role: Attendee </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">7th Students National Economics Symposium</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                Skills Demonstrated: <br />Policy analysis, collaborative problem-solving, cross-disciplinary networking.
                </p>
                
              </div>
            </div>

            <div className="project-card group">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1558685555-bcdb675f9b9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGV4cG98ZW58MHx8MHx8fDA%3D')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm">Role: Tech Demonstrator</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold"> KCAU Tech Expo</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                Skills Demonstrated: <br/>Technical presentation, entrepreneurial thinking, adaptive learning.
                </p>
               
              </div>
            </div>

            <div className="project-card group">
              <div className="h-64 bg-[url('https://plus.unsplash.com/premium_photo-1679079456505-22067531cd11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMHRlY2h8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm">Real-time collaboration</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">Team Collab Hub</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                functionality.
                </p>
                
              </div>
            </div>
            </div>
            </div>
            </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Code2 className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <p className="text-gray-600 mb-6">Crafting responsive and intuitive user interfaces</p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Server className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <p className="text-gray-600 mb-6">Building scalable server-side applications</p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">kotlin </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Database className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Database</h3>
              <p className="text-gray-600 mb-6">Designing efficient data storage solutions</p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Firebase</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Layout className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">DevOps</h3>
              <p className="text-gray-600 mb-6">Automating deployment and operations</p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Let's Connect</h2>
          </div>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              Interested in collaboration or just want to say hello? I'm always open to discussing new projects
              and opportunities.
            </p>
            <a
              href="mailto:shadrackmwendwa319@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105"
            >
              <Mail className="w-6 h-6 mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2025 Shad Mwendwa. All rights reserved.</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://github.com/mwesh599" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:shadrackmwendwa319@gmail.com"
                className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;