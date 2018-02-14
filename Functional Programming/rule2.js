////////////////////////////////////////////////////
/*************** RULE 2 ***************************/
/* THE SAME INPUT ALWAYS RETURNS THE SAME RESULT */


// Scenario: Tell People about your favorite thing

// An Impure Solution

let  myFavoriteThing = 'whiskey';

function describeMyFavoriteThing() {
    return `I prefer to drink quality ${myFavoriteThing}.`;
}

/** NEW FEATURE REQUEST **/
// Specify that it is 'Aged' Whiskey

function clarifyFavorityThing() {
    myFavoriteThing = 'aged ' + myFavoriteThing; // myFavoriteThing === 'aged whiskey'
}

/** SOMETHING BAD HAPPENED AND IT NEEDS TO BE FAMILY FRIENDLY **/
function makeFamilyFriendly() {
    myFavoriteThing = 'scented bubble bath';
}

// I.E.

let myFavoriteThing = 'whiskey';

clarifyFavoriteThing();
describeMyFavoriteThing();
//=>"I prefer to drink quality aged whiskey." (looks good)
//=> ...probably a bunch of additional code
makeFamilyFriendly();
// ...probably more additional code...
describeMyFavoriteThing();
//=>"I prefer to drink quality scented bubble bath." (!)


// A Pure Approach

function describeMyFavoriteThing(beverage) {
    return `I prefer to drink quality ${beverage}.`;
}

function clarifyFavoriteThing(favoriteThing) {
    return `aged ${favoriteThing}`;
}

function makeFamilyFriendly() {
    return 'scented bubble bath';
}

// I.E.

const myFavoriteThing = 'whiskey';
const clarified = clarifyFavoriteThing(myFavoriteThing);
const newFavorite = makeFamilyFriendly();

describeMyFavoriteThing(myFavoriteThing);
//=>"I prefer to drink quality whiskey"
describeMyFavoriteThing(clarified);
//=>"I prefer to drink quality aged whiskey"
describeMyFavoriteThing(newFavorite);
//=>"I prefer to drink quality scented bubble bath"


/** WE CAN REPLACE ANY PURE FUNCTION WITH ITS RETURN VALUE & GET THE SAME RESULT **/

const chz = `I love ${clarifyFavoriteThing('cheddar')}`;

// ...is the same as... 

const chz = 'I love aged cheddar.';

// TESTING HAS NEVER BEEN EASIER
expect(clarifyFavoriteThing('cheddar'))
    .toEqual('aged cheddar');

/** THIS ENABLED A "MAGICAL" FUNCTION TECHNIQUE: COMPOSITION!! **/

function describeMyFavoriteThing(beverage) {
    return `I prefer to drink quality ${beverage}.`;
}
function clarifyFavoriteThing(favoriteThing) {
    return `aged ${favoriteThing}.`;
}
const showClarifiedFavorite = R.compose(
    describeMyFavoriteThing,
    clarifyFavoriteThing
);
const result = showClarifiedFavorite('whiskey');