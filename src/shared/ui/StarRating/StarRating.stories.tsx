import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    size: 50,
};

export const Three = Template.bind({});
Three.args = {
    size: 50,
    selectedStars: 3,
};

export const Full = Template.bind({});
Full.args = {
    size: 50,
    selectedStars: 5,
};
