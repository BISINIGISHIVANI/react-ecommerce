import {CategoryFilter} from './filter/CategoryFilter';
import {DiscountFilter} from './filter/DiscountFilter';
import {PriceRangeFilter} from './filter/PriceRangeFilter';
import { RatingFilter} from './filter/RatingFilter';
import {SortByPriceFilter} from './filter/SortByPrice';
import { useFillter } from "../../../hooks/context/product-context";
const Productfilter = () => {
  const [productState,dispatch] = useFillter();
    return (
      <>
      <div className="filter-container">
        <div className="filter-title">
          <h2 className="filter-heading">Filters</h2>
          <button className="clear-btn"onClick={()=>dispatch({ type: "RESET", payload: {} })}>Clear</button>
        </div>
        <PriceRangeFilter {...productState} dispatch={dispatch}/>
        <SortByPriceFilter {...productState} dispatch={dispatch}/>
        <CategoryFilter {...productState} dispatch={dispatch}/>
        <DiscountFilter {...productState} dispatch={dispatch}/>
        <RatingFilter {...productState} dispatch={dispatch}/>
      </div>
      </>
    );
  };
  export { Productfilter };
  