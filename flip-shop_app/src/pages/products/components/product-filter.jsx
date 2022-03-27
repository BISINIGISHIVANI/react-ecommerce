import {CategoryFilter} from './filter/CategoryFilter';
import {DiscountFilter} from './filter/DiscountFilter';
import {PriceRangeFilter} from './filter/PriceRangeFilter';
import { RatingFilter} from './filter/RatingFilter';
import {SortByPriceFilter} from './filter/SortByPrice';
import { useFillter } from "../../../hooks/context/product-context";
const Productfilter = () => {
  const {productState,dispatch} = useFillter();
  const {sortBy,
    maxPrice,
    productRating,
    productDiscount,
    solidJacket,
    thinJacket,
    lightWeightJacket}=productState;
    return (
      <>
      <div className="filter-container">
        <div className="filter-title">
          <h2 className="filter-heading">Filters</h2>
          <button className="clear-btn"onClick={()=>dispatch({ type: "RESET", payload: {} })}>Clear</button>
        </div>
        <PriceRangeFilter sortBy={sortBy} dispatch={dispatch}/>
        <SortByPriceFilter maxPrice={maxPrice} dispatch={dispatch}/>
        <CategoryFilter solidJacket={solidJacket} thinJacket={thinJacket} lightWeightJacket={lightWeightJacket} dispatch={dispatch}/>
        <DiscountFilter productRating={productRating}  dispatch={dispatch}/>
        <RatingFilter productDiscount={productDiscount} dispatch={dispatch}/>
      </div>
      </>
    );
  };
  export { Productfilter };
  