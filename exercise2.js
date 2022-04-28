let array = [1, 7, 9, 2, 5, 3, 8];
let arraySort = array.sort((a, b) => {
  return a - b;
});
let result = arraySort[arraySort.length - 1] + arraySort[arraySort.length - 2];
console.log(result);
