import React from "react";
import Cell from './Cell'
import "./Cellular.css";

const CELL_SIZE = 30;
const WIDTH = 900;
const HEIGHT = 600;

class Cellular extends React.Component {
  constructor() {
    super()
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
  }

  state = {
    cells: [] 
  } 
  render() {
    const { cells, interval, isRunning } = this.state;
    return (
      <div>      
        <div
          className="Twodspace"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
      
        >
          {cells.map((cell) => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`} />
          ))}       
        </div>

     

        <div className="controls">
          <div className="updateInput">
            Update every
            <input
            />
            msec
          </div>
          <div className="buttons">        
            <button className="button">
              Stop
            </button>          
            <button className="button" >
              Run
            </button>     
            
            <button className="button">
            Clear
            </button>
          </div>
        </div>
               
      </div>
    )
  }
}

export default Cellular;