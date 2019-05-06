import * as React from 'react';

function useToggle(initialVal: boolean = false) {
  const [state, setState] = React.useState(initialVal);

  const toggle = () => {
    setState(!state);
  };

  // return an array that contains a piece of state and a function to toggle it
  // A TS 3.4 const asserstion can be used when @babel/preset-typescript supports the `as const` syntax
  return [state, toggle] as [boolean, (() => {})];
}

export default useToggle;

