import "./SectionButtonBasicTypeTravelInfoStateDefaultModeLight.css";
import { IconTravelInfo } from "../IconTravelInfo/IconTravelInfo.jsx";

export const SectionButtonBasicTypeTravelInfoStateDefaultModeLight = ({
  type = "home",
  state = "default",
  mode = "light",
  className,
  ...props
}) => {
  const variantsClassName =
    "type-" + type + " state-" + state + " mode-" + mode;

  return (
    <div
      className={
        "section-button-basic-type-travel-info-state-default-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconTravelInfo className="icon-travel-info-instance"></IconTravelInfo>
      <div className="div">交通快訊 </div>
    </div>
  );
};
