
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      title: 'Research Laboratories',
      description: 'State-of-the-art research laboratories equipped with cutting-edge technology for various engineering disciplines.',
      features: [
        'Advanced Electronics Lab',
        'Materials Testing Lab',
        'IoT and Embedded Systems Lab',
        'Mechanical Workshop',
        'Renewable Energy Lab'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      title: 'Computing Centers',
      description: 'High-performance computing facilities with the latest software and hardware resources for computational research.',
      features: [
        'Supercomputing Cluster',
        'AI and Machine Learning Workstations',
        'CAD/CAM Design Studio',
        'Virtual Reality Lab',
        'Data Analysis Suite'
      ],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      title: 'Fabrication Workshops',
      description: 'Fully equipped fabrication workshops for prototype development and experimental setups.',
      features: [
        '3D Printing Facility',
        'CNC Machining Center',
        'Laser Cutting and Engraving',
        'PCB Fabrication Unit',
        'Welding and Metalworking Shop'
      ],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      title: 'Collaboration Spaces',
      description: 'Dedicated spaces for team discussions, brainstorming sessions, and collaborative work.',
      features: [
        'Meeting Rooms',
        'Discussion Lounges',
        'Video Conferencing Facilities',
        'Presentation Halls',
        'Ideation Zones'
      ],
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Our <span className="text-nitter-blue">Facilities</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore our world-class facilities that empower our members to innovate, research, and develop cutting-edge solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-24">
              {facilities.map((facility, index) => (
                <div 
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <h2 className="text-3xl font-display font-semibold text-nitter-blue">{facility.title}</h2>
                    <p className="text-gray-700 text-lg">{facility.description}</p>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-medium text-gray-900">Key Features:</h3>
                      <ul className="space-y-2">
                        {facility.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-6 w-6 text-nitter-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative">
                      <div className="aspect-w-4 aspect-h-3 glass-card rounded-2xl p-6 hover-scale">
                        <img 
                          src={facility.image} 
                          alt={facility.title} 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
                      <div className="absolute -left-8 -top-8 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-display font-semibold text-nitter-blue">Book Our Facilities</h2>
                  <p className="text-gray-700">
                    Our facilities are available for booking by club members for research projects, experiments, and prototyping. Please contact us to check availability and make a reservation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-nitter-blue hover:bg-nitter-blue/90 text-white">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-nitter-blue text-nitter-blue hover:bg-nitter-blue/10">
                      <Link to="/join">Become a Member</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Facility Usage Guidelines</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-nitter-blue font-medium mr-2">•</span>
                      <span className="text-gray-700">Facilities are available for club members only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nitter-blue font-medium mr-2">•</span>
                      <span className="text-gray-700">Booking must be made at least 48 hours in advance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nitter-blue font-medium mr-2">•</span>
                      <span className="text-gray-700">Safety protocols must be strictly followed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nitter-blue font-medium mr-2">•</span>
                      <span className="text-gray-700">Equipment usage training is mandatory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nitter-blue font-medium mr-2">•</span>
                      <span className="text-gray-700">Faculty supervision required for certain equipment</span>
                    </li>
                  </ul>
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

export default Facilities;
