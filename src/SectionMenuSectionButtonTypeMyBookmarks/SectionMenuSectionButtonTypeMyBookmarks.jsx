import "./SectionMenuSectionButtonTypeMyBookmarks.css";
import { IconMenuMyBookmarks } from "../IconMenuMyBookmarks/IconMenuMyBookmarks.jsx";
import { IconMenuAllPublicTransport } from "../IconMenuAllPublicTransport/IconMenuAllPublicTransport.jsx";
import { SectionMenuSectionButtonBasicStateDefaultModeLight } from "../SectionMenuSectionButtonBasicStateDefaultModeLight/SectionMenuSectionButtonBasicStateDefaultModeLight.jsx";

export const SectionMenuSectionButtonTypeMyBookmarks = ({
  label = "我的書籤",
  type = "transport-mtr",
  className,
  ...props
}) => {
  const variantsClassName = "type-" + type;

  return (
    <div
      className={
        "section-menu-section-button-type-my-bookmarks " +
        className +
        " " +
        variantsClassName
      }
    >
      <SectionMenuSectionButtonBasicStateDefaultModeLight
        component0={
          <IconMenuMyBookmarks className="icon-menu-my-bookmarks-instance" />
        }
        className="section-menu-section-button-basic-instance"
      ></SectionMenuSectionButtonBasicStateDefaultModeLight>
    </div>
  );
};
