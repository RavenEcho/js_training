const { filterFoodPrice, food } = require("./food");

test("Filtering food array by price range", () => {
  const min = 12;
  const max = 40;
  const filteredFood = filterFoodPrice(food, min, max);

  expect(filteredFood.length).toBe(3);
  expect(filteredFood).toEqual(
    expect.arrayContaining([{ kind: "pepper", price: 27 }])
  );
  expect(filteredFood).toEqual(
    expect.arrayContaining([food[2], food[3], food[4]])
  );
  expect(filteredFood[0].price).toBeGreaterThan(min);
  expect(filteredFood[2].price).toBeLessThan(max);
  expect(filteredFood).not.toEqual(
    expect.arrayContaining([{ kind: "lemon", price: 50 }])
  );
});
