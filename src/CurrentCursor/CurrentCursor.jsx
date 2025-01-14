import "./CurrentCursor.css";

export const CurrentCursor = ({ className, ...props }) => {
  return (
    <div className={"current-cursor " + className}>
      <div className="ellipse-1"></div>
      <div className="layer-1">
        <img className="pe-6-trp" src="pe-6-trp0.svg" />
      </div>
    </div>
  );
};
