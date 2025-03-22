
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart IoT Solutions',
      category: 'Internship Project',
      status: 'Completed',
      student: 'Arun Kumar',
      description: 'Development of smart IoT solutions for industrial automation and environmental monitoring.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'AI-Powered Healthcare',
      category: 'Final Year Project',
      status: 'In Progress',
      student: 'Priya Sharma',
      description: 'Using artificial intelligence to improve healthcare diagnostics and patient monitoring systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      title: 'Renewable Energy Systems',
      category: 'Student Research',
      status: 'Ongoing',
      student: 'Vikram Singh',
      description: 'Research on efficient solar energy harvesting and storage technologies for sustainable power generation.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our ongoing and completed projects, spanning across various domains of engineering and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden border border-gray-200 rounded-xl hover-lift">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-nitter-blue rounded-full">
                    {project.category}
                  </span>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-50 text-green-600' 
                      : 'bg-yellow-50 text-yellow-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-1">Student: {project.student}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button asChild variant="outline" className="w-full mt-2 border-nitter-blue text-nitter-blue hover:bg-nitter-blue/10">
                  <Link to={`/projects/${project.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-nitter-blue hover:bg-nitter-blue/90">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
