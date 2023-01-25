import React from 'react';
import './board.css';
import BoardRow from './boardRow';

const Board = () => {
    return (
        <div className="Board">
            <BoardRow startingColor="black"/>
            <BoardRow startingColor="white"/>
            <BoardRow startingColor="black"/>
            <BoardRow startingColor="white"/>
            <BoardRow startingColor="black"/>
            <BoardRow startingColor="white"/>
            <BoardRow startingColor="black"/>
            <BoardRow startingColor="white"/>
        </div>
    );
}

export default Board;
