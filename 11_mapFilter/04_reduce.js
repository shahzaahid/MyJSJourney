//reduce

const shoppingCart = [
  {
    itemName: "Js course",
    price: 299,
  },
  {
    itemName: "Python course",
    price: 3999,
  },
  {
    itemName: "Mobile Development",
    price: 4999,
  },
  {
    itemName: "Data Science",
    price: 5999,
  },
];
const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
