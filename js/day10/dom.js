function addElement() {
    const newpara = document.createElement("p");
    newpara.textContent = "this is a new paragraph";
    document.getElementById("container").appendChild(newpara);
}

function removeElement() {
    const container = document.getElementById("container");
    const firstPara = document.getElementById("para1");


    if (firstPara) {
        container.removeChild(firstPara);
    } else {
        alert("No paragraph to remove");
    }
}




// const para = documen......
// if (para) {
//     para.remove();// directly removes the element 
// }

// const oldPara = document.getElementById("para1");
// const newPara = document.createElement("p");



// if (oldPara) {
//     container.replaceChild(newPara, oldPara);
// })