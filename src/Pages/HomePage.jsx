import { NavLink } from "react-router-dom";
import Logo from "../Components/Logo";

function HomePage() {
  return (
    <>
      <div className='navbar'>
        <Logo />
        <ul className='homepage-list'>
          <li>
            <NavLink to='support'>support</NavLink>
          </li>
          <li>
            <NavLink to='login'>login</NavLink>
          </li>
          <li>
            <NavLink to='pro'>Pro</NavLink>
          </li>
        </ul>
      </div>
      <div className='landing-page'>
        <p
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6rem",
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          aperiam ipsam minima culpa veniam doloribus doloremque amet
          consequatur. Neque itaque eaque, tempora ex at veritatis distinctio
          incidunt laborum porro corporis.s
          <NavLink to='login'>
            <button
              style={{
                width: "14rem",
                backgroundColor: "grey",
                height: "7vmin",
                justifySelf: "center",
                borderRadius: "17px",
                border: "none",
              }}>
              Get Started
            </button>
          </NavLink>
        </p>
        <img
          className='landing-img'
          src='https://images.pexels.com/photos/1128440/pexels-photo-1128440.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='landing-image'
        />
      </div>
    </>
  );
}

export default HomePage;
