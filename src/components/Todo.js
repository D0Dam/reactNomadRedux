import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../store";
const Todo = ({ text, onButtonClick }) => {
	return (
		<li>
			{text}
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
