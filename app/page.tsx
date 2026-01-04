"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ImpactGrid } from "@/components/impact-grid"
import { SystemTerminal } from "@/components/system-terminal"
import { ProfessionalJourney } from "@/components/professional-journey"
import { SkillCloud } from "@/components/skill-cloud"
import { AWSArchitecture } from "@/components/aws-architecture"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="radial-gradient" />
      <div className="fixed inset-0 grid-overlay pointer-events-none" />

      <Header />

      <motion.main 
        variants={containerVariants} 
        initial="hidden" 
        animate={mounted ? "visible" : "hidden"} 
        className="relative z-10"
      >
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={itemVariants}>
          <AWSArchitecture />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ImpactGrid />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SystemTerminal />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ProfessionalJourney />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SkillCloud />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Testimonials />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Contact />
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  )
}
