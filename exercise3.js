let array = [1, 7, 9, 2, 5, 3, 8];
let sum = 10;
let result = [];
for (let i of array) {
  for (let j of array) {
    if (i + j === sum) {
      result.push([i, j]);
    }
  }
}
if (result.length <= 0) {
  console.log("khong tim thay cap so nao ");
}
console.log(result);
