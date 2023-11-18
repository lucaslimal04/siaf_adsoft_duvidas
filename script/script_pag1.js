var imagemOriginal = document.querySelector('#imagemOriginal');
var novaImagem = document.querySelector('#novaImagem');
var trocandoImagem = true;

imagemOriginal.addEventListener('mouseover', trocaEmail);
novaImagem.addEventListener('mouseout', trocaEmail);

function trocaEmail() {
    if (trocandoImagem) {
        imagemOriginal.style.display = 'none';
        novaImagem.style.display = 'inline-block';
    } else {
        trocandoImagem = false;
        novaImagem.style.display = 'none';
        imagemOriginal.style.display = 'inline-block';
    }

    trocandoImagem = !trocandoImagem;
}


var schemas = document.querySelector('#schemas');
var schemastxt = document.querySelector('#schemastxt');
var clickerSchemas = true;
var localschemas = document.querySelector('#localschemas');
var schemastxtpos = document.querySelector('#schemastxtpos');
var solucaoschemas = document.querySelector('#solucaoschemas');

schemas.addEventListener('click', abrirSchemas);

function abrirSchemas() {
    if (clickerSchemas) {
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

    clickerSchemas = !clickerSchemas;
}

var fieldCelular = document.querySelector('#fieldCelular');
var fieldCelulartxt = document.querySelector('#fieldCelulartxt');
var fieldCelularimg = document.querySelector('#fieldCelularimg');
var clickerField = true;

fieldCelular.addEventListener('click', abrirFieldCelular);

function abrirFieldCelular() {
    if (clickerField) {
        fieldCelulartxt.innerHTML += "<p>Está faltando essa coluna no banco de dados, rodar os comandos versaoxxx, versao180823190 (o número da versão) e o atualiza programas na manutenção de arquivos para criar novamente essa coluna.</p>";
        fieldCelularimg.style.display = 'block'
    }
    else {
        fieldCelulartxt.innerHTML = "";
        fieldCelularimg.style.display = 'none';
    }

    clickerField = !clickerField;
}
var erroDiButton = document.querySelector('#errodibutton');
var erroditxt = document.querySelector('#erroditxt');
var errodiimg = document.querySelector('#errodiimg');
var erroditxtpos = document.querySelector('#erroditxtpos');
var clickerDi = true;

erroDiButton.addEventListener('click', abrirErroDi);

function abrirErroDi() {
    if(clickerDi){
        errodiimg.style.display = 'block';
        erroditxt.innerHTML += "<p>Esse erro ocorre devido à Substituição Tributária (ST) referente ao produto. A ST do produto vai estar configurada como 100, o que indica que o produto foi adquirido diretamente por importação. Nesse caso, o sistema exige que informações de importação sejam fornecidas.</p>";
        erroditxtpos.innerHTML += "<p>No entanto, se o cliente não adquiriu o produto diretamente por importação, é aconselhável utilizar a ST 200 ou 000. Recomenda-se confirmar essa classificação com a contabilidade para garantir a conformidade com a legislação tributária.</p>";
        
    }
    else {
        errodiimg.style.display = 'none';
        erroditxt.innerHTML = "";
        erroditxtpos.innerHTML = "";
    }
     
    clickerDi = !clickerDi;
     
}

var cfopexbutton = document.querySelector('#cfopexbutton');
var cfopex = document.querySelector('#cfopex');
var clickercfopex;
var cfopeximg = document.querySelector('#cfopeximg');
var cfopexpos = document.querySelector("#cfopexpos");
var cfopexpos2 = document.querySelector('#cfopexpos2');
var clickercfopex = true;

cfopexbutton.addEventListener('click', abrircfopex);

function abrircfopex() {
    if(clickercfopex) {
        cfopeximg.style.display = 'block';
        cfopex.innerHTML += "<p>Primeiramente, deve ser verificado o CFOP que está sendo utilizado.</p>";
        cfopexpos.innerHTML += "<p>Caso o cadastro do cliente seja de outro estado, o CFOP utilizado seria com número inicial 6, o cadastro do cliente deve estar cadastrado como Outros.</p>";
        cfopexpos2.innerHTML += "<p>Porém se o cliente for do mesmo estado que sua empresa, o CFOP utilizado seria com início 5, o cadastro do cliente deve estar cadastrado como presencial.</p>";
        
    }
    else {
        cfopeximg.style.display = 'none';
        cfopex.innerHTML = "";
        cfopexpos.innerHTML = "";
        cfopexpos2.innerHTML = "";
    }

    clickercfopex = !clickercfopex;
}