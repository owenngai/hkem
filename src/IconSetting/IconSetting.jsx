import "./IconSetting.css";
import { IconSetting } from "../IconSetting/IconSetting.jsx";

export const IconSetting = ({ className, ...props }) => {
  return (
    <img
      className={"icon-setting-instance " + className}
      src="IconSetting.svg"
    />
  );
};
