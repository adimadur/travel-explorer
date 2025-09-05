import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={cn(
      "sticky-header sticky top-0 z-40 w-full transition-all duration-200",
      isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold text-primary">
          Travel Explorer
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={cn("nav-link", isActive('/') && "nav-link-active")}>
            Home
          </Link>
          <Link to="/destinations" className={cn("nav-link", isActive('/destinations') && "nav-link-active")}>
            Destinations
          </Link>
          <Link to="/deals" className={cn("nav-link", isActive('/deals') && "nav-link-active")}>
            Deals
          </Link>
          <Link to="/blog" className={cn("nav-link", isActive('/blog') && "nav-link-active")}>
            Blog
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              Login
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
        
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="mr-2"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/40 shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/destinations" className="nav-link py-2" onClick={closeMenu}>
              Destinations
            </Link>
            <Link to="/deals" className="nav-link py-2" onClick={closeMenu}>
              Deals
            </Link>
            <Link to="/blog" className="nav-link py-2" onClick={closeMenu}>
              Blog
            </Link>
            <Link to="/login" onClick={closeMenu}>
              <Button className="w-full bg-primary text-white hover:bg-primary-600">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;