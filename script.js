let minArray = ["start","Äpple", "Banan", "Apelsin"];
console.log(minArray);

function remove_marked_object(index, count) {
    minArray.splice(index, 1);
    console.log(minArray);
}
