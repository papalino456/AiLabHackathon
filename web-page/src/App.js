import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div class="division">
      <img class="img-filt" src="https://c4.wallpaperflare.com/wallpaper/667/517/91/video-game-splatoon-2-inkling-splatoon-wallpaper-preview.jpg"></img>
    <div class="contenidos">
        <div class="XD"><b>bumpichimp632</b></div>
        <div class="info">
            <li><b>&nbsp;&nbsp;237<br><span class="text-span">Follows</span></br></b></li>
            <li><b>&nbsp;&nbsp;300k<br><span class="text-span">Followers</span></br></b></li>
            <li><span class="cont-likes"><b>3K</b></span><span class="text-span"><i class="fas fa-heart"></i></span></li>
        </div>
        <div class="div-bot">
            <button class="boton"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      </div>
  );
}

export default App;
