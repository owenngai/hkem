import "./SectionMenuSectionButtonTypeMiniBus.css";
import { IconMenuGreenMinibus } from "../IconMenuGreenMinibus/IconMenuGreenMinibus.jsx";
import { IconMenuAllPublicTransport } from "../IconMenuAllPublicTransport/IconMenuAllPublicTransport.jsx";
import { SectionMenuSectionButtonBasicStateDefaultModeLight } from "../SectionMenuSectionButtonBasicStateDefaultModeLight/SectionMenuSectionButtonBasicStateDefaultModeLight.jsx";

export const SectionMenuSectionButtonTypeMiniBus = ({
  label = "我的書籤",
  type = "transport-mtr",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "section-menu-section-button-type-mini-bus " +
        className +
        " " +
        variantsClassName
      }
    >
      <SectionMenuSectionButtonBasicStateDefaultModeLight
        component0={
          <IconMenuGreenMinibus className="icon-menu-green-minibus-instance" />
        }
        className="section-menu-section-button-basic-instance"
      ></SectionMenuSectionButtonBasicStateDefaultModeLight>
    </div>
  );
};
