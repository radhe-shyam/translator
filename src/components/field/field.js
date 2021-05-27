
import React from 'react';
import './field.css';


const Field = ({ label, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                className="input"
                type="text"
                onChange={e => onChange(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default Field;