const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  total_money: 0,
  total_amount: 0,
};
let a = order.cart.reduce(
  (accumulator, currentItem) => {
    accumulator["total_amount"] += currentItem.amount;
    accumulator["total_money"] += currentItem.price * currentItem.amount;

    return accumulator;
  },
  { total_money: 0, total_amount: 0 }
);
let update = { ...order, ...a };
console.log(update);
