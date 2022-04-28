const array = [1, 2, 3, 4, 5];
// -----------------------------------myMap ---------------------------------
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
};
// -----------------------------------myFilter ---------------------------------

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (!!callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};
// -----------------------------------myReducer ---------------------------------

Array.prototype.myReduce = function (callback, accumulator) {
  if (this.length < 1) {
    throw new Error("Array is Empty");
  }

  if (!accumulator) {
    if (typeof this[0] === "string") {
      accumulator = "";
    } else if (typeof this[0] === "number") {
      accumulator = 0;
    }
  }

  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
};

let output1 = array.myMap((val, index, array) => {
  console.log("val:", val, "index:", index, "array:", array);
  return val * 2;
});

let output2 = array.myFilter((val) => {
  return val > 2;
});

let output3 = array.myReduce((accumulator, val) => {
  return accumulator + val;
});
console.log(output1);
console.log(output2);
console.log(output3);
