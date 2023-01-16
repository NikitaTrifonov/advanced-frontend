import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Искусственная задержка, что бы увидеть fallback(анимация загрузки) в <Suspense>
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
