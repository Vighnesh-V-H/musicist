import { useNavigate } from "react-router-dom";
import { useMusic } from "../Context/MusicProvider";
import "./addSong.css";

import React, { useState } from "react";

const AddSong = ({ onAddSong }) => {
  const [songName, setSongName] = useState("");
  const [songUrl, setSongUrl] = useState("");
  const [songImage, setSongImage] = useState("");
  const navigate = useNavigate();

  const { addSong } = useMusic();

  async function handleAddSong() {
    // Validate input fields before adding the song
    if (
      songName.trim() === "" ||
      songUrl.trim() === "" ||
      songImage.trim() === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Create a new song object
    const newSong = {
      title: songName,
      audio: songUrl,
      imageUrl: songImage,
    };
    await addSong(newSong);

    // Clear input fields after adding the song
    setSongName("");
    setSongUrl("");
    setSongImage("");
    navigate("/app");
  }

  return (
    <div className='add-song-form'>
      <h2>Add a Song</h2>
      <div className='form-group'>
        <label>Song Name:</label>
        <input
          type='text'
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Song URL:</label>
        <input
          type='text'
          value={songUrl}
          onChange={(e) => setSongUrl(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Song Image URL:</label>
        <input
          type='text'
          value={songImage}
          onChange={(e) => setSongImage(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <button className='add-button' onClick={handleAddSong}>
          Add Song
        </button>
      </div>
    </div>
  );
};

export default AddSong;
