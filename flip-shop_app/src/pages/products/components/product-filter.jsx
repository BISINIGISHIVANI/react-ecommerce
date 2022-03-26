import { GetFilteredData, GetSortedBy,CategoryFilterData } from "../../../backend/utils/index";
import { useFillter } from "../../../hooks/context/product-context";
const Productfilter = () => {
  const [productState,dispatch] = useFillter();
  // const { sortBy, maxPrice, productRating,productDiscount,solidJacket,thinJacket,lightWeightJacket }=productState;
    return (
      <>
      <div className="filter-container">
        <div className="filter-title">
          <h2 className="filter-heading">Filters</h2>
          <button className="clear-btn"onClick={()=>dispatch({ type: "RESET", payload: {} })}>Clear</button>
        </div>
        <GetSortedBy {...productState} dispatch={dispatch}/>
        <GetFilteredData {...productState} dispatch={dispatch}/>
        <CategoryFilterData {...productState} dispatch={dispatch}/>
      </div>
      </>
    );
  };
  export { Productfilter };
  