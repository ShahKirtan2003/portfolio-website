import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6 sm:space-y-8 text-center">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gradient">
              Kirtan Shah
            </h1>
            <div className="flex justify-center px-2">
              <Badge className="whitespace-normal text-wrap px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium bg-zinc-200/80 hover:bg-zinc-200 border-zinc-300 text-zinc-900 dark:bg-zinc-800/50 dark:hover:bg-zinc-800/70 dark:border-zinc-700 dark:text-zinc-100 max-w-full break-words text-center leading-relaxed">
                SDE2 @ Kickdrum{'\u00A0\u00A0\u00A0'}|{'\u00A0\u00A0\u00A0'}Ex-Sprinklr{'\u00A0\u00A0\u00A0'}|{'\u00A0\u00A0\u00A0'}AWS Solutions Architect
              </Badge>
            </div>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto text-pretty leading-relaxed px-4 sm:px-0">
            AWS Certified Solutions Architect building AI-driven cloud infrastructure and high-performance distributed
            systems. Specialized in scalable microservices, Kubernetes orchestration, and real-time analytics pipelines.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 glass-card hover:bg-white/5 dark:hover:bg-white/5 hover:bg-black/5 bg-transparent w-full sm:w-auto"
              asChild
            >
              <a href="https://www.linkedin.com/in/kirtan03" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 glass-card hover:bg-white/5 dark:hover:bg-white/5 hover:bg-black/5 bg-transparent w-full sm:w-auto"
              asChild
            >
              <a href="mailto:shahkirtan2003@gmail.com">
                <Mail className="h-5 w-5" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 glass-card hover:bg-white/5 dark:hover:bg-white/5 hover:bg-black/5 bg-transparent w-full sm:w-auto"
              asChild
            >
              <a href="https://github.com/ShahKirtan2003" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
