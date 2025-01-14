import "./IconLayers.css";
import { IconLayers } from "../IconLayers/IconLayers.jsx";

export const IconLayers = ({ className, ...props }) => {
  return (
    <img className={"icon-layers-instance " + className} src="IconLayers.svg" />
  );
};
