import "./HomeAppControlBarVertical.css";
import { ButtonCompassCircleCompass } from "../ButtonCompassCircleCompass/ButtonCompassCircleCompass.jsx";
import { ButtonLayerTypeCircle } from "../ButtonLayerTypeCircle/ButtonLayerTypeCircle.jsx";

export const HomeAppControlBarVertical = ({ className, ...props }) => {
  return (
    <div className={"home-app-control-bar-vertical " + className}>
      <div className="frame-4">
        <ButtonCompassCircleCompass className="button-compass-instance"></ButtonCompassCircleCompass>
        <ButtonLayerTypeCircle className="button-layer-instance"></ButtonLayerTypeCircle>
      </div>
    </div>
  );
};
