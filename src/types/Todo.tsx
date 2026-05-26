export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const createTodo = (text: string): Todo => {
  return {
    id: Date.now(),
    text,
    completed: false,
  };
};