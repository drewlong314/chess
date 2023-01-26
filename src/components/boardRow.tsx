import React from 'react';
import './boardRow.css';
import Square from './square';

interface BoardRowProps {
    startingColor: string;
    column: string;
    setClicked: any;
    clicked: string[];
    gameState?: any;
    setGameState?: any;
}


const BoardRow = ({ startingColor, column, gameState, setGameState, clicked, setClicked }: BoardRowProps) => {
    let currentColor = startingColor;

    const createRow = () => {
        const row = [];
        for (let i = 0; i < 8; i++) {
            row.push(<Square color={currentColor} location={column + (i + 1)} gameState={gameState} setGameState={setGameState} clicked={clicked} setClicked={setClicked} />)
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
