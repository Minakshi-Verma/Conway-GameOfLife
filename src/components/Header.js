import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css"

const Header = ()=>{
    return(
        < div className ="header">          
            <div>
                <Link className = "link" to = {"/home"}>Home</Link>
            </div>    
            <div>
                <Link className = "link" to = {"/about"}>About</Link>
            </div>          
            <div>
                <Link className = "link" to = {"/game"}>Game</Link>
            </div>
            
        </div>
    )
}

export default Header
