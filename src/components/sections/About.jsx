import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Security First',
      description: 'Building intrusion detection systems and analyzing network traffic for threats.',
    },
    {
      icon: <Palette size={32} />,
      title: 'CTF Player',
      description: 'Solving challenges in web exploitation, cryptography, and reverse engineering.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Full-Stack Dev',
      description: 'Creating robust backend systems with Python, Java, Django, and Spring Boot.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            3rd-year CSE student specializing in Cybersecurity and Blockchain at SASTRA University.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">My Journey</h3>
              <p className="text-gray-300 mb-4">
                I'm Mahizhnan, a 3rd-year Computer Science Engineering student at SASTRA, specializing in Cybersecurity and Blockchain. I work on both defensive security (like NIDS) and full-stack software projects. I'm also an active CTF participant and a former core member of the 1nf1n1ty security team.
              </p>
              <p className="text-gray-300">
                I work across Python, Java, Django, Spring Boot, SQL, and MongoDB, and I enjoy building tools that combine security + development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-primary-400 mb-3">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
