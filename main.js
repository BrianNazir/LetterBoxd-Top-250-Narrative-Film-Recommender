//RNG
const genRandNum = num => {
    return Math.floor(Math.random() * num);
}

//List of 250 movies
const movies = [
    'Harakiri',
    '12 Angry Men',
    'Come and See',
    'The Human Condition III: A Soldier\'s Prayer',
    'Seven Samurai',
    'High and Low',
    'The Godfather Part II',
    'The Shawshank Redemption',
    'City of God',
    'Yi Yi',
    'Parasite',
    'The Human Condition I: No Greater Love',
    'Schindler\'s List',
    'The Godfather',
    'The Lord of the Rings: The Return of the King',
    'Ikiru',
    'Ran',
    'La Haine',
    'The Good, the Bad, and the Ugly',
    'A Brighter Summer Day',
    'Le Trou',
    'Cinema Paradiso',
    'The Dark Knight',
    'Autumn Sonata',
    'Grave of the Fireflies',
    'Neon Genesis Evangelion: The End of Evangelion',
    'Goodfellas',
    'Woman in the Dunes',
    'There Will Be Blood',
    'The Human Condition: Road to Eternity',
    'Paths to Glory',
    'Spirited Away',
    'Andrei Rublev',
    'The Apartment',
    'Apocalypse Now',
    'The Cranes Are Flying',
    'Tokyo Story',
    'Sunset Boulevard',
    'Incendies',
    'The Passion of Joan of Arc',
    'Portrait of a Lady on Fire',
    'Whiplash',
    'Fanny & Alexander',
    'Mishima: A Life in Four Chapters',
    'Interstellar',
    'The Battle of Algiers',
    'Close-Up',
    'I Am Cuba',
    'The Ascent',
    'Spider-Man: Across the Spider-Verse'
]


// List of all the directors of the 250 movies
const directors = [
    'Masaki Kobayashi',
    'Sidney Lumet',
    'Elem Klimov',
    'Akira Kurosawa',
    'Francis Ford Coppola',
    'Frank Darabont',
    'Fernando Meirelles',
    'Edward Yang',
    'Bong Joon Ho',
    'Steven Spielberg',
    'Peter Jackson',
    'Mathieu Kassovitz',
    'Sergio Leone',
    'Jacques Becker',
    'Giussupe Tornatore',
    'Christopher Nolan',
    'Ingmar Bergman',
    'Isao Takahata',
    'Hideaki Anno',
    'Martin Scorsese',
    'Hiroshi Teshigahara',
    'Paul Thomas Anderson',
    'Stanley Kubrick',
    'Hayao Miyazaki',
    'Andrei Tarkovsky',
    'Billy Wilder',
    'Mikhail Kalatozov',
    'Yasujiro Ozu',
    'Denis Villeneuve',
    'Carl Theodore Dreyer',
    'Celine Sciamma',
    'Damien Chazelle',
    'Paul Schrader',
    'Gillo Pontecorvo',
    'Abbas Kiarostami',
    'Larisa Shepitko',
    'Kemp Powers',
    'Justin K. Thompson',
    'Joaquim Dos Santos'
]

// List of all the genres among the 250 movies
const genre = [
    'action',
    'history',
    'drama',
    'war',
    'mystery',
    'thriller',
    'crime',
    'comedy',
    'fantasy',
    'adventure',
    'western',
    'romance',
    'animation',
    'sci-fi',
    'family'
]

//Letterboxd Top 250 Narrative Films list random options
let options = {
    movies: movies,
    directors: directors,
    genre: genre
}

//Array for final output
let recommendations = [];

for (let option in options) {
    let itemNum = genRandNum(options[option].length);
    let rank = itemNum + 1;

    switch(option) {
        case 'movies':
            recommendations.push(`My recommendation is the #${rank} movie on the list: ${options[option][itemNum]}.`);
            break;
        case 'directors':
            recommendations.push(`Not a fan of that idea? How about a movie by the amazing ${options[option][itemNum]}.`);
            break;
        case 'genre':
            recommendations.push(`Alright alright, too cool for that too? How about you just watch a ${options[option][itemNum]} flick.`);
            break;
        default:
            recommendations.push('Missing info.');
            break;
    }
}

const displayMessage = arr => {
    console.log('You want a movie pick from Letterboxd\'s \'Top 250 Narrative Films\' list?');
    const output = recommendations.join('\n');
    console.log(output);
}

displayMessage(recommendations);