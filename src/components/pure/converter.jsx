import React, { useState } from 'react';

const options = [
    { label: "km - miles", value: 1 },
    { label: "miles - km", value: 2 },
    { label: "feet - m", value: 3 },
    { label: "m - Feet", value: 4 },
    { label: "cm - inches", value: 5 },
    { label: "inches - cm", value: 6 },
]


const Converter = () => {

    const [option, setOption] = useState(options[0]);

    const birthday = () => {
        if (Option == "km - milles") {

        }
    }

    return (
        <div className='container'>
            <p>convert</p>
            <div>
                <select onChange={birthday}>
                    <option value={options[0].value}>{options[0].label}</option>
                    <option value={options[1].value}>{options[1].label}</option>
                    <option value={options[2].value}>{options[2].label}</option>
                    <option value={options[3].value}>{options[3].label}</option>
                    <option value={options[4].value}>{options[4].label}</option>
                    <option value={options[5].value}>{options[5].label}</option>
                </select>
                <button><img src='../../../public/logo192.png' /></button>
                <input></input>
            </div>
            <div>
                <button></button>
                <p></p>
            </div>
        </div >
    );
}

export default Converter;
