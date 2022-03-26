const GetSortedBy = (productList, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  };
  const GetFilteredData = (
    productList,
    { maxPrice, productRating,productDiscount }
  ) => {
    return productList
      .filter((product) => product["price"] <= maxPrice)
      .filter((product) => product["rating"] >= productRating)
      .filter((product)=>product["discount"] >=productDiscount);
  };
  
  export { GetFilteredData, GetSortedBy };
  