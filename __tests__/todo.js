/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();
// eslint-disable-next-line no-undef
describe("Todo Test suite", () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  // eslint-disable-next-line no-undef
  test("should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    // eslint-disable-next-line no-undef
    expect(all.length).toBe(todoItemCount + 1);
  });
  // eslint-disable-next-line no-undef
  test("should mark a todo as completed", () => {
    // eslint-disable-next-line no-undef
    expect(all[0].completed).toBe(false);
    markAsComplete(0);

    expect(all[0].completed).toBe(true);
  });
});
