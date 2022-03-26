export const FilterReducer = (product, action) => {
    switch (action.type) {
      case "SORT":
        return { ...product, sortBy: action.payload };
      case "RANGE":
        return { ...product, maxPrice: action.payload };
      case "RATING":
        return { ...product, productRating: action.payload };
      case "DISCOUNT":
        return { ...product, productDiscount: action.payload };
      case "CATEGORY_SOLID":
        return{...product,solidJacket:solidJacket};
      case "CATEGORY_THIN":
        return {...product,thinJacket:thinJacket};
      case "CATEGORY_LIGHTWEIGHT":
        return {...product,lightWeightJacket:lightWeightJacket};
      case "RESET":
        return {
          sortBy:false,
          maxPrice:10000,
          productRating:"",
          productDiscount:"",
          solidJacket:false,
          thinJacket:false,
          lightWeightJacket:false
        }
      default:
        return product;
    }
  }