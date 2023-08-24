import React from 'react';

const Grid = () => {
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateRows: '50% 50%',
        height: '100vh',
    };

    const gridItemStyle = {
        border: '1px solid black',
        padding: '10px',
    };

    return (
        <div style={gridContainerStyle}>
            <div style={gridItemStyle}>
            </div>
            <div style={gridItemStyle}>
            </div>
        </div>
    );
};

export default Grid;

