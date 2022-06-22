import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ todos }) => {
	const id = useParams().id;
	const todo = todos.find((todo) => todo.id === parseInt(id));
	return (
		<div>
			<div>{todo?.text}</div>
			<div>{todo?.id}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { todos: state };
};

export default connect(mapStateToProps)(Detail);
