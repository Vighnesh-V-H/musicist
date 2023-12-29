import { createContext, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const MusicContext = createContext();

const BASE_URL = "https://vighnesh-v-h.github.io/musicist-api/data.json";

function MusicProvider({ children }) {
  const [musics, setMusics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMusic, setCurrentMusic] = useState({});

  useEffect(function () {
    async function fetchMusic() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        setMusics(data);
      } catch {
        alert("error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchMusic();
  }, []);

  async function getMusic(title) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${title}`);
      const data = await res.json();

      setCurrentMusic(data);
    } catch {
      alert("error");
    } finally {
      setIsLoading(false);
    }
  }

  async function addSong(newMusic) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        body: JSON.stringify(newMusic),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setMusics((music) => [...music, data]);
    } catch {
      alert("error ");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteSong(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(`${BASE_URL}/${id}`);

      setMusics((musics) => musics.filter((music) => music.id != id));
    } catch {
      alert("error.");
    } finally {
      setIsLoading(false);
    }
  }

  async function addToPlayList() {}

  const revMusic = [...musics].reverse();

  return (
    <MusicContext.Provider
      value={{
        musics,
        isLoading,
        getMusic,
        currentMusic,
        addSong,
        revMusic,
        deleteSong,
      }}>
      {children}
    </MusicContext.Provider>
  );
}

function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) throw new Error("Cities context was used outside");
  return context;
}

export { useMusic, MusicProvider };
