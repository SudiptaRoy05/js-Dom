const one = document.getElementById('secOne');
// console.log(one.childNodes[5].childNodes[3].nextSibling);
console.log(one.childNodes[5].childNodes[3].previousSibling);

const oneUl = document.querySelector('#secOne ul');
console.log(oneUl)
// const li = document.createElement('div')
const li = document.createElement('li')
li.innerText = "item 6";
console.log(li)
console.log(oneUl.appendChild(li))
const li1 = document.createElement('li')
li1.innerText = "item 7";
console.log(li1)

console.log(oneUl.appendChild(li1))