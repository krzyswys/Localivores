const Label = ({ htmlFor, isShown, children, className }) => {
    if (!isShown) return null;
  
    return (
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
    );
  };
  
  export default Label;
  