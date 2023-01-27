import React, { useEffect, useState } from 'react';
import './board.css';
import BoardRow from './boardRow';
import Pawn from './pawn';

const Board = () => {
    // Define the object instead of using any type
    const startingBoard: any = {
        "a1": { clicked: false, piece: <div>Orange</div> },
        "a2": { clicked: false, piece: <Pawn color="white" name="pawn" isMoved={false} /> },
        "a3": "",
        "a4": "",
        "a5": "",
        "a6": "",
        "a7": "",
        "a8": "",
        "b1": "",
        "b2": "",
        "b3":{ clicked: false, piece: <Pawn color="black" name="pawn" isMoved={false} /> }, 
        "b4": "",
        "b5": "",
        "b6": "",
        "b7": "",
        "b8": "",
        "c1": "",
        "c2": { clicked: false, piece: <Pawn color="white" name="pawn" isMoved={false} /> },
        "c3":{ clicked: false, piece: <Pawn color="black" name="pawn" isMoved={false} /> }, 
        "c4": "",
        "c5": "",
        "c6": "",
        "c7": "",
        "c8": "",
    }
    const [gameState, setGameState] = useState(startingBoard)
    const [clicked, setClicked] = useState(["", ""])
    
    const decreaseLetter = (letter: string) => {
        if (letter === "a") return null 
        else if (letter === "b") return "a"
        else if (letter === "c") return "b"
        else if (letter === "d") return "c"
        else if (letter === "e") return "d"
        else if (letter === "f") return "e"
        else if (letter === "g") return "f"
        else if (letter === "h") return "g"
    }

    const increaseLetter = (letter: string) => {
        if (letter === "a") return "b"
        else if (letter === "b") return "c"
        else if (letter === "c") return "d"
        else if (letter === "d") return "e"
        else if (letter === "e") return "f"
        else if (letter === "f") return "g"
        else if (letter === "g") return "h"
        else if (letter === "h") return null
    }

    const findPawnPaths = (location: string) => {
        let square = gameState[location]
        // check if the next space contains another piece
        // for pawns check if the is a piece that is in taking range
        if (square.piece?.props.color === "white") {
            let newLocation = `${location[0]}${Number.parseInt(location[1]) + 1}` 
            if (!gameState[newLocation].piece?.props.name) {
                setGameState({ ...gameState, [newLocation]: { ...gameState[newLocation], clicked: true } })
            }   
        }
        else if (square.piece?.props.color === "black") {
            const decLetter = decreaseLetter(location[0])
            const incLetter = increaseLetter(location[0])
            const number = Number.parseInt(location[1]) - 1 
            let decTarget;
            let incTarget;
            let newLocation = `${location[0]}${number}` 
            if (decLetter) decTarget = `${decLetter}${number}`
            if (incLetter) incTarget = `${incLetter}${number}`
            console.log(newLocation, decLetter, incLetter)
            console.log(incTarget)
            if (!gameState[newLocation].piece?.props.name) {
                if (decTarget && incTarget && gameState[decTarget].piece?.props.name) {
                    setGameState({ ...gameState, [newLocation]: { ...gameState[newLocation], clicked: true }, [decTarget]: { ...gameState[decTarget], clicked: true }, [incTarget]: { ...gameState[incTarget], clicked: true }})
                }   
            }   

        }
    }

    useEffect(() => {
        console.log(clicked)
        if (clicked[0].length) {
            setGameState(
                {
                    ...gameState, [clicked[0]]: { ...gameState[clicked[0]], clicked: false, piece: <div></div> },
                    [clicked[1]]: { ...gameState[clicked[1]], clicked: false, piece: gameState[clicked[0]].piece }
                }
            )
            setClicked(["", ""])
        } else if (clicked[1].length) {
            // This set state is not currently working 
            findPawnPaths(clicked[1])
        }
    }, [clicked])

    useEffect(() => {
        console.log(gameState, 'game changed')
    }, [gameState])

    return (
        <div className="Board">
            <BoardRow startingColor="black" column="a" gameState={gameState} setGameState={setGameState} clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="b" gameState={gameState} setGameState={setGameState} clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="black" column="c" gameState={gameState} setGameState={setGameState} clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="d" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="black" column="e" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="f" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="black" column="g" clicked={clicked} setClicked={setClicked} />
            <BoardRow startingColor="white" column="h" clicked={clicked} setClicked={setClicked} />
        </div>
    );
}

export default Board;
