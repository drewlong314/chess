import React from 'react';
import './boardRow.css';
import Square from './square';

interface BoardRowProps {
    startingColor: string;
}


const BoardRow = ({ startingColor }: BoardRowProps) => {
    let currentColor = startingColor;

    const createRow = () => {
        const row = [];
        for (let i = 0; i < 8; i++) {
            row.push(<Square color={currentColor} />)
            if (currentColor === "white") currentColor = "black"
            else currentColor = "white"
        }
        return row
    }

    return (
        <div className="BoardRow">
            {createRow()}
        </div>
    );
}

export default BoardRow;
