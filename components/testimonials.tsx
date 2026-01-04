import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sagar Savaliya",
    role: "Lead Product Engineer, Sprinklr",
    content:
      " I mentored Kirtan during his internship at Sprinklr and his dedication was outstanding. He consistently went over expectations in delivering good work within tight deadlines for our challenging project. His strong analytical skills and positive attitude always brought fresh ideas to the table. ",
    initials: "SS",
  },
  // {
  //   name: "Raj Patel",
  //   role: "Tech Lead, Sprinklr",
  //   content:
  //     "Exceptional problem-solving skills and deep understanding of distributed systems. The alerting mechanism he built has become a critical part of our infrastructure.",
  //   initials: "RP",
  // },
  // {
  //   name: "Mike Johnson",
  //   role: "Solutions Architect, AWS Partner",
  //   content:
  //     "His AWS architecture designs demonstrate a rare combination of theoretical knowledge and practical implementation expertise. A true cloud native engineer.",
  //   initials: "MJ",
  // },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-balance">What People Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 hover:border-muted-foreground/50 transition-colors">
              <Quote className="h-8 w-8 text-muted-foreground/50 mb-4" />
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-muted text-foreground">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
