import "./IconOffice.css";
import { IconOffice } from "../IconOffice/IconOffice.jsx";

export const IconOffice = ({ className, ...props }) => {
  return (
    <img className={"icon-office-instance " + className} src="IconOffice.svg" />
  );
};
