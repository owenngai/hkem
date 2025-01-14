import "./PanelTop.css";

export const PanelTop = ({ className, ...props }) => {
  return (
    <div className={"panel-top " + className}>
      <div className="rectangle-456"></div>
      <div className="rectangle-5"></div>
    </div>
  );
};
