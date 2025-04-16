
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Location & Accommodation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of Bali in the spiritual heart of Ubud, surrounded by
            lush jungles, sacred temples, and vibrant culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.96688624171!2d115.22137326613396!3d-8.506192358367571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d739f22c9c3%3A0x54a38afd6bf2d23b!2sUbud%2C%20Gianyar%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1650123456789!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event Location Map"
            ></iframe>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-4">Venue Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-bali-green mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Main Gathering Space</h4>
                    <p className="text-muted-foreground">
                      Yoga Barn, Jl. Raya Pengosekan, Ubud, Bali, Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-bali-green mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Event Hours</h4>
                    <p className="text-muted-foreground">
                      Daily from 7:00 AM to 10:00 PM during the event
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-bali-green mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Contact</h4>
                    <p className="text-muted-foreground">+62 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-bali-green mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@balispiritgatherings.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-medium mb-4">Accommodation</h3>
              <p className="text-muted-foreground mb-4">
                We've partnered with various accommodation options to suit every budget, from luxury villas to eco-friendly retreat centers, all within walking distance or a short ride to our event venues.
              </p>
              <Button className="bg-bali-green hover:bg-bali-green-dark transition-colors">
                View Accommodation Options
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
