import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "./musics.module.css";
import { useEffect } from "react";
import { useMusic } from "../Context/MusicProvider";

function Musics({ music }) {
  // useEffect(
  //   function () {
  //     getMusic(title);
  //   },
  //   [title]
  // );

  const paramId = useParams();
  const { deleteSong } = useMusic();
  const id = music.id;

  const navigate = useNavigate();

  // const { id } = useParams();

  function handleDelete(e) {
    e.stopPropagation();
    e.preventDefault();

    if (confirm("This will delete the song permanently")) {
      // deleteSong(id);
      deleteSong(id);

      id === paramId ? navigate("/app") : null;
    }
  }

  return (
    <NavLink to={`music/${music.id}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className={styles.music}>
        <div onClick={handleDelete} className={styles.delete}>
          X
        </div>
        <img src={music.imageUrl} alt={music.title} className='music-image' />
        <div className='music-details'>
          <h1>{music.title}</h1>
          {/* <audio controls controlsList='nodownload'>
        {/* <source src='../src/assets/Shape-Of-You.mp3' /> }
        <source src={music.audio} />
      </audio> */}
        </div>
      </div>
    </NavLink>
  );
}

export default Musics;
