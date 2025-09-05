import { Link } from 'react-router-dom';
import { Calendar1 as Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';
import { Deal } from '@/data/deals';

interface DealCardProps {
  deal: Deal;
}

const DealCard = ({ deal }: DealCardProps) => {
  return (
    <div className="group border rounded-lg overflow-hidden shadow-md bg-card hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-48 object-cover" />

        <Badge className="absolute top-2 right-2 bg-secondary hover:bg-secondary-600">
          {deal.discountPercentage}% OFF
        </Badge>
        {deal.popular &&
        <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary-600">
            Popular
          </Badge>
        }
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-foreground">{deal.title}</h3>
        <p className="text-sm text-muted-foreground">{deal.destination}</p>
        <p className="mt-2 text-sm">{deal.description}</p>
        
        <div className="mt-3 flex items-center">
          <span className="text-2xl font-bold text-primary">{formatCurrency(deal.discountedPrice)}</span>
          <span className="ml-2 text-sm line-through text-muted-foreground">{formatCurrency(deal.originalPrice)}</span>
        </div>
        
        <div className="mt-3 flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Valid until {deal.validUntil}</span>
        </div>
        
        <div className="mt-3 space-y-1">
          {deal.features.slice(0, 3).map((feature, index) =>
          <div key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span>{feature}</span>
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <Link to={`/deals/${deal.id}`}>
            <Button className="w-full bg-secondary hover:bg-secondary-600 text-white">
              View Deal
            </Button>
          </Link>
        </div>
      </div>
    </div>);

};

export default DealCard;