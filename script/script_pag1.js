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
var fieldCelulartxt = document.querySelector('#fieldCelulartxt');
var fieldCelularimg = document.querySelector('#fieldCelularimg');

fieldCelular.addEventListener('click', abrirFieldCelular);

function abrirFieldCelular() {
    if (clicker) {
        fieldCelulartxt.innerHTML += "<p>Está faltando essa coluna no banco de dados, rodar os comandos versaoxxx, versao180823190 (o número da versão) e o atualiza programas na manutenção de arquivos para criar novamente essa coluna.</p>";
        fieldCelularimg.style.display = 'block'
    }
    else {
        fieldCelulartxt.innerHTML = "";
        fieldCelularimg.style.display = 'none';
    }

    clicker = !clicker;
}
var erroDiButton = document.querySelector('#errodibutton');
var erroditxt = document.querySelector('#erroditxt');
var errodiimg = document.querySelector('#errodiimg');
var erroditxtpos = document.querySelector('#erroditxtpos');
erroDiButton.addEventListener('click', abrirErroDi);

function abrirErroDi() {
    if(clicker){
        errodiimg.style.display = 'block';
        erroditxt.innerHTML += "<p>Esse erro ocorre devido à Substituição Tributária (ST) referente ao produto. A ST do produto vai estar configurada como 100, o que indica que o produto foi adquirido diretamente por importação. Nesse caso, o sistema exige que informações de importação sejam fornecidas.</p>";
        erroditxtpos.innerHTML += "<p>No entanto, se o cliente não adquiriu o produto diretamente por importação, é aconselhável utilizar a ST 200 ou 000. Recomenda-se confirmar essa classificação com a contabilidade para garantir a conformidade com a legislação tributária.</p>"
        
    }
    else {
        errodiimg.style.display = 'none';
        erroditxt.innerHTML = "";
        erroditxtpos.innerHTML = "";
    }
     
    clicker = !clicker;
     
}