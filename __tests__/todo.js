const listdo = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, mark, add, due, duetoday, duelater } = listdo();

describe("Testing doto list", () => {
  beforeAll(() => {
    add({
      title: "Dancing",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add new todolist ", () => {
    let length = all.length;

    add({
      title: "Complete the assignments",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Mark todo as completed", () => {
    expect(all[0].completed).toBe(false);
    mark(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieve all todos which are due", () => {
    let todolist = due();

    expect(
      todolist.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieve all todos which are due for today", () => {
    let todolist = duetoday();

    expect(
      todolist.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieve all todos which due for later", () => {
    let todolist = duelater();

    expect(
      todolist.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
