var USD_IN_UZS = 10600;
var EUR_IN_UZS = 11600;

var ticketInUsd = 400; //$
var yearProductsInUsd = 13000; //$
var contractInUsd = 2000; //$
var apartmentDepozitInUsd = 100; //$

var ticketInUzs = ticketInUsd * USD_IN_UZS;
var yearProductsInUzs = yearProductsInUsd * USD_IN_UZS; 
var contractInUzs = contractInUsd * USD_IN_UZS;
var apartmentDepozitInUzs = apartmentDepozitInUsd * USD_IN_UZS;

var totalMoney = Math.round(ticketInUzs + yearProductsInUzs + contractInUsd + apartmentDepozitInUzs); //all expanses

var elForm = document.querySelector('.form'); //selection of form from html to js

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault(); //l don't know what does it mean :(


  var elFormIputName = elForm.querySelector('.form__input-name').value.trim();   //selection of paragraph in form__input-name class from html to js
  var elFormInputMoney = elForm.querySelector('.form__input-money').value.trim();  //selection of paragraph in form__input-name class from html to js

if (elFormInputMoney >= totalMoney) //if  elFormInputMoney (user created money) is >=(bigger or equal) to totalMoney(all expanses)
{
  document.querySelector('body').style.backgroundColor = 'green'; 
  document.querySelector('.name').style.color = 'coral'
  document.querySelector('.money').style.color = 'coral'
  document.querySelector('.extra-money').style.color = 'coral'
  document.querySelector('.name').textContent = `Name: ${elFormIputName}`;
  document.querySelector('.money').textContent = `Money: ${elFormInputMoney}`;
  document.querySelector('.extra-money').textContent = `Extra money: ${elFormInputMoney - totalMoney}`;
  document.querySelector('.result').textContent = `We congratulate you, ${elFormIputName}`;
} else  //if  elFormInputMoney (user created money) is <(smaller) to totalMoney(all expanses) else(under function) work 
 {
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('.name').style.color = 'white'
  document.querySelector('.money').style.color = 'white'
  document.querySelector('.extra-money').style.color = 'white'
  document.querySelector('.name').textContent = `Name: ${elFormIputName}`;
  document.querySelector('.money').textContent = `Money: ${elFormInputMoney}`;
  document.querySelector('.extra-money').textContent = `Need: ${totalMoney - elFormInputMoney}`;
  document.querySelector('.result').textContent = `We also congratulate you, ${elFormIputName} do not be sad`;
}

});










