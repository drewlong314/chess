import React from 'react';
import './square.css';

interface SquareProps {
    color: string;
}

const Square = ({ color }: SquareProps) => {
    return (
        <div className={`Square Square-` + color}></div>
    );
}

export default Square;
