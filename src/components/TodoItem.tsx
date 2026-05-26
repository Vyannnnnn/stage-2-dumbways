import type { Todo } from "../types/Todo";
import { useTodo } from "../hooks/useTodo";
import { useState } from "react";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { updateTodo, deleteTodo, toggleComplete, loading } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-x-2">
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          disabled={loading}
        />
        {isEditing ? (
          <>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={loading}
              className="border border-gray-300 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-green-500 cursor-pointer ml-3 hover:bg-green-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => {
                handleUpdate();
              }}
              disabled={loading}
            >
              Save
            </button>
            <button
              className="bg-gray-500 cursor-pointer hover:bg-gray-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => setIsEditing(false)}
              disabled={loading}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span className={`ml-2  w-50 ${todo.completed ? "line-through" : ""}`}>
              {todo.text}
            </span>
            <button
              onClick={() => setIsEditing(true)}
              disabled={loading}
              className="bg-blue-500 ml-8 cursor-pointer hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
          </>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          disabled={loading}
          className="bg-red-500 cursor-pointer hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
