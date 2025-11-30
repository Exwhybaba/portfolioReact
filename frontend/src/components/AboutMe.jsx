import React from 'react'

function AboutMe() {
  return (
    <section id="about_me" className="min-h-11/12 bg-white">
      <div className="w-full py-12 sm:py-16 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-50 to-sky-200 p-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">About Me</h1>
          </div>
          
          <div className="p-10 lg:p-12">
            <div className="flex flex-col gap-6">
              {/* Row: image + first paragraph */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img 
                  src="/images/climate13.jpg" 
                  alt="Profile" 
                  className="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-lg border-4 border-sky-100" 
                />
                <p className="leading-relaxed text-lg text-gray-700 flex-1">
                  I am an inventive and results-oriented Data Professional with a strong 
                  focus on data analytics, machine learning, software engineering and deploying AI solutions at scale. 
                  I have a proven track record in transforming large and complex datasets into 
                  meaningful insights that drive business impact. My expertise spans data wrangling,
                  statistical modeling, mern stack and the full machine learning lifecycle from experimentation to 
                  production. I specialize in the productionalization of machine learning models using 
                  MLflow for experiment tracking, Docker for containerization, and CI/CD pipelines 
                  for seamless model deployment and integration. I'm skilled in developing interactive, 
                  real-time data visualizations and analytics dashboards using Dash, 
                  enabling stakeholders to make informed decisions quickly and effectively. 
                  With hands-on experience in advanced domains like computer vision and emerging 
                  technologies such as agentic AI, I bring a strategic edge to solving high-impact problems. 
                  I thrive in fast-paced, collaborative environments and consistently deliver scalable, 
                  intelligent solutions tailored to business needs.
                </p>
              </div>

              {/* Second paragraph aligned with first paragraph */}
              <p className="leading-relaxed text-lg text-gray-700 border-t border-gray-200 pt-6 md:ml-56">
                I graduated from the University of Ibadan with a BSc in Agricultural 
                Biochemistry and Nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe