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
    this.automaton = this.makeEmptyAutomaton()
  }

  state = {
    cells: [],
    interval:50,
    isRunning: false 
  } 

makeEmptyAutomaton(){
    let automaton =[]
    for(let y=0;y<this.rows;y++){
        automaton[y]=[]
        for (let x=0; x< this.cols;x++){
            automaton[y][x]= false;
        }
    }
    return automaton
}

//   Add makeCells function to create newcells
  makeCells() {
    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.automaton[y][x]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
  }

//getElementOffset function

  getElementOffset() {
    const rect = this.automatonRef.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop,
    };
  }

//  Add onchange handler 
    handleClick = (e) => {
    const elemOffset = this.getElementOffset()
    const offsetX = e.clientX - elemOffset.x
    const offsetY = e.clientY - elemOffset.y

    const x = Math.floor(offsetX / CELL_SIZE);
    const y = Math.floor(offsetY / CELL_SIZE);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.automaton[y][x] = !this.automaton[y][x]
    }

    this.setState({ cells: this.makeCells() })
  }

  render() {
    const { cells, interval, isRunning } = this.state;
    return (
        // Adds the board
      <div>      
        <div
          className="Twodspace"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
          onClick={this.handleClick}
          ref={(n) => {
            this.automatonRef = n;
          }}
      
        >
          {cells.map((cell) => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`} />
          ))}       
        </div>

        {/* ----Adds the controls--- */}

        <div className="controls">
          <div className="updateInput">
            Update every 
            <input className= "input"
            value={this.interval}
            onChange={this.handleIntervalChange}            
            />
            msec           
          </div>
          <div className="buttons"> 
          {isRunning ? (              
            <button className="button" onClick={this.stopGame}>
              Stop
            </button> 
            ) : (          
            <button className="button" onClick={this.runGame} >
              Run
            </button>
             
            )}                     
         
            <button className="button" onClick={this.clearGame} >
            Clear
            </button>
          </div> 
        </div>               
      </div>
    )
  }
}

export default Cellular;