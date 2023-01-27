import React from 'react';
import Pawn from './pawn';
import './square.css';

interface SquareProps {
    color: string;
    location: string;
    setClicked: any;
    clicked: string[];
    gameState?: any;
    setGameState?: any;
}

const Square = ({ color, location, gameState, setGameState, clicked, setClicked }: SquareProps) => {
    let selected = false;

    const handleClick = () => {
        if (gameState[location].piece) {
            if (gameState[location].piece.props.name === "pawn") {}
            console.log(gameState[location].piece.props.name)
        }
         setClicked([clicked[1], location])
    }
    
    if (gameState && gameState[location].clicked) color = "red"

    return (
        <div onClick={handleClick} className={`Square Square-` + color}>
            {gameState && gameState[location].piece}
        </div>
    );
}

export default Square;
