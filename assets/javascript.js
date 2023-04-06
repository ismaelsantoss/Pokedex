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



var imagem = document.getElementById("imagem");
var velocidadeX = Math.random() * 10;
var velocidadeY = Math.random() * 10;
var x = Math.random() * (window.innerWidth - imagem.offsetWidth);
var y = Math.random() * (window.innerHeight - imagem.offsetHeight);

setInterval(function() {
  // Atualizar a posição da imagem
  x += velocidadeX;
  y += velocidadeY;
  imagem.style.left = x + "px";
  imagem.style.top = y + "px";
  
  // Detectar quando a imagem atinge as bordas do site
  if (x < 0 || x > (window.innerWidth - imagem.offsetWidth)) {
    velocidadeX *= -1;
  }
  if (y < 0 || y > (window.innerHeight - imagem.offsetHeight)) {
    velocidadeY *= -1;
}}, 39); // Intervalo de atualização de posição aleatória a cada 50 milissegundos