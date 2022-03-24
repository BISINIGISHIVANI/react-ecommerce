import "./product-filter.css";
import { ProductsList } from "./components/product-all";
import { Productfilter } from "./components/product-filter";
// import {products} from '../../backend/db/products';
// import {}
export default function ProductWithFilter() {
  return (
    <div className="filter-page">
      <section className="filter-product-container">
        <Productfilter />
      </section>
      <section className="products">
        <div className="section-title">
          <h2>our products</h2>
        </div>
        <div className="products-center">
          {products.map(({ _id,
    name,
    subtitle,
    rating,
    price,
    discount,
    image})=>{
            <ProductsList
            productFilterImg={image}
            imgAlt={"product"}
            title={name}
            productSubtitle={subtitle}
            starRating={rating}
            productPrice={price}
            productDiscount={discount}
          />
          })}
        </div>
      </section>
    </div>
  );
}
