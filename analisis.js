const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, SalaryB){
        return salaryA - SalaryB;

    }
);

function esPar(numero){
return (numero % 2 == 0);
}

function CalcularMediaritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = CalcularMediaritmetica([personaMitad1,personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana del Top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const SalarioColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaGeneralCol = medianaSalariosCol(salariosColSorted);
const medianaTop10Col = medianaSalariosCol(SalarioColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});