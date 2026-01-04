"use client"

import { useState, useEffect } from "react"
import { Terminal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const achievements = [
  { commit: "d9a2e3f", message: "perf: optimized database queries - 60% latency drop, 3x throughput", date: "2024-10" },
  { commit: "a3f2d1c", message: "feat: architected OAuth2/OIDC flow securing active users", date: "2024-08" },
  { commit: "b7e4c9a", message: "perf: reduced LLM token costs by 45% through intelligent caching", date: "2025-09" },
  { commit: "f2c9a8e", message: "ci: streamlined Jenkins pipelines - 40% faster deployments", date: "2024-06" },
  { commit: "e5b7c4d", message: "feat: deployed AI K8s co-pilot with RAG for cost optimization", date: "2024-11" },
]

export function SystemTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < achievements.length) {
          return prev + 1
        }
        return prev
      })
    }, 400)

    return () => clearInterval(timer)
  }, [isClient])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-900/50 border-b border-zinc-300 dark:border-white/10">
            <Terminal className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
            <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400">git log --oneline</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm space-y-2 bg-zinc-50 dark:bg-zinc-950/50">
            <AnimatePresence>
              {achievements.slice(0, visibleLines).map((achievement, index) => (
                <motion.div
                  key={achievement.commit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
                >
                  <span className="text-amber-600 dark:text-yellow-400 shrink-0">{achievement.commit}</span>
                  <span className="flex-1">{achievement.message}</span>
                  <span className="text-zinc-500 dark:text-zinc-500 text-xs shrink-0">{achievement.date}</span>
                </motion.div>
              ))}
            </AnimatePresence>

            {visibleLines < achievements.length && (
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-zinc-500 dark:text-zinc-500"
              >
                ▊
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
