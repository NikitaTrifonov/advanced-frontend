import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Искусственная задержка, что бы увидеть fallback(анимация загрузки) в <Suspense>
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
