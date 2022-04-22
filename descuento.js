function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;

    // console.log({
    //     precioConDescuento,
    //     precio,
    //     descuento
    // });
}

function PriceDiscount(){
const inputPrice = document.getElementById("txtPrice").value;
const inputDiscount = document.getElementById("txtDiscount").value;

const precioDiscount = calcularPrecioConDescuento(inputPrice,inputDiscount);

const resultP = document.getElementById("ResultPrice");
resultP.innerText ="El Precio con descuento es: $" + precioDiscount;


}