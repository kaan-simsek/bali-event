
import { useState } from "react";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import CategoryFilter from "@/components/CategoryFilter";
import { events, categories } from "@/data/eventData";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleEvents, setVisibleEvents] = useState(12);

  const filteredEvents = events.filter(
    event =>
      activeCategory === "all" ||
      event.category.toLowerCase().includes(activeCategory.toLowerCase())
  );

  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
    setVisibleEvents(12);
  };

  const loadMoreEvents = () => {
    setVisibleEvents(prev => Math.min(prev + 4, filteredEvents.length));
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-bali-green/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of events designed to nurture your body, mind, and spirit.
              Filter by category to find experiences that resonate with you.
            </p>
          </div>

          <div className="mb-10">
            <CategoryFilter
              categories={categories}
              onFilterChange={handleFilterChange}
              activeCategory={activeCategory}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEvents.slice(0, visibleEvents).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

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
      </div>
    </Layout>
  );
};

export default Events;
