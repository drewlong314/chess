import React, { useEffect, useState } from 'react';
import './board.css';
import BoardRow from './boardRow';
import Pawn from './pawn';

const Board = () => {
    // Define the object instead of using any type
    const startingBoard: any = {
        "a1": { clicked: false, piece: <div>Orange</div> },
        "a2": { clicked: false, piece: <Pawn color="white" /> },
        "a3": "",
        "a4": "",
        "a5": "",
        "a6": "",
        "a7": "",
        "a8": "",
        "b1": "",
        "b2": "",
        "b3": "",
        "b4": "",
        "b5": "",
        "b6": "",
        "b7": "",
        "b8": "",
    }
    const [gameState, setGameState] = useState(startingBoard)
    const [clicked, setClicked] = useState(["", ""])

    useEffect(() => {
        if (clicked[0].length) {
            setGameState(
                { ...gameState, [clicked[0]]: { ...gameState[clicked[0]], clicked: false, piece: <div></div> },
                [clicked[1]]: { ...gameState[clicked[1]], clicked: false, piece: gameState[clicked[0]].piece } }
            )
            setClicked(["",""])
        }
    }, [clicked])

    useEffect(() => {
        console.log(gameState, 'game changed')
    }, [gameState])

    return (
        <div className="Board">
            <BoardRow startingColor="black" column="a" gameState={gameState} setGameState={setGameState} clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="b" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="black" column="c" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="d" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="black" column="e" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="f" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="black" column="g" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="h" clicked={clicked} setClicked={setClicked} />
        </div>
    );
}

export default Board;
