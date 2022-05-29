import { legacy_createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";


// 보통버전
// const ADD = "ADD";
// const DELETE = "DELETE"

// const reducer = (state = [], action) => {
//     switch(action.type) {
//         case addToDo.type:
//             return [{text:action.payload, id:Date.now()}, ...state];
//         case deleteToDo.type:
//             return state.filter(todo => todo.id !== action.payload);
//         default:
//             return state;
//     }
// };

// const store = legacy_createStore(reducer);

// createReducer
// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({text:action.payload, id:Date.now()})
//     },
//     [deleteToDo]: (state, action) =>
//         state.filter(todo => todo.id !== action.payload)
// });

// const store = configureStore({reducer});

// createSlice
const todos = createSlice({
    name: "todosReducer",
    initialState: [],
    reducers: {
        addToDo: (state, action) => {
            state.push({text:action.payload, id:Date.now()})
        },
        deleteToDo: (state, action) => state.filter(todo => todo.id !== action.payload)
    }
});

const store = configureStore({reducer: todos.reducer});

export const { addToDo, deleteToDo} = todos.actions;

export default store;
