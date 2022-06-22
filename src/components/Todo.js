import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";
const Todo = ({ text, onButtonClick, id }) => {
	return (
		<li>
			<Link to={`/${id}`}>{text}</Link>
			<button onClick={onButtonClick}>del</button>
		</li>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	console.log("dispatch에 전달되는 id : " + ownProps.id);
	return {
		onButtonClick: () => dispatch(remove(ownProps.id)),
	};
};

export default connect(null, mapDispatchToProps)(Todo);
