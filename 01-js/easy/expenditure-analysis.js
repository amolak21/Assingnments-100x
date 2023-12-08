/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const result = [];

  transactions.forEach((tran) => {
    const category = tran.category;
    const price = tran.price;

    const existingCategory = result.find((item) => item.category === category);

    if (existingCategory) {
      existingCategory.totalSpent += price;
    } else {
      result.push({
        category,
        totalSpent: price,
      });
    }
  });
  return result;
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: "Food",
    itemName: "Sushi",
  },
];

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
