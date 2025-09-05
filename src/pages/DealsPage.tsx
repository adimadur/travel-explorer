import { useState, useEffect } from 'react';
import { Search, ListFilter as Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import DealCard from '@/components/DealCard';
import { deals, Deal } from '@/data/deals';

const DealsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter options
  const [filters, setFilters] = useState({
    popular: false,
    highDiscount: false,
    lastMinute: false
  });

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);

    setTimeout(() => {
      const filtered = deals.filter((deal) => {
        // Search query filter
        const matchesSearch = deal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.description.toLowerCase().includes(searchQuery.toLowerCase());

        // Price range filter
        const matchesPrice = deal.discountedPrice >= priceRange[0] && deal.discountedPrice <= priceRange[1];

        // Feature filters
        let matchesFeatures = true;
        if (filters.popular && !deal.popular) matchesFeatures = false;
        if (filters.highDiscount && deal.discountPercentage < 25) matchesFeatures = false;

        // Last minute deals (valid for less than 30 days)
        if (filters.lastMinute) {
          const validUntil = new Date(deal.validUntil);
          const now = new Date();
          const diffTime = validUntil.getTime() - now.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (diffDays > 30) matchesFeatures = false;
        }

        return matchesSearch && matchesPrice && matchesFeatures;
      });

      setFilteredDeals(filtered);
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
          <h1 className="text-4xl font-heading font-bold mb-4">Special Deals</h1>
          <p className="text-lg text-muted-foreground">
            Discover our limited-time offers and save on your next adventure.
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
              <h3 className="font-bold mb-3">Deal Types</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="popular-desktop"
                    checked={filters.popular}
                    onCheckedChange={() => handleFilterChange('popular')} />

                  <Label htmlFor="popular-desktop">Popular Deals</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="high-discount-desktop"
                    checked={filters.highDiscount}
                    onCheckedChange={() => handleFilterChange('highDiscount')} />

                  <Label htmlFor="high-discount-desktop">High Discount (25%+)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="last-minute-desktop"
                    checked={filters.lastMinute}
                    onCheckedChange={() => handleFilterChange('lastMinute')} />

                  <Label htmlFor="last-minute-desktop">Last Minute Deals</Label>
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
                    placeholder="Search deals"
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
                      <h4 className="font-medium mb-3">Deal Types</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="popular-mobile"
                            checked={filters.popular}
                            onCheckedChange={() => handleFilterChange('popular')} />

                          <Label htmlFor="popular-mobile">Popular Deals</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="high-discount-mobile"
                            checked={filters.highDiscount}
                            onCheckedChange={() => handleFilterChange('highDiscount')} />

                          <Label htmlFor="high-discount-mobile">High Discount (25%+)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="last-minute-mobile"
                            checked={filters.lastMinute}
                            onCheckedChange={() => handleFilterChange('lastMinute')} />

                          <Label htmlFor="last-minute-mobile">Last Minute Deals</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Results */}
            {isLoading ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="border rounded-lg overflow-hidden shadow animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-4 space-y-3">
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-10 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
              )}
              </div> :

            <>
                <p className="mb-4 text-muted-foreground">
                  {filteredDeals.length} {filteredDeals.length === 1 ? 'deal' : 'deals'} found
                </p>
                
                {filteredDeals.length > 0 ?
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDeals.map((deal) =>
                <DealCard key={deal.id} deal={deal} />
                )}
                  </div> :

              <div className="text-center py-12">
                    <h3 className="text-xl font-bold mb-2">No deals found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange([0, 3000]);
                    setFilters({
                      popular: false,
                      highDiscount: false,
                      lastMinute: false
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

export default DealsPage;