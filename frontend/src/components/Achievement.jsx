import ProjectCard from "./ProjectCard";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const achievements = [
  {
    id: 2,
    title: "2023 Cohere Multilingual Hackathon Winner",
    description:
      "Recognized at the prestigious Cohere Multilingual Hackathon for developing innovative NLP solutions that addressed real‑world language processing challenges.",
    actions: [
      { label: "View Project", onClick: () => window.open("https://feedeyes.onrender.com/") },
    ],
  },
  {
    id: 1,
    title: "Climate Risk Challenge Winner",
    description:
      "Secured a $50,000 Amazon cloud credit for the University of Ibadan and a $1,500 cash prize for our team in the Climate Risk Challenge under the Sustainable Africa Initiative.",
    actions: [  
      { label: "View Project", onClick: () => window.open("https://exwhybaba-crop-recommendation-system-crop-kl5qlo.streamlit.app/") }
      
    ],
  },

  {
    id: 3,
    title: "Legacy AgriTech Hackathon Finalist",
    description:
      "Qualified for the Legacy AgriTech Hackathon, organized by the Mandela Washington Fellowship Alumni Association of Nigeria (MWFAAN), with an innovative agricultural solution.",
    actions: [  
      { label: "View Project", onClick: () => window.open("https://exwhybaba-crop-recommendation-system-crop-kl5qlo.streamlit.app/") }
      
    ],
  }
];

export default function Achievement() {
  const [api, setApi] = React.useState()
  const [isHovered, setIsHovered] = React.useState(false)

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
    <section id= "achievement" className="min-h-11/12 bg-grey">
      <div className="w-full py-12 sm:py-16 lg:py-12 px-4 sm:px-6 lg:px-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-50 to-sky-200 p-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Achievements</h1>
          </div>

          <p className="px-8 py-6 text-lg font-serif font-light">
            My work has been recognized through various competitions and challenges in the technology and agricultural sectors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-6">
            {achievements.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                actions={p.actions}
              />
            ))}
          </div>
          <div>
            <h1 className="text-center font-bold py-3 text-xl">Climate Challenge Award Gallery</h1>

            <div className="flex justify-center items-center w-full">
                <Carousel 
                    className="w-full max-w-7xl h-screen max-h-7xl"
                    setApi={setApi}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <CarouselContent>
                        {['climate2.jpg', 'climate4.jpg', 'climate5.jpg', 'climate8.jpg', 'climate13.jpg', 'climate16.jpg'].map((imageName, index) => (
                            <CarouselItem key={index}>
                                <div className="p-2">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-6">
                                            <img 
                                                src={`/images/${imageName}`} 
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-[600px] object-cover rounded-md"
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