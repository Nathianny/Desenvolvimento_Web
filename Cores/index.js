var corpo = document.getElementById("corpo");

var cores = ["red", "blue", "yellow", "green", "white", "black"];

var i = 0;

setInterval(() => {
corpo.style.backgroundColor = cores
[i];
i++;
if(i == 5) i = 0;
}, 1000);