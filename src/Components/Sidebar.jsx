import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./sidebar.module.css";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4.4rem",
        marginTop: "4rem",
        width: "21vw",
        height: "70vh",
        padding: "6rem",
      }}
      className={styles.sidebar}>
      <h2>
        <FaSearch />
        Search
      </h2>

      {/* <NavLink to='/favourites'>
        <h2>
          <GrFavorite /> Favourites
        </h2>
      </NavLink> */}
      {/* 
      <NavLink to='/playlist'>
        <h2>
          <BiSolidPlaylist /> Playlist
        </h2>
      </NavLink> */}

      <Link to='/addsong'>
        <h2>
          <IoMdAddCircle /> AddSong
        </h2>
      </Link>
    </div>
  );
}

export default Sidebar;
