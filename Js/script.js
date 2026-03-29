
// Scroll suave ao carregar com #id na URL
window.addEventListener("load", () => { //espera o carregamento completo da página
    const hash = window.location.hash; //pega o "id" da URL (ex: #racoes)

    if (hash) {
        const elemento = document.querySelector(hash); //procura o elemento com o id correspondente

        if (elemento) {
            setTimeout(() => {
                elemento.scrollIntoView({ //cria a animação de scroll suave
                    behavior: "smooth"
                });
            }, 100);
        }
    }
});