// 1. Hämta sparade tasks från localStorage ELLER starta med en tom array []
let tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];

// Hämta HTML-element
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 2. Funktion för att spara tasks till localStorage
function saveToLocalStorage() {
  // localStorage kan bara spara text, så vi omvandlar arrayen med JSON.stringify
  localStorage.setItem('savedTasks', JSON.stringify(tasks));
  console.log("Sparade tasks till localStorage:", tasks);
}

// Funktion för att rita ut listan i HTML
function renderTasks() {
  console.log("renderTasks() körs. Antal uppgifter att rita ut:", tasks.length);
  taskList.innerHTML = ''; 

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.dataset.id = task.id; 

    if (task.completed) {
      li.classList.add('completed');
    }

    taskList.appendChild(li);
  });
}

// Funktion för att lägga till en ny uppgift
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Skriv in en text för uppgiften!');
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(newTask);

  // SPARA OCH RITA OM
  saveToLocalStorage(); // <--- Spara till localStorage varje gång en task läggs till
  taskInput.value = '';
  renderTasks();
}

// Event listener för knappen
addTaskBtn.addEventListener('click', addTask);

// 3. Rita ut eventuella sparade uppgifter direkt när sidan laddas
renderTasks();