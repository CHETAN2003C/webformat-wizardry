
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Innovation Summit',
      date: 'August 15, 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium, NITT',
      description: 'Join us for a day of innovation, featuring keynote speakers, project demonstrations, and networking opportunities.'
    },
    {
      id: 2,
      title: 'Technical Workshop Series',
      date: 'September 5-7, 2023',
      time: '2:00 PM - 5:00 PM',
      location: 'Research Lab, NITTER R&D Club',
      description: 'A three-day workshop series on emerging technologies, including hands-on sessions and expert talks.'
    },
    {
      id: 3,
      title: 'Research Symposium',
      date: 'October 20, 2023',
      time: '9:00 AM - 6:00 PM',
      location: 'Conference Hall, NITT',
      description: 'Present your research findings and interact with faculty and industry experts. Open to all club members.'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events, workshops, and activities. Join us to learn, collaborate, and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={event.id} className="border border-gray-200 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-nitter-blue">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-sm text-nitter-blue font-medium">{event.date}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Time:</span> {event.time}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                
                <Button asChild variant="outline" className="w-full mt-2 border-nitter-blue text-nitter-blue hover:bg-nitter-blue/10">
                  <Link to={`/events/${event.id}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-nitter-blue hover:bg-nitter-blue/90">
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
