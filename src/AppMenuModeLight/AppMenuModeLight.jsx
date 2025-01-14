import "./AppMenuModeLight.css";
import { SectionButtonStateSelectedNotificationFalseModeLight } from "../SectionButtonStateSelectedNotificationFalseModeLight/SectionButtonStateSelectedNotificationFalseModeLight.jsx";
import { SectionButtonBasicTypeTravelInfoStateDefaultModeLight } from "../SectionButtonBasicTypeTravelInfoStateDefaultModeLight/SectionButtonBasicTypeTravelInfoStateDefaultModeLight.jsx";
import { SectionButtonBasicTypeHomeStateDefaultModeLight } from "../SectionButtonBasicTypeHomeStateDefaultModeLight/SectionButtonBasicTypeHomeStateDefaultModeLight.jsx";
import { SectionButtonStateDefaultNotificationFalseModeLight } from "../SectionButtonStateDefaultNotificationFalseModeLight/SectionButtonStateDefaultNotificationFalseModeLight.jsx";
import { SectionButtonBasicTypePublicTransportStateDefaultModeLight } from "../SectionButtonBasicTypePublicTransportStateDefaultModeLight/SectionButtonBasicTypePublicTransportStateDefaultModeLight.jsx";
import { SectionButtonBasicTypeRealtimeTravelStateDefaultModeLight } from "../SectionButtonBasicTypeRealtimeTravelStateDefaultModeLight/SectionButtonBasicTypeRealtimeTravelStateDefaultModeLight.jsx";
import { SectionButtonBasicTypeMoreStateDefaultModeLight } from "../SectionButtonBasicTypeMoreStateDefaultModeLight/SectionButtonBasicTypeMoreStateDefaultModeLight.jsx";

export const AppMenuModeLight = ({ mode = "light", className, ...props }) => {
  const variantsClassName = "mode-" + mode;

  return (
    <div
      className={"app-menu-mode-light " + className + " " + variantsClassName}
    >
      <SectionButtonStateSelectedNotificationFalseModeLight
        state="selected"
        className="section-button-instance"
      ></SectionButtonStateSelectedNotificationFalseModeLight>
      <SectionButtonStateDefaultNotificationFalseModeLight
        component0={
          <SectionButtonBasicTypeTravelInfoStateDefaultModeLight
            className="section-button-basic-instance"
            type="travel-info"
            state="default"
            mode="light"
          />
        }
        className="section-button-instance"
      ></SectionButtonStateDefaultNotificationFalseModeLight>
      <SectionButtonStateDefaultNotificationFalseModeLight
        component0={
          <SectionButtonBasicTypePublicTransportStateDefaultModeLight
            className="section-button-basic-instance"
            type="public-transport"
            state="default"
            mode="light"
          />
        }
        className="section-button-instance"
      ></SectionButtonStateDefaultNotificationFalseModeLight>
      <SectionButtonStateDefaultNotificationFalseModeLight
        component0={
          <SectionButtonBasicTypeRealtimeTravelStateDefaultModeLight
            className="section-button-basic-instance"
            type="realtime-travel"
            state="default"
            mode="light"
          />
        }
        className="section-button-instance"
      ></SectionButtonStateDefaultNotificationFalseModeLight>
      <SectionButtonStateDefaultNotificationFalseModeLight
        component0={
          <SectionButtonBasicTypeMoreStateDefaultModeLight
            className="section-button-basic-instance"
            type="more"
            state="default"
            mode="light"
          />
        }
        className="section-button-instance"
      ></SectionButtonStateDefaultNotificationFalseModeLight>
      <div className="home-indicator"></div>
    </div>
  );
};
