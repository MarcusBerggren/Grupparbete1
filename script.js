const tasks = [
    { id: 1, name: "Köpa mjölk", completed: false },
    { id: 2, name: "Gå ut med hunden", completed: false },
    { id: 3, name: "Plugga JavaScript", completed: true }
];

tasks.forEach(item => {
    /* Skapar upp en tillfällig lista. Detta 
       Detta kan ersättas med den riktiga listan sedan */
    /* ---------------------------------------------------------- */
    const li = document.createElement("li");

    li.textContent = item.name;
    li.classList.add(item.completed ? "completed" : "not-completed");
    li.setAttribute("data-id", item.id);
    /* ---------------------------------------------------------- */

    /* ---------------------------------------------------------- */
    /* Skapar en knapp där man kan markera uppgiften som klar på varje rad. */
    const button = document.createElement("button");
    button.textContent = "Klar";

    /* Lägger till knappen i listan */
    li.appendChild(button);

    /* Lägger till listan i HTML: en */
    document.querySelector("#taskList").appendChild(li);

    /* Visar uppgiften som klar i konsolen */
    console.log(item.id + " - " + item.name + " - " + item.completed);

    /* Lyssnare som känner av vilken knapp som tryckts på och skriver ut i 
       konsolen vilken uppgift som är klar. */
    button.addEventListener("click", function () {
        const taskID = parseInt(li.getAttribute("data-id"));

        /* Skriver ut vilket ID som är klart */
        console.log("Uppgiften med ID " + taskID + " är klar nu!");
        /* Ändrar completed till true för rätt ID*/
        item.completed = true;
        /* Skriver ut objektet från arrayen i konsolen */
        console.log(item.id + " - " + item.name + " - " + item.completed);
    });
    /* ---------------------------------------------------------- */
});






// 1. Hämta id från knappen

// 2. Gör om det till ett number

// 3. Hitta rätt objekt i arrayen

// 4. Ändra completed till true

