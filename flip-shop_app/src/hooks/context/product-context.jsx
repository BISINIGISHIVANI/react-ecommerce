import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/filter-reducer";
const ProductContext = createContext({
  sortBy: null,
  maxPrice: 1000,
  productRating: "",
  productDiscount:"",
  solidJacket:false,
  thinJacket:false,
  lightWeightJacket:false
});

const FilterProvider = ({ children }) => {
  const [
    { sortBy, maxPrice, productRating,productDiscount,solidJacket,thinJacket,lightWeightJacket },
    dispatch
  ] = useReducer(FilterReducer, {
    sortBy: null,
    maxPrice: 10000,
    productRating: "",
    productDiscount:"",solidJacket:false,
    thinJacket:false,
    lightWeightJacket:false
  });
  return (
    <ProductContext.Provider
      value={[
        { sortBy, maxPrice, productRating,productDiscount,solidJacket,thinJacket,lightWeightJacket },
        dispatch
      ]}
    >
      {children}
    </ProductContext.Provider>
  );
};
const useFillter = () => useContext(ProductContext);

export { FilterProvider, useFillter };