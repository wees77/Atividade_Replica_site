'use strict';

function criarProduto(produto) {
  const cards = document.createElement('div');
  cards.classList.add('cards');

  const nome = document.createElement('span');
  nome.classList.add('nome');
  nome.textContent = produto.nome;

  const descricao = document.createElement('span');
  descricao.textContent = produto.descricao;

  const preco = document.createElement('span');
  preco.classList.add('preco');
  preco.textContent = produto.preco;

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = produto.imagem;

  const categoria = document.createElement('span');
  categoria.classList.add('categoria')
  categoria.textContent = produto.categoria;

  const classificacao = document.createElement('span');
  classificacao.innerHTML = criaEstrelas(produto.classificacao); // ⭐️ SVG

  cards.append(img, nome, descricao, preco, categoria, classificacao);
  document.getElementById('produtos').appendChild(cards);
}

// Carregar produtos via fetch
async function carregarProdutos() {
  try {
    const resposta = await fetch('./produtos.json');
    const listaProdutos = await resposta.json();
    listaProdutos.forEach(criarProduto);
  } catch (erro) {
    console.error('Erro ao carregar produtos:', erro);
  }
}

// Criar estrelas com SVG
function criaEstrelas(qtd) {
  let stars = "";
  for (let i = 0; i < qtd; i++) {
    stars += `<svg class="estrela" viewBox="0 0 24 24" width="20" height="20">
      <path fill="#FFD700" d="M12 17.27L18.18 21l-1.64-7.03L22 
      9.24l-7.19-.61L12 2 9.19 8.63 
      2 9.24l5.46 4.73L5.82 21z"/>
    </svg>`;
  }
  return stars;
}

// Iniciar
carregarProdutos();

  
