import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import DestinationCard from '@/components/DestinationCard';
import ArticleCard from '@/components/ArticleCard';
import DealCard from '@/components/DealCard';
import TestimonialCard from '@/components/TestimonialCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { destinations } from '@/data/destinations';
import { articles } from '@/data/articles';
import { deals } from '@/data/deals';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const popularDestinations = destinations.filter(dest => dest.popular);
  const featuredArticles = articles.slice(0, 3);
  const hotDeals = deals.filter(deal => deal.popular);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div 
        className="hero-section min-h-[600px] flex items-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop')" 
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explore the world's most beautiful destinations with Travel Explorer
            </p>
          </div>
          <SearchBar />
        </div>
      </div>

      {/* Popular Destinations */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-heading font-bold">Popular Destinations</h2>
            <Link to="/destinations" className="flex items-center text-primary hover:underline">
              View all destinations <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-heading font-bold">Hot Deals</h2>
            <Link to="/deals" className="flex items-center text-primary hover:underline">
              View all deals <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotDeals.map(deal => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Inspiration */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-heading font-bold">Travel Inspiration</h2>
            <Link to="/blog" className="flex items-center text-primary hover:underline">
              View all articles <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Sarah Johnson"
              location="New York, USA"
              testimonial="Travel Explorer made our Bali trip unforgettable. The personalized itinerary and local guides gave us experiences we couldn't have found on our own."
              rating={5}
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <TestimonialCard 
              name="David Chen"
              location="Toronto, Canada"
              testimonial="The Greek Island package exceeded our expectations. Every detail was perfectly arranged, and the recommended local restaurants were amazing!"
              rating={4}
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard 
              name="Emma Rodriguez"
              location="London, UK"
              testimonial="As a solo traveler, I felt safe and supported throughout my Japan adventure. The cultural experiences were authentic and the accommodations were perfect."
              rating={5}
              image="https://randomuser.me/api/portraits/women/68.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let us help you create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/destinations">
                <Button size="lg" className="bg-white text-primary hover:bg-primary-50">
                  Explore Destinations
                </Button>
              </Link>
              <Link to="/deals">
                <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white">
                  View Special Offers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;