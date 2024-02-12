import Car from './object.js'
import Person from './object.js'

const btn = document.getElementById('btn');

const info = new Person(
    'David',
    19,
    'Nigerian',
    true
);
console.log(info)

btn.addEventListener('click', () =>{
    info.toggleisSingle(false);
    console.log('Updated : ', info)
})

const vehicle = new Car(
    'Toyota',
    'Camry',
    2019,
    'Black'
)

console.log(vehicle);