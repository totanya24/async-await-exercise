// import axios from "axios";

let myNumber = 5;
let URL = "http://numbersapi.com";

// 1.
async function part1() {
    let data = await $.getJSON(`${URL}/${myNumber}?json`);
    //console.log(data);
}
part1();

// 2.

//git remote set-url origin "https://github-username@github.com/github-username/github-repository-name.git"
//git remote set-url origin "https://totanya24@github.com/totanya24/async-await-exercise.git"

//https://github.com/totanya24/async-await-exercise.git

let myNumbers = [5, 9, 24 ];
async function two(){
    let data = await $.getJSON(`${URL}/${myNumbers}?json`);
    //console.log(data);
}

two();

async function three(){
    let facts = await Promise.all(
        Array.from({ length: 4}, () =>
            $.getJSON(`${URL}/${myNumber}?json`))
    );
    console.log('facts', facts)
    facts.forEach(data => {
        console.log(data, 'res')
        $('body').append(`<p>${data.text}</p>`);
    });


}

three();





