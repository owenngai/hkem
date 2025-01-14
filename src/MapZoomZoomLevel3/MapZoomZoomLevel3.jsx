import "./MapZoomZoomLevel3.css";
import { CurrentCursor } from "../CurrentCursor/CurrentCursor.jsx";

export const MapZoomZoomLevel3 = ({ zoomLevel = "4", className, ...props }) => {
  const variantsClassName = "zoom-level-" + zoomLevel;

  return (
    <div
      className={"map-zoom-zoom-level-3 " + className + " " + variantsClassName}
    >
      <img
        className="screenshot-2025-01-13-at-11-07-09-1"
        src="screenshot-2025-01-13-at-11-07-09-10.png"
      />
      <div className="rectangle-458"></div>
      <CurrentCursor className="current-cursor-instance"></CurrentCursor>
    </div>
  );
};
