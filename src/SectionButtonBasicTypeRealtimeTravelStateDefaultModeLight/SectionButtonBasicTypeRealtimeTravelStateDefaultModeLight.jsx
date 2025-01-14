import "./SectionButtonBasicTypeRealtimeTravelStateDefaultModeLight.css";
import { IconRealtimeTravel } from "../IconRealtimeTravel/IconRealtimeTravel.jsx";

export const SectionButtonBasicTypeRealtimeTravelStateDefaultModeLight = ({
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
        "section-button-basic-type-realtime-travel-state-default-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconRealtimeTravel className="icon-realtime-travel-instance"></IconRealtimeTravel>
      <div className="div">實時交通 </div>
    </div>
  );
};
