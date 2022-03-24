import React from "react";
import "./landing-page.css";
import heroImg1 from "../../assets/images/img-1/hero.jpg";
import productImg1 from "../../assets/images/img-1/product-1.webp";
import productImg2 from "../../assets/images/img-1/product-2.webp";
import newImg1 from "../../assets/images/webp/ChkokkoWomenNavyBlueColourblockedSportyJacket1.webp";
import newImg2 from "../../assets/images/webp/Leather-Retail-Women-Jackets-pink.webp";
import newImg3 from "../../assets/images/webp/navy-green-jacket.jpg";
import { Link } from "react-router-dom";
export default function landingPage() {
  return (
    <>
      <header className="hero">
        <div
          style={{
            backgroundImage: `url(${heroImg1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center/cover"
          }}
          className="hero-slide1
         hero-slides"
        >
          <div className="banner1">
            <h1 className="banner-title1">women wear collection</h1>
            <Link to="/products">
            <button className="banner-btn1 cursor-pointer">shop now</button>
            </Link>
          </div>
        </div>
      </header>
      <section className="products">
        <div className="section-title">
          <h2>New products</h2>
        </div>
        <div className="products-center">
          <article className="product">
            <div className="img-container">
              <img src={productImg1} alt="product" className="product-img" />
              <button className="bag-btn">Bomber Solid Jacket</button>
            </div>
            <h3>Mast & Harbour</h3>
            <h5>Women Blue Solid Bomber Jacket</h5>
            <h4>Rs.2699</h4>
          </article>
          <article className="product">
            <div className="img-container">
              <img src={productImg2} alt="product" className="product-img" />
              <button className="bag-btn">Bomber Thin Jacket</button>
            </div>
            <h3>Mast & Harbour</h3>
            <h5>Women Blue Solid Bomber Jacket</h5>
            <h4>Rs.2699</h4>
          </article>
          <article className="product">
            <div className="img-container">
              <img src={newImg1} alt="product" className="product-img" />
              <button className="bag-btn">Bomber Light weight Jacket</button>
            </div>
            <h3>Mast & Harbour</h3>
            <h5>Women Blue Solid Bomber Jacket</h5>
            <h4>Rs.2699</h4>
          </article>
        </div>
      </section>
      <section className="our-products">
        <div className="section-title">
          <h2>Our products</h2>
        </div>
        <div className="products-center">
          <article className="product">
            <div className="img-container">
              <img src={newImg2} alt="product" className="product-img" />
              <button className="bag-btn">View Details</button>
            </div>
          </article>
          <article className="product">
            <div className="img-container">
              <img src={newImg3} alt="product" className="product-img" />
              <button className="bag-btn">view Details</button>
            </div>
          </article>{" "}
        </div>
      </section>
    </>
  );
}
