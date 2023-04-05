const lista1 = document.querySelector('.lista_1_selecao');
const lista2 = document.querySelector('.lista_2');
const lista3 = document.querySelector('.lista_3');
const agua = document.querySelectorAll('.agua');
const fogo = document.querySelectorAll('.fogo');

let imagemAtual;

function exibirImagem(imagem, secao) {
  if (imagemAtual) {
    imagemAtual.remove();
  }
  const novaImagem = imagem.cloneNode(true);
  secao.appendChild(novaImagem);
  imagemAtual = novaImagem;
}

function exibirImagens(lista, secao) {
  lista.forEach(item => {
    item.addEventListener('click', () => {
      const imagens = item.querySelectorAll('img');
      exibirImagem(imagens[0], secao);
    });
  });
}

exibirImagens(agua, lista2);
exibirImagens(fogo, lista3);

function exibirImagens(lista, secao) {
let imagemAtual = null;

lista.forEach(item => {
    item.addEventListener('click', () => {
    const imagens = item.querySelectorAll('img');
    imagens.forEach(imagem => {
        const novaImagem = imagem.cloneNode(true);
        if (imagemAtual !== null) {
        imagemAtual.parentNode.removeChild(imagemAtual);
        }
        secao.appendChild(novaImagem);
        imagemAtual = novaImagem;
    });
    });
});
}

