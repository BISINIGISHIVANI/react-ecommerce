import "./product-filter.css";
// import { products } from "../../data";
import { productImg1, productImg2 } from "../../assets/images/photos";
import { ProductsList } from "./components/product-all";
import { Productfilter } from "./components/product-filter";
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
          <ProductsList
            productFilterImg={productImg1}
            imgAlt={"product"}
            title={"Mast & Harbour"}
            productSubtitle={"Women Blue Solid Bomber Jacket"}
            starRating={"4"}
            productPrice={"2699"}
            productDiscount={"55%"}
          />
          <ProductsList
            productFilterImg={productImg2}
            imgAlt={"product"}
            title={"Mast & Harbour"}
            productSubtitle={"Women yellow Solid Bomber Jacket"}
            starRating={"3.5"}
            productPrice={"2799"}
            productDiscount={"40%"}
          />
          <ProductsList
            productFilterImg={productImg2}
            imgAlt={"product"}
            title={"Mast & Harbour"}
            productSubtitle={"Women yellow Solid Bomber Jacket"}
            starRating={"3.5"}
            productPrice={"2799"}
            productDiscount={"40%"}
          />
          <ProductsList
            productFilterImg={productImg2}
            imgAlt={"product"}
            title={"Mast & Harbour"}
            productSubtitle={"Women yellow Solid Bomber Jacket"}
            starRating={"3.5"}
            productPrice={"2799"}
            productDiscount={"40%"}
          />
        </div>
      </section>
    </div>
  );
}
