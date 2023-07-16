const { userList } = require("./main");

test("User list contains 'admin'", () => {
  expect(userList).toContain("admin");
});

test("First element is 'Nick'", () => {
  expect(userList[0]).toBe("Nick");
});

test("Last element is 'new_user_2'", () => {
  expect(userList[userList.length - 1]).toBe("new_user_2");
});

test("Array length is 5", () => {
  expect(userList.length).toBe(5);
});

test("3rd element is a string", () => {
  expect(typeof userList[2]).toBe("string");
});

test("8th element does not exist", () => {
  expect(userList[7]).toBeUndefined();
});
