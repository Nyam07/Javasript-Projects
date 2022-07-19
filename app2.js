//Event Listeners
//Using addEventListeners
//element.addEventListner('click', function)
const button2 = document.querySelector('.btn-2');

function alertBtn(){
    alert('I also love Javascript');
};

button2.addEventListener('click', alertBtn);

//Mousover
const newBgColor = document.querySelector(".box-3");

function changeBgColor(){
    newBgColor.getElementsByClassName.backGroundColor='blue';
};

newBgColor.addEventListener('mouseover', changeBgColor);



//DISPLAY ELEMENTS USING BUTTON CLICKS
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove("reveal-btn");
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);


//EVENT DELEGATION
//It allows users to append a Single event listener to a parent element that adds it to all of its present AND future descendants that match a selector

//normal way is to manually do listen for individual elements
document.querySelector('#football').addEventListener('click', function(e){
    console.log('Football is clicked');
    const target = e.target;

    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})


//using event delegation
document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') +' is clicked');

    const target = e.target;

    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
})

//Create a new element and add it to the list. It inherits all the properties of the other list items
const sports = document.querySelector('#sports');
const newSport = document.createElement('li');
newSport.innerText='Rugby';
newSport.setAttribute('id', 'rugby');
sports.appendChild(newSport)

