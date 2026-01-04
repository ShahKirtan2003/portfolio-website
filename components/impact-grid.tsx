"use client"

import { Zap, Brain, TrendingDown, Award } from "lucide-react"
import { motion } from "framer-motion"

const impacts = [
  {
    icon: Zap,
    value: "30%",
    label: "Performance",
    description: "Speed Improvement",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
    shadowColor: "shadow-blue-500/10",
    glow: true,
  },
  {
    icon: Brain,
    value: "GPT-4",
    label: "AI/LLM",
    description: "Pinecone RAG",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    shadowColor: "shadow-purple-500/10",
    glow: true,
  },
  {
    icon: TrendingDown,
    value: "60%",
    label: "Scalability",
    description: "Latency Reduction",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    shadowColor: "shadow-green-500/10",
    glow: true,

  },
  {
    icon: Award,
    value: "AWS",
    label: "Certifications ",
    description: "Solutions Architect",
    gradient: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-400",
    shadowColor: "shadow-orange-500/10",
    glow: true,
  },
]

export function ImpactGrid() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-balance">Impact at Scale</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-5 sm:p-6 rounded-xl hover:border-white/20 transition-all group relative overflow-hidden ${
                impact.glow ? `shadow-lg ${impact.shadowColor}` : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${impact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <impact.icon
                  className={`h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 ${impact.iconColor} group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">{impact.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground/90">{impact.label}</div>
                  <div className="text-xs text-muted-foreground">{impact.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
