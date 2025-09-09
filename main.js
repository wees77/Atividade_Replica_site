'use strict';

const produtos = [
    {
      imagem: "/img/smartphone-samsung-galaxy-s21.png",
      patrocinado: true,
      nome: "Samsung Galaxy S21 5G (128GB) - Phantom Gray",
      avaliacao: 5,
      precoAntigo: "R$ 3.199,00",
      desconto: "Baixou 27%",
      preco: "R$ 2.184,00",
      parcelas: "ou em até 10x de R$ 234,84 sem juros ou",
      pix: true,
      freteGratis: true
    },
    {
      imagem: "/img/teclado-mecanico-redragon-kumara.png",
      patrocinado: true,
      nome: "Teclado Mecânico Redragon Kumara K552 RGB ABNT2 Switch Outemu Blue",
      avaliacao: 3,
      precoAntigo: "R$ 1.317,63",
      desconto: "Baixou 22%",
      preco: "R$ 1.027,75",
      parcelas: "ou em até 10x de R$ 259,79 sem juros ou",
      pix: true,
      freteGratis: true
    },
    {
      imagem: "/img/tablet-apple-ipad-pro.png",
      patrocinado: false,
      nome: "Tablet Apple iPad Pro 11” (2021) Wi-Fi 128GB - Cinza Espacial",
      avaliacao: 4,
      precoAntigo: "R$ 8.799,00",
      desconto: "Baixou 21%",
      preco: "R$ 6.863,22",
      parcelas: "ou em até 10x R$ 299,90 sem juros ou",
      pix: true,
      freteGratis: true
    },
    {
      imagem: "/img/smartwatch-samsung-galaxy-watch-3.png",
      patrocinado: false,
      nome: "Smartwatch Samsung Galaxy Watch 3 45mm - Mystic Black",
      avaliacao: 4,
      precoAntigo: "R$ 2.699,10",
      desconto: "Baixou 22%",
      preco: "R$ 2.081,89",
      parcelas: "ou em até 6x de R$ 156,50 sem juros ou",
      pix: true,
      freteGratis: true
    },
    {
        imagem: "/img/notebook-dell-inspiron-15-3000.png",
        patrocinado: false,
        nome: "Notebook Dell inspiron i5",
        avaliacao: 5,
        precoAntigo: "R$ 2.898,00",
        desconto: "Baixou 22%",
        preco: "R$ 2.260,44",
        parcelas: "ou em até 6x de R$ 156,50 sem juros ou",
        pix: true,
        freteGratis: true
      },
      {
        imagem: "/img/mouse-gamer-logitech-g-pro.png",
        patrocinado: false,
        nome: "Mouse gamer Logitech g-pro",
        avaliacao: 3,
        precoAntigo: "R$ 598,00",
        desconto: "Baixou 22%",
        preco: "R$ 466,44",
        parcelas: "ou em até 6x de R$ 156,50 sem juros ou",
        pix: true,
        freteGratis: true
      },
      {
        imagem: "/img/monitor-samsung-led-23.8.png",
        patrocinado: false,
        nome: "Monitor gamer t350 Samsung led 23 polegadas",
        avaliacao: 4,
        precoAntigo: "R$ 605,00",
        desconto: "Baixou 22%",
        preco: "R$ 471,90",
        parcelas: "ou em até 6x de R$ 156,50 sem juros ou",
        pix: true,
        freteGratis: true
      },
      {
        imagem: "/img/fone-de-ouvido-bluetooth-jbl-tune-500bt.png",
        patrocinado: false,
        nome: "Fone bluetooth 500bt JBL",
        avaliacao: 5,
        precoAntigo: "R$ 260,00",
        desconto: "Baixou 22%",
        preco: "R$ 202,80",
        parcelas: "ou em até 6x de R$ 156,50 sem juros ou",
        pix: true,
        freteGratis: true
      },
      {
        imagem: "/img/camera-sony-alpha-a7-iii.png",
        patrocinado: false,
        nome: "Câmera Sony Alpha A7",
        avaliacao: 5,
        precoAntigo: "R$ 12.100,00",
        desconto: "Baixou 22%",
        preco: "R$ 9.438,00",
        parcelas: "ou em até 6x de R$ 156,50 sem juros ou",
        pix: true,
        freteGratis: true
      },
      {
        imagem: "/img/caixa-de-som-jbl-flip-5.png",
        patrocinado: false,
        nome: "Caixa de som Flip-5 JBL",
        avaliacao: 5,
        precoAntigo: "R$ 722,70",
        desconto: "Baixou 22%",
        preco: "R$ 563,70",
        parcelas: "ou em até 6x de R$ 156,50 sem juros ou",
        pix: true,
        freteGratis: true
      }
  ];
  
  // Função para criar estrelas SVG conforme avaliação
  function criaEstrelas(qtd) {
    let stars = "";
    for(let i = 0; i < qtd; i++) {
      stars += `<svg class="estrela" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    }
    return stars;
  }
  
  // Seleciona container
  const container = document.getElementById("produtos");
  
  // Gera cards
  produtos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("produto-card");
  
    card.innerHTML = `
      <img class="produto-imagem" src="${prod.imagem}" alt="${prod.nome}" />
      ${prod.patrocinado ? `<div class="produto-patrocinado">Patrocinado</div>` : ""}
      <div class="produto-nome">${prod.nome}</div>
      <div class="produto-avaliacao">
        ${criaEstrelas(prod.avaliacao)}
        <span>(${prod.avaliacao})</span>
      </div>
      <div>
        <span class="produto-preco-antigo">${prod.precoAntigo}</span>
        <span class="produto-desconto">${prod.desconto}</span>
      </div>
      <div class="produto-preco">${prod.preco}</div>
      <div class="produto-preco-parcelado">${prod.parcelas}</div>
      <div class="produto-preco">${prod.pix ? "No Pix" : ""}</div>
      <div class="produto-tags">
        ${prod.pix ? `<div class="tag-pix">No Pix</div>` : ""}
        ${prod.freteGratis ? `<div class="tag-frete">Frete Grátis Brasil</div>` : ""}
      </div>
    `;
  
    container.appendChild(card);
  });
  
  
