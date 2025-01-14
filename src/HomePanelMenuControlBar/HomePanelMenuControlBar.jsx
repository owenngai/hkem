import "./HomePanelMenuControlBar.css";
import { ButtonSectionHeaderBtnCameraWidthButtonActionSecondaryHko } from "../ButtonSectionHeaderBtnCameraWidthButtonActionSecondaryHko/ButtonSectionHeaderBtnCameraWidthButtonActionSecondaryHko.jsx";
import { ButtonCurrentLocationTypeCircle } from "../ButtonCurrentLocationTypeCircle/ButtonCurrentLocationTypeCircle.jsx";

export const HomePanelMenuControlBar = ({ className, ...props }) => {
  return (
    <div className={"home-panel-menu-control-bar " + className}>
      <div className="frame-4">
        <div className="frame-699">
          <div className="frame-6992">
            <ButtonSectionHeaderBtnCameraWidthButtonActionSecondaryHko className="button-section-header-btn-camera-width-button-action-secondary-hko-instance"></ButtonSectionHeaderBtnCameraWidthButtonActionSecondaryHko>
          </div>
        </div>
        <ButtonCurrentLocationTypeCircle className="button-current-location-instance"></ButtonCurrentLocationTypeCircle>
      </div>
    </div>
  );
};
