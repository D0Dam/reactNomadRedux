import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const todoReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, { text: action.text, id: Date.now() }];
		case DELETE_TODO:
			const cleanState = state.filter((todo) => todo.id !== action.id);
			return cleanState;
		default:
			return state;
	}
};
const todoStore = createStore(todoReducer);
const paintToDos = () => {
	const todos = todoStore.getState();
	ul.innerHTML = "";
	todos.forEach((todo) => {
		const li = document.createElement("li");
		const btn = document.createElement("button");
		li.innerText = todo.text;
		console.log(li);
		btn.innerText = "delete";
		btn.addEventListener("click", deleteToDo);
		li.id = todo.id;
		ul.appendChild(li);
		li.appendChild(btn);
	});
};

const deleteToDo = (e) => {
	const id = parseInt(e.target.parentNode.id);
	todoStore.dispatch({ type: DELETE_TODO, id });
	paintToDos();
};

const onSubmit = (e) => {
	e.preventDefault();
	const toDo = input.value;
	input.value = "";
	todoStore.dispatch({ type: ADD_TODO, text: toDo });
	paintToDos();
};

form.addEventListener("submit", onSubmit);
