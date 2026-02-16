import ProjectCard from "./ProjectCard";

const projects = [

  {
    id: 1,
    title: "FoodKet Dashboard",
    image: "./public/images/foodket_dashboard.png",
    description:
      `Foodket Enterprise – B2B Corporate Food Management SaaS. A full-stack MERN application designed to digitize office cafeterias and employee food allowances.

Architecture: Built a secure multi-tenant architecture ensuring strict data isolation between organizations.
Core Features: Implemented a closed-loop digital wallet system with daily spending limits, monthly allowances, and real-time transaction tracking.
Advanced Logic: Developed Geofencing capabilities (using the Haversine formula) to restrict transactions to specific physical vendor locations.
Monetization: Integrated Paystack for automated subscription billing, seat management, and pro-rated top-ups.
Security: Implemented a secure JWT-based authentication system with role-based access control.`,
    actions: [
      { label: "MongoDB", variant: "ghost"},
      { label: "Express.js", variant: "ghost"},
      { label: "React", variant: "ghost"},
      { label: "Node.js", variant: "ghost"},
      { label: "JWT Authentication", variant: "ghost"},
      { label: "Tailwind CSS", variant: "ghost"},
      
      { label: "View Project", onClick: () => window.open("https://www.foodket.site/") },
    ],
  },

  {
    id: 2,
    title: "FeedEyes",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
    description:
      "A least-cost feed formulator that helps farmers optimize animal nutrition while minimizing costs. The application provides optimal feed formulations based on available ingredients and nutritional requirements.",
    actions: [
      { label: "Python", variant: "ghost"},
      { label: "Linear Programming", variant: "ghost"},
      { label: "Machine Learning", variant: "ghost"},
      
      { label: "View Project", onClick: () => window.open("https://feedeyes.onrender.com/") },
    ],
  },
  {
    id: 3,
    title: "Crop Recommendation System",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    description:
      "An intelligent system that recommends suitable crops based on soil characteristics and environmental conditions, helping farmers make informed decisions for optimal yield.",
    actions: [
      { label: "Python", variant: "ghost"},
      { label: "Machine Learning", variant: "ghost"},
      { label: "Streamlit", variant: "ghost"},
      
      { label: "View Project", onClick: () => window.open("https://exwhybaba-crop-recommendation-system-crop-kl5qlo.streamlit.app/") }
      
    ],
  },

  {
    id: 4,
    title: "Crop Monitoring System",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    description:
      "A comprehensive system for monitoring crop health and growth using computer vision to identify plant diseases, pests, and nutritional deficiencies.",
    actions: [
      { label: "Computer Vision", variant: "ghost"},
      { label: "Data Analytics", variant: "ghost"},
      { label: "Streamlit", variant: "ghost"},
      
      { label: "View Project", onClick: () => window.open("https://beanclassifer.streamlit.app/") }
      
    ],
  },

  {
    id: 5,
    title: "Customer Churn Prediction",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description:
      "Machine learning models to predict and prevent customer churn for service providers, enabling proactive retention strategies.",
    actions: [
      { label: "Machine Learning", variant: "ghost"},
      { label: "Predictive Analytics", variant: "ghost"},
      { label: "SKLearn", variant: "ghost"},
      
      { label: "View Project", onClick: () => window.open("https://customerchurn1.streamlit.app/") },
    ],
  },
  {
    id: 6,
    title: "Malaria Parasite Detector",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    description:
      "An AI system for detecting malaria parasites in blood samples to assist in diagnosis, improving accuracy and speed of detection in healthcare settings.",
    actions: [
      { label: "Deep Learning", variant: "ghost"},
      { label: "Computer Vision", variant: "ghost"},
      { label: "Healthcare AI", variant: "ghost"},
      
      { label: "View Project", onClick: () => window.open("https://chaos-sedan-27475532.figma.site") }
      
    ],
  },

  {
    id: 7,
    title: "Bank Customer Transaction Dashboard",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description:
      "Interactive analytics dashboard for visualizing customer demographics, account details, and transaction patterns to drive insights on banking behavior and support decision‑making.",
    actions: [
      { label: "Python", variant: "ghost"},
      { label: "Pandas", variant: "ghost"},
      { label: "Plotly Dash", variant: "ghost"},
      { label: "Docker", variant: "ghost"},
      
      { label: "View Project", onClick: () => window.open("https://bank-viz.onrender.com/") }
      
    ],
  },
];

export default function Project() {
  return (
    <section id="project" className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent inline-block">My Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing real-world solutions in data science, machine learning, and web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              actions={p.actions}
              image={p.image}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 text-lg mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/Exwhybaba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}