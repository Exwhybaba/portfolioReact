import Header from "./components/Header"
import TitleMe from "./components/TitleMe"
import AboutMe from "./components/AboutMe"
import Project from "./components/Project"
import Achievement from "./components/Achievement"
import Certificate from "./components/Certificate"
import Skills from "./components/Skills"
import Contacts from "./components/Contacts"

function App() {
  

  return (
    <>
      <Header/>
      <main>
        <TitleMe/>
        <AboutMe/>
        <Project/>
        <Achievement/>
        <Certificate/>
        <Skills/>
        <Contacts/>
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            Designed & Built with <span className="text-emerald-400">❤</span> by Seye Daniel Oyelayo
          </p>
          <p className="text-sm text-slate-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
