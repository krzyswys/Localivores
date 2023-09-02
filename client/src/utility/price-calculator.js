export const calculatePrice = (item) => {
    const pricePerUnit = parseFloat(item.pricePerUnit.split("/")[0]);
    const weightUnit = parseInt(item.pricePerUnit.split("/")[1]);
    const price = (pricePerUnit / weightUnit) * +item.quantity * +item.selectedWeight;
    return price.toFixed(2);
  };
  
export  const discountedPrice = (price,item) =>{
    const discountedPrice = price - (price * +item.product_discount) / 100;
    return discountedPrice.toFixed(2);
  }


export const unitPrice = (item) =>{
    const pricePerUnit = parseFloat(item.pricePerUnit.split("/")[0]);
    const weightUnit = parseInt(item.pricePerUnit.split("/")[1]);
    const price = (pricePerUnit / weightUnit) * +item.selectedWeight;
    return price.toFixed(2);
}