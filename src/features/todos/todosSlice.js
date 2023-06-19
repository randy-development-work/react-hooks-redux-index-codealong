import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    entities: [], // array of todos
  },
  reducers: {
    todoAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push({
        id: uuid(), // use the uuid function to generate a unique id
        text: action.payload,
      });
    },
    todoRemoved(state, action) {
      const index = state.entities.findIndex((todo) => todo.id === action.payload);
      state.entities.splice(index, 1);
    },
  },
});

export const { todoAdded, todoRemoved } = todosSlice.actions;

export default todosSlice.reducer;
