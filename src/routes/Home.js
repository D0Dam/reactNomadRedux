import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { add } from "../store";
const Home = ({ todos, dpAddTodo }) => {
	const [todo, setTodo] = useState("");
	const onChange = (e) => {
		setTodo(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		dpAddTodo(todo);
		setTodo("");
	};
	return (
		<div>
			<h1>To Do</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={todo} onChange={onChange}></input>
				<button>Add</button>
			</form>
			<ul>
				{todos.map((todo) => (
					<Todo {...todo} key={todo.id} id={todo.id} />
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		dpAddTodo: (text) => dispatch(add(text)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
