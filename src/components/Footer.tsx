
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4 flex items-center">
              <img 
                src="/lovable-uploads/nitte-logo.png" 
                alt="NITTE Logo" 
                className="h-10 w-auto mr-2"
              />
              <div className="font-display font-bold text-2xl text-nitter-blue">
                NITTE <span className="text-nitter-darkBlue">R&D Club</span>
              </div>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              Fostering innovation, research, and development at NITTE Meenakshi Institute of Technology, Bengaluru.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/groups/14611097" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-nitter-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-nitter-blue transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-nitter-blue transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-nitter-blue transition-colors duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-600 hover:text-nitter-blue transition-colors duration-300">Facilities</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-nitter-blue transition-colors duration-300">Events</Link>
              </li>
              <li>
                <a href="https://forms.gle/2oU28wVAon51cPwf6" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-nitter-blue transition-colors duration-300">Join Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-nitter-blue mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  NITTE Meenakshi Institute of Technology<br />
                  Bengaluru - 560064<br />
                  Karnataka, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-nitter-blue mr-2 flex-shrink-0" />
                <a href="mailto:rndclub@nitte.edu.in" className="text-gray-600 hover:text-nitter-blue transition-colors duration-300">
                  rndclub@nitte.edu.in
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin className="w-5 h-5 text-nitter-blue mr-2 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/groups/14611097" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-nitter-blue transition-colors duration-300"
                >
                  LinkedIn Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} NITTE R&D Club Bengaluru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
