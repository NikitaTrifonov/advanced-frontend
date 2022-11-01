import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Искусственная задержка, что бы увидеть fallback(анимация загрузки) в <Suspense>
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
