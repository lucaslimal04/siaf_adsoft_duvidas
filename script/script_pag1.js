var imagemOriginal = document.querySelector('#imagemOriginal');
var novaImagem = document.querySelector('#novaImagem');
var trocandoImagem = true;

imagemOriginal.addEventListener('mouseover', trocaEmail);
novaImagem.addEventListener('mouseout', trocaEmail);

function trocaEmail() {
    if (trocandoImagem) {
        imagemOriginal.style.display = 'none';
        novaImagem.style.display = 'block';
        setTimeout(function () {
            novaImagem.style.opacity = '0.9';
        }, 10);
    } else {
        trocandoImagem = false;
        novaImagem.style.opacity = '0';
        setTimeout(function () {
            novaImagem.style.display = 'none';
            imagemOriginal.style.display = 'inline-block';
            imagemOriginal.style.opacity = '1';
        }, 200);
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

var csosnButton = document.querySelector('#csosnButton');
var csosnImg = document.querySelector('#csosnImg');
var csosnIn = document.querySelector('#csosnIn');
var csosnNumerado = document.querySelector('#csosnNumerado');
var csosnTabela = document.querySelector('#csosnTabela');
var csosnObs = document.querySelector('#csosnObs');
var csoStTabela = document.querySelector('#csoStTabela');
var clickercsosn = true;

csosnButton.addEventListener('click', abrirCsosn);

function abrirCsosn() {
    if (clickercsosn) {
        csosnImg.style.display = 'block';
        csosnIn.innerHTML += `<ul>
            <li>102 - Tributada pelo Simples Nacional sem permissão de crédito;</li>
            <li>103 - Isenção do ICMS no Simples Nacional para faixa de receita bruta;</li>
            <li>300 - Imune;</li>
            <li>400 - Não tributada pelo Simples Nacional;</li>
            <li>500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação;</li>
            <li>900 - Outros (a critério da UF);</li>
        </ul>`;
        csosnNumerado.innerHTML += '<p>Deve ser verificado se o cliente é simples nacional. Caso seja, ele pode utilizar os seguintes CSO:</p>';
        csosnObs.innerHTML += '<p>OBS: NFC não é permitido CSO 900</p>';
        csoStTabela.innerHTML += `<table>
        <tr>
            <th>CSOSN</th>
            <th>ST</th>
        </tr>
        <tr>
            <td>102</td>
            <td>000, 020, 090</td>
        </tr>
        <tr>
            <td>103</td>
            <td>040, 090</td>
        </tr>
        <tr>
            <td>300</td>
            <td>040, 041</td>
        </tr>
        <tr>
            <td>400</td>
            <td>040, 050</td>
        </tr>
        <tr>
            <td>500</td>
            <td>060</td>
        </tr>
        <tr>
            <td>900</td>
            <td>000, 020, 051, 090</td>
        </tr>
    </table>`
    } else {
        csosnImg.style.display = 'none';
        csosnIn.innerHTML = "";
        csosnNumerado.innerHTML = "";
        csosnObs.innerHTML = "";
        csoStTabela.innerHTML = "";
    }
    clickercsosn = !clickercsosn;
}
