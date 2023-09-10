import { TbPlantOff } from 'react-icons/tb'
import { LuVegan, LuWheatOff, LuWheat } from 'react-icons/lu'
import { GiPlantWatering, GiFruitTree } from 'react-icons/gi'

const SpecialIconsEnum = {
    Vegan: <LuVegan />,
    PlantWatering: <GiPlantWatering />,
    PlantOff: <TbPlantOff />,
    NoGluten: <LuWheatOff />,
    Gluten: <LuWheat />,
    Tree: <GiFruitTree />,
};
const getIconByTitle = (title) => {
    return SpecialIconsEnum[title] || null;
};

export { SpecialIconsEnum, getIconByTitle };
