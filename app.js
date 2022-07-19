// DOM Manipulation
//CHANGE STYLING
const title = document.querySelector('#main-heading');
title.style.color='red';


const listItems = document.querySelectorAll(".list-item");
for (i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "2rem";
}

//CREATING ELEMENTS
const ul = document.querySelector('ul');
const li = document.createElement('li');
//adding elements
 ul.append(li)
li.innerText='X-Men'


//modify the text
const firstListItem = document.querySelector('.list-item');
//acess text elements
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);



//MODIFYING ATTRIBUTES & CLASSES
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');
console.log(title.getAttribute('id'));

//add elements into a class
li.classList.add('list-item')
//remove elements from a class
li.classList.remove("list-item");
console.log(li.classList.contains('list-item'));

//REMOVE ELEMENTS
li.remove();


//TRAVERSE THE DOM
//PARENT NODE TRAVERSAL
let ul2 = document.querySelector('ul');
console.log(ul2.parentNode.parentNode);
console.log(ul2.parentElement);

const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);


console.log(ul2.childNodes);
console.log(ul2.firstChild);
console.log(ul2.lastChild);

ul2.childNodes[1].style.backgroundColor = 'blue';

console.log(ul2.children);
console.log(ul2.firstElementChild);
console.log(ul2.lastElementChild);

//sibling node traversal

let ul3 = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes)

console.log(ul3.previousElementSibling);
console.log(ul3.nextElementSibling);