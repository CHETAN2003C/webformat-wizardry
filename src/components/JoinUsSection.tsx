
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const JoinUsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 -z-10"></div>
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="glass-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full">
                <p className="text-sm font-medium text-nitter-blue">Join Our Community</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Become a part of NITTER R&D Club
              </h2>
              
              <p className="text-gray-600">
                Join our vibrant community of innovators, researchers, and developers. Gain access to state-of-the-art facilities, 
                collaborate with like-minded individuals, and turn your ideas into reality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Access to facilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Expert mentorship</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Networking opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Research funding</p>
                  </div>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-nitter-blue hover:bg-nitter-blue/90 text-white">
                <Link to="/join">Apply Now</Link>
              </Button>
            </div>
            
            <div className="relative hidden md:block">
              <div className="aspect-video bg-gradient-to-tr from-blue-100 to-blue-50 rounded-xl overflow-hidden hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="NITTER R&D Club members working together" 
                  className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h3>
                  <p className="text-gray-700">Connect with researchers, innovators, and industry experts</p>
                </div>
              </div>
              
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-100 rounded-full -z-10"></div>
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
