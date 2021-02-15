export const getPrice = (arr) => {
  return arr
    .map(({ price, ...other }) => ({
      price: parseFloat(price.slice(1)),
      ...other,
    }))
    .reduce(
      (acc, { quantity, price }) => acc + (quantity ? quantity : 1) * price,
      0
    )
    .toFixed(2);
};

export const updateQuantity = (id, value) => ({ _id, quantity, ...other }) =>
  id === _id ? { _id, quantity: value, ...other } : { _id, quantity, ...other };

export const getAdditionalProducts = (arr) =>
  arr.map(({ additional }) => additional).flat();
