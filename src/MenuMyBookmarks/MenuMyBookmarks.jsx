import "./MenuMyBookmarks.css";
import { MenuMyBookmarks } from "../MenuMyBookmarks/MenuMyBookmarks.jsx";

export const MenuMyBookmarks = ({ className, ...props }) => {
  return (
    <img
      className={"menu-my-bookmarks-instance " + className}
      src="MenuMyBookmarks.svg"
    />
  );
};
