import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ArticleCard from '@/components/ArticleCard';
import { articles, Article } from '@/data/articles';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Extract unique categories
  const categories = Array.from(new Set(articles.map(article => article.category)));
  
  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !activeCategory || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the state change
  };

  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">Travel Blog</h1>
          <p className="text-lg text-muted-foreground">
            Discover travel tips, destination guides, and inspiring stories from around the world.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            {/* Search */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
            
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge 
                variant={!activeCategory ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory(null)}
              >
                All
              </Badge>
              {categories.map(category => (
                <Badge 
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* Articles */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>
          
          <div className="md:w-1/4">
            <div className="border rounded-lg p-6 bg-card sticky top-24">
              <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {Array.from(new Set(articles.flatMap(article => article.tags))).slice(0, 10).map((tag, index) => (
                  <Badge key={index} variant="outline" className="cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h3 className="font-bold text-lg mb-4">Featured Articles</h3>
              <div className="space-y-4">
                {articles.slice(0, 3).map(article => (
                  <Link key={article.id} to={`/blog/${article.id}`} className="block group">
                    <div className="flex items-start space-x-3">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {article.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;