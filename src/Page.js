import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import MoreColorsContainer from './MoreColorsContainer';
import CurrnetColorContainer from './CurrnetColorContainer';
// import EnterColorContainer from './EnterColorContainer';

export default function Page() {
	const [pageColor, setPageColor] = useState('');

	const getColors = () => {
		fetch('/startcolor')
			.then(response => {
				return response.json();
			})
			.then(myJson => {
				console.log(myJson);
				setPageColor(myJson);
			});
	};

	useEffect(() => {}, [pageColor]);
	return (
		<>
			<div className="container-fluid text-center ">
				<StepOne />
				<h3>Step 2</h3>
				<h3>Step 3</h3>
				<MoreColorsContainer />
				{/* <EnterColorContainer /> */}
				<CurrnetColorContainer />
				<button onClick={getColors}>press</button>
			</div>
		</>
	);
}
