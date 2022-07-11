import classes from "./Title.module.css";

const Title = (props) => {
  const classNames = `${classes.title} ${classes["size_" + props.size]} ${
    classes["color_" + props.color]
  }  ${classes["align_" + props.align]} 
  `;

  return (
    <div className={classes.box}>
      <h1 className={classNames}>{props.children}</h1>
    </div>
  );
};

export default Title;
