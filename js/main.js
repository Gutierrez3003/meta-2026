const tasks = [
    {
        id:1,
        tiutlo: "Definir metas 2026",
        status: "a fazer"
    },
    {
        id: 2,
        titulo: "Criar estrutura do projeto",
        status: "andamento"
    },
    {
        id: 3,
        titulo: "Iniciar repositório no GitHub",
        status: "concluido"
    }
];

function renderTasks() {
    const columns = document.querySelectorAll(".columns");

    columns.forEach(column => {
        column.querySelectorAll(".card").forEach(card=> card.remove());

        const status= column.dataset.status;

        tasks
            .filter(tasks => tasks.status === status)
            .forEach(task => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.dataset.taskId = task.id;
                card.innerHTML = '<p>$(task.titulo)</p>';
                column.appendChild(card);

            })
    })
}

document.addEventListener("DOMContentLoaded", renderTasks);