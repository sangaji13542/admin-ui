import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; //icon search
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"; //icon theme

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon"
            onClick = {() => dispatch({type: "TOGGLE" })} />
          </div>

          <div className="item">
            <img
              src="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/raiden_shogun/image.png?strip=all&quality=100"
              alt=""
              className="avatar"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
