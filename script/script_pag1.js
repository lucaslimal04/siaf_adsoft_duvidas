var schemas = document.querySelector('#schemas');
var schemastxt = document.querySelector('#schemastxt');
var clicker = true;
var localschemas = document.querySelector('#localschemas');
var schemastxtpos = document.querySelector('#schemastxtpos');
var solucaoschemas = document.querySelector('#solucaoschemas');

schemas.addEventListener('click', abrirSchemas);

function abrirSchemas() {
    if (clicker) {
        schemastxt.innerHTML += "<p>O SIAFW está mapeado incorretamente, clique com o botão direito do mouse no ícone do SIAFW e selecione abrir local do arquivo, o diretório dos arquivos que o SIAFW está, é direcionado pela rede conforme mostram as imagens.</p>";
        localschemas.style.display = 'block';
        schemastxtpos.innerHTML += "<p>O Sistema precisa ser direcionado pelo servidor, faça o mapeamento do SIAFW de acordo com a imagem e abra o SIAFW por esse mapeamento que conseguirá emitir notas normalmente.</p>";
        solucaoschemas.style.display = 'block';
    }
    else {
        schemastxt.innerHTML = "";
        localschemas.style.display = 'none';
        schemastxtpos.innerHTML = "";
        solucaoschemas.style.display = 'none';
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