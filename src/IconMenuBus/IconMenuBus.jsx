import "./IconMenuBus.css";
import { IconMenuBus } from "../IconMenuBus/IconMenuBus.jsx";

export const IconMenuBus = ({ className, ...props }) => {
  return (
    <img
      className={"icon-menu-bus-instance " + className}
      src="IconMenuBus.svg"
    />
  );
};
