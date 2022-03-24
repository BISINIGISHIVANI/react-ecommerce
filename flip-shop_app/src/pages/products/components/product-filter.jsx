const Productfilter = () => {
    return (
      <div className="filter-container">
        <div className="filter-title">
          <h2 className="filter-heading">Filters</h2>
          <button className="clear-btn">Clear</button>
        </div>
        <div className="filter-type">
          <h3 className="filter-type-h3">Price</h3>
          <div className="filter-type-container">
            <label htmlFor="slider">₹0 - ₹10000</label>
            <input
              type="range"
              min="0"
              max="10000"
              value="5000"
              className="slider"
            />
          </div>
        </div>
        <div className="filter-type">
          <h3 className="filter-type-h3">Sort by</h3>
          <div className="filter-type-container">
            <input type="radio" className="low-high" />
            <label htmlFor="low-high">Price - Low to High</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" className="high-low" />
            <label htmlFor="high-low">Price - High to Low</label>
          </div>
        </div>
        <div className="filter-type">
          <h3 className="filter-type-h3">Category</h3>
          <div className="filter-type-container">
            <input type="checkbox" className="solid-Jacket" />
            <label htmlFor="solid-Jacket">Bomber Solid Jacket</label>
          </div>
          <div className="filter-type-container">
            <input type="checkbox" className="Thin-Jacket" />
            <label htmlFor="Thin-Jacket">Bomber Thin Jacket</label>
          </div>
          <div className="filter-type-container">
            <input type="checkbox" className="Lightweight-Jacket" />
            <label htmlFor="Lightweight-Jacket">Bomber Light weight Jacket</label>
          </div>
        </div>
        <div className="filter-type">
          <h3 className="filter-type-heading">Discount</h3>
          <div className="filter-type-container">
            <input type="radio" className="four-star" />
            <label htmlFor="four-star">80% & above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" className="three-star" />
            <label htmlFor="three-star">60% & above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" className="two-star" />
            <label htmlFor="two-star">40% & above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" className="one-star" />
            <label htmlFor="one-star">20% & above</label>
          </div>
        </div>
        <div className="filter-type">
          <h3 className="filter-type-heading">Rating</h3>
          <div className="filter-type-container">
            <input type="radio" className="four-star" />
            <label htmlFor="four-star">4 stars & above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" className="three-star" />
            <label htmlFor="three-star">3 stars & above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" className="two-star" />
            <label htmlFor="two-star">2 stars & above</label>
          </div>
          <div className="filter-type-container">
            <input type="radio" className="one-star" />
            <label htmlFor="one-star">1 stars & above</label>
          </div>
        </div>
      </div>
    );
  };
  export { Productfilter };
  