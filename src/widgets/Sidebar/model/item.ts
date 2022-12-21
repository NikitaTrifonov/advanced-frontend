import React from 'react';
import { RoutePath } from 'shared/lib/routePath/routePath';
import AboutIcon from 'shared/assets/icons/about20-20.svg';
import MainIcon from 'shared/assets/icons/main20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile20-20.svg';
import ArticleIcon from 'shared/assets/icons/article20-20.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean,
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
    },
];
