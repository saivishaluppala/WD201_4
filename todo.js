const listdo = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const mark = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");

  const due = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const duetoday = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const duelater = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const display = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    mark,
    due,
    duetoday,
    duelater,
    display,
  };
};

module.exports = listdo;

