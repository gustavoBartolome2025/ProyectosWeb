function calcular() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    //let operacion = document.querySelector('input[name="operacion"]:checked').value;

    
    let operacion = document.forms['calculadora'].operacion.value;

    let resultadoDiv = document.getElementById('resultado');

    let resultado;
    if (operacion === 'suma') {
        resultado = valor1 + valor2;
    } else if (operacion === 'producto') {
        resultado = valor1 * valor2;
    }

    resultadoDiv.textContent = 'Resultado: ' + resultado;

}
