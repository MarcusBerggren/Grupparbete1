
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

  tasks.forEach(item => {
    /* Skapar upp en tillfällig lista. Detta 
       Detta kan ersättas med den riktiga listan sedan */
    /* ---------------------------------------------------------- */
    const li = document.createElement("li");

    li.textContent = item.text;
    li.classList.add(item.completed ? "completed" : "not-completed");
    li.setAttribute("data-id", item.id);
    /* ---------------------------------------------------------- */

    /* ---------------------------------------------------------- */
    /* Skapar Klar-knapp på varje rad. */
    const completeButton = document.createElement("button");
    completeButton.textContent = "Klar";

    /* Här kommer Delete-knapp på varje rad. */


    /* Lägger till knapparna i listan */
    li.appendChild(completeButton);
    /* Deleteknappen här */


    /* Lägger till listan i HTML: en */
    document.querySelector("#taskList").appendChild(li);

    /* Visar uppgiften som klar i konsolen */
    console.log(item.id + " - " + item.text + " - " + item.completed);

    /* Lyssnare som känner av vilken knapp som tryckts på och skriver ut i 
       konsolen vilken uppgift som är klar. */

    completeButton.addEventListener("click", function () {

      /* Skriver ut vilket ID som är klart */
      console.log("Uppgiften med ID " + item.id + " är klar nu!");
      /* Ändrar completed till true för rätt ID*/
      item.completed = true;
      /* Skriver ut objektet från arrayen i konsolen */
      console.log(item.id + " - " + item.text + " - " + item.completed);
    });
    /* ---------------------------------------------------------- */
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