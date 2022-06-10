import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../Store/todo/todo.action";

const TodoApp = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const {
    getTodos: gTodo,
    AddTodo: aTodo,
    data: todos,
  } = useSelector((state) => state.todo);

  const addNew = () => {
    let value = ref.current.value;
    dispatch(
      addTodo({
        value: value,
        isCompleted: false,
      })
    );
    ref.current.value = null;
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (todo) => {
    let value = ref.current.value;
    dispatch(updateTodo(todo, value));
    ref.current.value = null;
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (gTodo.loading) return <div>Loading...</div>;
  else if (gTodo.error) return <h>Something went Wrong...</h>;
  return (
    <div>
      <input type="text" ref={ref} placeholder="Enter Something..." />
      <div>
        <button onClick={addNew} disabled={aTodo}>
          AddTodo
        </button>
      </div>
      <br />
      {todos.map((todo) => (
        <div
          style={{
            border: "1px solid",
            lineHeight: "50px",
            width: "30%",
            margin: "auto",
            padding: "20px",
            marginBottom: "10px",
            borderRadius: "10px",
          }}
        >
          <div
            key={todo.id}
            style={
              todo.isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.value}
          </div>
          <div
            style={{
              // border: "1px solid",
              display: "flex",
              width: "fit-content",
              margin: "auto",
              gap: "30px",
            }}
            className="buttonBox"
          >
            <button onClick={() => dispatch(completeTodo(todo.id))}>
              {todo.isCompleted ? "Mark as Uncomplete" : "Mark as Completed"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              DeleteTodo
            </button>
            <button onClick={() => handleUpdateTodo(todo)}>UpdateTodo</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
