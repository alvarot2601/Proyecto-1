import React, { useState } from 'react';
import "./styles/converter.css"

const units = ["km - miles", "miles - km", "feet - m", "m - Feet", "cm - inches", "inches - cm"]
const unit = ["km", "miles", "feet", "m", "cm", "inches"]


const Converter = () => {
    //Declaracion de variables de estado
    const [option, setOption] = useState(units[0]);
    const [num, setNum] = useState(0);
    const [result, setResult] = useState(0);

    const [unit1, setUnit1] = useState(unit[0])
    const [unit2, setUnit2] = useState(unit[1])

    const changeUnits = (e) => {
        setOption(e.target.value)

        switch (e.target.value) {
            case units[0]:
                setUnit1(unit[0])
                setUnit2(unit[1])
                break;
            case units[1]:
                setUnit1(unit[1])
                setUnit2(unit[0])
                break;
            case units[2]:
                setUnit1(unit[2])
                setUnit2(unit[3])
                break;
            case units[3]:
                setUnit1(unit[3])
                setUnit2(unit[2])
                break;
            case units[4]:
                setUnit1(unit[4])
                setUnit2(unit[5])
                break;
            case units[5]:
                setUnit1(unit[5])
                setUnit2(unit[4])
                break;
            default:
                break;
        }
    }

    //Revierte los tipos de unidades a convertir
    const revertUnits = () => {
        switch (option) {
            case units[0]:
                setOption(units[1])
                setUnit1(unit[1])
                setUnit2(unit[0])
                break;
            case units[1]:
                setOption(units[0])
                setUnit1(unit[0])
                setUnit2(unit[1])
                break;
            case units[2]:
                setOption(units[3])
                setUnit1(unit[3])
                setUnit2(unit[2])
                break;
            case units[3]:
                setOption(units[2])
                setUnit1(unit[2])
                setUnit2(unit[3])
                break;
            case units[4]:
                setOption(units[5])
                setUnit1(unit[5])
                setUnit2(unit[4])
                break;
            case units[5]:
                setOption(units[4])
                setUnit1(unit[4])
                setUnit2(unit[5])
                break;
            default:
                break;
        }

        setNum(result)
        setResult(num)

    }

    //Calcula la conversion de longitud
    const calcUnits = (e) => {
        let number = e.target.value
        let result

        switch (option) {
            case units[0]:
                result = Math.round((number / 1.609) * 100) / 100
                break;
            case units[1]:
                result = Math.round((number * 1.609) * 100) / 100
                break;
            case units[2]:
                result = Math.round((number / 3.281) * 100) / 100
                break;
            case units[3]:
                result = Math.round((number * 3.281) * 100) / 100
                break;
            case units[4]:
                result = Math.round((number / 2.54) * 100) / 100
                break;
            case units[5]:
                result = Math.round((number * 2.54) * 100) / 100
                break;
            default:
                break;
        }
        setResult(result)
        setNum(number)
    }

    const favourite = () => {
        alert("En desarrollo");
    }

    return (
        <div className='container'>
            <p className='title'>convert</p>
            <div className='top'>
                <div className='left'>
                    <select className='options' value={option} onChange={changeUnits}>
                        <option>{units[0]}</option>
                        <option>{units[1]}</option>
                        <option>{units[2]}</option>
                        <option>{units[3]}</option>
                        <option>{units[4]}</option>
                        <option>{units[5]}</option>
                    </select>
                    <button onClick={revertUnits}></button>
                </div>
                <div className='right'>
                    <input type="double" onChange={calcUnits} value={num}></input>
                    <p>{unit1}</p>
                </div>
            </div>
            <div className='bottom'>
                <button onClick={favourite}></button>
                <div className='result'>
                    <p>{result}</p>
                    <p>{unit2}</p>
                </div>
            </div>
        </div>
    );
}

export default Converter;
