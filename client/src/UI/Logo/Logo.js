import classes from './Logo.module.css';
const Logo = (props) => {
    
    return (
        <div onClick={props.onClick} className={`${classes.logo} ${props.className}`}>LOCALIVORES</div>
    );
}

export default Logo;