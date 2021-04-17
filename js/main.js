let submit = document.querySelector(".submit")
//addEventListener est de l'event target (type, listener, option)
//the target could be window/document/element

submit.addEventListener('click', ()=>{
    let input = document.querySelector("input").value
    if(input){
        //console.log(input)
        addText(input)
        //window.print() => print it if u want to
    }
})
//showing the input 
function addText(x){
    // let output = document.querySelector(".output")
    let input = document.querySelector("input").value
   
    if(input){
    //create the list
    let ol = document.createElement("OL")
    ol.setAttribute("id","myOl")
    document.body.appendChild(ol)

    //create the <li>
    let li = document.createElement("LI")
    let valueInput = document.createTextNode(input)
    li.appendChild(valueInput)
    document.getElementById("myOl").appendChild(li)
   }
}
