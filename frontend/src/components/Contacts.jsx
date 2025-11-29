import { Button } from "./ui/button"
import { useForm, ValidationError } from '@formspree/react';

function Contacts() {
  const [state, handleSubmit] = useForm("mvgjngbw"); // Your form ID

  return (
    <section id= "contact" className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-sky-50 to-sky-200 p-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Contact</h1>
          </div>
          
          <div className="p-10 lg:p-12">
            <p className="leading-relaxed text-lg text-gray-700 mb-8 text-center">
              Let's connect and discuss how my skills and expertise can contribute to your organization's success.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                {state.succeeded ? (
                  <div className="text-center p-8 bg-green-50 rounded-lg">
                    <p className="text-green-600 text-xl font-semibold">✓ Message sent successfully!</p>
                    <p className="text-gray-600 mt-2">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Your message..."
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-red-600 text-sm mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3"
                    >
                      {state.submitting ? 'Sending...' : 'Get in Touch'}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:seyeoyelayo@gmail.com" className="text-sky-600 hover:underline">
                    seyeoyelayo@gmail.com
                  </a>
                </div>

                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+2348104695515" className="text-sky-600 hover:underline">
                    +234 810 469 5515
                  </a>
                </div>

                <div className="bg-sky-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">Ibadan, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts