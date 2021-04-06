import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';
/*
    AIM :
        Aim is to put all the lights of the board OFF
        whenever a Cell is clicked the Cell gets on / off --> ! (previous state)
        and along with it,its neighbouring cells will also turn on /off

 * This Component has default props :
 *      - rows : number of rows in the board
 *      - cols : number of cols in the board
 *      - initialCellLights : the probability of a Cell being lit up at Start in the board
 * 
 *  this is major component that maintains the state of
 *    -> if the user is a Winner ( when all lights are off --> False) --- hasWon
 *    -> how the state of board changes when the user clicks on the Cell and turns it on or off
 */


class Board extends Component {
    static defaultProps = {
        initialCellLights: 0.25,
        rows: 5,
        cols:5
    };
    constructor(props) {
        super(props);
        this.state = {
            boards: this.createNewBoard(),
            hasWon : true
        };
    }
    // It will create a 2D bool array for us : representing the Cells light condition
                                                //in the board
    createNewBoard() {
        
        let board = [];
        for (let i = 0; i < this.props.rows; i++){
            let currentRow = [];
            for (let j = 0; j < this.props.cols; j++){
                currentRow.push(Math.random() < this.props.initialCellLights)
            }
            board.push(currentRow);
        }
        return board;
    }


    flipCellsAround(coordinate) {
        let [x,y] = coordinate.split("-").map(Number);
        let board = this.state.boards;
        let { nrows, ncols } = this.props;

        function flipIndividualCell(a,b){
            if (a < nrows && a >= 0 && b < ncols && b >= 0)
                board[a][b] = !board[a][b];
        }

        flipIndividualCell(x, y);
        flipIndividualCell(x, y-1);
        flipIndividualCell(x, y+1);
        flipIndividualCell(x-1, y);
        flipIndividualCell(x+1, y);

        //We just manipulated  the value but never setState
        this.setState({ board : board});
    }

    render() {
        let tableBoard = [];
        for (let i = 0; i < this.props.rows; i++){
            let currentRow = [];
            for (let j = 0; j < this.props.cols; j++){
                let coordinate =`${ i}-${j }`;
                currentRow.push(<Cell key={coordinate} isLit={this.state.board} flipCellsAroundMe={() => this.flipCellsAround(coordinate)}/>)
            }
            tableBoard.push(<tr key="${i}">{ currentRow}</tr>);
        }
        return (
            <div className="Board">
                <table>
                    <tbody>
                        {tableBoard}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Board;