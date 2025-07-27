import type { Todo } from "@/types/todo";

export const sortTodos = (todos: Todo[]): Todo[] => {
  return todos.reduce((acc: Todo[], curr: Todo) => {
    if (curr.completed) {
      acc.push(curr);
    } else {
      acc.unshift(curr);
    }
    return acc;
  }, []);
};
