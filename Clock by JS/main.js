
var hour = document.querySelector("#hours")
var minute = document.querySelector("#minutes")
var seconds = document.querySelector(".seconds")

window.addEventListener("load", sayac)

setInterval(sayac, 1000);


function sayac(){

var dateObject = new Date()
var dateHour= dateObject.getHours()
var dateMinute = dateObject.getMinutes()
var dateSecond= dateObject.getSeconds()


hour.textContent=dateHour

if(dateMinute<10){
    minute.textContent= "0" + dateMinute
}else{minute.textContent=dateMinute}

if(dateSecond<10){
    seconds.innerHTML= "0" + dateSecond
}else{
    seconds.innerHTML=dateSecond
}
}




