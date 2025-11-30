import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Certificate() {
  const [api, setApi] = React.useState()
  const [isHovered, setIsHovered] = React.useState(false)

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
    <section id="certificate" className="min-h-11/12 bg-white">
      <div className="w-full py-12 sm:py-16 lg:py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-50 to-sky-200 p-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Certifications</h1>
          </div>

          <p className="px-8 py-6 text-lg font-serif font-light">
            Here are some of the certifications I've earned through professional courses and trainings. They reflect my commitment to continuous learning and expertise in data science and machine learning.
          </p>
          
          <div className="pb-8">
            <h1 className="text-center font-bold py-4 text-xl">Certificate Gallery</h1>

            <div className="flex justify-center items-center w-full px-8">
              <Carousel 
                className="w-full max-w-4xl"
                setApi={setApi}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CarouselContent>
                  {certificates.map((certName, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex items-center justify-center p-6">
                            <img 
                              src={`/certificate/${certName}`} 
                              alt={`Certificate ${index + 1}`}
                              className="w-full h-[400px] object-contain rounded-md"
                              onError={(e) => {
                                console.log(`Failed to load: /certificate/${certName}`)
                                e.target.src = 'https://via.placeholder.com/400x400?text=Certificate+Not+Found'
                              }}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}