import {
  ADD_TODOS_ERROR,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO,
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  UPDATE_TODO,
} from "../todo/todo.actiontypes";
import axios from "axios";

export const getTodos = () => (dispatch) => {
  dispatch({ type: GET_TODOS_LOADING });
  return axios
    .get(" http://localhost:8080/todos")
    .then((res) => {
      dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_TODOS_ERROR });
    });
};

export const addTodo = (payload) => (dispatch) => {
  dispatch({ type: ADD_TODOS_LOADING });
  axios
    .post(" http://localhost:8080/todos", payload)
    .then((res) => {
      dispatch({ type: ADD_TODOS_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ADD_TODOS_ERROR });
    });
};

export const deleteTodo = (id) => (dispatch) => {
  axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
    dispatch({ type: DELETE_TODO, payload: id });
  });
};

export const updateTodo = (todo, value) => (dispatch) => {
  let id = todo.id;
  let UpdatedTodo = { ...todo, value: value };
  axios.patch(`http://localhost:8080/todos/${id}`, UpdatedTodo).then((res) => {
    dispatch({ type: UPDATE_TODO, payload: { UpdatedTodo, id, value } });
  });
};
// Todo App
// export const AddTodo = (payload) => ({ type: ADD_TODO, payload });
export const completeTodo = (id) => ({ type: COMPLETE_TODO, payload: id });
// export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });
// export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
