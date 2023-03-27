import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Rating } from '@/entities/Rating';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof ProfileRating>;

const rating: Rating = {
    rate: 5,
};

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    profileId: '1',
};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [
                { ...rating },
            ],
        },
    ],
};

export const WithoutRating = Template.bind({});
WithoutRating.args = {
    profileId: '1',
};
WithoutRating.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
