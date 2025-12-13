import { Button } from "./ui/button"
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

function Contacts() {
  const [state, handleSubmit] = useForm("mvgjngbw");

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent inline-block">Let's Connect</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and collaborations
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-6">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seye Daniel"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="you@example.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-2"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-600 text-sm mt-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  {state.submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                  <a href="mailto:seyeoyelayo@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                    seyeoyelayo@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 border border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-100 rounded-lg group-hover:bg-sky-200 transition-colors">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                  <a href="tel:+2348104695515" className="text-sky-600 hover:text-sky-700 font-medium transition-colors">
                    +234 810 469 5515
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 border border-violet-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-violet-100 rounded-lg group-hover:bg-violet-200 transition-colors">
                  <MapPin className="w-6 h-6 text-violet-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Location</h3>
                  <p className="text-slate-700 font-medium">Ibadan, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/seyeoyelayo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://github.com/Exwhybaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts