import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Calendar1 as Calendar, Users, Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn, formatCurrency } from '@/lib/utils';
import { destinations } from '@/data/destinations';
import { toast } from 'sonner';

const DestinationDetailPage = () => {
  const { id } = useParams<{id: string;}>();
  const [destination, setDestination] = useState(destinations.find((d) => d.id === id));
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      const found = destinations.find((d) => d.id === id);
      setDestination(found);
      if (found) {
        setSelectedImage(found.image);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleBookNow = () => {
    toast.success('Booking request submitted! We will contact you shortly.');
  };

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-96 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            </div>
            <div>
              <div className="h-64 bg-gray-200 rounded mb-4"></div>
              <div className="h-10 bg-gray-200 rounded mb-2"></div>
            </div>
          </div>
        </div>
      </div>);

  }

  if (!destination) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
        <p className="mb-6">The destination you're looking for doesn't exist or has been removed.</p>
        <Link to="/destinations">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Button>
        </Link>
      </div>);

  }

  return (
    <div className="container py-12">
      <div className="mb-6">
        <Link to="/destinations" className="flex items-center text-primary hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Destinations
        </Link>
        <h1 className="text-4xl font-heading font-bold mb-2">{destination.name}, {destination.location}</h1>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{destination.location}</span>
          <div className="mx-2">•</div>
          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
          <span>{destination.rating} ({destination.reviewCount} reviews)</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Main Image */}
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={destination.name}
              className="w-full h-[500px] object-cover" />

          </div>
          
          {/* Image Gallery */}
          <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
            <div
              className={cn(
                "cursor-pointer rounded-md overflow-hidden border-2",
                selectedImage === destination.image ? "border-primary" : "border-transparent"
              )}
              onClick={() => setSelectedImage(destination.image)}>

              <img
                src={destination.image}
                alt={destination.name}
                className="w-24 h-16 object-cover" />

            </div>
            {destination.gallery.map((img, index) =>
            <div
              key={index}
              className={cn(
                "cursor-pointer rounded-md overflow-hidden border-2",
                selectedImage === img ? "border-primary" : "border-transparent"
              )}
              onClick={() => setSelectedImage(img)}>

                <img
                src={img}
                alt={`${destination.name} ${index + 1}`}
                className="w-24 h-16 object-cover" />

              </div>
            )}
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <h2 className="text-2xl font-bold">About {destination.name}</h2>
              <p className="text-muted-foreground">{destination.description}</p>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-4">
              <h2 className="text-2xl font-bold">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {destination.features.map((feature, index) =>
                <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Guest Reviews</h2>
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 stroke-yellow-400 mr-1" />
                  <span className="font-bold">{destination.rating}</span>
                  <span className="text-muted-foreground ml-1">({destination.reviewCount} reviews)</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-bold">Michael T.</span>
                      <span className="text-muted-foreground ml-2">Visited June 2023</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) =>
                      <Star key={i} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                      )}
                    </div>
                  </div>
                  <p>Absolutely breathtaking! The views were incredible and the local guides arranged by Travel Explorer made the experience so much more authentic. Highly recommend!</p>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-bold">Jennifer K.</span>
                      <span className="text-muted-foreground ml-2">Visited April 2023</span>
                    </div>
                    <div className="flex">
                      {[...Array(4)].map((_, i) =>
                      <Star key={i} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                      )}
                      <Star className="h-4 w-4 stroke-gray-300" />
                    </div>
                  </div>
                  <p>Beautiful destination with amazing cultural experiences. The only reason for 4 stars instead of 5 is that some of the activities were a bit crowded. Overall still a fantastic trip!</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-bold">David L.</span>
                      <span className="text-muted-foreground ml-2">Visited August 2023</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) =>
                      <Star key={i} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                      )}
                    </div>
                  </div>
                  <p>One of the best travel experiences I've ever had. The accommodations were perfect, the food was amazing, and the excursions were well-planned. Will definitely book through Travel Explorer again!</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Booking Card */}
        <div>
          <div className="sticky top-24 border rounded-lg shadow-md p-6 bg-card">
            <h3 className="text-xl font-bold mb-4">Book This Trip</h3>
            <div className="text-3xl font-bold text-primary mb-2">
              {formatCurrency(destination.price)}
              <span className="text-sm font-normal text-muted-foreground ml-1">per person</span>
            </div>
            
            <div className="space-y-4 mt-6">
              <div>
                <label className="block text-sm font-medium mb-1">Travel Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal">

                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()} />

                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label htmlFor="travelers" className="block text-sm font-medium mb-1">
                  Number of Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    max="10"
                    className="pl-10"
                    value={travelers}
                    onChange={(e) => setTravelers(parseInt(e.target.value))} />

                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex justify-between mb-2">
                  <span>Base Price ({travelers} {travelers === 1 ? 'traveler' : 'travelers'})</span>
                  <span>{formatCurrency(destination.price * travelers)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes & Fees</span>
                  <span>{formatCurrency(destination.price * travelers * 0.1)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>{formatCurrency(destination.price * travelers * 1.1)}</span>
                </div>
              </div>
              
              <Button
                className="w-full bg-primary hover:bg-primary-600 text-white"
                size="lg"
                onClick={handleBookNow}
                disabled={!date}>

                Book Now
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                No payment required now. We'll contact you to finalize your booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default DestinationDetailPage;