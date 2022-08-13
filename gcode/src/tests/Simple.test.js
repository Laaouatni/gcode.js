import { describe } from "vitest";

const user = {
  name: "anas",
  age: 18
}

test("is anas 18", () => {
  expect(user.name).toBe("anas");
  expect(user.age).toBe(18);
})
