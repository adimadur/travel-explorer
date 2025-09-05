import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <div className="group destination-card">
      <div className="relative overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="destination-card-image transition-transform duration-300 group-hover:scale-105"
        />
        {destination.popular && (
          <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
            Popular
          </div>
        )}
      </div>
      <div className="destination-card-content">
        <div className="flex justify-between items-start">
          <h3 className="destination-card-title">{destination.name}, {destination.location}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
        <p className="destination-card-description">{destination.shortDescription}</p>
        <p className="destination-card-price">From {formatCurrency(destination.price)}</p>
        <div className="mt-4 flex space-x-2">
          <Link to={`/destinations/${destination.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
              View Details
            </Button>
          </Link>
          <Link to={`/destinations/${destination.id}`} className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary-600 text-white">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;