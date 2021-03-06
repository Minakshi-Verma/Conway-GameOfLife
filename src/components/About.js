import React from "react";
import "./About.css"


const About = ()=>{
    
    return(
        <div className= "about">
           <div className= "about1">          
                <h2>Introduction</h2>
                <p>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.</p>
           </div> 
           <div className= "about2">           
           <h2>Game rules</h2>                   
           <ul>
               <li>
                   Any live cell with two or three live neighbours survives.
               </li>
               <li>
                  Any dead cell with three live neighbours becomes a live cell. 
               </li>
               <li>
                   All other live cells die in the next generation. Similarly, all other dead cells stay dead.
               </li>           
           </ul>
           </div> 
            
           
        </div>    
    )
}
 export default About