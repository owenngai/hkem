import "./IconRoute.css";
import { IconRoute } from "../IconRoute/IconRoute.jsx";

export const IconRoute = ({ className, ...props }) => {
  return (
    <img className={"icon-route-instance " + className} src="IconRoute.svg" />
  );
};
