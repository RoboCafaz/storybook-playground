import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '../button';

export default {
  title: 'Components/Buttons (Inferred)',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  args: {
    children: 'Hello world!'
  },
  argTypes: {
    fontColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
