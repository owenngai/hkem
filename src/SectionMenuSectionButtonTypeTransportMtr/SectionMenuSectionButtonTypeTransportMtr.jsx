import "./SectionMenuSectionButtonTypeTransportMtr.css";
import { SectionMenuSectionButtonBasicStateDefaultModeLight } from "../SectionMenuSectionButtonBasicStateDefaultModeLight/SectionMenuSectionButtonBasicStateDefaultModeLight.jsx";

export const SectionMenuSectionButtonTypeTransportMtr = ({
  label = "我的書籤",
  type = "transport-mtr",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "section-menu-section-button-type-transport-mtr " +
        className +
        " " +
        variantsClassName
      }
    >
      <SectionMenuSectionButtonBasicStateDefaultModeLight className="section-menu-section-button-basic-instance"></SectionMenuSectionButtonBasicStateDefaultModeLight>
    </div>
  );
};
