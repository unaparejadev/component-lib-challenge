const useState = (initialValue: any) => {
  let state: any = initialValue;

  const setState = (newState: any) => {
    state = newState;
  };

  return [state, setState];
};
