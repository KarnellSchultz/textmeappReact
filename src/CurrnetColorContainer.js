import React, {useState, useEffect} from 'react'
import CurrentColor from './CurrentColor';

export default function CurrnetColorContainer({pageColor}) {
    const initialState = "";
    const [recentColors, setRecentColors] = useState(initialState);


    return (
        <div className='container-sm' >
            <CurrentColor pageColor={pageColor} />
        </div>
    )
}


//  /startcolor