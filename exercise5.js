const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
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
let result = findSameElement(arr1, arr2);
console.log(result);
