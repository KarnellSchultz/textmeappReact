import React from 'react';
import Toggle from './Utils/Toggle';

export default function StepOne() {
	return (
		<div className="container-sm bg-aqua ">
			<h3>Step 1</h3>
			<p> Text a (CSS) color to this number to change the page's color: </p>
			<Toggle>
				{({ on, toggle }) => (
					<>
						<button className=" btn btn-danger" onClick={toggle}>
							Click to View Phone Number 
						</button>
						{on && <button className='btn btn-light' >+14257287345</button>}
					</>
				)}
			</Toggle>
		</div>
	);
}
