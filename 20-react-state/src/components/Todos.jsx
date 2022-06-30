import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState(["minum kopi"]);
  const [form, setForm] = useState("");

  const handleChange = (event) => {
    setForm(event.target.value);
    console.log(form);
  };

  const handleClick = () => {
    setTodos((item) => [...item, form]);

    setForm("");
  };

  const handleDelete = (arrayItem) => {
    console.log(arrayItem);
    let deletedTodos = todos.filter((item) => {
      return item !== arrayItem;
    });
    console.log(deletedTodos);
    setTodos(deletedTodos);
  };

  const handleEdit = (arrayItem) => {
    console.log(arrayItem);

    const updateTodos = prompt("");

    console.log(updateTodos);

    let updatedTodos = todos.map((item) =>
      item === arrayItem ? updateTodos : item
    );

    console.log(updatedTodos);

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todos component</h1>
      <input type="text" value={form} onChange={handleChange} />
      <button onClick={handleClick}>submit</button>

      <div>
        {todos.map((item, key) => (
          <div key={key} style={{ display: "flex" }}>
            <p>{item}</p>
            <button onClick={() => handleDelete(item)}>Delete</button>
            <button onClick={() => handleEdit(item)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
