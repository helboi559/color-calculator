//input: prompt on question
//output: if combine: prompt colors(individually) and return new color /if deconstruct:ask for single color and log res

const prompt = require('prompt-sync')();
const response = prompt('Combine colors or deconstruct them?: ')

//cond if combine
if (response === 'combine') { 
    const base_color_1 = prompt("what is your first base color?(Red,blue,yellow): ")
    const base_color_2 =prompt("what is your second base color?(cannot match first color)(Red,blue,yellow): ")
    if (base_color_1 === 'red' && base_color_2 === 'blue'|| base_color_1 === 'blue' && base_color_2 === 'red') {
        console.log('purple')
    } else if (base_color_1 === 'red' && base_color_2 === 'yellow'|| base_color_1 === 'yellow' && base_color_2 === 'red') {
        console.log('orange')
    } else if (base_color_1 === 'yellow' && base_color_2 === 'blue'|| base_color_1 === 'blue' && base_color_2 === 'yellow') {
        console.log('green')
    } else {
        console.log('error')
    }
} else if (response === 'deconstruct') {
    //you can contain prompts in if/else statements
    const comb_color=prompt("what combined color would you like to deconstruct?(purple,orange,green): ")
    if (comb_color === 'purple') {
        console.log('red and blue')
    } else if (comb-color === 'orange') {
        console.log('red and yellow')
    } else if (comb-color === 'green') {
        console.log('blue and yellow')
    } else {
        console.log('error')
    }
} 


//STRETCH GOALS
// const prompt = require('prompt-sync')();
// const response = prompt('select your color(s): ')

// const colors = 'red blue yellow purple green orange'
// //const combined = 'purple,green,orange'

// if(colors.includes('red') && colors.includes('blue')) {
//   console.log('purple')
// } else if (colors.includes('red') && colors.includes('yellow')) {
//   console.log('orange')
// } else if(colors.includes('yellow') && colors.includes('blue')) {
//   console.log('green')
// } else if(colors.includes('purple')) {
//   console.log('red and blue')
// } else if(colors.includes('green')) {
//   console.log('blue and yellow')
// } else if(colors.includes('orange')) {
//   console.log('red and yellow')
// } else {
//   console.log("who knows")
// }