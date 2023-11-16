var schemas = document.querySelector('#schemas');
var schemastxt = document.querySelector('#schemastxt');
var clicker = true;

schemas.addEventListener('click', abrirSchemas);

function abrirSchemas() {
    if (clicker) {
        schemastxt.innerHTML += "<p>Provavelmente o SIAF está mapeado incorretamente, clique com o botão direito do mouse em cima do ícone do SIAF e selecione abrir local do arquivo, provavelmente o diretório dos arquivos que o SIAFW está, é direcionado pela rede, e precisa ser direcionado pelo servidor. </p>";
    }
    else {
        schemastxt.innerHTML = "";
    }

    clicker = !clicker;
}

var fieldCelular = document.querySelector('#fieldCelular');
var fieldCelulartxt = document.querySelector('#fieldCelulartxt')

fieldCelular.addEventListener('click', abrirFieldCelular);

function abrirFieldCelular() {
    if (fieldCelulartxt.style.display == 'none') {
        fieldCelulartxt.style.display = 'block';
    }
    else {
        fieldCelulartxt.style.display ='none';
    }
}