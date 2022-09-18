import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve =>{
    // @ts-ignore
    //Искусственная задержка, что бы увидеть fallback(анимация загрузки) в <Suspense>
    setTimeout(() => resolve(import('./MainPage')), 1500);
}))

