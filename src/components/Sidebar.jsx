import "./sidebar.scss";
import { Link } from "react-router-dom"; // import link untuk navigasi menu
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'; //icon dashboard
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; //icon icon
import InventoryIcon from '@mui/icons-material/Inventory'; //icon products
import StoreIcon from '@mui/icons-material/Store'; //icon orders
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; //icon profile
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; //icon logout
import CategoryIcon from '@mui/icons-material/Category'; // icone categories

const Sidebar = () => {
  return ( 
    <div className="sidebar"> 

      <div className="top">
        <Link to="/">
          <span className="logo">Sangaji Store</span>
        </Link>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <SpaceDashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>

          <p className="title">LIST</p>
          <Link to="/users">
            <li>
              <PeopleAltIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <InventoryIcon className="icon"/>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon"/>
            <span>Orders</span>
          </li>
          <Link to="/categories">
            <li>
              <CategoryIcon  className="icon"/>
              <span>Categories</span>
            </li>
          </Link>
          
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>

    </div>
  );
};

export default Sidebar;