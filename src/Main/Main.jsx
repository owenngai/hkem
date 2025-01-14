import "./Main.css";
import { MapZoomZoomLevel3 } from "../MapZoomZoomLevel3/MapZoomZoomLevel3.jsx";
import { MapAnchor1 } from "../MapAnchor1/MapAnchor1.jsx";
import { HomeAppHeader } from "../HomeAppHeader/HomeAppHeader.jsx";
import { HomePanelMenuPanelStateInputRowItems5 } from "../HomePanelMenuPanelStateInputRowItems5/HomePanelMenuPanelStateInputRowItems5.jsx";
import { AppMenuModeLight } from "../AppMenuModeLight/AppMenuModeLight.jsx";

export const Main = ({ className, ...props }) => {
  return (
    <div className={"main " + className}>
      <div className="map-holder">
        <MapZoomZoomLevel3
          zoomLevel="3"
          className="map-zoom-instance"
        ></MapZoomZoomLevel3>
        <MapAnchor1 className="map-anchor-1-instance"></MapAnchor1>
      </div>
      <div className="header">
        <HomeAppHeader className="home-app-header-instance"></HomeAppHeader>
      </div>
      <div className="fixed">
        <HomePanelMenuPanelStateInputRowItems5
          rowItems="5"
          className="home-panel-menu-panel-instance"
        ></HomePanelMenuPanelStateInputRowItems5>
        <AppMenuModeLight className="app-menu-instance"></AppMenuModeLight>
      </div>
    </div>
  );
};
