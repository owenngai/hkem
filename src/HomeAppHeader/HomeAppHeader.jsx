import "./HomeAppHeader.css";
import { ButtonSettingTypeCircle } from "../ButtonSettingTypeCircle/ButtonSettingTypeCircle.jsx";
import { InputTypeDefaultModeDarkWithIconFalse } from "../InputTypeDefaultModeDarkWithIconFalse/InputTypeDefaultModeDarkWithIconFalse.jsx";
import { ButtonRoute } from "../ButtonRoute/ButtonRoute.jsx";
import { ButtonRadioTypeTypeShortcutStateDefaultIconTrue } from "../ButtonRadioTypeTypeShortcutStateDefaultIconTrue/ButtonRadioTypeTypeShortcutStateDefaultIconTrue.jsx";
import { IconOffice } from "../IconOffice/IconOffice.jsx";
import { IconHome } from "../IconHome/IconHome.jsx";
import { HomeAppControlBarVertical } from "../HomeAppControlBarVertical/HomeAppControlBarVertical.jsx";

export const HomeAppHeader = ({ className, ...props }) => {
  return (
    <div className={"home-app-header " + className}>
      <div className="frame-699">
        <ButtonSettingTypeCircle className="button-setting-instance"></ButtonSettingTypeCircle>
        <div className="frame-695">
          <InputTypeDefaultModeDarkWithIconFalse
            mode="dark"
            withIcon="false"
            className="input-instance"
          ></InputTypeDefaultModeDarkWithIconFalse>
        </div>
        <ButtonRoute className="button-route-instance"></ButtonRoute>
      </div>
      <div className="frame-700">
        <ButtonRadioTypeTypeShortcutStateDefaultIconTrue className="button-radio-type-instance"></ButtonRadioTypeTypeShortcutStateDefaultIconTrue>
        <ButtonRadioTypeTypeShortcutStateDefaultIconTrue
          component0={<IconOffice className="icon-office-instance" />}
          className="button-radio-type-instance"
        ></ButtonRadioTypeTypeShortcutStateDefaultIconTrue>
      </div>
      <div className="frame-744">
        <HomeAppControlBarVertical className="home-app-control-bar-vertical-instance"></HomeAppControlBarVertical>
      </div>
    </div>
  );
};
