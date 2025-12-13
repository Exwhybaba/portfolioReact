import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Award, CheckCircle } from "lucide-react"

export default function Certificate() {
  const [api, setApi] = React.useState()
  const [isHovered, setIsHovered] = React.useState(false)

  const handleImageLoad = (e) => {
    const img = e.target;
    try {
      if (img.naturalHeight > img.naturalWidth) {
        img.style.objectFit = 'contain';
        img.style.objectPosition = 'center';
      } else {
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
      }
    } catch {
      // ignore image read errors
    }
  };

  // List all your certificate filenames here - update with your actual files
  const certificates = [
    'agentic_AI.png',
    'AI6_Cohort8_Certificate (1)_page-0001.jpg',
    'Associate_dataScientist_page-0001.jpg',
    'certificate_Rag_page-0001.jpg',
    'data analysis udacity certificate_page-0001.jpg',
    'DataCamp_certificate.png',
    'docker certificate_page-0001.jpg',
    'hypothesis_testing_page-0001.jpg',
    "Image_modeling_keras_page-0001.jpg",
    "python certificate.png",
    "pytouch_certificate_page-0001.jpg",
    "sampling certificate_page-0001.jpg",
    "statistics_page-0001.jpg"
  ]

  React.useEffect(() => {
    if (!api || isHovered) {
      return
    }

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(intervalId)
  }, [api, isHovered])

  return (
    <section id="certificate" className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">Education</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent inline-block">Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional certifications showcasing continuous learning in data science and machine learning
          </p>
        </div>

        {/* Certificate Gallery Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm"> 
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <Award className="w-7 h-7 text-emerald-600" />
            Certificate Gallery
          </h3>
          <p className="text-slate-600 mb-8">Swipe or click to explore my professional certifications</p>

          <div className="flex justify-center items-center w-full">
            <Carousel 
              className="w-full"
              setApi={setApi}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CarouselContent>
                {certificates.map((certName, index) => (
                 <CarouselItem key={index} className="md:basis-full lg:basis-full">
                    <div className="p-1 md:p-2">
                      <div className="relative group overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
                        <img 
                          src={`/certificate/${certName}`} 
                          alt={`Certificate ${index + 1}`}
                          className="w-full h-auto aspect-[4/3] max-h-[510px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                          onLoad={handleImageLoad}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x300?text=Certificate+Not+Found'
                          }}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex border-slate-300 hover:border-emerald-400 text-slate-900 hover:text-emerald-600" />
              <CarouselNext className="hidden sm:flex border-slate-300 hover:border-emerald-400 text-slate-900 hover:text-emerald-600" />
            </Carousel>
          </div>
        </div>

        {/* Certification Summary */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-200">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              Technical Certifications
            </h4>
            <ul className="space-y-3">
              <li className="text-slate-700">Python & Data Science Specialization</li>
              <li className="text-slate-700">Machine Learning & Deep Learning with TensorFlow/PyTorch</li>
              <li className="text-slate-700">Data Analysis & Visualization</li>
              <li className="text-slate-700">Docker & Containerization</li>
              <li className="text-slate-700">Advanced NLP & Agentic AI</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-200">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-sky-600" />
              Domain Expertise
            </h4>
            <ul className="space-y-3">
              <li className="text-slate-700">Statistical Modeling & Hypothesis Testing</li>
              <li className="text-slate-700">Image Processing & Computer Vision</li>
              <li className="text-slate-700">Agricultural Technology Applications</li>
              <li className="text-slate-700">Business Analytics & Insights</li>
              <li className="text-slate-700">Continuous Learning & Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}