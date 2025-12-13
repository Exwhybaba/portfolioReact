import { 
  Code2, 
  Zap, 
  Database,
  Brain,
  Eye,
  BarChart3,
  TrendingUp,
  Sprout,
  Bot,
  PieChart,
  MessageSquareText,
  Leaf,
  Crosshair,
  Recycle,
  ShieldCheck,
  Microscope,
  Activity,
  GitBranch
} from "lucide-react"

function Skills() {

const technicalSkills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: "Machine Learning", icon: Brain },
  { name: "Deep Learning", icon: Brain },
  { name: "Computer Vision", icon: Eye },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Statistical Modeling", icon: TrendingUp },
  { name: "SQL", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: "TensorFlow", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: "PyTorch", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: "Scikit-learn", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
  { name: "Pandas", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: "Github Action", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: "Docker", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: "Mlflow", icon: GitBranch },
  { name: "Agriculture Tech", icon: Sprout },
  { name: "Agentic AI", icon: Bot },
  { name: "RAG", icon: Database },
  { name: "HTML", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: "CSS", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: "JavaScript", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: "React", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: "Node.js", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: "MongoDB", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: "Express.js", logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: "Data Visualization", icon: PieChart },
  { name: "NLP", icon: MessageSquareText }
]

const domainKnowledge = [
  { name: "Agricultural Systems", icon: Sprout },
  { name: "Livestock Nutrition", icon: Activity },
  { name: "Crop Management", icon: Leaf },
  { name: "Precision Agriculture", icon: Crosshair },
  { name: "Sustainable Farming", icon: Recycle },
  { name: "Food Security", icon: ShieldCheck },
  { name: "Business Intelligence", icon: TrendingUp },
  { name: "Research Methods", icon: Microscope }
]

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent inline-block">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
          <h3 className="text-xl font-bold text-slate-900 mb-6">All Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((tech, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
              >
                {tech.logo && <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />}
                {tech.icon && <tech.icon className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />}
                <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-600 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Knowledge */}
        <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Domain Knowledge</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {domainKnowledge.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
              >
                {item.icon && <item.icon className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />}
                <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-600 text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills