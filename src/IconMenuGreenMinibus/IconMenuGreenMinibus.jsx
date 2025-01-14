import "./IconMenuGreenMinibus.css";
import { IconMenuGreenMinibus } from "../IconMenuGreenMinibus/IconMenuGreenMinibus.jsx";

export const IconMenuGreenMinibus = ({ className, ...props }) => {
  return (
    <img
      className={"icon-menu-green-minibus-instance " + className}
      src="IconMenuGreenMinibus.svg"
    />
  );
};
