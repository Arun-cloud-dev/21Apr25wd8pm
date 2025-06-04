function inlineClick() {
    alert("Inline click event triggered!");
}



document.getElementById("eventButton").addEventListener("click", () => {
    alert("Event listener click event triggered!");
});

const mouseBox = document.getElementById("mouseBox");
 
mouseBox.addEventListener("mouseover", () => {
    mouseBox.style.backgroundColor = "orange";
})
mouseBox.addEventListener("mouseout", () => {
    mouseBox.style.backgroundColor = "lightgreen";
});

mouseBox.addEventListener("dblclick", () => {
    alert("Mouse double-clicked!");
 })



//keyboard events

const keyInput = document.getElementById("keyInput");


keyInput.addEventListener("keydown", (e) => {
    console.log("Key down:", e.key);
});

keyInput.addEventListener("keyup", (e) => {
    console.log("Key up:", e.key);
});