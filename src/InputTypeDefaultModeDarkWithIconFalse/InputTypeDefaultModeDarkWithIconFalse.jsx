import "./InputTypeDefaultModeDarkWithIconFalse.css";

export const InputTypeDefaultModeDarkWithIconFalse = ({
  type = "default",
  mode = "light",
  withIcon = "true",
  className,
  ...props
}) => {
  const variantsClassName =
    "type-" + type + " mode-" + mode + " with-icon-" + withIcon;

  return (
    <div
      className={
        "input-type-default-mode-dark-with-icon-false " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="placeholder">Placeholder </div>
    </div>
  );
};
