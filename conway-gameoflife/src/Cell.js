import React from "react";

const CELL_SIZE = 30;

const Cell = (props)=>{
    const { x, y } = props;
    return(
        <div
            className="Cell"
            style={{
            left: `${CELL_SIZE * x+1}px`,
            top: `${CELL_SIZE * y+1}px`,
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            }}
            />
    )
}
 export default Cell