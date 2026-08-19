/*let minArray = ["Päron","Äpple", "Banan", "Apelsin"];
console.log(minArray);

function remove_marked_object(index, count) {
    minArray.splice(index, 1);
    console.log(minArray);
}*/

let tasks = [
    {
        id: 1,
        name: "Köpa mjölk",
        completed: false
    },
    {
        id: 2,
        name: "Gå ut med hunden",
        completed: false
    }
];

function renderList() {
    const listElement = document.getElementById("testlista");
    

    listElement.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `${task.name} (ID: ${task.id})`;
        listElement.appendChild(li);
    });
}

function remove_marked_object(targetId) {
    tasks = tasks.filter(task => task.id !== targetId);
    renderList();
}

renderList();
