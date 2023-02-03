import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Искусственная задержка, что бы увидеть fallback(анимация загрузки) в <Suspense>
    setTimeout(() => resolve(import('./ArticleEditPage')), 1500);
}));
