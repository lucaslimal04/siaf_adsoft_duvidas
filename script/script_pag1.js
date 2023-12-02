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
var main = document.querySelector('main');

schemas.addEventListener('click', abrirSchemas);

function abrirSchemas() {
    if (clickerSchemas) {
        main.style.background = '#ffffffd0';
        schemastxt.innerHTML += "<p>O SIAFW está mapeado incorretamente, clique com o botão direito do mouse no ícone do SIAFW e selecione abrir local do arquivo, o diretório dos arquivos que o SIAFW está, é direcionado pela rede conforme mostram as imagens.</p>";
        localschemas.style.display = 'block';
        schemastxtpos.innerHTML += "<p>O Sistema precisa ser direcionado pelo servidor, faça o mapeamento do SIAFW de acordo com a imagem e abra o SIAFW por esse mapeamento que conseguirá emitir notas normalmente.</p>";
        solucaoschemas.style.display = 'block';
    }
    else {
        main.style.background = '#ffffff5d';
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
        main.style.background = '#ffffffd0';
        fieldCelulartxt.innerHTML += "<p>Está faltando essa coluna no banco de dados, rodar os comandos versaoxxx, versao180823190 (o número da versão) e o atualiza programas na manutenção de arquivos para criar novamente essa coluna.</p>";
        fieldCelularimg.style.display = 'block'
    }
    else {
        main.style.background = '#ffffff5d';
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
        main.style.background = '#ffffffd0';
        errodiimg.style.display = 'block';
        erroditxt.innerHTML += "<p>Esse erro ocorre devido à Substituição Tributária (ST) referente ao produto. A ST do produto vai estar configurada como 100, o que indica que o produto foi adquirido diretamente por importação. Nesse caso, o sistema exige que informações de importação sejam fornecidas.</p>";
        erroditxtpos.innerHTML += "<p>No entanto, se o cliente não adquiriu o produto diretamente por importação, é aconselhável utilizar a ST 200 ou 000. Recomenda-se confirmar essa classificação com a contabilidade para garantir a conformidade com a legislação tributária.</p>";
        
    }
    else {
        main.style.background = '#ffffff5d';
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
        main.style.background = '#ffffffd0';
        cfopeximg.style.display = 'block';
        cfopex.innerHTML += "<p>Primeiramente, deve ser verificado o CFOP que está sendo utilizado.</p>";
        cfopexpos.innerHTML += "<p>Caso o cadastro do cliente seja de outro estado, o CFOP utilizado seria com número inicial 6, o cadastro do cliente deve estar cadastrado como Outros.</p>";
        cfopexpos2.innerHTML += "<p>Porém se o cliente for do mesmo estado que sua empresa, o CFOP utilizado seria com início 5, o cadastro do cliente deve estar cadastrado como presencial.</p>";
        
    }
    else {
        main.style.background = '#ffffff5d';
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
        main.style.background = '#ffffffd0';
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
        main.style.background = '#ffffff5d';
        csosnImg.style.display = 'none';
        csosnIn.innerHTML = "";
        csosnNumerado.innerHTML = "";
        csosnObs.innerHTML = "";
        csoStTabela.innerHTML = "";
    }
    clickercsosn = !clickercsosn;
}

var totalButton = document.querySelector('#totalButton');
var totalImg = document.querySelector('#totalImg');
var totalTxt = document.querySelector('#totalTxt');
var clickerTotal = true;

totalButton.addEventListener('click', abrirTotal);

function abrirTotal() {
    if (clickerTotal) {
        main.style.background = '#ffffffd0';
        totalImg.style.display = 'block';
        totalTxt.innerHTML += `<p>Esse problema ocorre devido a um erro de arredondamento no SIAF. 
        Primeiro, verifique o XML da nota e preste atenção nas tags &lt;vPag&gt; e &lt;vNF&gt;. 
        Geralmente, o valor em &lt;vPag&gt; estará 0,01 a menos do que em &lt;vNF&gt;. <br>
        Se isso for confirmado, vá para a nota e adicione 0,01 no campo de acréscimo ou na DSIAF036, procure o campo SAI_ACRE e coloque o valor de 0,01.
         Após esse procedimento, a nota provavelmente poderá ser emitida.</p>
        `;
    } else {
        main.style.background = '#ffffff5d';
        totalImg.style.display = 'none';
        totalTxt.innerHTML = "";
    }
    
    clickerTotal = !clickerTotal;
}

