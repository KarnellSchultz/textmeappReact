import React, { useState } from 'react';

export default function StepOne() {
	const [on, setOn] = useState(false);
	const toggleOn = (on: boolean) => {
		return setOn(!on);
	};
	return (
		<div className="container-sm bg-aqua ">
			<h3>Step 1</h3>
			<p> Text a (CSS) color to this number to change the page's color: </p>
			<button className=" btn btn-danger" onClick={() => toggleOn(on)}>
				Click to View Phone Number
			</button>
			{on && <button className="btn btn-light">+14257287345</button>}
		</div>
	);
}
