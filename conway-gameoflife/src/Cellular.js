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
    interval:100,
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

// adding runIteration function to set the game-rules of neighbors allowed
runIteration() {
    let newAutomaton = this.makeEmptyAutomaton()

    for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.cols; x++) {
            let neighbors = this.calculateNeighbors(this.automaton, x, y);
            if (this.automaton[y][x]) {
                if (neighbors === 2 || neighbors === 3) {
                    newAutomaton[y][x] = true;
                } else {
                    newAutomaton[y][x] = false;
                }
            } else {
                if (!this.automaton[y][x] && neighbors === 3) {
                    newAutomaton[y][x] = true;
                }
            }
        }
    }
    this.automaton = newAutomaton;
    this.setState({ cells: this.makeCells() });

    this.timeoutHandler = window.setTimeout(() => {
        this.runIteration();
    }, this.state.interval);
}

//onclick handler to update the simulation speed
handleIntervalChange = (event) => {
    this.setState({ interval: event.target.value });
}
//onclick handlers to start the game

    runGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    };

//onclick handlers to stop the game

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
        window.clearTimeout(this.timeoutHandler);
        this.timeoutHandler = null;
        }
    }

// onClick handler to clear the game board

    clearGame = () => {
        this.automaton = this.makeEmptyAutomaton();
        this.setState({ cells: this.makeCells() });
    }   


// onclick handler to generate randomGame on the board
    randomGame = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.automaton[y][x] = (Math.random() >= 0.5);
            }
        }

        this.setState({ cells: this.makeCells() });
    }


//calculate the number of Neighbor cells at point x and y 

    calculateNeighbors(automaton, x, y){
        let neighbors = 0
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && automaton[y1][x1]) {
                neighbors++
            }
        }

        return neighbors
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
            Update every{" "}
            <input className= "input"
            value={this.state.interval}
            onChange={this.handleIntervalChange}            
            />{" "}
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
            <button className="button" onClick={this.randomGame} >
              Random
            </button>        
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