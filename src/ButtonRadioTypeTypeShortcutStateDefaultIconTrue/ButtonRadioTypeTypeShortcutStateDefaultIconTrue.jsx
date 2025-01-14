import "./ButtonRadioTypeTypeShortcutStateDefaultIconTrue.css";
import { IconHome } from "../IconHome/IconHome.jsx";

export const ButtonRadioTypeTypeShortcutStateDefaultIconTrue = ({
  type = "shortcut",
  state = "default",
  icon = "true",
  className,
  ...props
}) => {
  const variantsClassName =
    "type-" + type + " state-" + state + " icon-" + icon;

  return (
    <div
      className={
        "button-radio-type-type-shortcut-state-default-icon-true " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-699">
        <IconHome className="icon-home-instance"></IconHome>
        <div className="unit">
          <div className="_16">16 </div>
          <div className="div">分鐘 </div>
        </div>
      </div>
    </div>
  );
};
