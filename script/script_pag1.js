var schemas = document.querySelector('#schemas');
var schemastxt = document.querySelector('#schemastxt');

schemas.addEventListener('click', abrirSchemas);

function abrirSchemas() {
    if (schemastxt.style.display == 'none') {
        schemastxt.style.display = 'block';
    }
    else {
        schemastxt.style.display = 'none';
    }
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