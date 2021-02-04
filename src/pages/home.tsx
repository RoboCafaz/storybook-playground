import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/button';

import chicken from '../components/icons/chicken.svg';
import hamburger from '../components/icons/hamburger.svg';
import hotdog from '../components/icons/hotdog.svg';
import { snackSelector, updateSnackAction } from '../redux/store';

export const Home = () => {
  const snack = useSelector(snackSelector);
  const dispatch = useDispatch();
  const setSnack = useCallback(
    (snack: string) => {
      dispatch(updateSnackAction({ snack }));
    },
    [dispatch]
  );
  const snackElement = useMemo(() => {
    if (snack) {
      return (
        <div style={{ maxWidth: '320px' }}>
          <img src={snack} />
        </div>
      );
    }
    return undefined;
  }, [snack]);
  return (
    <React.Fragment>
      <div>
        <h1>Hello world!</h1>
        <p>These are some of my favorite snacks!</p>
      </div>
      <div>
        <Button
          color="red"
          fontColor="yellow"
          borderColor="yellow"
          rounded={false}
          onClick={() => setSnack(hamburger)}
        >
          Hamburger
        </Button>
        <Button
          color="green"
          fontColor="yellow"
          borderColor="green"
          rounded={true}
          onClick={() => setSnack(hotdog)}
        >
          Hotdog
        </Button>
        <Button
          color="brown"
          fontColor="white"
          borderColor="black"
          rounded={false}
          onClick={() => setSnack(chicken)}
        >
          Chicken
        </Button>
      </div>
      {snackElement}
    </React.Fragment>
  );
};
