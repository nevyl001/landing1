import classes from "./Paragraph.module.css";

const Paragraph = (props) => {
  const classNames = `${classes.text} ${classes["size_" + props.size]} ${
    classes["color_" + props.color]
  } `;

  return <p className={classNames}>{props.children}</p>;
};

export default Paragraph;
