import classes from './Button.module.css';

function Button({ type, text, onClick }) {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
