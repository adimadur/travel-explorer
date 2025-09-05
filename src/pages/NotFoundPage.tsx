import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Circle as Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="container py-16 md:py-24 flex flex-col items-center justify-center text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-7xl md:text-9xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-600 text-white">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>);

};

export default NotFoundPage;