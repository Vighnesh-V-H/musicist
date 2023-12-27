import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Pro from "./Pages/Pro";
import Support from "./Pages/Support";
import Application from "./Pages/Application";
import { MusicProvider } from "./Context/MusicProvider";
// import Music from "./Components/Music";
import MusicList from "./Components/MusicList";
import Music from "./Components/Music";
import AddSong from "./Pages/AddSong";
import Playlist from "./Pages/Playlist";

function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<Login />} />
          <Route path='support' element={<Support />} />
          <Route path='pro' element={<Pro />} />
          <Route path='app' element={<Application />}>
            <Route path='music/:id' element={<Music />} />
          </Route>
          <Route path='/addsong' element={<AddSong />} />
          {/* <Route path='/playlist' element={<Playlist />}></Route> */}
        </Routes>
      </BrowserRouter>
    </MusicProvider>
  );
}

export default App;
