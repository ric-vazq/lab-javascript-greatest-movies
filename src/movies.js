const movieList = [
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
      },
      {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        score: 9.2
      },
      {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        score: 9
      },
      {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History']
      }
];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(movie => movie.director);
    return directorsArray;
}
console.log(getAllDirectors(movieList));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0; 
    }
    else {
        const spielbergMoviesArray = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
        return spielbergMoviesArray.length;
    }
}

console.log(howManyMovies(movieList));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
 
 function scoresAverage(moviesArray) {
     if (moviesArray.length === 0) {
         return 0; 
     }
     const scoresTotal = moviesArray.reduce((accumulator, movie) => {
         if (Object.hasOwn(movie, 'score')) {
             return accumulator + movie.score;
         }
         else {
             return accumulator
         }
     }, 0);
     const scoresAvg = scoresTotal/moviesArray.length;
     return parseFloat((scoresAvg).toFixed(2)); 
 }

console.log(scoresAverage(movieList));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (dramaMoviesArray.length === 0) {
        return 0; 
    }
    averageDramaScore = scoresAverage(dramaMoviesArray);
    return averageDramaScore;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArraySortedChrono = moviesArray.toSorted((a, b) => {
        if (a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year) {
            return 1; 
        }
        else {
            if (a.title < b.title) {
                return -1; 
            }
            else {
                return 1; 
            }
        }
    }, )
    return moviesArraySortedChrono; 
}
console.log (orderByYear(movieList))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArraySortedAlphabet = moviesArray.toSorted((a, b) => {
        if (a.title < b.title) {
            return -1; 
        }
        else if (a.title > b.title) {
            return 1; 
        }
        else {
            return 0;
        }
    }, )
    let movieTitleAlphabetArray = []; 
    for (i = 0; i < 20; i++) {
       if (moviesArraySortedAlphabet[i]) {
        movieTitleAlphabetArray.push(moviesArraySortedAlphabet[i].title);
       }
       else {
        break;
        }
    }
    return movieTitleAlphabetArray; 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
