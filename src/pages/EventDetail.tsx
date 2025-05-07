
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { events } from "@/data/eventData";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const categoryColors: Record<string, string> = {
    dance: "bg-bali-blue text-white",
    breathwork: "bg-bali-green text-white",
    sound: "bg-bali-blue-light hover:bg-bali-blue-dark text-bali-green-dark",
    workshop: "bg-bali-earth text-white",
    meditation: "bg-bali-earth-light text-bali-earth-dark",
    yoga: "bg-bali-coral text-white",
  };

  const getCategoryColor = (category: string) => {
    const lowerCategory = category.toLowerCase();
    for (const [key, value] of Object.entries(categoryColors)) {
      if (lowerCategory.includes(key)) {
        return value;
      }
    }
    return "bg-bali-green-light text-bali-green-dark";
  };

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleBookSeat = () => {
    if (!selectedDate) {
      toast.error("Please select a date first");
      return;
    }
    
    toast.success("Your seat has been booked successfully!", {
      description: `You've booked ${event.title} on ${format(selectedDate, "EEEE, MMMM d, yyyy")}`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="text-bali-green hover:text-bali-green-dark">
                Events
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-muted-foreground">{event.title}</span>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[300px] object-cover"
                />
                <Badge className={`absolute top-4 right-4 ${getCategoryColor(event.category)}`}>
                  {event.category}
                </Badge>
              </div>

              <div className="p-6">
                <h1 className="text-3xl font-serif font-bold mb-4">{event.title}</h1>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-bali-green mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="text-bali-green mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={20} className="text-bali-green mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={20} className="text-bali-green mr-2" />
                    <span>{event.teacher}</span>
                  </div>
                </div>
                
                <section className="mb-8">
                  <h2 className="text-xl font-medium mb-3">About</h2>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <p className="text-muted-foreground">
                    The class is a group practice that uses transformational power to activate the self-healing potential of participants. 
                    Bathing in its resonance clears mental and physical blockages, promotes inner peace, mental clarity, 
                    emotional freedom and physical health as the vibrations generate a frequency that releases negativity, 
                    transforms it and showers participants with positive energy.
                  </p>
                </section>
                
                <section className="mb-8">
                  <h2 className="text-xl font-medium mb-3">About the teacher</h2>
                  <p className="text-muted-foreground">
                    {event.teacher} has been spiritually practicing for over 25 years, studying with masters in various traditions.
                    They are also a licensed therapist specializing in holistic healing modalities including breathwork, sound healing,
                    and meditation techniques. With over 15,000 sessions conducted, {event.teacher} brings a wealth of experience
                    to each event.
                  </p>
                </section>
              </div>
            </div>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-medium mb-4">Location</h2>
              <p className="text-muted-foreground mb-4">
                {event.location}, Jl. Subak Sok Wayah, Ubud, Kec. Tegallalang, Kabupaten Gianyar, Bali 80571, Indonesia
              </p>
              <div className="rounded-lg overflow-hidden h-[300px] bg-gray-200">
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=Ubud,Bali&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7CUbud,Bali&key=YOUR_API_KEY"
                  alt="Event location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>
          </div>
          
          {/* Right Column - Booking Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="text-center mb-6">
                <span className="text-2xl font-bold">{event.price}</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Pick a date</h3>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn(
                        "w-full justify-start text-left",
                        !selectedDate && "text-muted-foreground"
                      )}>
                        <Calendar className="mr-2 h-4 w-4" />
                        {selectedDate ? (
                          format(selectedDate, "EEEE, MMMM d, yyyy")
                        ) : (
                          <span>Select date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Start time</h3>
                  <div className="relative">
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    >
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                    </select>
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-bali-green hover:bg-bali-green-dark text-lg font-medium py-6"
                  onClick={handleBookSeat}
                >
                  Book a seat
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  No payment required - Free event
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
