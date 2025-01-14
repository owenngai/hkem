import "./SectionMenuSectionButtonTypeCarPark.css";
import { IconMenuCarPark } from "../IconMenuCarPark/IconMenuCarPark.jsx";
import { IconMenuAllPublicTransport } from "../IconMenuAllPublicTransport/IconMenuAllPublicTransport.jsx";
import { SectionMenuSectionButtonBasicStateDefaultModeLight } from "../SectionMenuSectionButtonBasicStateDefaultModeLight/SectionMenuSectionButtonBasicStateDefaultModeLight.jsx";

export const SectionMenuSectionButtonTypeCarPark = ({
  label = "我的書籤",
  type = "transport-mtr",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "section-menu-section-button-type-car-park " +
        className +
        " " +
        variantsClassName
      }
    >
      <SectionMenuSectionButtonBasicStateDefaultModeLight
        component0={<IconMenuCarPark className="icon-menu-car-park-instance" />}
        className="section-menu-section-button-basic-instance"
      ></SectionMenuSectionButtonBasicStateDefaultModeLight>
    </div>
  );
};
