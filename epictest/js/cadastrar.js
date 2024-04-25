document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (e) => {
        e.preventDefault()

        const form = document.querySelector("form")

        //Objeto tarefa
        const tarefa = {
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            pontos: form.pontos.value
        }

            salvar(tarefa)
        

        
    })
    function salvar(tarefa){
        // Salvando com chave e valor
        const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "index.html"
    }
    


