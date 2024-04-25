const tarefas = JSON.parse(localStorage.getItem("tarefas"))

tarefas.forEach( tarefa => card(tarefa) )

function card(tarefa){

    //template literals
    const content = 
    `
    <div class="nes-container is-dark with-title is-centered">
        <p class="title">${tarefa.titulo}</p>
        <p>${tarefa.descricao}</p>
        <a href="#" class="nes-badge is-icon">
            <span class="is-warning"><i class="nes-icon coin is-small"></i></span>
            <span class="is-primary">${tarefa.pontos}</span>
        </a>
        <i class="nes-icon is-large heart"></i>
        <progress class="nes-progress is-pattern" value="50" max="100"></progress>
        <a class="nes-btn" href="#">-</a>
        <a class="nes-btn" href="#">Apagar</a>
        <a class="nes-btn" href="#">+</a>
    </div>

`
    const card = document.createElement("div")
    card.innerHTML = content

    document
        .querySelector("#lista-de-tarefas")
        .appendChild(card)
}