import React from 'react'
import { GraduationCap, Target, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import './AboutMe.css'

const expertiseData = [
  {
    number: "01",
    title: "Data Science & Analytics",
    description: "I transform large and complex datasets into meaningful insights using data wrangling, statistical modelling, and interactive dashboards to drive business impact.",
  },
  {
    number: "02",
    title: "Software Design & Development",
    description: "I specialize in building scalable, intelligent solutions using the MERN stack, ensuring seamless integration of AI models and high-performance web applications.",
  },
  {
    number: "03",
    title: "Machine Learning (ML)",
    description: "I manage the full ML lifecycle—from experimentation to production—using MLflow, Docker, and CI/CD, with expertise in Computer Vision and Agentic AI.",
  },
  {
    number: "04",
    title: "Business Intelligence (Analytics & Development)",
    description: "I develop real-time data visualizations and analytics dashboards that enable stakeholders to make informed decisions and solve high-impact business problems.",
  },
 
];


function AboutMe() {
  return (
    <section id="about_me" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent inline-block">My Expertise</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Building intelligent solutions through data science and machine learning</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start">
          {/* Image Section */}
          <div className="flex justify-center lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <img 
                src="/images/imgPort.jpeg" 
                alt="Profile" 
                className="w-full max-w-sm h-auto rounded-2xl object-cover shadow-2xl relative transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              {expertiseData.map((expertise) => (
                <div key={expertise.number} className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-slate-200 group-hover:text-emerald-100/50 transition-colors">{expertise.number}</span>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors">{expertise.title}</h4>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-emerald-50 transition-colors pl-10 sm:pl-12">
                    {expertise.description}
                  </p>
                </div>
              ))}
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
              <Card className="border-slate-200 hover:border-emerald-400 transition-colors">
                <CardContent className="p-3 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-bold text-emerald-600">60+</p>
                  <p className="text-sm text-slate-600">Projects Completed</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:border-emerald-400 transition-colors">
                <CardContent className="p-3 flex flex-col items-center justify-center text-center">
                  <p className="text-2xl font-bold text-emerald-600">4+</p>
                  <p className="text-sm text-slate-600">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutMe