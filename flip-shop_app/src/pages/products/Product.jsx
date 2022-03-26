import "./product-filter.css";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { ProductsList } from "./components/product-all";
import { Productfilter } from "./components/product-filter";

export default function ProductWithFilter() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response=await axios.get("/api/products");
        if (response.status === 200) {
          return setProductData(response.data.products);
        }
          return false;
      } catch (error) {
        console.error(error);
      }
    })();
  },[]);
  return (
    <div className="filter-page">
      <section className="filter-product-container">
        <Productfilter />
      </section>
      <section className="products-list">
        <div className="section-title">
          <h2>our products</h2>
        </div>
        <div className="products-middle">
          {productData.map(({ _id,image,name,subtitle,
    rating,
    price,
    discount,
    })=>(
      <ProductsList
            key={_id}
            productFilterImg={image}
            imgAlt={"product"}
            title={name}
            productSubtitle={subtitle}
            starRating={rating}
            productPrice={price}
            productDiscount={discount}
          />
    ))}
        </div>
      </section>
    </div>
  );
}
