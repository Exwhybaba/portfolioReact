import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "FeedEyes",
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
    id: 2,
    title: "Crop Recommendation System",
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
    id: 3,
    title: "Crop Monitoring System",
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
    id: 4,
    title: "Customer Churn Prediction",
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
    id: 5,
    title: "Malaria Parasite Detector",
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
    id: 6,
    title: "Bank Customer Transaction Dashboard",
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
    <section id= "project" className="min-h-screen bg-white py-5 px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-50 to-sky-200 p-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Project</h1>
          </div>

          <p className="px-8 py-6 text-lg font-serif font-light">
            Below are some of my notable projects that demonstrate my expertise...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-6">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                actions={p.actions}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
