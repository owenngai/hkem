import "./ButtonSettingTypeCircle.css";
import { IconSetting } from "../IconSetting/IconSetting.jsx";

export const ButtonSettingTypeCircle = ({
  type = "circle",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "button-setting-type-circle " + className + " " + variantsClassName
      }
    >
      <div className="ellipse-87"></div>
      <IconSetting className="icon-setting-instance"></IconSetting>
    </div>
  );
};
