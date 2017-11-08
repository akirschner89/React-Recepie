import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav>
                <h2><a>Recipe App</a></h2>
                {/* <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li> */}
                </nav>
            </header>
        )
    }
}

export default Navbar;