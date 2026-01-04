import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Kickdrum",
    role: "Software Engineer (SDE2)",
    period: "Jan 2024 - Present",
    location: "Bangalore, India",
    highlights: [
      "Delivered major UI revamp & Performance upgrades for TestRail, improving navigation speed by 30%, reducing bottleneck query latency by 60%, and upgrading Jira integration to secure OAuth2 authentication, enhancing enterprise security and seamless issue tracking.",
      "Built a Serverless SQL analytics pipeline that parses CloudWatch logs and RDS schemas leveraging AI to identify implicit table relationships and generate scalability reports, optimized token consumption by 45% through intelligent prompt engineering and metadata filtering.",
      "Implemented an AI-driven Kubernetes co-pilot, utilizing GPT-4 LLM and Pinecone (Vector DB) to implement a RAG-based self-learning engine that delivers real-time incident reports and actionable resource rightsizing reports that directly optimize cluster efficiency and reduce cloud infrastructure spend.",
      "Optimized release workflows with Jenkins CI/CD, cutting cycle time by 40% and enabling scalable, cloud-native deployments, while driving Agile practices through Jira management and automated build/testing pipelines.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Java", "Spring Boot", "Python", "AWS", "Kubernetes", "Jenkins", "Jira", "Serverless", "RDS", "Lambda", "S3", "LangChain"],
  },
  {
    company: "Sprinklr",
    role: "Product Engineering Intern",
    period: "May 2023 - June 2023",
    location: "Gurugram, India",
    highlights: [
      "Built a real-time Failure Alerting Mechanism using Springboot, Flask, and the ELK stack, effectively enhancing log analysis and System Reliability.",
      "Utilized a dataset of more than 10 million data points with 30+ data fields to train an analytical model, thereby increasing the accuracy of our analytical operations.",
      "Executed various strategies for spotting unusual shifts in the system, stretching from Statistical Algorithms to Machine Learning models and up to complex RNNs (Recurrent Neural Networks).",
    ],
    technologies: ["Java", "Spring Boot", "Python", "Flask", "Elasticsearch", "Kibana", "ELK Stack"],
  },
]

export function ProfessionalJourney() {
  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-balance">Professional Journey</h2>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-5 sm:p-6 lg:p-8 hover:border-muted-foreground/50 transition-all">
              <div className="flex flex-col gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span className="font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                    <span className="text-chart-1 sm:shrink-0">→</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
