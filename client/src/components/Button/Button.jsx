const Button = ({ classes, text, url, func }) => (
  <button className={classes} onClick={func}>
    <a href={url}>{text}</a>
  </button>
);

export default Button;
