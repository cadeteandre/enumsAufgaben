// ============================
//         Level-1_1
// ============================
console.log('%c ---------- Level-1_1 ----------', 'background: black; color: gold;');

import { Weekday, Month } from "./days.months";

console.log(Weekday);
console.log(Month);

// ============================
//         Level-1_2
// ============================
console.log('%c ---------- Level-1_2 ----------', 'background: black; color: gold;');

import { PizzaSize, PizzaIngredientes } from "./pizza";

const pizza1 = {
    name: 'Salameese',
    size: PizzaSize.Medium,
    ingredientes: [PizzaIngredientes.Cheese, PizzaIngredientes.Salami]
}
const pizza2 = {
    name: 'Choconana',
    size: PizzaSize.Small,
    ingredientes: [PizzaIngredientes.Chocolate, PizzaIngredientes.Banana]
}
const pizza3 = {
    name: 'Chicken',
    size: PizzaSize.Familie,
    ingredientes: [PizzaIngredientes.Cheese, PizzaIngredientes.Chicken, PizzaIngredientes.Onion]
}
const pizza4 = {
    name: 'Salami',
    size: PizzaSize.Large,
    ingredientes: [PizzaIngredientes.Salami, PizzaIngredientes.Onion]
}
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);

// ============================
//         Level-2_1
// ============================
console.log('%c ---------- Level-2_1 ----------', 'background: black; color: gold;');

enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

console.log(HtmlError);

console.log(HtmlError[200]);
console.log(HtmlError.OK);

const showHtmlError = () => {
    const randomNum: number = Math.round(Math.random() * 5);
    switch(true) {
        case (randomNum === 0):
        case (randomNum === 1):
        case (randomNum === 2):
            console.log(`Fehler: ${HtmlError[200]} | Wert: ${HtmlError.OK}`);
            break;
        case (randomNum === 3):
            console.log(`Fehler: ${HtmlError[300]} | Wert: ${HtmlError.Redirect}`);
            break;
        case (randomNum === 4):
            console.log(`Fehler: ${HtmlError[400]} | Wert: ${HtmlError.BadRequest}`);
            break;
        case (randomNum === 5):
            console.log(`Fehler: ${HtmlError[500]} | Wert: ${HtmlError.InternalServerError}`);
    }
}
showHtmlError();

// ============================
//         Level-2_2
// ============================
console.log('%c ---------- Level-2_2 ----------', 'background: black; color: gold;');

// const gelb = document.querySelector('#gelb') as HTMLElement;
// const orange = document.querySelector('#orange') as HTMLElement;
// const pink = document.querySelector('#pink') as HTMLElement;
// const blau = document.querySelector('#blau') as HTMLElement;
// const lila = document.querySelector('#lila') as HTMLElement;
// const grau = document.querySelector('#grau') as HTMLElement;
const showResults = document.querySelector('#showResults') as HTMLElement;

enum ClothingColor {
    Gelb = '#ffff00',
    Orange = '#ffa500',
    Pink = '#ffc0cb',
    Blau = '#0000ff',
    Lila = '#800080',
    Grau = '#808080',
}

const allColors: string[] = [ClothingColor.Gelb, ClothingColor.Orange, ClothingColor.Pink, ClothingColor.Blau, ClothingColor.Lila, ClothingColor.Grau];
console.log(allColors);

allColors.forEach((elt) => showResults.innerHTML += `<button style="background-color: ${elt}"></button>`);