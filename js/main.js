const button= document.getElementById("button");
const description= document.getElementById("description")
const color= document.querySelector(".color")
const a= document.querySelector(".simple")


const colores=[
   "blue",
   "yellow",
   "red",
   "skyblue",
   "grey",
   "green",
   "orange",

]


// ver esto creo que va en el otro
a.addEventListener("click", function(e){
    e.preventDefault()
    a.className += " sub"
})

button.addEventListener("click", function(){
    const randomNumber= getRandom();
    const mayusColors= (colores.join(" ")).toUpperCase().split(" ")
    document.body.style.backgroundColor= colores[randomNumber]
    color.textContent= mayusColors[randomNumber]
})

function getRandom (){
    // se lo multiplica por la longitud del array para que el n° aleatorio se de entre esos numeros
    // si usamos FLOOR y redondeamos para abajo voy a obtener las posiciones (numeros) entre 0 y la logitud del array
    return Math.floor(Math.random()*colores.length)
}

