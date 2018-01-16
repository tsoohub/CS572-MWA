const item = {
  "name" : "Biscuits",
  "type" : "Regular",
  "category" : "food",
  "price" : 2.0,
};

const applyCoupon = name => discount => item => ({price: (item.price - item.price * discount ) });

applyCoupon("food")(0.1)(item).price === 1.8
