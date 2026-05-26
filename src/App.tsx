import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./contexts/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col items-center  min-h-screen pt-12 bg-gray-100 gap-y-7 ">
        <h1 className="text-3xl font-bold ">Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
