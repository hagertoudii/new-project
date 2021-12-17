import React from 'react'
import ReactDOM from 'react-dom'
import navbar from './navbar.css'
function Navbar() {
    return(
        <> 
            <div class='navbar'>
                <div class='container'>
                    <nav>
                        <h1 class='logo'>BOKDOC.. </h1>
                        <div class='links'>
                            <ul class='link-items'>
                                <li class='item'>Home</li>
                                <li class='item'>Book</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar;