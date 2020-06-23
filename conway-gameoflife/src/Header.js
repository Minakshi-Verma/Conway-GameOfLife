import React from 'react';
import {Link} from 'react-router-dom';
import About from './About'
import "./Header.css"

const Header = ()=>{
    return(
        < div className ="header">
            <div>
                <h1>Conway: Game of life</h1>
            </div>
            <div>
                <Link className = "link link1" to = {"/about"}>About</Link>
            </div>
            <div>
                <Link className = "link" to = {"/game"}>Game</Link>
            </div>
            
        </div>
    )
}

export default Header
