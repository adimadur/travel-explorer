import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar1 as Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const SearchBar = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState(2);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/destinations?search=${destination}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Where do you want to go?
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="destination"
              type="text"
              placeholder="Search destinations"
              className="pl-10"
              value={destination}
              onChange={(e) => setDestination(e.target.value)} />

          </div>
        </div>
        
        <div className="relative">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            When?
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}>

                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus />

            </PopoverContent>
          </Popover>
        </div>
        
        <div className="relative">
          <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
            Travelers
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
        
        <div className="md:col-span-4">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary-600 text-white"
            size="lg">

            Search
          </Button>
        </div>
      </form>
    </div>);

};

export default SearchBar;