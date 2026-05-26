import { useTodo } from "../hooks/useTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, loading } = useTodo();
  return (
    <div className="todo-list">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : todos.length === 0 ? (
        <p>No todos found.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}