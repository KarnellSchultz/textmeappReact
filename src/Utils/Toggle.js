import { useState } from 'react';

export default function Toggle({children}) {
	const initialState = false
    const [isToggled, setIsToggled] = useState(initialState);
    
    const toggle = () => {
        setIsToggled(!isToggled)
    }

	return children({
        on: isToggled,
        toggle: toggle
    })
}
