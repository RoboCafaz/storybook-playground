import React, { useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { HomeImpl } from '../home';

export default {
  title: 'Pages/Home',
  component: HomeImpl
};

export const Default = () => {
  const [snack, setSnack] = useState<string | undefined>(undefined);
  const wrappedSetSnack = useCallback(
    (newSnack: string) => {
      setSnack(newSnack);
      action('Set Snack')(newSnack);
    },
    [setSnack]
  );
  return <HomeImpl snack={snack} setSnack={wrappedSetSnack} />;
};
