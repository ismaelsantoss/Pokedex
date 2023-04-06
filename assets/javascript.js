const lista1 = document.querySelector('.lista_1_selecao');
const lista2 = document.querySelector('.lista_2');
const lista3 = document.querySelector('.lista_3');
const agua = document.querySelectorAll('.agua');
const fogo = document.querySelectorAll('.fogo');

let imagemAtual;

const exibirImagem = (imagem, secao) => {
  imagemAtual?.remove();
  const novaImagem = imagem.cloneNode(true);
  secao.appendChild(novaImagem);
  imagemAtual = novaImagem;
}

const exibirImagens = (lista, secao) => {
  let imagemAtual = null;
  lista.forEach(item => {
    item.addEventListener('click', () => {
      const imagens = item.querySelectorAll('img');
      imagens.forEach(imagem => {
        const novaImagem = imagem.cloneNode(true);
        imagemAtual?.parentNode?.removeChild(imagemAtual);
        secao.appendChild(novaImagem);
        imagemAtual = novaImagem;
      });
    });
  });
}

exibirImagens(agua, lista2);
exibirImagens(fogo, lista3);

