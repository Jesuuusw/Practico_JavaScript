function calcularPrecioConDescuento(precio, descuento){
const porcentajeDelPrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

return precioConDescuento;
}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const resultCoupon = document.getElementById("priceWhitCoupon");

     let descuento;
     let precioConDescuento;

switch(true) {
    case couponValue === "poca_suerte": 
      descuento = 15;
      precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
      resultCoupon.innerText =`El Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
    break;
    case couponValue === "mucha_suerte":
      descuento = 30;
      precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
      resultCoupon.innerText =`El Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
    break;
    case couponValue === "media_suerte":
      descuento = 25;
      precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
      resultCoupon.innerText =`El Cupón es valido el precio con descuento es de: $${precioConDescuento} dolores`
    break;
    default:
      resultCoupon.innerText = "el cupón ingresado no es valido"
  }
}