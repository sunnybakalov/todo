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
    // <div className="todos">
    //   {todos.map((todo) => (
    //     <TodoCard
    //       key={todo.id}
    //       setTodos={setTodos}
    //       todo={todo}
    //       todos={todos}
    //     />
    //   ))}
    // </div>
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active tasks</span>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
          />
        ))}
      </div>
      <div className="todos__remove">
        <span className="todos__heading">Completed tasks</span>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
