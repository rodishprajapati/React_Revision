import React, { useState, useEffect } from "react";
import { Button, Input, List } from "antd";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex mb-4">
        <Input
          className="flex-1 mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo"
        />
        <Button
          type="primary"
          onClick={handleAddTodo}
          className="flex-shrink-0"
        >
          +
        </Button>
      </div>
      <List
        bordered
        dataSource={todos}
        renderItem={(item, index) => <List.Item actions={[]}>{item}</List.Item>}
      />
    </div>
  );
};

export default TodoApp;
