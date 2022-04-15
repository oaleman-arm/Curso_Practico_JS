//Codigo del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " +ladoCuadrado+ "cm");
function perimetroCuadrado(lado){
return lado * 4;
} 
//console.log("El Perimetro del cuadrado es: " +perimetroCuadrado+ "cm");
function areaCuadrado(lado){
   return lado * lado;
}
//console.log("El Area del cuadrado es: " +areaCuadrado+ "cm^2");
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
// "Los lados del triangulo miden: "
// + ladoTriangulo1
// + "cm, "
// + ladoTriangulo2
// + "cm. "
// + baseTriangulo
// +"cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura) {
return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2")
console.groupEnd();

//Codigo del Circulo
console.group("Circulos");
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//Pi
const PI = Math.PI;
//console.log("El valor de Pi es: " + PI);
function perimetroCirculo(radio){
const diametro = diametroCirculo(radio);
return diametro * PI;
} 
//console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("txtCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("txtCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
    }

function calcularPerimetroTriangulo(){
    const lado1 = Number(document.getElementById("txtLado1").value);
    const lado2 = Number(document.getElementById("txtLado2").value);
    const base = Number(document.getElementById("txtBase").value);
    
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("txtBase").value;
    const altura = document.getElementById("txtAltura").value;
    
    const area = areaTriangulo(base,altura);
    alert(area);
}

function calcularPerimetroCirculo(){
const radio = document.getElementById("txtRadio").value;

const perimetro = perimetroCirculo(radio);
alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("txtRadio").value;

    const area = areaCirculo(radio);
    alert(area);

}