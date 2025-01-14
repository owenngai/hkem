import "./SectionMenuSectionButtonBasicStateDefaultModeLight.css";
import { IconMenuAllPublicTransport } from "../IconMenuAllPublicTransport/IconMenuAllPublicTransport.jsx";

export const SectionMenuSectionButtonBasicStateDefaultModeLight = ({
  state = "default",
  mode = "light",
  component0 = <IconMenuAllPublicTransport />,
  className,
  ...props
}) => {
  const variantsClassName = "state-" + state + " mode-" + mode;

  return (
    <div
      className={
        "section-menu-section-button-basic-state-default-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      {component0}
      <div className="div">我的書籤 </div>
    </div>
  );
};
