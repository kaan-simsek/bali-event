import { useState } from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";
import { events, categories } from "@/data/eventData";
import { ArrowRight, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, isWithinInterval, parse } from "date-fns";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleEvents, setVisibleEvents] = useState(16);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const filteredEvents = events.filter(
    event => {
      const categoryMatch = activeCategory === "all" || 
        event.category.toLowerCase().includes(activeCategory.toLowerCase());
      
      const searchMatch = searchQuery === "" || 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.teacher.toLowerCase().includes(searchQuery.toLowerCase());
      
      const dateMatch = !dateRange || !dateRange.from || 
        (dateRange.from && isEventInRange(event.date, dateRange));
      
      return categoryMatch && searchMatch && dateMatch;
    }
  );

  const isEventInRange = (eventDateStr: string, range: DateRange) => {
    try {
      const eventDate = parse(eventDateStr.split(',')[0], 'MMMM d', new Date());
      
      if (range.from && !range.to) {
        return eventDate >= range.from;
      }
      
      if (range.from && range.to) {
        return isWithinInterval(eventDate, { start: range.from, end: range.to });
      }
      
      return true;
    } catch (error) {
      console.error("Error parsing date:", error);
      return true;
    }
  };

  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
    setVisibleEvents(16);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleEvents(16);
  };

  const loadMoreEvents = () => {
    setVisibleEvents(prev => Math.min(prev + 8, filteredEvents.length));
  };

  return (
    <Layout>
      <section className="pt-24 pb-20 bg-gradient-to-b from-white to-bali-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Upcoming Events
            </h2>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                    !dateRange?.from && "text-muted-foreground"
                  )}>
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Select date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
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
                Create and Share Meaningful Experiences
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Empower your community with transformative events that inspire and connect.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-bali-green text-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Effortless Event Creation</h3>
                    <p className="text-muted-foreground">Create your event listing quickly with our intuitive interface.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bali-green text-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Connect Globally</h3>
                    <p className="text-muted-foreground">Reach conscious communities interested in transformative experiences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-bali-green text-white p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Seamless Management</h3>
                    <p className="text-muted-foreground">Manage your events with our user-friendly platform.</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 bg-bali-green hover:bg-bali-green-dark text-white px-8 py-6 text-lg">
                Start Promoting Today
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80" 
                alt="Bali Mountain Summit" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
