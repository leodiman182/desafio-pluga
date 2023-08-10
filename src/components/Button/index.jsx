import "./style.css";

function Button({ children, onClick, testID }) {
  return (
    <button data-testid={testID} onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;
