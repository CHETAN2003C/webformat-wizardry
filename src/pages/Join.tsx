
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, SendIcon } from 'lucide-react';

const Join = () => {
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
                Join <span className="text-nitter-blue">NITTER R&D Club</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Become a part of our vibrant community of innovators, researchers, and developers. Explore opportunities to collaborate and grow.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading inline-block">Why Join Us?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the benefits of being a member of NITTER R&D Club and how it can enhance your academic and professional journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover-lift transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nitter-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Access to Facilities</h3>
                <p className="text-gray-700">
                  Gain access to state-of-the-art research laboratories, computing centers, and fabrication workshops. Use cutting-edge equipment for your projects.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover-lift transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nitter-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
                <p className="text-gray-700">
                  Receive guidance from experienced faculty members and industry professionals. Learn from the best in the field and accelerate your learning.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover-lift transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nitter-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Networking Opportunities</h3>
                <p className="text-gray-700">
                  Connect with like-minded individuals, industry experts, and alumni. Build relationships that can help you in your academic and professional career.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover-lift transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nitter-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Funding</h3>
                <p className="text-gray-700">
                  Access funding opportunities for your research projects. Get financial support for materials, equipment, conference attendance, and more.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover-lift transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nitter-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Internship Opportunities</h3>
                <p className="text-gray-700">
                  Get access to exclusive internship opportunities with our industry partners. Gain practical experience and enhance your resume.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover-lift transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nitter-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recognition & Accolades</h3>
                <p className="text-gray-700">
                  Get recognition for your achievements and contributions. Showcase your work at club events, conferences, and competitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Form Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-heading inline-block">Application Form</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to apply for membership to the NITTER R&D Club. We'll review your application and get back to you soon.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-card rounded-2xl p-8 md:p-12 order-2 md:order-1">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <Input id="phone" placeholder="Enter your phone number" required />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="department" className="text-sm font-medium text-gray-700">Department <span className="text-red-500">*</span></label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cse">Computer Science Engineering</SelectItem>
                          <SelectItem value="ece">Electronics & Communication Engineering</SelectItem>
                          <SelectItem value="eee">Electrical & Electronics Engineering</SelectItem>
                          <SelectItem value="mech">Mechanical Engineering</SelectItem>
                          <SelectItem value="civil">Civil Engineering</SelectItem>
                          <SelectItem value="chem">Chemical Engineering</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="yearOfStudy" className="text-sm font-medium text-gray-700">Year of Study <span className="text-red-500">*</span></label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">First Year</SelectItem>
                          <SelectItem value="2">Second Year</SelectItem>
                          <SelectItem value="3">Third Year</SelectItem>
                          <SelectItem value="4">Fourth Year</SelectItem>
                          <SelectItem value="5">Fifth Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="areasOfInterest" className="text-sm font-medium text-gray-700">Areas of Interest <span className="text-red-500">*</span></label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">Artificial Intelligence & Machine Learning</SelectItem>
                        <SelectItem value="iot">Internet of Things</SelectItem>
                        <SelectItem value="robotics">Robotics & Automation</SelectItem>
                        <SelectItem value="renewable">Renewable Energy</SelectItem>
                        <SelectItem value="embedded">Embedded Systems</SelectItem>
                        <SelectItem value="vlsi">VLSI Design</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Why do you want to join? <span className="text-red-500">*</span></label>
                    <Textarea id="message" placeholder="Tell us why you want to join the club and what you hope to achieve" rows={4} required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-nitter-blue hover:bg-nitter-blue/90 text-white">
                    <SendIcon className="h-4 w-4 mr-2" /> Submit Application
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8 order-1 md:order-2">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover-lift">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Membership Eligibility</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-nitter-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Currently enrolled as a student at NITT</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-nitter-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Minimum CGPA of 7.0 or equivalent</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-nitter-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Genuine interest in research and development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-nitter-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Commitment to club activities and projects</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover-lift">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Process</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue font-semibold mr-3">1</span>
                      <div>
                        <p className="text-gray-900 font-medium">Submit Application</p>
                        <p className="text-gray-600 text-sm">Fill out the application form with your details and areas of interest.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue font-semibold mr-3">2</span>
                      <div>
                        <p className="text-gray-900 font-medium">Review Process</p>
                        <p className="text-gray-600 text-sm">Our team will review your application and shortlist candidates.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue font-semibold mr-3">3</span>
                      <div>
                        <p className="text-gray-900 font-medium">Interview</p>
                        <p className="text-gray-600 text-sm">Shortlisted candidates will be invited for a brief interview.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue font-semibold mr-3">4</span>
                      <div>
                        <p className="text-gray-900 font-medium">Selection & Onboarding</p>
                        <p className="text-gray-600 text-sm">Selected candidates will be notified and onboarded to the club.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover-lift">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about the application process or club membership, please feel free to contact us.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-nitter-blue mr-3" />
                      <a href="mailto:nitterclub@nitt.edu" className="text-gray-700 hover:text-nitter-blue transition-colors duration-300">nitterclub@nitt.edu</a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-nitter-blue mr-3" />
                      <a href="tel:+919876543210" className="text-gray-700 hover:text-nitter-blue transition-colors duration-300">+91 98765 43210</a>
                    </div>
                  </div>
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

export default Join;
