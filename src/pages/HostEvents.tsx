
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { categories } from "@/data/eventData";
import { toast } from "@/components/ui/use-toast";

const HostEvents = () => {
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Your event has been submitted for review.",
    });
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-bali-green/10 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Host an Event
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your expertise and passion with the Bali community by hosting an event.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="event-title">
                  Event Title
                </label>
                <Input id="event-title" placeholder="Enter event title" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="event-description">
                  Event Description
                </label>
                <Textarea id="event-description" placeholder="Describe your event" required rows={4} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Input type="time" placeholder="Start time" />
                    </div>
                    <div className="flex-1">
                      <Input type="time" placeholder="End time" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <Input placeholder="Event location" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Host/Teacher Name</label>
                  <Input placeholder="Your name or organization" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Price (IDR)</label>
                  <Input placeholder="e.g. 150k" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Upload Image</label>
                <Input type="file" className="cursor-pointer" />
                <p className="text-xs text-muted-foreground mt-1">
                  Recommended size: 1200x800 pixels, max 5MB
                </p>
              </div>
              
              <div>
                <Button type="submit" className="bg-bali-green hover:bg-bali-green-dark">
                  Submit Event
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HostEvents;
