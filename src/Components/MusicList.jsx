import { useMusic } from "../Context/MusicProvider";
// import Music from "./Music";
import Spinner from "./Spinner";
import styles from "./musiclist.module.css";
import Musics from "./Musics";

function MusicList() {
  const { musics, revMusic, isLoading } = useMusic();

  // if (isLoading)
  //   return (
  //     <ul className={styles.musiclist}>
  //       <Spinner />
  //     </ul>
  //   );

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5rem",
        paddingLeft: "6vw",
        paddingTop: "4rem",
        height: "70vh",
        overflowY: "scroll",
        width: "fitContent",
      }}
      className={styles.musiclist}>
      {revMusic.map((music) => (
        <Musics music={music} key={music.id} />
      ))}
    </ul>
  );
}

export default MusicList;
