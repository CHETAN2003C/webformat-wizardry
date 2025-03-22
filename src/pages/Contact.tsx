
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Contact <span className="text-nitter-blue">Us</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Get in touch with us for any queries, feedback, or collaboration opportunities. We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl font-display font-semibold text-nitter-blue mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject <span className="text-red-500">*</span></label>
                    <Input id="subject" placeholder="Enter the subject of your message" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                    <Textarea id="message" placeholder="Enter your message" rows={6} required />
                  </div>
                  
                  <Button type="submit" className="bg-nitter-blue hover:bg-nitter-blue/90 text-white">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-semibold text-nitter-blue mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-nitter-blue mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">
                          NITTE Institute of Technology<br />
                          Bengaluru - 560064<br />
                          Karnataka, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-nitter-blue mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:rndclub@nitte.edu.in" className="hover:text-nitter-blue transition-colors duration-300">
                            rndclub@nitte.edu.in
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Linkedin className="h-6 w-6 text-nitter-blue mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">LinkedIn</h3>
                        <p className="text-gray-600">
                          <a 
                            href="https://www.linkedin.com/groups/14611097" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-nitter-blue transition-colors duration-300"
                          >
                            NITTE R&D Club LinkedIn Group
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-nitter-blue mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday: 10:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/groups/14611097" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-nitter-blue transition-colors duration-300 shadow-sm"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading inline-block">Our Location</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit us at the NITTE Institute of Technology, Bengaluru. We're located in the main campus.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-4 md:p-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                {/* In a real application, you would embed a Google Maps iframe here */}
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <p className="text-nitter-blue font-medium">Map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
