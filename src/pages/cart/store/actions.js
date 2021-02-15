import { addPendingOrder, addConfirmedOrder } from "./actionTypes";

export const addPendingOrderAC = (pendingOder) => ({
  type: addPendingOrder,
  pendingOder,
});

export const addConfirmedOrderAC = (confirmedOrder) => ({
  type: addConfirmedOrder,
  confirmedOrder,
});
