var tarefas = document.querySelector("#lista-tarefas");

tarefas.addEventListener("dblclick", function (event) {
    event.target.classList.add("fade-out")
    tarefas.classList.remove("tarefa-concluida")

    setTimeout(function () {
        event.target.remove();
    }, 500)

})