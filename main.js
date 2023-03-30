/*
Scrivi un programma che stampi i numeri da 1 a 100 in console, 
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
*/

const row = document.querySelector('.row');
const card = document.getElementsByClassName('.card');
console.log(card);

const container = document.querySelector('.container');

/*CONTINUO CON IL CICLO*/

for(let i = 1; i <= 100; i++){

  const box = document.createElement('div');
  box.className = 'box';

  let output = i;


  
  if(!(i % 15)){
    output = 'FizzBuzz';
    box.classList.add('fizzbuzz');
  }else if(!(i % 3)){
    output = 'Fizz'
    box.classList.add('fizz');
  }else if(!(i % 5)){
    output = 'Buzz'
    box.classList.add('buzz');
  }
  box.append(output);
  container.append(box);
}