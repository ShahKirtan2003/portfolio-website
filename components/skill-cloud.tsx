"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const technologies = [
  { name: "Java", color: "#f89820" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Python", color: "#3776ab" },
  { name: "AWS", color: "#ff9900" },
  { name: "Kubernetes", color: "#326ce5" },
  { name: "Docker", color: "#2496ed" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#4169e1" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Redis", color: "#dc382d" },
  { name: "Elasticsearch", color: "#005571" },
  { name: "Kafka", color: "#ff9900" },
  { name: "Jenkins", color: "#d24939" },
  { name: "Spring Boot", color: "#6db33f" },
  { name: "Next.js", color: "#4169e1" },
]

export function SkillCloud() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-balance">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="glass-card p-3 sm:p-4 rounded-lg text-center cursor-pointer transition-all duration-300"
              style={{
                borderColor: hoveredTech === tech.name ? tech.color : "rgba(255, 255, 255, 0.1)",
                color: hoveredTech === tech.name ? tech.color : "rgb(212, 212, 216)",
                boxShadow: hoveredTech === tech.name ? `0 0 20px ${tech.color}40` : "none",
              }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <span
                className="font-medium text-xs sm:text-sm text-foreground transition-colors"
                style={{
                  color: hoveredTech === tech.name ? tech.color : undefined,
                }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
