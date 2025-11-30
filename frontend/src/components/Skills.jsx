import { Button } from "./ui/button"

function Skills() {

const technicalSkills = ['Python', "Machine Learning", "Deep Learning","Computer Vision",
"Data Analysis", "Statistical Modeling", "SQL", "TensorFlow", "PyTorch", "Scikit-learn","Pandas",
"Github Action", "Docker", "Mlflow", "Github Action", "Agriculture Tech", "Agentic AI", "RAG",
"HTML","CSS", "Java Script", "React", "Node Js", "Mongo DB", "Express Js", "Data Visualization", "Natural Language Processing"]

const domainKnowledge = ["Agricultural Systems", "Livestock Nutrition", "Crop Management",
"Precision Agriculture","Sustainable Farming", "Food Security", "Business Intelligence",
"Research Methods"]

  return (
    <section id="skill" className="min-h-11/12 bg-grey">
      <div className="w-full py-12 sm:py-16 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-50 to-sky-200 p-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Skills</h1>
          </div>
          
          <div className="p-10 lg:p-12">
            <div className="space-y-8">         
              <p className="leading-relaxed text-lg text-gray-700">
                I bring a diverse set of technical and domain-specific skills to solve complex problems.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((tech, index) => (
                    <Button key={index} variant="outline" size="sm">{tech}</Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Domain Knowledge</h3>
                <div className="flex flex-wrap gap-2">
                  {domainKnowledge.map((skill, index) => (
                    <Button key={index} variant="outline" size="sm">{skill}</Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills