const Button = ({ text, type = 'button', className, onClick, ...props }) => {
  return (
    <button type={type} onClick={onClick} className={className} {...props}>
      {text}
    </button>
  );
};

export default Button;
