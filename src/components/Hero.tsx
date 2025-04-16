
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-float">
          <span className="block">Bali Spirit</span>
          <span className="block">Gatherings</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-xl mb-8 leading-relaxed">
          Join our conscious community for transformative experiences in the heart of Bali
        </p>
        <p className="text-lg md:text-xl mb-10 font-medium">
          June 15-25, 2025 • Ubud, Bali
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
