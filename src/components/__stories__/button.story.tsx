import React, { useCallback, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { Button, ButtonProps } from '../button';

export default {
  title: 'Components/Buttons',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = ({ children = 'Hello World', ...args }: ButtonProps) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});

export const AlternateText = Template.bind({});
AlternateText.args = {
  children: 'Goodbye World'
};

export const Customizable = Template.bind({});
Customizable.args = {
  children: 'Customize my World',
  color: 'green',
  fontColor: 'yellow',
  rounded: true
};
Customizable.argTypes = {
  fontColor: { control: 'color' },
  color: { control: 'color' },
  borderColor: { control: 'color' },
  borderSize: { control: 'number', min: 0, max: 16 },
  rounded: { control: 'boolean' },
  disabled: { control: 'boolean' }
};

export const Actionable = Template.bind({});
Actionable.argTypes = {
  onClick: { action: 'clicked' }
};

export const ClassicActionable = () => {
  const [clicks, setClicks] = useState(0);
  const onClick = useCallback(() => {
    const currentClicks = clicks + 1;
    setClicks(currentClicks);
    action('Clicked')(currentClicks);
  }, [clicks, setClicks]);
  return <Button onClick={onClick}>Clicked {clicks}</Button>;
};
