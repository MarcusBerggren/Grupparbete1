
/* Hårdkodad array med uppgifter för att testa Klarfunktionen */
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
    console.log(item.id + " - " + item.name + " - " + item.completed);

    /* Lyssnare som känner av vilken knapp som tryckts på och skriver ut i 
       konsolen vilken uppgift som är klar. */

    completeButton.addEventListener("click", function () {

        /* Skriver ut vilket ID som är klart */
        console.log("Uppgiften med ID " + item.id + " är klar nu!");
        /* Ändrar completed till true för rätt ID*/
        item.completed = true;
        /* Skriver ut objektet från arrayen i konsolen */
        console.log(item.id + " - " + item.name + " - " + item.completed);
    });
    /* ---------------------------------------------------------- */
});






