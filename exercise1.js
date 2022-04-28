let array1 = [1, 2, 3, 4, 5, 6, 9];
let array2 = [3, 4, 8, 9, 12, 1, 2, 3, 3, 3, 3];

function findSameElement(array1, array2) {
  let arrayResult = [];
  for (let i of array1) {
    for (let j of array2) {
      if (i === j) {
        if (!arrayResult.includes(i)) {
          arrayResult.push(i);
        }
      }
    }
  }
  if (arrayResult.length == 0) {
    console.log("khong co phan tu trung  nhau trong 2 mang");
  } else {
    return arrayResult;
  }
}
let result = findSameElement(array1, array2);
console.log(result);
