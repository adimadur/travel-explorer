import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ListFilter as Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import DestinationCard from '@/components/DestinationCard';
import { destinations, Destination } from '@/data/destinations';

const DestinationsPage = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter options
  const [filters, setFilters] = useState({
    popular: false,
    beach: false,
    cultural: false,
    adventure: false
  });

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);

    setTimeout(() => {
      const filtered = destinations.filter((destination) => {
        // Search query filter
        const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        destination.description.toLowerCase().includes(searchQuery.toLowerCase());

        // Price range filter
        const matchesPrice = destination.price >= priceRange[0] && destination.price <= priceRange[1];

        // Feature filters
        let matchesFeatures = true;
        if (filters.popular && !destination.popular) matchesFeatures = false;
        if (filters.beach && !destination.features.some((f) => f.toLowerCase().includes('beach'))) matchesFeatures = false;
        if (filters.cultural && !destination.features.some((f) => f.toLowerCase().includes('cultural') || f.toLowerCase().includes('temple'))) matchesFeatures = false;
        if (filters.adventure && !destination.features.some((f) => f.toLowerCase().includes('sport') || f.toLowerCase().includes('trek'))) matchesFeatures = false;

        return matchesSearch && matchesPrice && matchesFeatures;
      });

      setFilteredDestinations(filtered);
      setIsLoading(false);
    }, 500);
  }, [searchQuery, priceRange, filters]);

  const handleFilterChange = (key: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">Explore Destinations</h1>
          <p className="text-lg text-muted-foreground">
            Discover amazing places around the world and start planning your next adventure.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 space-y-6">
            <div>
              <h3 className="font-bold mb-3">Price Range</h3>
              <Slider
                defaultValue={[0, 3000]}
                max={3000}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2" />

              <div className="flex justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Features</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="popular-desktop"
                    checked={filters.popular}
                    onCheckedChange={() => handleFilterChange('popular')} />

                  <Label htmlFor="popular-desktop">Popular Destinations</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="beach-desktop"
                    checked={filters.beach}
                    onCheckedChange={() => handleFilterChange('beach')} />

                  <Label htmlFor="beach-desktop">Beach Access</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="cultural-desktop"
                    checked={filters.cultural}
                    onCheckedChange={() => handleFilterChange('cultural')} />

                  <Label htmlFor="cultural-desktop">Cultural Experiences</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="adventure-desktop"
                    checked={filters.adventure}
                    onCheckedChange={() => handleFilterChange('adventure')} />

                  <Label htmlFor="adventure-desktop">Adventure Activities</Label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            {/* Search and Mobile Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <form onSubmit={handleSearch} className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search destinations"
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />

                </div>
              </form>
              
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="space-y-6 py-4">
                    <h3 className="font-bold text-lg">Filters</h3>
                    
                    <div>
                      <h4 className="font-medium mb-3">Price Range</h4>
                      <Slider
                        defaultValue={[0, 3000]}
                        max={3000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-2" />

                      <div className="flex justify-between text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="popular-mobile"
                            checked={filters.popular}
                            onCheckedChange={() => handleFilterChange('popular')} />

                          <Label htmlFor="popular-mobile">Popular Destinations</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="beach-mobile"
                            checked={filters.beach}
                            onCheckedChange={() => handleFilterChange('beach')} />

                          <Label htmlFor="beach-mobile">Beach Access</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="cultural-mobile"
                            checked={filters.cultural}
                            onCheckedChange={() => handleFilterChange('cultural')} />

                          <Label htmlFor="cultural-mobile">Cultural Experiences</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="adventure-mobile"
                            checked={filters.adventure}
                            onCheckedChange={() => handleFilterChange('adventure')} />

                          <Label htmlFor="adventure-mobile">Adventure Activities</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Results */}
            {isLoading ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) =>
              <div key={i} className="border rounded-lg overflow-hidden shadow animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-10 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
              )}
              </div> :

            <>
                <p className="mb-4 text-muted-foreground">
                  {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'} found
                </p>
                
                {filteredDestinations.length > 0 ?
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredDestinations.map((destination) =>
                <DestinationCard key={destination.id} destination={destination} />
                )}
                  </div> :

              <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">No destinations found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange([0, 3000]);
                    setFilters({
                      popular: false,
                      beach: false,
                      cultural: false,
                      adventure: false
                    });
                  }}>

                      Reset Filters
                    </Button>
                  </div>
              }
              </>
            }
          </div>
        </div>
      </div>
    </div>);

};

export default DestinationsPage;