import { useState } from 'react';
import '../css/Userlist.css';

function Userlist () {
  const [trayStatus, setTrayStatus] = useState("open");
  const [xo,setXO] = useState("X");

  function onButtonClicked() {
    if(trayStatus === "open"){
      setTrayStatus("closed");
      setXO("O")
    }
    if(trayStatus === "closed"){
      setTrayStatus("open");
      setXO("X")
    }
  }

  return (
    <div className={"userlist "+trayStatus}>
      <div className="close-button" onClick={onButtonClicked}>{xo}</div>
    </div>
  )
}

export default Userlist;