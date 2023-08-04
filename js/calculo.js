function pegaValoresData() {
    let dataUmString = document.querySelector('.dataUm').value;
    let dataDoisString = document.querySelector('.dataDois').value;

    let dataUm = new Date(dataUmString);
    let dataDois = new Date(dataDoisString);

    let diferencaEmMilissegundos = Math.abs(dataDois - dataUm);

    let diferencaEmHoras = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60));
    let diferencaEmMinutos = Math.floor((diferencaEmMilissegundos / (1000 * 60)) % 60);

    let result = diferencaEmHoras + diferencaEmMinutos / 100; // Dividindo os minutos por 100 para obter a fração decimal

    return result;
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

    let valorFinal = (pegaValoresData() * tonelada) * tabela;

    /* ADICIONA OS VALORES NOS CARD DE INFORMAÇÃO */
    textoValorHoras.textContent = `${pegaValoresData()} Horas`;
    textoValorValor.textContent = `R$ ${valorFinal.toFixed(2)}`;
}

let acionaFunc = document.querySelector('.ButtonCalcular');
acionaFunc.addEventListener('click', dividirValor);