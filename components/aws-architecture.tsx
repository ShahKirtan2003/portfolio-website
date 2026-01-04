"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Server, Cloud, Activity, Lock, Layers } from "lucide-react"

const architectureComponents = [
  // {
  //   id: "api-gateway",
  //   icon: Server,
  //   title: "API Gateway",
  //   description: "RESTful API endpoints with OAuth2 authentication and rate limiting",
  //   technologies: ["AWS API Gateway", "Lambda", "OAuth2"],
  //   color: "border-chart-1 hover:bg-chart-1/5",
  // },
  // {
  //   id: "compute",
  //   icon: Layers,
  //   title: "Kubernetes Cluster",
  //   description: "Auto-scaling microservices with AI-driven resource optimization",
  //   technologies: ["EKS", "Docker", "Helm"],
  //   color: "border-chart-2 hover:bg-chart-2/5",
  // },
  // {
  //   id: "data-pipeline",
  //   icon: Activity,
  //   title: "Serverless Analytics",
  //   description: "Real-time log parsing and analytics with CloudWatch integration",
  //   technologies: ["Lambda", "CloudWatch", "S3"],
  //   color: "border-chart-3 hover:bg-chart-3/5",
  // },
  // {
  //   id: "database",
  //   icon: Database,
  //   title: "Data Layer",
  //   description: "Multi-database architecture with RDS, DynamoDB, and Vector DB",
  //   technologies: ["RDS", "DynamoDB", "Pinecone"],
  //   color: "border-chart-4 hover:bg-chart-4/5",
  // },
  // {
  //   id: "ai-engine",
  //   icon: Cloud,
  //   title: "AI Co-pilot",
  //   description: "GPT-4 powered RAG system for intelligent infrastructure insights",
  //   technologies: ["GPT-4", "Pinecone", "LangChain"],
  //   color: "border-chart-5 hover:bg-chart-5/5",
  // },
  // {
  //   id: "monitoring",
  //   icon: Lock,
  //   title: "Observability",
  //   description: "Full-stack monitoring with ELK stack and custom alerting",
  //   technologies: ["Elasticsearch", "Kibana", "CloudWatch"],
  //   color: "border-chart-1 hover:bg-chart-1/5",
  // },
]

export function AWSArchitecture() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)

  return (
    <section id="architecture" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-balance">AWS Architecture Blueprint</h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Interactive map of distributed cloud systems I've designed and implemented
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {architectureComponents.map((component) => (
            <Card
              key={component.id}
              className={`p-5 sm:p-6 cursor-pointer transition-all border-2 ${component.color} ${
                selectedComponent === component.id ? "ring-2 ring-ring scale-105" : ""
              }`}
              onClick={() => setSelectedComponent(component.id)}
            >
              <component.icon className="h-8 w-8 sm:h-10 sm:w-10 mb-3 sm:mb-4 text-foreground" />
              <h3 className="text-base sm:text-lg font-bold mb-2">{component.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                {component.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {component.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <a 
          href="https://cp.certmetrics.com/amazon/en/public/verify/credential/5e538039ae0544ad864347e19b321dd7"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 sm:mt-8 transition-transform hover:scale-[1.02]"
        >
          <Card className="p-5 mb-5 sm:p-6 bg-muted/50 cursor-pointer hover:bg-muted/70 transition-colors">
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Badge variant="outline" className="mt-0 sm:mt-1">
                AWS SAA-C03
              </Badge>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">AWS Certified Solutions Architect</strong> — Validated expertise in
                designing resilient, secure, and high-performing distributed systems on AWS.
              </p>
            </div>
          </Card>
        </a>
      </div>
    </section>
  )
}
