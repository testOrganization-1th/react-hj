export const fetchTodos = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data.slice(0, 20));
};