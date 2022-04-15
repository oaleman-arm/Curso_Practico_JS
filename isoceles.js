function alturaTriangulo(lado,base){
return Math.sqrt((lado*lado)-((base*base)/4));
}

function calcularAlturaTriangulo(){
    const lado1 = Number(document.getElementById("txtLado1").value);
    const lado2 = Number(document.getElementById("txtLado2").value);
    const base = Number(document.getElementById("txtBase").value);

    if (lado1 != lado2){
        alert("Los lados no son iguales");
    }else
    {
        const altura = alturaTriangulo(lado1,base);
        alert(altura);
    }
}