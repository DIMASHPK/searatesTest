import { addPendingOrder, addConfirmedOrder } from "./actionTypes";

const initialState = {
  pendingOder: null,
  confirmedOrder: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPendingOrder: {
      const { pendingOder } = action;
      return { ...state, pendingOder };
    }
    case addConfirmedOrder: {
      const { confirmedOrder } = action;
      return { ...state, confirmedOrder };
    }
    default:
      return { ...state };
  }
};
