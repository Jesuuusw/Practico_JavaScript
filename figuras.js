// Codigo del Cuadrado
console.group("cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 


// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado es: " + areaCuadrado);

console.groupEnd();


// Codigo del triangulo 

console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(

//     "Los lados del triangulo miden: " 
//     +ladoTriangulo1
//     + "cm, " +
//     ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     +"cm" 
// );
// const alturaTriangulo = 5.5;

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
} 



function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}



console.groupEnd();

// Codigo del Circulo 

console.group("Circulos");

// Radio
// const radioCirculo = 4;


// Diametro 
function diametroCirculo(radio) {
    return radio * 2;
} 



// PI

const PI = Math.PI;

console.log( "PI es: " + PI);


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}




// Area 

function areaCirculo(radio) {
    
    return (radio * radio) * PI;
}


console.groupEnd();

// Aquí interactuamos con el html 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);

}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);
}



function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);

    alert(diametro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado = document.getElementById("InputTriangulo");
    const lado1 = document.getElementById("InputTriangulo1");
    const base = document.getElementById("InputTriangulo2");
    
    const value = lado.value;
    const value1 = lado1.value;
    const value_base = base.value;

    const perimetro = perimetroTriangulo(value,value1,value_base);

    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputTriangulo2");

    const altura = document.getElementById("InputTriangulo3");
    
    const value2 = base.value;
    const value3 = altura.value;


    const area = areaTriangulo(value2,value3);

    alert(area);
}

