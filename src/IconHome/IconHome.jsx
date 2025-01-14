import "./IconHome.css";
import { IconHome } from "../IconHome/IconHome.jsx";

export const IconHome = ({ className, ...props }) => {
  return (
    <img className={"icon-home-instance " + className} src="IconHome.svg" />
  );
};
