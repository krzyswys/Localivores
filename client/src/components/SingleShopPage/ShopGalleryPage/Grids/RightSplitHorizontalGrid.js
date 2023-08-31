import React from 'react';


const RightSplitHorizontalGrid = (props) => {

    const { items, gridsEven, gridsUneven, grids } = props;
    const containerStyle = {
        height: '100%',
        width: '100%'
    };
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridTemplateRows: '50% 50%',
        height: '100%',
        width: '100%',
        zIndex: `${items.length}`

    };

    const gridItemStyle = {
        width: '100%',
        height: '100%',
    };
    function getRandomGridComponent(items_to_serve) {
        const filteredGrids = grids.filter(grid => grid !== RightSplitHorizontalGrid);
        const randomIndex = Math.floor(Math.random() * filteredGrids.length);
        const RandomGridComponent = filteredGrids[randomIndex];
        return <RandomGridComponent items={items_to_serve} gridsEven={gridsEven} gridsUneven={gridsUneven} grids={grids} />;
    }
    function getRandomGridComponentEven(items_to_serve) {
        const filteredGrids = gridsEven.filter(grid => grid !== RightSplitHorizontalGrid);
        const randomIndex = Math.floor(Math.random() * filteredGrids.length);
        const RandomGridComponent = filteredGrids[randomIndex];
        return <RandomGridComponent items={items_to_serve} gridsEven={gridsEven} gridsUneven={gridsUneven} grids={grids} />;
    }

    const choosenComponent = () => {
        if (items.length === 1) {
            return items[0];
        }
        else if (items.length === 2) {
            return getRandomGridComponentEven(items)
        }
        else {
            const thirdIndex = Math.floor(items.length / 3);
            const firstThird = items.slice(0, thirdIndex);
            const secondThird = items.slice(thirdIndex, 2 * thirdIndex);
            const thirdThird = items.slice(2 * thirdIndex);
            return (
                <div style={gridContainerStyle}>
                    <div style={{ ...gridItemStyle, gridColumn: '1 / 2', gridRow: '1 / 3' }}>
                        {getRandomGridComponent(firstThird)}
                    </div>
                    <div style={{ ...gridItemStyle, gridColumn: '2 / 3', gridRow: '1 / 2' }}>
                        {getRandomGridComponent(secondThird)}
                    </div>
                    <div style={{ ...gridItemStyle, gridColumn: '2 / 3', gridRow: '2 / 3' }}>
                        {getRandomGridComponent(thirdThird)}
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


export default RightSplitHorizontalGrid;
