import { Button } from "./ui/button"
import { Code2, Zap, Database } from "lucide-react"

function Skills() {

const technicalSkills = ['Python', "Machine Learning", "Deep Learning","Computer Vision",
"Data Analysis", "Statistical Modeling", "SQL", "TensorFlow", "PyTorch", "Scikit-learn","Pandas",
"Github Action", "Docker", "Mlflow", "Agriculture Tech", "Agentic AI", "RAG",
"HTML","CSS", "Java Script", "React", "Node Js", "Mongo DB", "Express Js", "Data Visualization", "NLP"]

const domainKnowledge = ["Agricultural Systems", "Livestock Nutrition", "Crop Management",
"Precision Agriculture","Sustainable Farming", "Food Security", "Business Intelligence",
"Research Methods"]

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Zap,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Agentic AI", "RAG"]
  },
  {
    title: "Data & Backend",
    icon: Database,
    skills: ["Python", "SQL", "Pandas", "Data Analysis", "Statistical Modeling", "Docker", "Mlflow", "MongoDB", "Express Js"]
  },
  {
    title: "Frontend & Web",
    icon: Code2,
    skills: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Data Visualization"]
  }
]

  return (
    <section id="skill" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proficient across modern tech stack and domain-specific expertise
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-emerald-100 to-sky-100 rounded-lg group-hover:shadow-lg transition-all">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* All Technical Skills */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-slate-200 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">All Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.map((tech, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="border-slate-300 hover:border-emerald-400 hover:text-emerald-600 text-slate-700"
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* Domain Knowledge */}
        <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Domain Knowledge</h3>
          <div className="flex flex-wrap gap-3">
            {domainKnowledge.map((skill, index) => (
              <Button 
                key={index} 
                variant="outline" 
                className="border-emerald-300 bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills