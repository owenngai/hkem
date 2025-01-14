import "./ButtonCompassCircleCompass.css";
import { IconCompass } from "../IconCompass/IconCompass.jsx";

export const ButtonCompassCircleCompass = ({
  circle = "compass",
  className,
  ...props
}) => {
  const variantsClassName = "circle-" + circle;

  return (
    <div
      className={
        "button-compass-circle-compass " + className + " " + variantsClassName
      }
    >
      <div className="ellipse-86"></div>
      <IconCompass className="icon-compass-instance"></IconCompass>
    </div>
  );
};
