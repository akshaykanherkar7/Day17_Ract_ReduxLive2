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
} from "./todo.actiontypes";

const initialState = {
  addTodo: {
    loading: false,
    error: false,
  },
  getTodos: {
    loading: false,
    error: false,
  },
  data: [],
};

export const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING: {
      return {
        ...state,
        getTodos: {
          loading: true,
          error: false,
        },
      };
    }

    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        getTodos: {
          loading: false,
          error: false,
        },
        data: payload,
      };
    }

    case GET_TODOS_ERROR: {
      return {
        ...state,
        getTodos: {
          loading: false,
          error: true,
        },
      };
    }

    case ADD_TODOS_LOADING: {
      return {
        ...state,
        addTodo: {
          loading: true,
          error: false,
        },
      };
    }

    case ADD_TODOS_SUCCESS: {
      let temp = [...state.data, payload];
      return {
        ...state,
        addTodo: {
          loading: false,
          error: false,
        },
        data: temp,
        // data: [...state.data, payload]
      };
    }

    case ADD_TODOS_ERROR: {
      return {
        ...state,
        addTodos: {
          loading: false,
          error: true,
        },
      };
    }

    // case ADD_TODO: {
    //   return {
    //     ...state,
    //     todos: [...state.todos, payload],
    //   };
    // }

    case COMPLETE_TODO: {
      let newTodos = state.data.map((todo) => {
        if (todo.id === payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return { ...state, data: newTodos };
    }

    case UPDATE_TODO: {
      let id = payload.id;
      state.data.forEach((x, i) => {
        if (x.id === id) {
          // console.log(x, payload.value);
          state.data[i].value = payload.value;
          state.data[i].isCompleted = false;
          return { ...state };
        }
      });
      return { ...state };
    }

    case DELETE_TODO: {
      // return { ...state.data.filter((todo) => todo.id !== payload) };
      let deletedTodo = state.data.filter((todo) => todo.id !== payload);
      console.log("deletedTodo:", deletedTodo);
      return {
        ...state,
        data: [...deletedTodo],
      };
    }

    default: {
      return state;
    }
  }
};
