export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload];

    case '[TODO] Remove Todo':
      return initialState.filter((item) => item.id !== action.payload);

    default:
      return initialState;
  }
};
