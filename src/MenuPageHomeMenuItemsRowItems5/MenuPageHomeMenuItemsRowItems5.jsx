import "./MenuPageHomeMenuItemsRowItems5.css";
import { SectionMenuSectionButtonTypeMyBookmarks } from "../SectionMenuSectionButtonTypeMyBookmarks/SectionMenuSectionButtonTypeMyBookmarks.jsx";
import { SectionMenuSectionButtonTypeTransportMtr } from "../SectionMenuSectionButtonTypeTransportMtr/SectionMenuSectionButtonTypeTransportMtr.jsx";
import { SectionMenuSectionButtonTypeTransportBus } from "../SectionMenuSectionButtonTypeTransportBus/SectionMenuSectionButtonTypeTransportBus.jsx";
import { SectionMenuSectionButtonTypeMiniBus } from "../SectionMenuSectionButtonTypeMiniBus/SectionMenuSectionButtonTypeMiniBus.jsx";
import { SectionMenuSectionButtonTypeTrafficWebcast } from "../SectionMenuSectionButtonTypeTrafficWebcast/SectionMenuSectionButtonTypeTrafficWebcast.jsx";
import { SectionMenuSectionButtonTypeCarPark } from "../SectionMenuSectionButtonTypeCarPark/SectionMenuSectionButtonTypeCarPark.jsx";
import { SectionMenuSectionButtonTypeOnStreetParking } from "../SectionMenuSectionButtonTypeOnStreetParking/SectionMenuSectionButtonTypeOnStreetParking.jsx";
import { SectionMenuSectionButtonTypeRhc } from "../SectionMenuSectionButtonTypeRhc/SectionMenuSectionButtonTypeRhc.jsx";
import { SectionMenuSectionButtonTypeControlPoint } from "../SectionMenuSectionButtonTypeControlPoint/SectionMenuSectionButtonTypeControlPoint.jsx";
import { SectionMenuSectionButtonTypeTrafficArrangement } from "../SectionMenuSectionButtonTypeTrafficArrangement/SectionMenuSectionButtonTypeTrafficArrangement.jsx";

export const MenuPageHomeMenuItemsRowItems5 = ({
  rowItems = "4",
  className,
  ...props
}) => {
  const variantsClassName = "row-items-" + rowItems;

  return (
    <div
      className={
        "menu-page-home-menu-items-row-items-5 " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="row">
        <SectionMenuSectionButtonTypeMyBookmarks
          type="my-bookmarks"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeMyBookmarks>
        <SectionMenuSectionButtonTypeTransportMtr className="section-menu-section-button-instance"></SectionMenuSectionButtonTypeTransportMtr>
        <SectionMenuSectionButtonTypeTransportBus
          type="transport-bus"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeTransportBus>
        <SectionMenuSectionButtonTypeMiniBus
          type="mini-bus"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeMiniBus>
        <SectionMenuSectionButtonTypeTrafficWebcast
          type="traffic-webcast"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeTrafficWebcast>
      </div>
      <div className="row">
        <SectionMenuSectionButtonTypeCarPark
          type="car-park"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeCarPark>
        <SectionMenuSectionButtonTypeOnStreetParking
          type="on-street-parking"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeOnStreetParking>
        <SectionMenuSectionButtonTypeRhc
          type="rhc"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeRhc>
        <SectionMenuSectionButtonTypeControlPoint
          type="control-point"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeControlPoint>
        <SectionMenuSectionButtonTypeTrafficArrangement
          type="traffic-arrangement"
          className="section-menu-section-button-instance"
        ></SectionMenuSectionButtonTypeTrafficArrangement>
      </div>
    </div>
  );
};
