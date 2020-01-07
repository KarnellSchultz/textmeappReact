import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import MoreColorsContainer from './MoreColorsContainer';
import CurrnetColorContainer from './CurrnetColorContainer';
// import EnterColorContainer from './EnterColorContainer';

export default function Page() {
	const [pageColor, setPageColor] = useState('BlanchedAlmond');

	// const getColors = () => {
	// 	fetch('/startcolor')
	// 		.then(response => {
	// 			return response.json();
	// 		})
	// 		.then(myJson => {
	// 			console.log(myJson);
	// 			setPageColor(myJson);
	// 		});
	// };

    // useEffect(() => {}, [pageColor]);
    
    // setPageColor('BlanchedAlmond')

    const pageElement = document.getElementById('body');

    pageElement.style.background = pageColor;

	return (
		<>
			<div className="container-fluid text-center ">
				<StepOne />
				<h3>Step 2</h3>
				<h3>Step 3</h3>
				<MoreColorsContainer />
				{/* <EnterColorContainer /> */}
				<CurrnetColorContainer pageColor={pageColor}  />
				{/* <button onClick={getColors}>press</button> */}
			</div>
		</>
	);
}
