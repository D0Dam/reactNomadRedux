import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.getElementById("num");
const ADD = "ADD";
const MINUS = "MINUS";

const counterReducer = (count = 0, action) => {
	switch(action.type) {
		case "add":
			return count+1;
		case "minus":
			return count-1;
		default:
			return count;
	}
	}
};
let countStore = createStore(counterReducer);
countStore.subscribe(() => {
	num.innerText = countStore.getState();
});
const handleAdd = () => {
	countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
	countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
