import React from "react";
import { Todo } from "../model";
import "./styles.css";
import TodoCard from "./TodoCard";
import { Droppable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./droppable";

interface Props {
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  completedTodos,
  setCompletedTodos,
  setTodos,
  todos,
}) => {
  {
    console.log(todos, "TODO");
  }
  return (
    <div className="container">
      <StrictModeDroppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active tasks</span>
            {todos?.map((todo, index) => (
              <TodoCard
                index={index}
                key={todo.id}
                setTodos={setTodos}
                todo={todo}
                todos={todos}
              />
            ))}
            {/* this keeps the parent div the same size while you drag */}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
      <StrictModeDroppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos__remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed tasks</span>
            {completedTodos.map((todo, index) => (
              <TodoCard
                index={index}
                key={todo.id}
                setTodos={setCompletedTodos}
                todo={todo}
                todos={completedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </div>
  );
};

export default TodoList;
