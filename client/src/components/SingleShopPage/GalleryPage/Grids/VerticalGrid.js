import React from 'react';

const VerticalGrid = (props) => {
    const { items, gridsEven, gridsUneven, grids } = props;
    const containerStyle = {
        height: '100%',
        width: '100%'
    };

    const randomRowHeight1 = Math.floor(Math.random() * 50) + 30;
    const randomRowHeight2 = 100 - randomRowHeight1;
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: `${randomRowHeight1}% ${randomRowHeight2}%`,
        height: '100%',
        width: '100%',
        zIndex: `${items.length}`

    };

    const gridItemStyle = {
        width: '100%',
        height: '100%',
    };
    function getRandomGridComponent(items_to_serve) {
        const filteredGrids = grids.filter(grid => grid !== VerticalGrid);
        const randomIndex = Math.floor(Math.random() * filteredGrids.length);
        const RandomGridComponent = filteredGrids[randomIndex];
        return <RandomGridComponent items={items_to_serve} gridsEven={gridsEven} gridsUneven={gridsUneven} grids={grids} />;
    }
    const choosenComponent = () => {
        if (items.length === 1) {
            return items[0];
        } else {
            const middleIndex = Math.floor(items.length / 2);
            const firstHalf = items.slice(0, middleIndex);
            const secondHalf = items.slice(middleIndex);

            return (
                <div style={gridContainerStyle}>
                    <div style={gridItemStyle}>
                        {getRandomGridComponent(firstHalf)}
                    </div>
                    <div style={gridItemStyle}>
                        {getRandomGridComponent(secondHalf)}
                    </div>
                </div>
            );
        }
    };
    return (
        <div style={containerStyle}>
            {choosenComponent()}
        </div>
    );
};

export default VerticalGrid;

