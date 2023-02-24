import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ paddingTop: 150, paddingLeft: 50 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    label: 'Normal',
    value: '123',
    items: [
        { content: 'qwewqer23rwe', value: '123' },
        { content: 'qwewqer23rwe', value: '1234' },
        { content: 'qwewqer23rwe', value: '1235' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    label: 'top left',
    value: '123',
    items: [
        { content: 'qwewqer23rwe', value: '123' },
        { content: 'qwewqer23rwe', value: '1234' },
        { content: 'qwewqer23rwe', value: '1235' },
    ],
    direction: 'top left',
};

export const topRight = Template.bind({});
topRight.args = {
    label: 'top right',
    value: '123',
    items: [
        { content: 'qwewqer23rwe', value: '123' },
        { content: 'qwewqer23rwe', value: '1234' },
        { content: 'qwewqer23rwe', value: '1235' },
    ],
    direction: 'top right',
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    label: 'bottom left',
    value: '123',
    items: [
        { content: 'qwewqer23rwe', value: '123' },
        { content: 'qwewqer23rwe', value: '1235' },
        { content: 'qwewqer23rwe', value: '1234' },
    ],
    direction: 'bottom left',
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    label: 'bottom right',
    value: '123',
    items: [
        { content: 'qwewqer23rwe', value: '123' },
        { content: 'qwewqer23rwe', value: '1234' },
        { content: 'qwewqer23rwe', value: '1233' },
    ],
    direction: 'bottom right',
};
