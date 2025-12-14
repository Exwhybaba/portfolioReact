# 🚀 Project Showcase: Professional Data Science Portfolio (MERN Stack)

I'm excited to share my newly built professional portfolio! As a Data Scientist and ML Engineer, I wanted a platform that not only showcases my projects but also demonstrates my full-stack development capabilities.

🔗 **Live Demo:** [https://seye-oyelayo-portfolio.vercel.app/](https://seye-oyelayo-portfolio.vercel.app/)

## 💡 The Motivation

Moving beyond static templates, I architected a dynamic web application using the **MERN Stack (MongoDB, Express, React, Node.js)**. This allowed me to build a custom Content Management System (CMS) for my blog, enabling me to share insights on AI, Machine Learning, and Agritech directly from my own platform.

## ✨ Key Features

### 1. 📝 Dynamic Blog Engine

Unlike static sites, my portfolio features a fully functional blog system:

- **CRUD Operations**: I can create, read, update, and delete posts directly through a secure admin interface.
- **Rich Content**: Supports HTML content, image uploads, and tagging for technical articles.
- **Engagement**: Integrated **Comment System** and **Reaction Buttons** (Like & Love) to interact with readers.
- **Categorization**: Filter posts by categories like "Deep Learning", "Agritech", and "Web Development".

### 2. 🎨 Interactive UI/UX

- **Responsive Design**: Built with **Tailwind CSS**, ensuring a seamless experience across mobile and desktop.
- **Custom Animations**: Features a tech-inspired loading screen, scroll progress indicators, and smooth transitions.
- **Modern Components**: Utilizes Shadcn UI and Lucide React for a polished, professional look.

### 3. 🏆 Project & Achievement Showcase

- **Dynamic Galleries**: Interactive carousels to display certifications and hackathon achievements.
- **Project Cards**: Detailed cards for my ML/Data Science projects with direct links to GitHub repos and live demos.

### 4. 🔒 Security & Performance

- **Admin Authentication**: Protected routes and API endpoints for creating and editing content.
- **Optimized Assets**: Lazy loading for images and efficient state management using React Hooks.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Lucide Icons, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing posts, comments, and reactions)
- **Deployment**: Vercel (Frontend) & Render (Backend)

## 👨‍💻 Code Snippet: Custom Hook for Scroll Progress

```javascript
useEffect(() => {
  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
    setScrollProgress(scroll);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

Check it out and let me know what you think! 👇

#MERNStack #FullStackDeveloper #DataScience #Portfolio #WebDevelopment #ReactJS #NodeJS #MongoDB #Coding
