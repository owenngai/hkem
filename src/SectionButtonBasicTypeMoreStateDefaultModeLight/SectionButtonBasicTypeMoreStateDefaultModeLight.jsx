import "./SectionButtonBasicTypeMoreStateDefaultModeLight.css";
import { IconMore } from "../IconMore/IconMore.jsx";

export const SectionButtonBasicTypeMoreStateDefaultModeLight = ({
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
        "section-button-basic-type-more-state-default-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconMore className="icon-more-instance"></IconMore>
      <div className="div">更多功能 </div>
    </div>
  );
};
