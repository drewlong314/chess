import React from 'react';
// import './pawn.css';

interface PawnProps {
    color: string;
    location?: string;
}

const Pawn = ({ color, location }: PawnProps) => {

    const handleMove = () => {
        location = "e6"     
    }

    return (
        <div onClick={handleMove}>
            Pawn 
        </div>
    );
}

export default Pawn;
