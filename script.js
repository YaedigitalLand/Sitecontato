// Dados dos Serviços
const services = [
  {
    title: "Serviço 1",
    description: "Descreva em uma frase o que você entrega neste serviço.",
    details: "Aqui você pode adicionar mais detalhes sobre o Primeiro Serviço, explicando metodologias, prazos e entregáveis específicos."
  },
  {
    title: "Serviço 2",
    description: "Descreva em uma frase o que você entrega neste serviço.",
    details: "Aqui você pode adicionar mais detalhes sobre o Segundo Serviço, explicando metodologias, prazos e entregáveis específicos."
  },
  {
    title: "Serviço 3",
    description: "Descreva em uma frase o que você entrega neste serviço.",
    details: "Aqui você pode adicionar mais detalhes sobre o Terceiro Serviço, explicando metodologias, prazos e entregáveis específicos."
  }
];

// Dados das Postagens (cerca de 500 caracteres cada)
const posts = [
  {
    id: 1,
    title: "Postagem 1",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  },
  {
    id: 2,
    title: "Postagem 2",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  },
  {
    id: 3,
    title: "Postagem 3",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  },
  {
    id: 4,
    title: "Postagem 4",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  },
  {
    id: 5,
    title: "Postagem 5",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  },
  {
    id: 6,
    title: "Postagem 6",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  },
  {
    id: 7,
    title: "Postagem 7",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  },
  {
    id: 8,
    title: "Postagem 8",
    content: "Este é um texto de exemplo para a sua postagem. Substitua por aquilo que você quer contar: um bastidor de projeto, uma dica, um resultado de cliente ou uma novidade. O card foi feito para comportar cerca de quinhentos caracteres, o que dá espaço para explicar a ideia com calma, trazer contexto e terminar com um convite à ação. Ao clicar, o texto completo abre em uma janela para leitura sem pressa. Edite o título e o conteúdo no código, na lista chamada posts, e o carrossel se atualiza sozinho."
  }
];

// Inicialização dos eventos do site
document.addEventListener('DOMContentLoaded', () => {
  setupModal();
  setupCarouselScroll();
});

// Função para abrir o Modal com título e texto completo
function openModal(title, text) {
  let modal = document.getElementById('modal-container');
  
  // Se o modal não existir no HTML, cria dinamicamente
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'modal-container';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 20px;
    `;

    modal.innerHTML = `
      <div style="
        background: #181818;
        padding: 30px;
        border-radius: 8px;
        max-width: 600px;
        width: 100%;
        color: #fff;
        position: relative;
        box-shadow: 0 10px 25px rgba(0,0,0,0.7);
        border: 1px solid #333;
      ">
        <button id="close-modal" style="
          position: absolute;
          top: 15px;
          right: 15px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
        ">&times;</button>
        <h2 id="modal-title" style="margin-bottom: 15px; color: #e50914;"></h2>
        <p id="modal-body" style="line-height: 1.6; color: #ddd; max-height: 70vh; overflow-y: auto;"></p>
      </div>
    `;

    document.body.appendChild(modal);

    // Evento para fechar ao clicar no X ou fora do conteúdo
    modal.querySelector('#close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-body').innerText = text;
  modal.style.display = 'flex';
}

// Função para fechar o Modal
function closeModal() {
  const modal = document.getElementById('modal-container');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Associa os botões dos cards de serviços e postagens à modal
function setupModal() {
  // Botões de Serviços
  const serviceButtons = document.querySelectorAll('#servicos button');
  serviceButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const service = services[index];
      if (service) {
        openModal(service.title, service.details || service.description);
      }
    });
  });

  // Botões de Postagens
  const postButtons = document.querySelectorAll('#postagens button');
  postButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const post = posts[index];
      if (post) {
        openModal(post.title, post.content);
      }
    });
  });
}

// Adiciona suporte a rolagem horizontal suave com a roda do mouse no carrossel de postagens
function setupCarouselScroll() {
  const carousel = document.querySelector('#postagens > div');
  if (carousel) {
    carousel.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }
}
