
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface EventData {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  time: string;
  location: string;
  teacher: string;
  price: string;
}

interface EventCardProps {
  event: EventData;
}

export default function EventCard({ event }: EventCardProps) {
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

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className={`absolute top-3 right-3 ${getCategoryColor(event.category)}`}>
          {event.category}
        </Badge>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/events/${event.id}`}>
          <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4 flex-grow">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-2 text-bali-green" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock size={16} className="mr-2 text-bali-green" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={16} className="mr-2 text-bali-green" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 pt-2 border-t border-border mt-auto">
        <div className="flex justify-between items-center">
          <span className="font-medium text-bali-earth">{event.price}</span>
          <Link
            to={`/events/${event.id}`}
            className="text-bali-green font-medium hover:text-bali-green-dark transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
