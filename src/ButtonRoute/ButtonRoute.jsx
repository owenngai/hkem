import "./ButtonRoute.css";
import { IconRoute } from "../IconRoute/IconRoute.jsx";

export const ButtonRoute = ({ className, ...props }) => {
  return (
    <div className={"button-route " + className}>
      <div className="rectangle-455"></div>
      <div className="frame-699">
        <IconRoute className="icon-route-instance"></IconRoute>
        <div className="div">路線 </div>
      </div>
    </div>
  );
};
