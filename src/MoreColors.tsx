import React from 'react';

type Props = {
	colorList: string[];
}

export default function MoreColors({ colorList }: Props) {

	const displayColorsList = ({colorList}:Props) => {
		return colorList.map((element, index) => {
			return <li key={index}>{element}</li>;
		});
    };
	return <ul>{displayColorsList({colorList})}</ul>;
}
