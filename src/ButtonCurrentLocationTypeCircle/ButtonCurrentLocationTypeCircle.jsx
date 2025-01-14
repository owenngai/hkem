import "./ButtonCurrentLocationTypeCircle.css";
import { IconCurrentLocation } from "../IconCurrentLocation/IconCurrentLocation.jsx";

export const ButtonCurrentLocationTypeCircle = ({
  type = "circle",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "button-current-location-type-circle " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="ellipse-86"></div>
      <IconCurrentLocation className="icon-current-location-instance"></IconCurrentLocation>
    </div>
  );
};
