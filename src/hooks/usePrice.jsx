import { useCallback, useEffect } from "react";
import { useState } from "react";
import { getPrice } from "../helpers/helpers";

export const usePrice = (argsPrice = "0") => {
  const [productsArray, setProductsArray] = useState([]);
  const [price, setPrice] = useState(argsPrice);
  const priceHandler = useCallback(() => {
    const price = getPrice(productsArray);
    setPrice((parseFloat(argsPrice) + parseFloat(price)).toFixed(2));
  }, [productsArray]);
  const checkboxHandler = (product, checked) => {
    const { _id } = product;

    if (checked) {
      setProductsArray((state) => [...state, product]);
    } else {
      setProductsArray((state) =>
        state.filter(({ _id: filteringId }) => filteringId !== _id)
      );
    }
  };

  useEffect(() => {
    priceHandler();
  }, [productsArray, priceHandler]);

  return {
    checkboxHandler,
    price,
    productsArray,
    setProductsArray,
  };
};
