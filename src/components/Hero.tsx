
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { events } from "@/data/eventData";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const featuredEvents = events.slice(0, 4);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === featuredEvents.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [featuredEvents.length]);

  return (
    <div className="relative min-h-screen">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Bali Sacred Forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-white text-center">
        <div className="w-full max-w-4xl">
          <Carousel className="mb-8">
            <CarouselContent>
              {featuredEvents.map((event, index) => (
                <CarouselItem key={event.id}>
                  <div className={`transition-opacity duration-500 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-2xl md:text-3xl font-medium mb-2">{event.title}</h3>
                    <p className="text-lg md:text-xl mb-2">{event.date}</p>
                    <p className="text-base md:text-lg mb-4">{event.location}</p>
                    <p className="text-sm md:text-base max-w-xl mx-auto mb-4">{event.description}</p>
                    <span className="inline-block px-3 py-1 bg-bali-green/80 rounded-full text-white text-sm mb-4">
                      {event.category}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              {featuredEvents.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === index ? "bg-white" : "bg-white/40"
                  }`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <CarouselPrevious className="left-4 lg:left-10" />
            <CarouselNext className="right-4 lg:right-10" />
          </Carousel>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button className="bg-bali-green hover:bg-bali-green-dark text-white transition-colors px-8 py-6 text-lg">
            Register Now
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/20 transition-colors px-8 py-6 text-lg"
            onClick={scrollToEvents}
          >
            Explore Events
          </Button>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 transition-colors"
            onClick={scrollToEvents}
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
