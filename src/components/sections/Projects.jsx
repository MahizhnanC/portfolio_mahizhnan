import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { lazy, Suspense } from 'react'

const TiltCard = lazy(() => import('../effects/TiltCard'))

const Projects = () => {
  const projects = [
    {
      title: 'Network Intrusion Detection System (NIDS)',
      description: 'Building a lightweight NIDS that detects suspicious traffic using signature and anomaly-based methods. Includes packet capture, feature extraction, rule evaluation, and alerting.',
      tags: ['Python', 'Scapy', 'Machine Learning', 'Network Security'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/MahizhnanC',
      demo: '#',
    },
    {
      title: 'Car Management System',
      description: 'A full car dealership management system supporting Add, Update, Remove, Search cars with HashMap + DB-backed storage, menu-driven terminal interface, and clean layered architecture (Model–Service–DAO).',
      tags: ['Java', 'JDBC', 'SQL', 'MVC'],
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
      github: 'https://github.com/MahizhnanC',
      demo: '#',
    },
    {
      title: 'CTF Writeups & Tools',
      description: 'Solving Capture-The-Flag challenges across web, crypto, reversing, and binary exploitation. Working on small automation scripts for recon, decoding, and exploitation.',
      tags: ['Python', 'Web Exploitation', 'Cryptography', 'Reverse Engineering'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      github: 'https://github.com/MahizhnanC',
      demo: '#',
    },
    {
      title: 'Security Tools Collection',
      description: 'Collection of security analysis and penetration testing tools built during CTF competitions and security research.',
      tags: ['Python', 'Bash', 'Kali Linux', 'Wireshark'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
      github: 'https://github.com/MahizhnanC',
      demo: '#',
    },
    {
      title: 'Django REST API Projects',
      description: 'Backend REST APIs built with Django for various applications including authentication systems and data management.',
      tags: ['Python', 'Django', 'REST APIs', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      github: 'https://github.com/MahizhnanC',
      demo: '#',
    },
    {
      title: 'Spring Boot Applications',
      description: 'Enterprise-level backend applications developed with Spring Boot, featuring clean architecture and comprehensive database integration.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop',
      github: 'https://github.com/MahizhnanC',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Suspense fallback={<div className="glass rounded-2xl overflow-hidden h-full animate-pulse" />}>
                <TiltCard className="glass rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Suspense>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
