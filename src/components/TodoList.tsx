import React from "react";
import { Todo } from "../model";
import "./styles.css";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ setTodos, todos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          setTodos={setTodos}
          todo={todo}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default TodoList;
