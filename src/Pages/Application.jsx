import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../Components/Logo";
import Sidebar from "../Components/Sidebar";
import MusicList from "../Components/MusicList";
import styles from "./application.module.css";

function Application() {
  // console.log("hi");
  return (
    <div>
      <Logo />
      <div style={{ display: "flex", gap: "1%", alignItems: "centre" }}>
        <Sidebar></Sidebar>
        <MusicList></MusicList>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Application;
