import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../store";
const Todo = ({ text, onButtonClick, id }) => {
	return (
		<li>
			<Link to={`/${id}`}>{text}</Link>
			<button onClick={onButtonClick}>del</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onButtonClick: () => dispatch(deleteTodo(parseInt(ownProps.id))),
	};
};

export default connect(null, mapDispatchToProps)(Todo);
