const CategoryFilterData=(productsList,{solidJacket,thinJacket,lightWeightJacket})=>{
  if(!solidJacket&& !thinJacket&&lightWeightJacket){
      return productsList
  }
  const getFilteredData=[];
  if(solidJacket){
      const getData=productsList.filter((item)=>item.categories==="Bomber Solid Jacket");
      getFilteredData.push(...getData);
  }
  if(thinJacket){
    const getData=productsList.filter((item)=>item.categories==="Bomber Thin Jacket");
    getFilteredData.push(...getData);
   }
  if(lightWeightJacket){
    const getData=productsList.filter((item)=>item.categories==="Bomber Light weight Jacket");
    getFilteredData.push(...getData);
  }  

}
export {CategoryFilterData}