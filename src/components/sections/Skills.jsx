import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity',
      skills: [
        { name: 'Network Security', level: 85 },
        { name: 'Packet Analysis (Wireshark)', level: 80 },
        { name: 'Intrusion Detection', level: 75 },
        { name: 'Reverse Engineering (Ghidra)', level: 70 },
        { name: 'Web Exploitation', level: 80 },
        { name: 'CTF Challenges', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Python (Django)', level: 90 },
        { name: 'Java (Spring Boot)', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Authentication Systems', level: 80 },
        { name: 'MVC Architecture', level: 85 },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'SQL (MySQL, PostgreSQL)', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Kali Linux', level: 85 },
        { name: 'C/C++', level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800/50" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
