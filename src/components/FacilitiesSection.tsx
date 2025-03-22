
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FacilitiesSection = () => {
  const facilities = [
    {
      title: 'Research Labs',
      description: 'State-of-the-art research laboratories equipped with cutting-edge technology and equipment.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      title: 'Computing Centers',
      description: 'High-performance computing facilities with the latest software and hardware resources.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      title: 'Fabrication Workshops',
      description: 'Fully equipped fabrication workshops for prototype development and experimental setups.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the world-class facilities available at NITTER R&D Club for research and development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="relative rounded-xl overflow-hidden group hover-scale"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-white/80 text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-nitter-blue hover:bg-nitter-blue/90">
            <Link to="/facilities">Explore All Facilities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
