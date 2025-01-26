import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
const Navbar = () => {
    const [loginCheck, setLoginCheck] = useState(false);
    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };
    useEffect(() => {
        console.log(loginCheck);
        checkLogin();
    }, [loginCheck]);
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item px-3" style={{ textAlign: "center" }}>
            <button type='button' className="btn btn-light">
              <Link to='/'>Trip Planner Board</Link>
            </button>
              </li>
              {!loginCheck ? (<li className='nav-item px-3'>
                <button type='button' className="btn btn-light">
                      <Link to='/login'>Login</Link>
                    </button>
                  </li>) : (<li className='nav-item px-3'>
                  <button type='button' className="btn btn-light" onClick={() => {
                auth.logout();
            }}>Logout</button>
                  </li>)}

            </ul>
      </div>
    </nav>);
};
export default Navbar;
