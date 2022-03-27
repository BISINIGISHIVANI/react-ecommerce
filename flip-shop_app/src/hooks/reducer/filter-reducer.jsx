export const FilterReducer = (productState, action) => {
  const {sortBy,maxPrice,productRating,productDiscount,solidJacket,thinJacket,lightWeightJacket}=action.payload;
    switch (action.type) {
      case "SORT":
        return { ...productState, sortBy: sortBy };
      case "RANGE":
        return { ...productState, maxPrice:maxPrice};
      case "RATING":
        return { ...productState, productRating:  productRating};
      case "DISCOUNT":
        return { ...productState, productDiscount: productDiscount };
      case "CATEGORY_SOLID":
        return{...productState,solidJacket:solidJacket};
      case "CATEGORY_THIN":
        return {...productState,thinJacket:thinJacket};
      case "CATEGORY_LIGHTWEIGHT":
        return {...productState,lightWeightJacket:lightWeightJacket};
      case "RESET":
        return {
          sortBy:null,
          maxPrice:10000,
          productRating:null,
          productDiscount:null,
          solidJacket:false,
          thinJacket:false,
          lightWeightJacket:false
        }
      default:
        return productState;
    }
  }