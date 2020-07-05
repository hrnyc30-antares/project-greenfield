

export const getAverage = (rate) => {
  const tuples = Object.entries(rate);
  let total = 0;
  let count = 0;

  for (let i = 0; i < tuples.length; i++) {
    let rating = tuples[i][0];
    let ratingNum = tuples[i][1];
    total += rating * ratingNum;
    count += ratingNum;
  }

  let result = total/count;
  return Math.floor(result * 10) / 10;
}