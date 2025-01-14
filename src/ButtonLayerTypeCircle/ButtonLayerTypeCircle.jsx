import "./ButtonLayerTypeCircle.css";
import { IconLayers } from "../IconLayers/IconLayers.jsx";

export const ButtonLayerTypeCircle = ({
  type = "circle",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "button-layer-type-circle " + className + " " + variantsClassName
      }
    >
      <div className="ellipse-86"></div>
      <IconLayers className="icon-layers-instance"></IconLayers>
    </div>
  );
};
