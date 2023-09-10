import { IoMdClose } from 'react-icons/io';
import {AiOutlineStar} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {BsCalendar2Week} from 'react-icons/bs'
import { TbCheckbox, TbTrophy } from 'react-icons/tb'
import { AiOutlinePhone } from 'react-icons/ai'
import { GiTomato } from 'react-icons/gi';
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { BsFillTrash3Fill } from 'react-icons/bs'
const UtilityIconsEnum = {
    Close: IoMdClose,
    StarOutline: AiOutlineStar,
    StarFill: AiFillStar,
    Truck: TbTruckDelivery,
    Calendar: BsCalendar2Week,
    Checkbox: TbCheckbox,
    Trophy: TbTrophy,
    Phone: AiOutlinePhone,
    Tomato: GiTomato,
    Heart: AiFillHeart,
    AccountAvatar: MdAccountCircle,
    Trash: BsFillTrash3Fill
};

const getIconByTitle = (title, props = {}) => {
    const IconComponent = UtilityIconsEnum[title];
    if (IconComponent) {
        return <IconComponent {...props} />;
    }
    return null;
};

export { UtilityIconsEnum, getIconByTitle };
