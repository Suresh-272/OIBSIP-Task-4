import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className = "nav">
            <Link to="/" className="site-title"> Burn <span> Out</span> </Link>
            <ul>
                <li><Link to='/register' className='btn btn-success w-100 rounded-0'>Register</Link></li>

            </ul>
    </div>

  ) 
}

export default Navbar