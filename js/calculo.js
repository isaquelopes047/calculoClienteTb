
function pegaValoresData() {

    let dataUmString = document.querySelector('.dataUm').value;
    let dataDoisString = document.querySelector('.dataDois').value;

    // Converter as strings de data para objetos Date
    let dataUm = new Date(dataUmString);
    let dataDois = new Date(dataDoisString);

    let diferencaEmMilissegundos = Math.abs(dataDois - dataUm);

    let diferencaEmHoras = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60));
    let diferencaEmMinutos = Math.floor((diferencaEmMilissegundos / (1000 * 60)) % 60);

    // Verificar se os minutos excedem 60
    if (diferencaEmMinutos >= 60) {
        diferencaEmHoras += Math.floor(diferencaEmMinutos / 60);
        diferencaEmMinutos %= 60;
    }

    let result = diferencaEmHoras + diferencaEmMinutos / 60;

    return result

}

function dividirValor(){
    let tonelada = document.querySelector('.tonelada').value
    let tabela = document.querySelector('.contrato').value
    let textoValorHoras = document.querySelector('.horasTotal')
    let textoValorValor = document.querySelector('.valorTotal')

    let divElements = document.querySelectorAll('.rouderr');
    divElements.forEach(function(element) {
        element.style.border = '2px solid green';
    });

    let valorFinal = ( pegaValoresData() * tonelada ) *  tabela

    /* ADICIONA OS VALORES NOS CARD DE INFORMAÇÃO */
    textoValorHoras.textContent = `${ pegaValoresData().toFixed(2) } Horas`
    textoValorValor.textContent = `R$ ${ valorFinal.toFixed(2) }`
}

let acionaFunc = document.querySelector('.ButtonCalcular');
acionaFunc.addEventListener('click', dividirValor);