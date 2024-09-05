
const initialState = 1;
export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(action.type);
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
