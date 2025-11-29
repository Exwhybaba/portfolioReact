import { Button } from "./ui/button"

function Skills() {

const technicalSkills = ['Python', "Machine Learning", "Deep Learning","Computer Vision",
"Data Analysis", "Statistical Modeling", "SQL", "TensorFlow", "PyTorch", "Scikit-learn","Pandas",
"Github Action", "Docker", "Mlflow", "Github Action", "Agriculture Tech", "Agentic AI", "RAG",
"HTML","CSS", "Data Visualization", "Natural Language Processing"]

const domainKnowledge = ["Agricultural Systems", "Livestock Nutrition", "Crop Management",
"Precision Agriculture","Sustainable Farming", "Food Security", "Business Intelligence",
"Research Methods"]

  return (
    <section id= "skill" className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-50 to-sky-200 p-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Skills</h1>
          </div>
          
          <div className="p-10 lg:p-12">
            <div className="flex flex-col gap-6">         
                <p className="leading-relaxed text-lg text-gray-700 flex-1 pl-15">
                        I bring a diverse set of technical and domain-specific skills to solve complex problems.
                </p>
                <div className='flex flex-wrap justify-start gap-2'>
                    <div className="flex flex-wrap gap-2 p-4">
                        {technicalSkills.map((tech, index) => (
                            <Button key={index} className="px-4">{tech}</Button>
                            ))}
                        
                    </div>
                    <div className="flex flex-wrap gap-2 p-4">
                        {domainKnowledge.map((skill, index) => (
                            <Button key={index} className="px-4">{skill}</Button>
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