// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((e) => e.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let total = 0;
  moviesArray.forEach((e) => {
    if (e.director === "Steven Spielberg" && e.genre.includes("Drama")) {
      total++;
    }
  });
  return total;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length !== 0) {
    let avgScore = 0;
    moviesArray.forEach((e) => {
      e.score == null ? "" : (avgScore += e.score);
    });
    // return average score
    return Number((avgScore / moviesArray.length).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // if the array is empty, return 0
  if (moviesArray.length !== 0) {
    let avgScore = 0;
    let counterDrama = 0;
    moviesArray.forEach((e) => {
      if (e.genre.includes("Drama") && e.score !== null) {
        avgScore += e.score;
        counterDrama++;
      }
    });
    // if there is no drama movies, return 0
    // else, return the average score
    return counterDrama === 0
      ? 0
      : Number((avgScore / counterDrama).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedMoviesArr = moviesArray.map((e) => e);
  // if the array is empty, return 0
  if (moviesArray.length !== 0) {
    // we clone the array
    let resultArr = sortedMoviesArr.sort((a, b) => {
      // a is bigger then goes back
      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      // year is equal we compare title
      if (a.year == b.year) {
        // if a title is bigger, goes back
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
      }
      // a must be equal to b
      return 0;
    });
    // if there is no drama movies, return 0
    // else, return the average score
    console.log(resultArr);
    return resultArr;
  } else {
    return [];
  }
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let pushArr = [];
  // if the array is empty, return 0
  if (moviesArray.length !== 0) {
    // we create an array of only strings
    moviesArray.map((e) => pushArr.push(e.title));
    // order them
    pushArr.sort();
    // return only 20 items
    return pushArr.map((e) => e).slice(0, 20);
  } else {
    return [];
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let pushArr = moviesArray.map((e) => e);
  // if the array is empty, return 0
  if (pushArr.length !== 0) {
    // we get the duration, remove the chars "h" and "min", then we do an split, then do the math
    pushArr.forEach((el) => {
      let time = el.duration.replace("h", "").replace("min", "").split(" ");
      let minTime =
        time[1] !== undefined
          ? parseFloat(time[0]) * 60 + parseFloat(time[1])
          : parseFloat(time[0]) * 60;
      el.duration = parseFloat(minTime);
    });
    return pushArr;
  } else {
    return [];
  }
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // we create two variables that will container both best year and his avgscore
  let bestYear = 0,
    bestAvg = 0;
  // we check if the array is empty
  if (moviesArray.length !== 0) {
    // we iterate through all the array
    moviesArray.forEach((e) => {
      // we create a new arrays cotinaing only the movies with same year as the foreach
      let filterYear = moviesArray.filter((el) => el.year == e.year);
      // total score of that films
      let score = 0;
      // we do the sum
      filterYear.forEach((elm) => {
        score += elm.score;
      });
      // we calculate the avg score
      let avgScore = score / filterYear.length;
      // if the new avg is biger that our saved one, we replace it
      if (bestAvg < avgScore) {
        bestAvg = avgScore;
        bestYear = e.year;
      }
      // if the score is equal but the year is older, then we pick the older one
      else if (bestAvg == avgScore) {
        bestYear = bestYear > e.year ? e.year : bestYear;
      }
    });
    return `The best year was ${bestYear} with an average score of ${bestAvg}`;
  } else {
    return null;
  }
}
