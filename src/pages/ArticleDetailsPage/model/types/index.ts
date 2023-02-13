import { ArticleDetailsRecommendationSchema } from '../types/articleDetailsRecommendationSchema';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationSchema;
}
