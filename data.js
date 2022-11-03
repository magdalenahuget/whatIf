// WRITE YOUR CODE BELOW THIS LINE

// Array of movies

let favMovies = [
	{
		title: "Luca"
		, year: 2021
		, rating: 7.4
		, description: "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human."
		, directors: "Enrico Casarosa"
		, writers: ["Enrico Casarosa", "Jesse Andrews", "Simon Stephenson"]
		, stars: ["Jacob Tremblay", "Jack Dylan Grazer", "Emma Berman"]
		, genres: ["Animation", "Adventure", "ComedyFamily", "Fantasy"]
	},
	{
		title: "Zootopia"
		, year: 2016
		, rating: 8
		, description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
		, directors: ["Byron Howard", "Rich MooreJared Bush"]
		, writers: ["Byron Howard", "Rich Moore", "Jared Bush"]
		, stars: ["Ginnifer Goodwin", "Jason Bateman"]
		, genres: ["Animation", "Adventure", "Comedy", "Crime", "Family", "Mystery"]
	},
	{
		title: "Vaiana"
		, year: 2016
		, rating: 7.6
		, description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
		, directors: ["Ron Clements", "John Musker", "Don Hall"]
		, writers: ["Ron Clements", "John Musker", "Don Hall"]
		, stars: ["Auli'i Cravalho", "Dwayne Johnson"]
		, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
	},

	{
		title: "Frozen"
		, year: 2013
		, rating: 7.4
		, description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
		, directors: ["Chris Buck", "Jennifer Lee"]
		, writers: ["Jennifer Lee", "Chris Buck"]
		, stars: ["Kristen Bell", "Indina Menzel"]
		, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Musical"]
	},
]

// The for of loop

for (let item of favMovies) {
	console.log(item.title)
}

// The for loop

for (let index = 0; index > favMovies.length; index++) {
	console.log(favMovies[i].title)
}

// Average rate
// for..of

let averageRate = 0;

for (let item of favMovies) {
	console.log(item.rating);
	averageRate = averageRate + item.rating;
}
console.log(averageRate)
averageRate = averageRate / favMovies.length

console.log("Average rate is: " + averageRate)

// for i

averageRate = 0

for (let index = 0; index < favMovies.length; index++) {
	console.log(favMovies[index].rating)
	averageRate += favMovies[index].rating
}

averageRate = averageRate / favMovies.length

console.log("Average rate is: " + averageRate)

// Newest movie

let newestMovie = favMovies[0]
console.log(newestMovie)

for (let i = 0; i < favMovies.length; i++) {
	if (newestMovie.year < favMovies[i].year) {
		newestMovie = favMovies[i]
		console.log("Compared film is newest then other.")
	}
	else if (newestMovie.year === favMovies[i].year) {
		console.log("Compared film is the same age.")
	}
	else {
		console.log("Compared film is older.")
	}
}
console.log(newestMovie)

// Combined loops

let starsByMovies = ""

for (let i = 0; i < favMovies.length; i++) {
	starsByMovies += favMovies[i].title + "--->" 

	for ( let j = 0; j < favMovies[i].stars.length; j++) {
		starsByMovies += favMovies[i].stars[j] + " "

	} 
	starsByMovies += "\n"
}
console.log(starsByMovies)


// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "averageRate", content: averageRate, type: "number"},
		{name: "newestMovie", content: newestMovie, type: "object"},
		{name: "starsByMovies", content: starsByMovies, type: "string"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
