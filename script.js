console.log("Hello from js");
const h =  document.getElementsByTagName('h1');
console.log(h);

const li =  document.getElementsByTagName('li');

for (const l of li) {
    console.log(l.innerText);    
}

document.getElementById('fruitTitle').style.color = "red";
const title = document.getElementById('fruitTitle');
title.innerText = "my Tour List" 
console.log(title.innerText);


const imp = document.getElementsByClassName('impPlace');
for (const i of imp) {
    console.log(i.innerHTML)
}

const q = document.querySelectorAll('.fruitsContainer li');
console.log(q)
for (const li of q) {
    console.log(li.innerText)
}

const q1 = document.querySelector('.fruitsContainer li');
console.log(q1)