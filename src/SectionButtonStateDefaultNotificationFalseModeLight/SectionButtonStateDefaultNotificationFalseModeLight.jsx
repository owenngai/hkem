import "./SectionButtonStateDefaultNotificationFalseModeLight.css";
import { SectionButtonBasicTypeHomeStateDefaultModeLight } from "../SectionButtonBasicTypeHomeStateDefaultModeLight/SectionButtonBasicTypeHomeStateDefaultModeLight.jsx";

export const SectionButtonStateDefaultNotificationFalseModeLight = ({
  state = "default",
  notification = "false",
  mode = "light",
  component0 = (
    <SectionButtonBasicTypeHomeStateDefaultModeLight
      type="home"
      state="default"
      mode="light"
    />
  ),
  className,
  ...props
}) => {
  const variantsClassName =
    "state-" + state + " notification-" + notification + " mode-" + mode;

  return (
    <div
      className={
        "section-button-state-default-notification-false-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      {component0}
    </div>
  );
};
