const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
        
    return precioConDescuento;
}




const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;




function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;



    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;


    const inputCoupon = document.getElementById("inputCoupon");
    

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}
    
    
    










// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });