import { useParams } from "react-router-dom";
import { useMusic } from "../Context/MusicProvider";
import { useEffect, useRef, useState } from "react";
import styles from "./music.module.css";
import Spinner from "./Spinner";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";
import { CgPlayListCheck } from "react-icons/cg";

function Music() {
  // console.log(id);'//
  const { id } = useParams();
  const { getMusic, currentMusic, isLoading } = useMusic();
  const [isFavourite, setIsFavourite] = useState(false);
  const [isAddedPlayList, setIsAddedPlayList] = useState(false);

  function handleFav() {
    setIsFavourite((isFavourite) => !isFavourite);
  }

  useEffect(
    function () {
      getMusic(id);
    },
    [id]
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      togglePlayPause();
    }
  };

  useEffect(() => {
    // Add event listener for keydown when the component mounts
    window.addEventListener("keydown", handleKeyDown);
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if the audio element is present
      if (!audioRef.current) return;

      // Get the current time of the audio
      let currentTime = audioRef.current.currentTime;

      // Handle left arrow key
      if (e.key === "ArrowLeft") {
        currentTime -= 5; // Go back 5 seconds
      }

      // Handle right arrow key
      if (e.key === "ArrowRight") {
        currentTime += 5; // Go forward 5 seconds
      }

      // Update the audio element's current time
      audioRef.current.currentTime = currentTime;
    };

    // Attach the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleAddPlaylist(e) {
    e.preventDefault();
    setIsAddedPlayList((isAddedPlayList) => !isAddedPlayList);
    console.log(currentMusic.id);
  }

  if (isLoading)
    return (
      <div style={{ color: "white" }} className={styles.music}>
        <Spinner />;
      </div>
    );
  if (!currentMusic.imageUrl) return null;

  return (
    <div style={{ color: "white" }} className={styles.music}>
      <img src={currentMusic.imageUrl} alt={currentMusic.title} />
      <div className={styles.musicmenu}>
        <h1>{currentMusic.title}</h1>
        <h2 onClick={handleFav}>
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </h2>
        {/* <h2 onClick={handleAddPlaylist}>
          {isAddedPlayList ? <CgPlayListCheck /> : <RiPlayListAddFill />}
        </h2> */}
      </div>
      <div className={styles.audiocontainer}>
        <audio
          className={styles.audio}
          src={currentMusic.audio ? currentMusic.audio : ""}
          controls
          controlsList='nodownload'
          ref={audioRef}></audio>
      </div>
    </div>
  );
}

export default Music;
