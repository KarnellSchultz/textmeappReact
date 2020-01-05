import React from 'react';

export default function MoreColors({ colorList }) {

	const displayColorsList = colorList => {
		return colorList.map((element, index) => {
			return <li key={index}>{element}</li>;
		});
    };
    
	return <ul>{displayColorsList(colorList)}</ul>;
}
