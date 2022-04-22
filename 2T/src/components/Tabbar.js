import '../css/Tabbar.css';
import { Link } from 'react-router-dom';

function Tabbar(){
    return(
        <div className='tabbar stick-bottom'>
            <Link to='/' className='tabbutton'>
                Login
            </Link>
            <Link to='/main' className='tabbutton'>
                Main
            </Link>
            <Link to='/chathistory' className='tabbutton'>
                Chat
            </Link>
        </div>
    )
}

export default Tabbar;