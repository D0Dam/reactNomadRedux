import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addTodo = (text) => {
	return {
		type: ADD,
		text,
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE,
		id,
	};
};

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [{ text: action.text, id: Date.now() }, ...state];
		case DELETE:
			const cleanState = state.filter((todo) => todo.id !== action.id);
			return cleanState;
		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;