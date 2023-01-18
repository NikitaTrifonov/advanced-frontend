import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string,
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { t } = useTranslation('articles');
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={
                    new Array(16)
                        .fill(0)
                        .map((item, index) => ({
                            ...item,
                            id: String(index),
                        }))
                }
            />
        </div>
    );
};

export default memo(ArticlesPage);
