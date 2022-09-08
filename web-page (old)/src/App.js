import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './App.css';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items: [],
        DataisLoaded: false
      };
    }
  componentDidMount() {
    fetch("/api")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
    }
  render(){
  return (
    <div class="body">
    <div class="division">
      <img class="img-filt" alt='img'></img>
    <div class="contenidos">
        <div class="XD"><b>bumpichimp632</b></div>
        <div class="info">
            <li><b>&nbsp;&nbsp;237<br/><span class="text-span">Follows</span></b></li>
            <li><b>&nbsp;&nbsp;300k<br/><span class="text-span">Followers</span></b></li>
            <li><span class="cont-likes"><b>3K</b></span><span class="text-span"><FontAwesomeIcon icon={['fas', 'fa-heart']}/></span></li>
        </div>
        <div class="div-bot">
            <button class="boton"><FontAwesomeIcon icon={['fas', 'fa-plis']}/></button>
        </div>
      </div>
      </div>
      </div>
  );
}}



export default App;
