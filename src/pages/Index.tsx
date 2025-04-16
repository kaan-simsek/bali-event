import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";
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
      const categoryMatch = activeCategory === "all" || 
        event.category.toLowerCase().includes(activeCategory.toLowerCase());
      
      const searchMatch = searchQuery === "" || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.teacher.toLowerCase().includes(searchQuery.toLowerCase());
      
      const dateMatch = !selectedDate || 
        event.date.includes(format(selectedDate, "MMMM d, yyyy"));
      
      return categoryMatch && searchMatch && dateMatch;
    }
  );

  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
    setVisibleEvents(8);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleEvents(8);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setVisibleEvents(8);
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
      <Hero />

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

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
              
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="bg-bali-sand hover:bg-bali-sand/80"
              >
                Reset Filters
              </Button>
            </div>
            
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

      <section className="py-20 bg-gradient-to-b from-bali-green/10 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Start selling with Spirit Gatherings
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're a self-service platform that empowers our clients to sell offers, events or products 
                and reach audiences with innovation driven management.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-bali-green text-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Easy Setup</h3>
                    <p className="text-muted-foreground">Create your event or product listing in minutes with our intuitive interface.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bali-green text-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Connect with conscious communities around the world interested in your offerings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bali-green text-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Secure Payments</h3>
                    <p className="text-muted-foreground">Handle transactions with confidence using our secure payment processing system.</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 bg-bali-green hover:bg-bali-green-dark text-white px-8 py-6 text-lg">
                Start Selling Today
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
                alt="Bali Mountain Summit" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-medium mb-2">+200% Growth</p>
                <p className="text-sm text-muted-foreground">Our sellers report an average 200% increase in their business after joining our platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
