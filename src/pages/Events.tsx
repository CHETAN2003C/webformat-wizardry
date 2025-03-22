
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('upcoming');

  const allEvents = [
    {
      id: 1,
      title: 'Annual Innovation Summit',
      date: 'August 15, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium, NITT',
      status: 'upcoming',
      description: 'Join us for a day of innovation, featuring keynote speakers, project demonstrations, and networking opportunities.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'Technical Workshop Series',
      date: 'September 5-7, 2023',
      time: '2:00 PM - 5:00 PM',
      location: 'Research Lab, NITTER R&D Club',
      status: 'upcoming',
      description: 'A three-day workshop series on emerging technologies, including hands-on sessions and expert talks.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      title: 'Research Symposium',
      date: 'October 20, 2023',
      time: '9:00 AM - 6:00 PM',
      location: 'Conference Hall, NITT',
      status: 'upcoming',
      description: 'Present your research findings and interact with faculty and industry experts. Open to all club members.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 4,
      title: 'IoT Hackathon',
      date: 'July 10-12, 2023',
      time: 'All day event',
      location: 'IT Center, NITT',
      status: 'past',
      description: 'A 48-hour hackathon focused on IoT solutions for real-world problems. Open to all engineering students.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 5,
      title: 'Industry-Academia Conclave',
      date: 'June 5, 2023',
      time: '11:00 AM - 3:00 PM',
      location: 'Seminar Hall, NITT',
      status: 'past',
      description: 'An interactive session with industry professionals and academicians to bridge the gap between theory and practice.',
      image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 6,
      title: 'Robotics Competition',
      date: 'May 15, 2023',
      time: '9:00 AM - 5:00 PM',
      location: 'Open Air Theatre, NITT',
      status: 'past',
      description: 'A competitive event showcasing innovative robotic designs and solutions developed by students.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  const filteredEvents = filter === 'all' 
    ? allEvents 
    : allEvents.filter(event => event.status === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                Events & <span className="text-nitter-blue">Activities</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Stay updated with our latest events, workshops, seminars, and activities. Join us to learn, collaborate, and innovate.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setFilter('upcoming')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === 'upcoming' 
                    ? 'bg-nitter-blue text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setFilter('past')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === 'past' 
                    ? 'bg-nitter-blue text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Past Events
              </button>
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === 'all' 
                    ? 'bg-nitter-blue text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Events
              </button>
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <Card key={event.id} className="border border-gray-200 hover-lift overflow-hidden opacity-0 animate-fade-in" style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}>
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        event.status === 'upcoming' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-500 text-white'
                      }`}>
                        {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-nitter-blue" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-nitter-blue" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-nitter-blue" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    
                    <Button asChild variant="outline" className="w-full mt-2 border-nitter-blue text-nitter-blue hover:bg-nitter-blue/10">
                      <Link to={`/events/${event.id}`}>
                        {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Calendar Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="section-heading inline-block">Events Calendar</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Plan ahead with our events calendar. Mark your calendar and don't miss out on our exciting events.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <div className="text-center">
                  <p className="text-gray-700 mb-6">
                    For a detailed view of all our upcoming events, please check our events calendar. You can sync it with your Google Calendar or download the events.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-nitter-blue hover:bg-nitter-blue/90 text-white">
                      View Full Calendar
                    </Button>
                    <Button variant="outline" className="border-nitter-blue text-nitter-blue hover:bg-nitter-blue/10">
                      Sync with Google Calendar
                    </Button>
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

export default Events;
