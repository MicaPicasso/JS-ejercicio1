const a= document.querySelector(".simple")
const button= document.getElementById("button")
const color= document.querySelector(".color")
const hex=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"]

a.addEventListener("click", function(e){
    e.preventDefault()
    a.className += " sub"
})

button.addEventListener("click", ()=>{
    let hexa="#";
    // porque 6 es la cantidad de numeros hexadecimales
    for(let i=0; i<6; i++){
        hexa += hex[getRandom()]
    }
    document.body.style.backgroundColor= hexa
    color.textContent= hexa
})

function getRandom(){
    return Math.floor(Math.random()* hex.length)
}