import "./IconCurrentLocation.css";
import { IconCurrentLocation } from "../IconCurrentLocation/IconCurrentLocation.jsx";

export const IconCurrentLocation = ({ className, ...props }) => {
  return (
    <img
      className={"icon-current-location-instance " + className}
      src="IconCurrentLocation.svg"
    />
  );
};
