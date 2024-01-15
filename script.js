const getInput = document.querySelector('input');
const getUL = document.querySelector('#lista');
const getBotao = document.querySelector('button');
const pegaContador = document.querySelector('#numeros');
const getBotaoremove = document.querySelector('#botao-remove');

getBotao.addEventListener('click', function() {
    let criaLi = document.createElement('li');
    let valorInput = getInput.value;

    if (valorInput !== "") {
        criaLi.innerText = valorInput;
        getUL.appendChild(criaLi);
        criaLi.classList.add('convidado');
    }

    let pegaLi = document.querySelectorAll('.convidado');
    pegaContador.innerText = pegaLi.length;

    criaLi.addEventListener('click', function() {
        let todosConvidados = document.querySelectorAll('.convidado');
        for (let i = 0; i < todosConvidados.length; i++) {
            todosConvidados[i].classList.remove('select');
            todosConvidados[i].style.backgroundColor = '';
        }
        criaLi.classList.add('select');
        criaLi.style.backgroundColor = 'red';
    });

    getBotaoremove.addEventListener('click', function() {
        let itemSelecionado = document.querySelector('.select');
        if (itemSelecionado) {
            itemSelecionado.remove();
            pegaContador.innerText = document.querySelectorAll('.convidado').length;
        }
    });
});