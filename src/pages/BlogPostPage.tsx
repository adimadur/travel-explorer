import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar1 as Calendar, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { articles, Article } from '@/data/articles';
import { cn } from '@/lib/utils';

const BlogPostPage = () => {
  const { id } = useParams<{id: string;}>();
  const [article, setArticle] = useState<Article | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    window.scrollTo(0, 0);

    setTimeout(() => {
      const found = articles.find((a) => a.id === id);
      setArticle(found);

      if (found) {
        // Find related articles by matching tags
        const related = articles.
        filter((a) => a.id !== found.id && a.tags.some((tag) => found.tags.includes(tag))).
        slice(0, 3);
        setRelatedArticles(related);
      }

      setIsLoading(false);
    }, 500);
  }, [id]);

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    const lines = content.split('\n').filter((line) => line.trim() !== '');

    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold my-4">{line.substring(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold my-4">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold my-3">{line.substring(4)}</h3>;
      }

      // Lists
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 list-disc my-1">{line.substring(2)}</li>;
      }

      // Regular paragraph
      return <p key={index} className="my-3">{line}</p>;
    });
  };

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="animate-pulse max-w-3xl mx-auto">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-96 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>);

  }

  if (!article) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>);

  }

  return (
    <div className="py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <Badge className="mb-4 bg-primary hover:bg-primary-600">
            {article.category}
          </Badge>
          
          <h1 className="text-4xl font-heading font-bold mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap items-center text-muted-foreground mb-6 gap-y-2">
            <div className="flex items-center mr-4">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.date}</span>
            </div>
          </div>
          
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto rounded-lg" />

          </div>
          
          <div className="prose prose-lg max-w-none">
            {renderContent(article.content)}
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap items-center mb-4 md:mb-0">
              <Tag className="h-4 w-4 mr-2" />
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) =>
                <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {relatedArticles.length > 0 &&
        <div className="mt-16">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) =>
            <Link
              key={relatedArticle.id}
              to={`/blog/${relatedArticle.id}`}
              className="group">

                  <div className="border rounded-lg overflow-hidden bg-card h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className={cn(
                      "w-full h-48 object-cover transition-transform duration-300",
                      "group-hover:scale-105"
                    )} />

                      <Badge className="absolute top-2 right-2 bg-primary hover:bg-primary-600">
                        {relatedArticle.category}
                      </Badge>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground mt-auto">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedArticle.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
            )}
            </div>
          </div>
        }
      </div>
    </div>);

};

export default BlogPostPage;