"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Download, Terminal, Mail, Check, Menu, X } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const copyEmail = () => {
    const email = "shahkirtan2003@gmail.com"
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={copyEmail} className="flex items-center gap-2 group relative" title="Click to copy email">
            <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border border-border/40 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-background/80 cursor-pointer">
              <Terminal className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary" />
              <span className="text-xs sm:text-sm font-mono font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                kirtan@shah
              </span>
              <span className="text-primary animate-pulse">:</span>
              <span className="text-xs text-muted-foreground font-mono">~</span>
              {copied ? (
                <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 ml-1" />
              ) : (
                <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
              )}
            </div>
            {copied && (
              <span className="absolute -bottom-8 left-0 text-xs text-green-500 bg-background/90 backdrop-blur-sm border border-border/40 px-2 py-1 rounded-md whitespace-nowrap">
                Email copied!
              </span>
            )}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            {/* <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button> */}
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full h-9 w-9 sm:h-10 sm:w-10">
              {theme === "dark" ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>

            <Button
              className="gap-2 shimmer-button bg-zinc-100 text-zinc-900 hover:bg-white h-9 sm:h-10 px-3 sm:px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-white/10 group"
              asChild
            >
              <a href="/Kirtan_Shah_Resume.pdf" download="Kirtan_Shah_Resume.pdf">
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span className="sm:hidden text-sm">Resume</span>
                <span className="hidden sm:inline text-sm">Download Resume</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-full h-9 w-9"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40 mt-2">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </button>
              {/* <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button> */}
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
