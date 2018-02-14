////////////////////////////////////////////////////
/*************** RULE 3 ***************************/
/* Each Function does One Thing */

// SCENARIO: FILTER BY GENRE & SORT BY ARTIST //

const albums = [
    {
        name: 'Middle Cyclone',
        artist: 'Neko Case',
        genre: 'indie',
    },
    {
        name: 'Highly Refined Pirates',
        artist: 'Minus The Bear',
        genre: 'rock',
    },
    {
        name: 'Rabbit Fur Coat',
        artist: 'Jenny Lewis',
        genre: 'hip-hop',
    },
];


// AN ALL-IN-ONE SOLUTION

function getOnlyIndie(albums) {
    let filtered = [];
    for (let album of albums) {
        if (album.genre === 'indie') {
            filtered.push(album);
        }
    }
    filtered.sort((album1, album2) => {
        if (album1.artist === album2.artist) return 0;
        return album1.artist > album2.artist ? 1 : -1;
    });
    return filtered;
}

// ONE FUNCTION PER STEP

const byArtistAsc = (album1, album2) => { // Asc (Ascending)
    if (album1.artist === album2.artist) {
        return 0;
    }

    return album1.artist > album2.artist ? 1 : -1;
};

const getOnlyIndie = album => album.genre === 'indie';

albums.filter(getOnlyIndie).sort(byArtistAsc);

// BUT WAIT THERES MORE

// LOOK AT HOW RE-USABLE THIS IS 


// R.curry() == Allows functions to be called in stages 
// named after Hascal Curry. 
const filterByGenre = R.curry((genre, album) => {
    return album.genre === genre;
});

// Create similar functions without duplicate code

const onlyHipHop = filterByGenre('hip-hop');
const onlyIndie = filterByGenre('indie');
const onlyRock = filterByGenre('rock');

const hipHop = albums.filter(onlyHipHop);

// more R.curry() stuff

function addNumbers(num1, num2) {
    return num1 + num2;
}

const curriedAdd = R.curry(addNumbers);
const add4 = curriedAdd(4);

add4(2); //=> 6
add4(7); //=> 11







