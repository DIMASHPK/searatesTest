import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "../pages/cart/store/reducer";
import { pagesReducer } from "../pages/products/store/reducer";

export const rootReducer = combineReducers({
  products: pagesReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
