////////////////////////////////////////////////////
/*************** RULE 1 ***************************/
/* Use Functions over loops whenever possible */

/** Scenario **/
// This beverage list is BROKEN

const people = [
    {
        name: 'Marisa',
        spirit_animal: 'koala',
        beverages: [
            'tea',
            'vodka', // <-- WTF is this>?!
        ],
    },
    {
        name: 'Jason',
        spirit_animal: 'bear',
        beverages: [
            'coffee',
        ],
    },
];

/** IMPERATIVE VS DECLARATIVE PROGRAMMING */

// IMPERATIVE PROGRAMMING
// Code that explicitly describes how to do something.
// I.E.
/*
 * "I'd like the pie heated and I don't want the ice cream on top, I want it on the side, 
 * and I'd like strawberry instead of vanilla if you have it. if not, then no ice cream,
 * just whipped cream -- but only if it's real; if it's out of the can then nothing."" 
*/

let fixed = [];
for (let person of people) {
    if (person.beverages) {
        for (let beverage in person.beverages) {
            if (person.beverages[beverage] === 'vodka') {
                person.beverages[beverage] = 'whiskey';
            }
        }
    }
    fixed.push(person);
}
// BEHOLD THE PYRAMID OF DOOOOOOMMMMMMMMM


// DECLARATIVE PROGRAMMING
// Code that describes what the result should be <-- USE THIS ONE STUPID 
// I.E.
/*
 * "Give me all the bacon and eggs you have."
*/

const fixBeverage = (str) => (
    str.replace('vodka', 'whiskey')
);

const helpIfConfused = (person) => ({
    ...person,
    beverages: person.beverages.map(fixBeverage)
});

const fixed = people.map(helpIfConfused);