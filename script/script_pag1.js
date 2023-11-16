var schemas = document.querySelector('#schemas');
var schemastxt = document.querySelector('#schemastxt');
var clicker = true;
var schemasimg = document.querySelector('#schemasimg');


schemas.addEventListener('click', abrirSchemas);

function abrirSchemas() {
    if (clicker) {
        schemastxt.innerHTML += "<p>O SIAFW está mapeado incorretamente, clique com o botão direito do mouse no ícone do SIAFW e selecione abrir local do arquivo, o diretório dos arquivos que o SIAFW está, é direcionado pela rede, e precisa ser direcionado pelo servidor, faça o mapeamento do SIAFW de acordo a imagem. </p>";
        schemasimg.style.display = 'block';
    }
    else {
        schemastxt.innerHTML = "";
        schemasimg.style.display = 'none'
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