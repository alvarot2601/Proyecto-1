import React, { useState } from 'react';

const Converter = () => {

    const [option, setOption] = useState("km - miles");
    const [num, setNum] = useState(0);

    const changeUnits = (e) => {
        setOption(e.target.value)
    }

    //Revierte los tipos de unidades a convertir
    const revertUnits = () => {
        switch (option) {
            case "km - miles":
                setOption("miles - km")
                break;
            case "miles - km":
                setOption("km - miles")
                break;
            case "feet - m":
                setOption("m - Feet")
                break;
            case "m - Feet":
                setOption("feet - m")
                break;
            case "cm - inches":
                setOption("inches - cm")
                break;
            case "inches - cm":
                setOption("cm - inches")
                break;
            default:
                break;
        }
    }

    //Calcula la conversion de longitud
    const calcUnits = (e) => {
        let number = e.target.value;
        let result;
        switch (option) {
            case "km - miles":
                result = Math.round((number / 1.609) * 100) / 100
                break;
            case "miles - km":
                result = Math.round((number * 1.609) * 100) / 100
                break;
            case "feet - m":
                result = Math.round((number / 3.281) * 100) / 100
                break;
            case "m - Feet":
                result = Math.round((number * 3.281) * 100) / 100
                break;
            case "cm - inches":
                result = Math.round((number / 2.54) * 100) / 100
                break;
            case "inches - cm":
                result = Math.round((number * 2.54) * 100) / 100
                break;
            default:
                break;
        }
        setNum(result);
    }

    return (
        <div className='container'>
            <p>convert</p>
            <div>
                <select value={option} onChange={changeUnits}>
                    <option>km - miles</option>
                    <option>miles - km</option>
                    <option>feet - m</option>
                    <option>m - Feet</option>
                    <option>cm - inches</option>
                    <option>inches - cm</option>
                </select>
                <button onClick={revertUnits}><img src='../../../public/logo192.png' /></button>
                <input onChange={calcUnits}></input>
            </div>
            <div>
                <button></button>
                <p>{num}</p>
            </div>
        </div >
    );
}

export default Converter;
