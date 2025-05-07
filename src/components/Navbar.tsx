
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Ticket, CalendarPlus, UserRound } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-bali-green to-bali-blue-dark">
              Bali Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link to="/tickets" className="flex items-center text-foreground hover:text-primary transition-colors">
                <Ticket className="mr-1" size={16} />
                <span>My Tickets</span>
              </Link>
              <Link to="/host" className="flex items-center text-foreground hover:text-primary transition-colors">
                <CalendarPlus className="mr-1" size={16} />
                <span>Host Events</span>
              </Link>
              <Link to="/login">
                <Button className="bg-bali-green hover:bg-bali-green-dark transition-colors duration-200">
                  <UserRound className="mr-1" size={16} />
                  Login
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-3">
              <li className="py-2">
                <Link 
                  to="/tickets" 
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Ticket className="mr-1" size={16} />
                  <span>My Tickets</span>
                </Link>
              </li>
              <li className="py-2">
                <Link 
                  to="/host" 
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CalendarPlus className="mr-1" size={16} />
                  <span>Host Events</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-bali-green hover:bg-bali-green-dark transition-colors duration-200">
                    <UserRound className="mr-1" size={16} />
                    Login
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
