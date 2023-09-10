import { MdWhatshot } from 'react-icons/md';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { LiaCarrotSolid } from 'react-icons/lia';
import { CiApple } from 'react-icons/ci';
import { LuMilk } from 'react-icons/lu';
import { GiSteak } from 'react-icons/gi';

const CategoryIconsEnum = {
    Bestsellers: <MdWhatshot />,
    Discounted: <TbShoppingCartDiscount />,
    Vegetables: <LiaCarrotSolid />,
    Fruits: <CiApple />,
    Dairy: <LuMilk />,
    Meat: <GiSteak />,
};
const getIconByTitle = (title) => {
    return CategoryIconsEnum[title] || null;
};

export { CategoryIconsEnum, getIconByTitle };
