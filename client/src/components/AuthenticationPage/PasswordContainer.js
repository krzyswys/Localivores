import './AuthForm.scss';
import InputField from './InputField';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const PasswordContainer = (props) => {
    return (
      <div className="password-container">
        <InputField
          type={props.isPasswordVisible ? "text" : "password"}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          hasError={props.hasError}
          isPasswordField={true}
        />
        <button
          onClick={props.toggleVisibility}
          className="visibility-icon"
          aria-label={props.isPasswordVisible ? "Hide password" : "Show password"}
        >
          {props.isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    );
  };

export default PasswordContainer;