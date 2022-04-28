const arr = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];
let a = arr.reduce((result, currentItem) => {
  if (!result[currentItem.make]) {
    result[currentItem.make] = [{ ...currentItem }];
  } else {
    result[currentItem.make].push(currentItem);
  }
  return result;
}, {});
console.log(a);
