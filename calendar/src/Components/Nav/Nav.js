import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
        <div className='Logo'>
            IMPEKABLE  
          </div>
          <div className='NavList'>
              <div className='NavListItem'>Home</div>
              <div className='NavListItem'>Dashboard</div>
              <div className='NavListItem'>Inbox</div>
              <div className='NavListItem'>Products</div>
              <div className='NavListItem'>Invoices</div>
              <div className='NavListItem'>Customers</div>
              <div className='NavListItem'>Chat Room</div>
              <div className='NavListItem'>Calendar</div>
              <div className='NavListItem'>Help Center</div>
              <div className='NavListItem'>Settings</div>
          </div>
     
    </div>
  );
}

export default Nav;