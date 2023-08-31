import React from 'react';
import SingleGrid from './Grids/SingleGrid'
import VerticalGrid from './Grids/VerticalGrid';
import HorizontalGrid from './Grids/HorizontalGrid';
import LeftSplitHorizontalGrid from './Grids/LeftSplitHorizontalGrid';
import RightSplitHorizontalGrid from './Grids/RightSplitHorizontalGrid';
import TopSplitHorizontalGrid from './Grids/TopSplitHorizontalGrid';
import BottomSplitHorizontalGrid from './Grids/BottomSplitHorizontalGrid';

const Grid = (props) => {
    const imageLinks = props.imageLinks
    const items = imageLinks.map((imageSrc, index) => (
        <SingleGrid key={index} imageSrc={imageSrc} number={index} />
    ));
    const gridsEven = [VerticalGrid, HorizontalGrid, HorizontalGrid, HorizontalGrid, HorizontalGrid];
    const gridsUneven = [LeftSplitHorizontalGrid, RightSplitHorizontalGrid, TopSplitHorizontalGrid, BottomSplitHorizontalGrid];
    const combinedGrids = gridsEven.concat(gridsUneven);

    const gridContainerStyle = {
        height: `${items.length * 52 + 'px'}`,
        width: '98 %'
    };

    const gridItemStyle = {
        // border: '1px solid black',
        width: '100%',
        height: '100%',

    };
    function getRandomGridComponent() {
        const randomIndex = Math.floor(Math.random() * combinedGrids.length);
        const RandomGridComponent = combinedGrids[randomIndex];
        return <RandomGridComponent items={items} gridsEven={gridsEven} gridsUneven={gridsUneven} grids={combinedGrids} />;
    }
    const choosenComponent = (
        items.length === 1 ? <SingleGrid /> : getRandomGridComponent()
    );

    return (
        <div style={gridContainerStyle}>
            <div style={gridItemStyle}>
                {choosenComponent}
            </div>
        </div>
    );
};

export default React.memo(Grid);

