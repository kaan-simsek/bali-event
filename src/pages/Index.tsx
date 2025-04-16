
import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";
import ContactForm from "@/components/ContactForm";
import { events, categories } from "@/data/eventData";
import { ArrowRight, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleEvents, setVisibleEvents] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const filteredEvents = events.filter(
    event => {
      // Filter by category
      const categoryMatch = activeCategory === "all" || 
        event.category.toLowerCase().includes(activeCategory.toLowerCase());
      
      // Filter by search query
      const searchMatch = searchQuery === "" || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.teacher.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by date
      const dateMatch = !selectedDate || 
        event.date.includes(format(selectedDate, "MMMM d, yyyy"));
      
      return categoryMatch && searchMatch && dateMatch;
    }
  );

  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
    setVisibleEvents(8); // Reset visible events when changing filters
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleEvents(8); // Reset visible events when searching
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setVisibleEvents(8); // Reset visible events when selecting date
  };

  const resetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setSelectedDate(undefined);
    setVisibleEvents(8);
  };

  const loadMoreEvents = () => {
    setVisibleEvents(prev => Math.min(prev + 4, filteredEvents.length));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-to-b from-white to-bali-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of events designed to nurture your body, mind, and spirit.
              Filter by category, date, or search to find experiences that resonate with you.
            </p>
          </div>

          {/* Search and filters */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Search bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
              
              {/* Date picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn(
                    "w-full justify-start text-left",
                    !selectedDate && "text-muted-foreground"
                  )}>
                    <Calendar className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              
              {/* Reset filters button */}
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="bg-bali-sand hover:bg-bali-sand/80"
              >
                Reset Filters
              </Button>
            </div>
            
            {/* Category filter */}
            <CategoryFilter
              categories={categories}
              onFilterChange={handleFilterChange}
              activeCategory={activeCategory}
            />
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredEvents.slice(0, visibleEvents).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No events found matching your criteria.</p>
              <Button onClick={resetFilters} className="mt-4 bg-bali-green hover:bg-bali-green-dark">
                Reset Filters
              </Button>
            </div>
          )}

          {visibleEvents < filteredEvents.length && (
            <div className="mt-10 text-center">
              <Button
                onClick={loadMoreEvents}
                className="bg-bali-green hover:bg-bali-green-dark transition-colors"
              >
                Load More Events <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              A Conscious Community Gathering
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us for ten transformative days of connection, healing, and growth in the spiritual heart of Bali. 
              Our gathering brings together like-minded individuals from around the world to share in dance, 
              breathwork, sound healing, meditation, and workshops led by experienced facilitators.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-bali-sand p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-3">Movement & Dance</h3>
                <p className="text-muted-foreground">
                  Free your body and express your authentic self through ecstatic dance, contact improvisation, and other movement practices.
                </p>
              </div>
              <div className="bg-bali-sand p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-3">Healing & Breathwork</h3>
                <p className="text-muted-foreground">
                  Experience profound transformation through breathwork, sound healing, voice therapy, and meditation sessions.
                </p>
              </div>
              <div className="bg-bali-sand p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-3">Workshops & Training</h3>
                <p className="text-muted-foreground">
                  Develop new skills and deepen your practice with workshops on Reiki, yoga teacher training, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our events, accommodation options, or anything else? 
                Feel free to reach out to our team. We're here to help make your Bali 
                Spirit Gathering experience as transformative as possible.
              </p>
              
              <div className="bg-bali-green/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-medium mb-4">Our Location</h3>
                <p className="mb-2">Ubud, Bali, Indonesia</p>
                <p className="mb-2">Email: info@balispiritgatherings.com</p>
                <p>Phone: +62 123 456 7890</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-bali-green text-white rounded-full hover:bg-bali-green-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="p-2 bg-bali-green text-white rounded-full hover:bg-bali-green-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="p-2 bg-bali-green text-white rounded-full hover:bg-bali-green-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
