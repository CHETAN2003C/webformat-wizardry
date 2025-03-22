
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Faculty Advisor',
      department: 'Computer Science and Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Co-Faculty Advisor',
      department: 'Electronics and Communication Engineering',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Arun Prakash',
      position: 'Student Coordinator',
      department: 'Mechanical Engineering',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      name: 'Divya Menon',
      position: 'Student Co-Coordinator',
      department: 'Electrical and Electronics Engineering',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 opacity-0 animate-fade-in" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
                <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full">
                  <p className="text-sm font-medium text-nitter-blue">About Us</p>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
                  Innovation Begins <span className="text-nitter-blue">Here</span>
                </h1>
                
                <p className="text-gray-600 text-lg">
                  NITTER R&D Club is a premier research and development organization at the National Institute of Technology, Tiruchirappalli, fostering innovation and excellence across various engineering disciplines.
                </p>
              </div>
              
              <div className="relative hidden md:block opacity-0 animate-fade-in" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
                <div className="aspect-w-4 aspect-h-3 glass-card rounded-2xl p-6 hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="NITTER R&D Club members" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
                <div className="absolute -left-8 -top-8 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover-lift">
                <h2 className="text-2xl font-display font-semibold mb-4 text-nitter-blue">Our Vision</h2>
                <p className="text-gray-700">
                  To become a globally recognized hub for innovative research and development in engineering, fostering a culture of excellence, creativity, and technological advancement that contributes to solving real-world problems.
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover-lift">
                <h2 className="text-2xl font-display font-semibold mb-4 text-nitter-blue">Our Mission</h2>
                <p className="text-gray-700">
                  To provide a collaborative platform for students and faculty to engage in cutting-edge research, develop innovative solutions, and enhance technical skills through hands-on experience with state-of-the-art facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading inline-block">Our Story</h2>
            </div>
            
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="space-y-6 text-gray-700">
                <p>
                  Founded in 2005, the NITTER R&D Club began as a small group of enthusiastic engineering students with a passion for research and innovation. What started as informal gatherings to discuss technical ideas quickly evolved into a structured organization with dedicated facilities and faculty support.
                </p>
                
                <p>
                  Over the years, the club has grown exponentially, both in terms of membership and scope of activities. Today, it stands as one of the premier student-led research organizations in the country, with numerous accolades, patents, and publications to its credit.
                </p>
                
                <p>
                  The club has been instrumental in nurturing talent, fostering innovation, and building strong industry-academia relationships. Our alumni have gone on to make significant contributions in various fields, carrying forward the spirit of innovation and excellence instilled during their time at the club.
                </p>
                
                <p>
                  As we look to the future, we remain committed to our core values of innovation, collaboration, and excellence, while continually adapting to emerging technologies and challenges in the ever-evolving field of engineering and technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading inline-block">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dedicated team of faculty advisors and student coordinators who guide the activities and initiatives of the NITTER R&D Club.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover-lift transition-all duration-300">
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-nitter-blue font-medium mb-1">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.department}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-nitter-blue hover:bg-nitter-blue/90">
                <Link to="/join">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
