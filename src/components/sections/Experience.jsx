import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Core Member',
      company: 'Team 1nf1n1ty',
      period: 'Jun 2025 – Oct 2025',
      type: 'On-site',
      description: [
        'Designed & moderated CTF recruitment challenges',
        'Used Wireshark and network analysis tools',
        'Worked with other team members on security labs',
      ],
    },
    {
      title: 'Intern',
      company: 'BBI',
      period: 'Jun 2025 – Sep 2025',
      type: 'Remote',
      description: [
        'Developed backend features using Java + Spring Boot',
        'Created REST APIs and integrated SQL databases',
        'Assisted with code debugging and feature enhancement',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900" aria-labelledby="experience-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in cybersecurity and software development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="text-primary-400 mt-1">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-xl text-primary-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                  <span className="text-sm">• {exp.type}</span>
                </div>
              </div>
              <ul className="space-y-2 ml-10">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-primary-400 mr-2">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
