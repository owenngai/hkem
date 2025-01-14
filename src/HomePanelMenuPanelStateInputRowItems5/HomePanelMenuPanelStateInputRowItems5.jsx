import "./HomePanelMenuPanelStateInputRowItems5.css";
import { PanelTop } from "../PanelTop/PanelTop.jsx";
import { MenuPageHomeMenuItemsRowItems5 } from "../MenuPageHomeMenuItemsRowItems5/MenuPageHomeMenuItemsRowItems5.jsx";
import { MenuMyBookmarks } from "../MenuMyBookmarks/MenuMyBookmarks.jsx";
import { HomePanelMenuControlBar } from "../HomePanelMenuControlBar/HomePanelMenuControlBar.jsx";

export const HomePanelMenuPanelStateInputRowItems5 = ({
  state = "input",
  rowItems = "4",
  className,
  ...props
}) => {
  const variantsClassName = "state-" + state + " row-items-" + rowItems;

  return (
    <div
      className={
        "home-panel-menu-panel-state-input-row-items-5 " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="rectangle-462"></div>
      <PanelTop className="panel-top-instance"></PanelTop>
      <div className="holder">
        <MenuPageHomeMenuItemsRowItems5
          rowItems="5"
          className="menu-page-home-menu-items-instance"
        ></MenuPageHomeMenuItemsRowItems5>
        <img className="frame-695" src="frame-6950.svg" />
        <div className="latest-news">
          <div className="frame-6952">
            <div className="frame-6953">
              <MenuMyBookmarks className="menu-my-bookmarks-instance"></MenuMyBookmarks>
              <div className="div">最新消息 </div>
            </div>
            <div className="frame-696">
              <div className="frame-6954">
                <div className="rectangle-450"></div>
              </div>
              <div className="frame-697">
                <div className="rectangle-450"></div>
              </div>
              <div className="frame-698">
                <div className="rectangle-450"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomePanelMenuControlBar className="home-panel-menu-control-bar-instance"></HomePanelMenuControlBar>
    </div>
  );
};
