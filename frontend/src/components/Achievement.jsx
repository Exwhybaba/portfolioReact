import ProjectCard from "./ProjectCard";
import { Trophy, Zap, Target } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  return (
    <section id="achievement" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">Recognition</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Achievements & Awards</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Recognized for innovative solutions in hackathons and competitive challenges
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement) => (
            <ProjectCard
              key={achievement.id}
              title={achievement.title}
              description={achievement.description}
              actions={achievement.actions}
            />
          ))}
        </div>

        {/* Prizes & Awards Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Prizes & Recognition</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-200 text-center hover:shadow-lg transition-shadow">
              <Trophy className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-2">3+</p>
              <p className="text-slate-600 font-medium">Hackathon Awards</p>
            </div>
            
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-200 text-center hover:shadow-lg transition-shadow">
              <Zap className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-2">$50K+</p>
              <p className="text-slate-600 font-medium">Prize Money & Credits</p>
            </div>
          
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200 text-center hover:shadow-lg transition-shadow">
              <Target className="w-8 h-8 text-violet-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-slate-900 mb-2">100%</p>
              <p className="text-slate-600 font-medium">Project Success Rate</p>
            </div>
          </div>
        </div>

        {/* Award-Winning Portfolio Gallery */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-4">Award-Winning Projects</h3>
          <p className="text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            Showcasing award-winning solutions from the Climate Risk Challenge
          </p>
          <Carousel className="w-full">
            <CarouselContent>
              {[
                "climate2.jpg",
                "climate4.jpg",
                "climate5.jpg",
                "climate7.jpg",
                "climate8.jpg",
                "climate13.jpg",
                "climate16.jpg"
              ].map((image, index) => (
                <CarouselItem key={index} className="md:basis-full lg:basis-full">
                  <div className="p-1 md:p-2">
                    <div className="relative group overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
                      <img 
                        src={`/images/${image}`}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-[450px] md:h-[500px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                        onLoad={handleImageLoad}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-4" />
            <CarouselNext className="hidden lg:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}