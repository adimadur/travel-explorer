import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, location, testimonial, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"}`} 
          />
        ))}
      </div>
      
      <p className="italic text-foreground">&ldquo;{testimonial}&rdquo;</p>
    </div>
  );
};

export default TestimonialCard;