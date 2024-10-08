import './Nav.css';
import Home from '../../Img/Path 357.svg';
import Dashboard from '../../Img/4.PNG';
import Inbox from '../../Img/Path 358.svg';
import Products from '../../Img/3.PNG';
import Invoices from '../../Img/Path 102.svg';
import Customers from '../../Img/2.PNG';
import ChatRoom from '../../Img/1.PNG';
import Calendar from '../../Img/Path 149.svg';
import HelpCenter from '../../Img/Path 107.svg';
import Settings from '../../Img/Path 108.svg';

function Nav() {
  return (
    <div className="Nav">
        <div className='Logo'>
            IMPEKABLE  
          </div>
          <div className='NavList'>
              <div className='NavListItem'> <img src={Home} alt="Home" />Home</div>
              <div className='NavListItem'><img src={Dashboard} alt="Dashboard" />Dashboard</div>
              <div className='NavListItem'><img src={Inbox} alt="Inbox" />Inbox</div>
              <div className='NavListItem'><img src={Products} alt="Products" />Products</div>
              <div className='NavListItem'><img src={Invoices} alt="Invoices" />Invoices</div>
              <div className='NavListItem active'><img src={Customers} alt="Customers" />Customers</div>
              <div className='NavListItem'><img src={ChatRoom} alt="ChatRoom" />Chat Room</div>
              <div className='NavListItem'><img src={Calendar} alt="Calendar" />Calendar</div>
              <div className='NavListItem'><img src={HelpCenter} alt="HelpCenter" />Help Center</div>
              <div className='NavListItem'><img src={Settings} alt="Settings" />Settings</div>
          </div>
     
    </div>
  );
}

export default Nav;