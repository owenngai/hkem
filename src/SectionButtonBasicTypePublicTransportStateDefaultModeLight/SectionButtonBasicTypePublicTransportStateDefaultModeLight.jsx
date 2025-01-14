import "./SectionButtonBasicTypePublicTransportStateDefaultModeLight.css";
import { IconPublicTransport } from "../IconPublicTransport/IconPublicTransport.jsx";

export const SectionButtonBasicTypePublicTransportStateDefaultModeLight = ({
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
        "section-button-basic-type-public-transport-state-default-mode-light " +
        className +
        " " +
        variantsClassName
      }
    >
      <IconPublicTransport className="icon-public-transport-instance"></IconPublicTransport>
      <div className="div">公共交通 </div>
    </div>
  );
};
