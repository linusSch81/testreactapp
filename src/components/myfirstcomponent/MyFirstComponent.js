import React from 'react';
import './MyFirstComponent.css';
export const MyFirstComponent = (props) => {
	return(
		<>
		<h1 className="title">
			{props.firstName} {props.lastName}
		</h1>
		
		</>
	)
}