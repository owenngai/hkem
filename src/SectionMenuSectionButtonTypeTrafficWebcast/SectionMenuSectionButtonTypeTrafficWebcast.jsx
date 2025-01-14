import "./SectionMenuSectionButtonTypeTrafficWebcast.css";
import { IconMenuTrafficWebcast } from "../IconMenuTrafficWebcast/IconMenuTrafficWebcast.jsx";
import { IconMenuAllPublicTransport } from "../IconMenuAllPublicTransport/IconMenuAllPublicTransport.jsx";
import { SectionMenuSectionButtonBasicStateDefaultModeLight } from "../SectionMenuSectionButtonBasicStateDefaultModeLight/SectionMenuSectionButtonBasicStateDefaultModeLight.jsx";

export const SectionMenuSectionButtonTypeTrafficWebcast = ({
  label = "我的書籤",
  type = "transport-mtr",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "section-menu-section-button-type-traffic-webcast " +
        className +
        " " +
        variantsClassName
      }
    >
      <SectionMenuSectionButtonBasicStateDefaultModeLight
        component0={
          <IconMenuTrafficWebcast className="icon-menu-traffic-webcast-instance" />
        }
        className="section-menu-section-button-basic-instance"
      ></SectionMenuSectionButtonBasicStateDefaultModeLight>
    </div>
  );
};
