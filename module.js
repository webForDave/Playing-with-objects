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