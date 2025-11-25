import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following best practices.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Beautiful Design',
      description: 'Creating stunning user interfaces with attention to detail and user experience.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency to deliver fast, responsive applications.',
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
            I'm a passionate web developer focused on building exceptional digital experiences.
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
              <h3 className="text-2xl font-bold mb-4 text-primary-400">My Story</h3>
              <p className="text-gray-300 mb-4">
                With a passion for creating intuitive and engaging web experiences, I specialize in
                modern web technologies and frameworks. My journey in web development has been driven
                by curiosity and a constant desire to learn and improve.
              </p>
              <p className="text-gray-300">
                I believe in writing clean, maintainable code and creating applications that not only
                look great but also perform exceptionally well across all devices and platforms.
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
