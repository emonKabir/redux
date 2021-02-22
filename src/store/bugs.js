import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

//actions
export const bugAdded = createAction("BUG_ADDED");
export const bugRemoved = createAction("BUG_REMOVED");
export const bugResolved = createAction("BUG_RESOLVED");

//reducer

let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolve: false,
    });
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolve = true;
  },
  [bugRemoved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs.splice(index, 1);
  },
});
