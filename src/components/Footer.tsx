
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bali-green text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Soul Journey</h3>
            <p className="mb-6 max-w-md">
              Join our conscious community for transformative experiences in the heart of Bali.
              Connect with like-minded individuals and embark on a journey of self-discovery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-bali-sand transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-bali-sand transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-bali-sand transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-bali-sand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-bali-sand transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-bali-sand transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-bali-sand transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-bali-sand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="mb-4">Stay updated with our latest events and offerings.</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
              />
              <Button className="w-full bg-white text-bali-green hover:bg-bali-sand hover:text-bali-green-dark transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Ubud, Bali, Indonesia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>info@souljourney.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+62 123 456 7890</span>
            </div>
          </div>
          <div>
            <p>© {new Date().getFullYear()} Soul Journey. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
