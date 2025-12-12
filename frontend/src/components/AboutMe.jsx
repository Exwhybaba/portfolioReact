import React from 'react'
import { GraduationCap, Target } from 'lucide-react'

function AboutMe() {
  return (
    <section id="about_me" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Who I Am & What I Do</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Building intelligent solutions through data science and machine learning</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <img 
                src="/images/climate13.jpg" 
                alt="Profile" 
                className="w-full max-w-sm h-auto rounded-2xl object-cover shadow-2xl relative transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-emerald-600" />
                My Expertise
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                I am an inventive and results-oriented Data Professional with a strong focus on data analytics, machine learning, software engineering and deploying AI solutions at scale. I have a proven track record in transforming large and complex datasets into meaningful insights that drive business impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 p-6 rounded-xl border border-emerald-200">
              <p className="text-slate-700 leading-relaxed">
                My expertise spans <span className="font-semibold text-emerald-700">data wrangling, statistical modeling, MERN stack, and the full machine learning lifecycle</span> from experimentation to production. I specialize in productionalization of machine learning models using MLflow, Docker, and CI/CD pipelines for seamless deployment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
                Education
              </h3>
              <p className="text-slate-700 text-lg">
                <span className="font-semibold text-emerald-700">BSc in Agricultural Biochemistry & Nutrition</span> from the University of Ibadan
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200 hover:border-emerald-400 transition-colors">
                <p className="text-2xl font-bold text-emerald-600">10+</p>
                <p className="text-sm text-slate-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200 hover:border-emerald-400 transition-colors">
                <p className="text-2xl font-bold text-emerald-600">4+</p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe