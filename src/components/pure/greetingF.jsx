import React, { useState } from 'react';
import PropTypes from "prop-types";

const Greetingf = (props) => {

    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <h2>Tienes: {age}</h2>
                <div>
                    <button onClick={birthday}>Cumpleaños</button>
                </div>
            </div>
        </div>
    );
}

Greetingf.propTypes = {
    name: PropTypes.string
}

export default Greetingf;
