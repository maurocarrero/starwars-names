var uniqueRandomArray = require('unique-random-array');
var starwarsCharacters = require('./starwars-characters.json');

module.exports = {
	all: starwarsCharacters,
	random: uniqueRandomArray(starwarsCharacters)
};

