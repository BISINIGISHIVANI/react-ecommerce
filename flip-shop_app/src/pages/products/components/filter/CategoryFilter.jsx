const CategoryFilter=({solidJacket,thinJacket,lightWeightJacket,dispatch})=>{
    return <div className="filter-type">
    <h3 className="filter-type-h3">Category</h3>
    <div className="filter-type-container">
      <input 
      type="checkbox" 
      className="solid-Jacket"
      checked={solidJacket}
      onChange={(e) =>
          e.target.checked
              ? dispatch({
                  type: "CATEGORY_SOLID",
                  payload: { solidJacket: true }
              })
              : dispatch({
                  type: "CATEGORY_SOLID",
                  payload: { solidJacket: false }
              })}
      />
      <label htmlFor="solid-Jacket">Bomber Solid Jacket</label>
    </div>
    <div className="filter-type-container">
      <input
       type="checkbox" 
       className="Thin-Jacket" 
       checked={thinJacket}
      onChange={(e) =>
          e.target.checked
              ? dispatch({
                  type: "CATEGORY_THIN",
                  payload: { thinJacket: true }
              })
              : dispatch({
                  type: "CATEGORY_THIN",
                  payload: { thinJacket: false }
              })}
       />
      <label htmlFor="Thin-Jacket">Bomber Thin Jacket</label>
    </div>
    <div className="filter-type-container">
      <input
      type="checkbox"
      className="Lightweight-Jacket" 
      checked={lightWeightJacket}
      onChange={(e) =>
          e.target.checked
              ? dispatch({
                  type: "CATEGORY_LIGHTWEIGHT",
                  payload: { lightWeightJacket: true }
              })
              : dispatch({
                  type: "CATEGORY_LIGHTWEIGHT",
                  payload: { lightWeightJacket: false }
              })}
      />
      <label htmlFor="Lightweight-Jacket">Bomber Light weight Jacket</label>
    </div>
  </div>
}
export {CategoryFilter}