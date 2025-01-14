import "./SectionButtonBasicTypeHomeStateDefaultModeLight.css";
import { IconHome } from "../IconHome/IconHome.jsx";

export const SectionButtonBasicTypeHomeStateDefaultModeLight = ({
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
        "section-button-basic-type-home-state-default-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconHome className="icon-home-instance"></IconHome>
      <div className="div">主頁 </div>
    </div>
  );
};
