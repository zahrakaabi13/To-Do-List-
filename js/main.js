//addEventListener is an event target (type, listener, option)
//the target could be window/document/element

let submit = document.querySelector(".submit")
/*== clear the input while focusin on it
========================================================== */
let input = document.querySelector("input")
input.addEventListener("focus", ()=>{
    input.value = ""
})
/*==
========================================================== */
submit.addEventListener('click', ()=>{
    let input = document.querySelector(".input")
    if(input.value != "Enter your task" && input.value !== ""){
        let input = document.querySelector(".input")
        //console.log(input)
        addText(input)
        input.value = ""
        //window.print() => print it if u want to
    }
})
/*==showing the input 
=========================================================== */
function addText(x){
    // let output = document.querySelector(".output")
    let input = document.querySelector(".input").value
    let output = document.querySelector(".output")
    //create the ordered list 
    let ol = document.createElement("OL")
    ol.setAttribute("id","myOl")
    output.appendChild(ol)
    //create the <li>
    let li = document.createElement("LI")
    let valueInput = document.createTextNode(input)
    li.appendChild(valueInput)
    document.getElementById("myOl").appendChild(li)
    /*=======================
    let output = document.querySelector(".output")
    output.innerHTML += `
       <ol>
          <li>${x}</li>
       </ol>
       <button></button>
    `
    ======================== */
}