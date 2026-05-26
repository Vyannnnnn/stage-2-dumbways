import { useState, type SubmitEventHandler } from "react";
import { useTodo } from "../hooks/useTodo";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { createTodo, loading } = useTodo();

  

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  if (text.trim() === "") return;
  createTodo(text);
  setText("");
};   

  return (
    <div className="todo-form">
      <h2 className="text-2xl font-bold mb-4">Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new todo..."
          disabled={loading}
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 cursor-pointer ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}