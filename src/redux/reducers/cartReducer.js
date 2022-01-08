let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return (state = { cart: [...state.cart, action.payload.product] });
    case "REMOVE_FROM_CART":
      let newCart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return (state = { cart: newCart });
    case "EMPTY_CART":
      return (state = { cart: [] });
    default:
      return state;
  }
};

export default cartReducer;
