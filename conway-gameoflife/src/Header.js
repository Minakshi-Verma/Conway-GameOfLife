import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css"

const Header = ()=>{
    return(
        < div className ="header">
            {/* <div>
                <h1>Conway: Game of life</h1>
            </div> */}
            <div>
                <Link className = "link" to = {"/home"}><strong>Home</strong></Link>
            </div>    
            <div>
                <Link className = "link" to = {"/about"}><strong>About</strong></Link>
            </div>          
            <div>
                <Link className = "link" to = {"/game"}><strong>Game</strong></Link>
            </div>
            
        </div>
    )
}

export default Header
