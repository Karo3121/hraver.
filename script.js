
let futureDate = new Date(2024,2,4)



let days = document.getElementById("dayValue")
let hour = document.getElementById("hourValue")
let min = document.getElementById("minValue")
let sec = document.getElementById("secValue")

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

let btnSend = document.getElementById("btn")

btnSend.addEventListener("click", ()=>{

    let radio1 = document.getElementById("radio1").checked
    let radio2 = document.getElementById("radio2").checked
    
    

    console.log( radio1);
    console.log(radio2);
    




})



setInterval(() => {
    let dateNew = new Date

    days.innerHTML = Math.floor((futureDate - dateNew) / (1000 * 60 * 60 * 24 ) )
    hour.innerHTML = Math.floor((futureDate - dateNew) % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60  ) )
    min.innerHTML = Math.floor((futureDate - dateNew) % (1000 * 60 * 60  ) / (1000 * 60 ) )
    sec.innerHTML = Math.floor((futureDate - dateNew) % (1000 * 60 ) / (1000))



},1000)














