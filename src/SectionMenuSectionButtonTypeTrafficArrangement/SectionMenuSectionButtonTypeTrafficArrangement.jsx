import "./SectionMenuSectionButtonTypeTrafficArrangement.css";
import { IconMenuTrafficArrangement } from "../IconMenuTrafficArrangement/IconMenuTrafficArrangement.jsx";
import { IconMenuAllPublicTransport } from "../IconMenuAllPublicTransport/IconMenuAllPublicTransport.jsx";
import { SectionMenuSectionButtonBasicStateDefaultModeLight } from "../SectionMenuSectionButtonBasicStateDefaultModeLight/SectionMenuSectionButtonBasicStateDefaultModeLight.jsx";

export const SectionMenuSectionButtonTypeTrafficArrangement = ({
  label = "我的書籤",
  type = "transport-mtr",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "section-menu-section-button-type-traffic-arrangement " +
        className +
        " " +
        variantsClassName
      }
    >
      <SectionMenuSectionButtonBasicStateDefaultModeLight
        component0={
          <IconMenuTrafficArrangement className="icon-menu-traffic-arrangement-instance" />
        }
        className="section-menu-section-button-basic-instance"
      ></SectionMenuSectionButtonBasicStateDefaultModeLight>
    </div>
  );
};
