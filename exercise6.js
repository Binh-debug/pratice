let array = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
let a = array.reduce((result, currentItem) => {
  result[currentItem] = result[currentItem] + 1 || 1;
  return result;
}, {});
console.log(a);
