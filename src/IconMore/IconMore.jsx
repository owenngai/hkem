import "./IconMore.css";

export const IconMore = ({ className, ...props }) => {
  return (
    <div className={"icon-more " + className}>
      <img className="shopicon" src="shopicon0.svg" />
    </div>
  );
};
