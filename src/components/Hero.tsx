
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Background gradient and shape */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-blue-200 opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/3 w-72 h-72 rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl w-full px-4 md:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              <p className="text-sm font-medium text-nitter-blue">Innovation & Excellence</p>
            </div>
            
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
                NITTE <span className="text-nitter-blue">R&D Club</span> <span className="text-nitter-darkBlue">Bengaluru</span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Fostering innovation, research, and development at NITTE Meenakshi Institute of Technology, Bengaluru.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-nitter-blue hover:bg-nitter-blue/90 text-white">
                <a href="https://forms.gle/2oU28wVAon51cPwf6" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join Us <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-nitter-blue text-nitter-blue hover:bg-nitter-blue/10">
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:flex justify-center items-center opacity-0 animate-fade-in" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            <div className="aspect-square w-full max-w-md relative">
              <div className="absolute inset-0 glass-card rounded-2xl p-6 hover-scale transition-all duration-500 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/7b1feaf1-3270-4f11-a03f-cd792ec35d13.png" 
                  alt="NITTE R&D Club" 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-100 rounded-full"></div>
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-blue-50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
