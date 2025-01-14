import "./SectionButtonStateSelectedNotificationFalseModeLight.css";
import { SectionButtonBasicTypeHomeStateDefaultModeLight } from "../SectionButtonBasicTypeHomeStateDefaultModeLight/SectionButtonBasicTypeHomeStateDefaultModeLight.jsx";

export const SectionButtonStateSelectedNotificationFalseModeLight = ({
  state = "default",
  notification = "false",
  mode = "light",
  className,
  ...props
}) => {
  const variantsClassName =
    "state-" + state + " notification-" + notification + " mode-" + mode;

  return (
    <div
      className={
        "section-button-state-selected-notification-false-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      <SectionButtonBasicTypeHomeStateDefaultModeLight className="section-button-basic-instance"></SectionButtonBasicTypeHomeStateDefaultModeLight>
    </div>
  );
};
