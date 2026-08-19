// Arrayen som kommer att hålla alla uppgifter
let tasks = [];

// Hämta HTML-element
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

console.log("Skriptet har laddats. Tom 'tasks'-array initierad:", tasks);

// Funktion för att rita ut listan i HTML
function renderTasks() {
  console.log("renderTasks() körs. Antal uppgifter att rita ut:", tasks.length);
  taskList.innerHTML = ''; // Rensa listan innan vi ritar om

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.dataset.id = task.id; // Sparar ID på elementet för framtida funktioner

    if (task.completed) {
      li.classList.add('completed');
    }

    taskList.appendChild(li);
  });
}

// Funktion för att lägga till en ny uppgift i arrayen
function addTask() {
  const taskText = taskInput.value.trim();

  console.log("addTask() anropades. Inskriven text:", taskText);

  // Avbryt om fältet är tomt
  if (taskText === '') {
    console.warn("Avbröt: Inputfältet var tomt.");
    alert('Skriv in en text för uppgiften!');
    return;
  }

  // Skapa nytt objekt
  const newTask = {
    id: Date.now(),      // Genererar ett unikt ID baserat på tidsstämpel
    text: taskText,
    completed: false     // Standardstatus när uppgiften skapas
  };

  console.log("Nytt objekt skapat:", newTask);

  // Lägg till i arrayen 'tasks'
  tasks.push(newTask);

  console.log("Uppdaterad 'tasks'-array:", tasks);

  // Rensa inputfältet och uppdatera listan på skärmen
  taskInput.value = '';
  renderTasks();
}

// Event listener för knappen
addTaskBtn.addEventListener('click', addTask);