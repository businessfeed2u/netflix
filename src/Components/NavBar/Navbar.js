import React from 'react'
import './Navbar.css'
import { Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <div className="items">
                
                    <Link to='/' className='list'>Home</Link>
                    <Link to='/movies' className='list'> TV Shows</Link>
                
            </div>

            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
            
        </div>
    )
}

export default Navbar
