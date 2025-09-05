import { Link } from 'react-router-dom';
import { Calendar1 as Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { truncateText } from '@/lib/utils';
import { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="article-card h-full">
      <div className="relative overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="article-card-image transition-transform duration-300 hover:scale-105" />

        <Badge className="absolute top-2 right-2 bg-primary hover:bg-primary-600">
          {article.category}
        </Badge>
      </div>
      <div className="article-card-content h-full flex flex-col">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{article.date}</span>
        </div>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-excerpt">{truncateText(article.excerpt, 100)}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {article.tags.slice(0, 2).map((tag, index) =>
          <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          )}
        </div>
        <Link to={`/blog/${article.id}`} className="article-card-link mt-auto">
          Read More
        </Link>
      </div>
    </div>);

};

export default ArticleCard;