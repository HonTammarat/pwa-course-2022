import App from './App';
import Profile from './Profile';
import MiniGame from './MiniGame';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//index.js --> Router.js --> App.js

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<App/>} />
                <Route path = "/profile" element = {<Profile />} />
                <Route path = "/minigame" element = {<MiniGame />} />
                <Route path = "/login" element = {<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;