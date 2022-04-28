function deepCopy(input) {
  if (!input) {
    console.log("input invalid");
  }
  let objectCopy = Array.isArray(input) ? [] : {};
  let value;
  for (let key in input) {
    value = input[key];
    objectCopy[key] = typeof value === "object" ? deepCopy(value) : value;
  }
  return objectCopy;
}
let student = {
  name: "binh",
  age: 22,
  gender: "male",
  vehicle: ["bike", "motorBike"],
};
let car = [
  {
    name: "Mercedes ",
    model: "s450",
  },
  {
    name: "BMW",
    modal: "2022",
  },
];

let objectClone = deepCopy(car);
console.log(objectClone);
