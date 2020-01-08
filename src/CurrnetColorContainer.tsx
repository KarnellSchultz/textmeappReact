import React, {useState, useEffect} from 'react'
import CurrentColor from './CurrentColor';

type Props = {
    pageColor: string;
}

export default function CurrnetColorContainer({pageColor = 'cornsilk'}: Props) {
    const initialState = "";
    const [recentColors, setRecentColors] = useState(initialState);

    return (
        <div className='container-sm' >
            <CurrentColor pageColor={pageColor} />
        </div>
    )
}


//  /startcolor