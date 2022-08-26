import React from "react";

function Message(props) {
	return (
		<div id="msg" className={`msg ${props.variant}`}>
			{props.message}
		</div>
	);
}

export default Message;
