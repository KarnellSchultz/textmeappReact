import React, { useState, useEffect } from 'react';
import { CssColorNames } from './Extras/colorlist';
import { getRandomInt } from './Utils/RandomNumber';
import MoreColors from './MoreColors';

//   fiveColorArray()
type State = {
	colorList: string[];
	setColorList: string[];
	
}

export default function MoreColorsContainer() {
	const initalState: string[] = []
	const [colorList, setColorList] = useState(initalState);

	function buildColorsArray() {
		let colorsArr: string[] = [];
		for (let i = 0; i < 5; i++) {
			let num = getRandomInt(CssColorNames.length - 1);
			colorsArr.push(CssColorNames[num]);
		}
		return setColorList(colorsArr);
	}
	useEffect(() => {
		buildColorsArray();
	}, []);

	return (
		<div className='container-sm'>
			<button
				onClick={e => {
					e.preventDefault();
					buildColorsArray();
				}}
				className="btn btn-warning"
			>
				{' '}
				Mas colors{' '}
			</button>
			<MoreColors colorList={colorList} />
		</div>
	);
}
