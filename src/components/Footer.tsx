import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Travel Explorer</h3>
            <p className="text-primary-100 mb-6">
              Discover the world's most beautiful destinations with our expert guides and exclusive deals.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-primary-100 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-primary-100 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-primary-100 hover:text-white transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-primary-100 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-primary-100 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-primary-100 hover:text-white transition-colors">
                  Special Deals
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-100 hover:text-white transition-colors">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-primary-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-100 mr-2 mt-0.5" />
                <span className="text-primary-100">
                  123 Adventure Street<br />
                  Travelville, TX 75001
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-100 mr-2" />
                <span className="text-primary-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-100 mr-2" />
                <span className="text-primary-100">info@travelexplorer.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-primary-100 mb-4">
              Subscribe to our newsletter for travel tips and exclusive deals.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-800 border-primary-700 text-white placeholder:text-primary-300"
              />
              <Button className="bg-secondary hover:bg-secondary-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;