import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import chicken from '../chicken.svg';
import hamburger from '../hamburger.svg';
import hotdog from '../hotdog.svg';

export default {
  title: 'Components/Icons'
} as Meta;

interface TemplateArgs {
  src: string;
}

const Template: Story<TemplateArgs> = (args: TemplateArgs) => <img {...args} />;

export const Chicken = Template.bind({});
Chicken.args = {
  src: chicken
};

export const Hamburger = Template.bind({});
Hamburger.args = {
  src: hamburger
};

export const Hotdog = Template.bind({});
Hotdog.args = {
  src: hotdog
};