var vDescButton = document.querySelector('#vDescButton');
var vDescImg = document.querySelector('#vDescImg');
var vDesc = document.querySelector('#vDesc');
var clickerVDesc = true;

vDescButton.addEventListener('click', abrirVDesc);

function abrirVDesc() {
    if (clickerVDesc) {
        main.style.background = '#ffffffd0';
        vDescImg.style.display = 'block';
        vDesc.innerHTML += `<p>De acordo com as informações do sistema, há uma divergência de valores na Nota Fiscal de Saída em relação ao XML. Para corrigir isso, temos duas opções:<br>
        Opção 1: Remover o desconto do rodapé e aplicá-lo diretamente no produto. <br>
        Observação: É importante informar ao cliente caso opte por este método, pois o valor do produto na NF saída será alterado.<br>
        Opção 2: Nesse método, iremos dobrar o desconto e adicionar um acréscimo no rodapé da nota. <br>
        Por exemplo, se a nota tem um desconto de 0,50 no rodapé, adicionaremos um acréscimo de 0,50 no rodapé e alteraremos o desconto para 1,00. <br>
        Dessa forma, o valor total da nota permanecerá o mesmo, apenas o valor do desconto será ajustado.
        </p>`;
    } else {
        main.style.background = '#ffffff5d';
        vDescImg.style.display = 'none';
        vDesc.innerHTML = "";
    }
    clickerVDesc = !clickerVDesc;
}

var erroTrocoButton = document.querySelector('#erroTrocoButton');
var erroTrocoImg = document.querySelector('#erroTrocoImg');
var erroTrocoTxt = document.querySelector('#erroTrocoTxt');
var clickerTroco = true;

erroTrocoButton.addEventListener('click', abrirTroco);

function abrirTroco() {
    if(clickerTroco) {
        main.style.background = '#ffffffd0';
        erroTrocoImg.style.display = 'block';
        erroTrocoTxt.innerHTML += `<p><li>Esse erro ocorre devido a uma falha ao processar os valores totais da nota com o XML corretamente, Para corrigir isso, temos algumas opções:</li></p> 
        <p><li>Verifique se no rodapé da nota está com desconto ou acréscimo, se existir, retire esse valor do rodapé da nota e insira ele diretamente no valor de algum produto de forma que não altere o valor total da nota.</li></p>
        <p><li>Se o anterior não funcionar verifique o XML dessa mesma nota, se existir o valor a mais no campo &lt;vPag&gt;do que o &lt;vNf&gt; verifique se as prestações dessa nota existem número de protocolo(abrindo a nota fiscal de saída e abrindo as prestações), se possuir o campo de &lt;vPag&gt; está correto, então atualize a nota de forma que os dois campos estejam iguais.</li></p> 
        <p><li>Verifique se o tipo de venda dessa nota tem a opção Forma de Pagamento para DF-e, se existir verifique se o campo está correto, se o pagamento for A vista coloque como DINHEIRO, se for A Prazo coloque como CARTÃO DE CRÉDITO.</li></p>
        <p><li>Se esses processos não funcionarem, verifique se essa nota tem algum valor de entrada, se existir, retire esse valor da entrada e adicione uma prestação a mais nessa nota com o valor já pago em dinheiro.</li></p>
        `;
    } else {
        main.style.background = '#ffffff5d';
        erroTrocoImg.style.display = 'none';
        erroTrocoTxt.innerHTML = "";
    }
    clickerTroco = !clickerTroco;
}
