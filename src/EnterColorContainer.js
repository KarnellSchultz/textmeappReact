import React, {useState} from 'react'

export default function EnterColorContainer() {
    const initialState = ''
    const [enteredColor, setEnteredColor] = useState(initialState)

    function handleChange(value) {
        setEnteredColor(value)
    }

    return (
        <div>
            <form>
                <label htmlFor='colorInput'>
                    Enter a color here
                </label>
                <input value={enteredColor} name='colorInput' type='text' onChange={e => {
                    e.preventDefault();
                    handleChange(e.target.value);
                }}>
                </input>
                </form>   
        </div>
    )
}
