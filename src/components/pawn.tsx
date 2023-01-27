import React from 'react';
// import './pawn.css';

interface PawnProps {
    color: string;
    location?: string;
    selected?: boolean;
    name: string;
    isMoved: boolean;
}

const Pawn = ({ color, location, selected, name, isMoved}: PawnProps) => {

    if (selected) {
    }

    return (
        <div >
            Pawn 
        </div>
    );
}

export default Pawn;
