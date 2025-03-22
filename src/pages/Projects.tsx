
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');

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
    },
    {
      id: 4,
      title: 'Autonomous Drones',
      category: 'Internship Project',
      status: 'Completed',
      student: 'Sneha Patel',
      description: 'Development of autonomous drones for surveillance and disaster management applications.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 5,
      title: 'Water Quality Monitoring',
      category: 'Student Research',
      status: 'Ongoing',
      student: 'Rahul Sharma',
      description: 'Development of low-cost water quality monitoring system using IoT and machine learning.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 6,
      title: 'Smart Agriculture System',
      category: 'Final Year Project',
      status: 'Completed',
      student: 'Ananya Gupta',
      description: 'Automated irrigation and crop monitoring system using sensors and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Our <span className="text-nitter-blue">Projects</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore our innovative research and development projects spanning across various engineering disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    filter === category 
                      ? 'bg-nitter-blue text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden border border-gray-200 rounded-xl hover-lift opacity-0 animate-fade-in" style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}>
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

            {/* Show more button */}
            <div className="text-center mt-12">
              <Button variant="outline" className="border-nitter-blue text-nitter-blue hover:bg-nitter-blue/10">
                Load More Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Patents and Publications */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading inline-block">Patents & Publications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our research has resulted in numerous patents and publications in prestigious journals and conferences.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-nitter-blue mb-6">Patents</h3>
                  <ul className="space-y-6">
                    <li className="hover-lift p-4 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Smart Water Quality Monitoring System</h4>
                      <p className="text-sm text-gray-500 mb-2">Patent No: IN2022050123, 2022</p>
                      <p className="text-gray-600">A novel IoT-based system for real-time monitoring and analysis of water quality parameters.</p>
                    </li>
                    <li className="hover-lift p-4 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Efficient Solar Energy Harvesting Mechanism</h4>
                      <p className="text-sm text-gray-500 mb-2">Patent No: IN2021030567, 2021</p>
                      <p className="text-gray-600">An innovative mechanism to improve the efficiency of solar energy harvesting in variable weather conditions.</p>
                    </li>
                    <li className="hover-lift p-4 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">AI-Powered Healthcare Diagnostic Tool</h4>
                      <p className="text-sm text-gray-500 mb-2">Patent No: IN2020040789, 2020</p>
                      <p className="text-gray-600">A machine learning-based diagnostic tool for early detection of chronic diseases using non-invasive methods.</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-nitter-blue mb-6">Publications</h3>
                  <ul className="space-y-6">
                    <li className="hover-lift p-4 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Journal of Engineering Research</h4>
                      <p className="text-sm text-gray-500 mb-2">Volume 15, Issue 3, 2022</p>
                      <p className="text-gray-600">
                        "Advanced Techniques in IoT-based Environmental Monitoring: A Comprehensive Review"
                      </p>
                    </li>
                    <li className="hover-lift p-4 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">International Conference on Sustainable Technologies</h4>
                      <p className="text-sm text-gray-500 mb-2">Proceedings, 2021</p>
                      <p className="text-gray-600">
                        "Novel Approaches to Renewable Energy Integration in Smart Grids"
                      </p>
                    </li>
                    <li className="hover-lift p-4 bg-white rounded-lg border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">IEEE Transactions on Healthcare Technologies</h4>
                      <p className="text-sm text-gray-500 mb-2">Volume 8, Issue 2, 2020</p>
                      <p className="text-gray-600">
                        "Machine Learning Algorithms for Non-Invasive Disease Detection: Performance Analysis and Comparison"
                      </p>
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

export default Projects;
