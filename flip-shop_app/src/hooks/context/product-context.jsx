import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/filter-reducer";
const ProductContext = createContext({
  sortBy: null,
  maxPrice: 10000,
  productRating:1,
  productDiscount:null,
  solidJacket:false,
  thinJacket:false,
  lightWeightJacket:false
});

const FilterProvider = ({ children }) => {
  const [productState,dispatch] = useReducer(FilterReducer, {
    sortBy: null,
    maxPrice: 10000,
    productRating:1,
    productDiscount:null,
    solidJacket:false,
    thinJacket:false,
    lightWeightJacket:false
  });
  return (
    <ProductContext.Provider value={{productState,dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};
const useFillter = () => useContext(ProductContext);

export { FilterProvider, useFillter };
