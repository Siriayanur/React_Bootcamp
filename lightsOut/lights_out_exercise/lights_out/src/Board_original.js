import React, {Component} from "react";
import './Board.css';
import Cell from './Cell';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25
    };
    constructor(props) {
        super(props);

        // TODO: set initial state
        this.state = {
            hasWon: false,
            board: this.createBoard()
        };
    }

    /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

    createBoard() {
        let board = [];
        // TODO: create array-of-arrays of true/false values
        for (let i = 0; i < this.props.nrows; i++) {
            let row = [];
            for (let j = 0; j < this.props.ncols; j++) {
                row.push(Math.random() < this.props.chanceLightStartsOn)
            }
            board.push(row);
        }
        return board
    }

    /** handle changing a cell: update board & determine if winner */

    flipCellsAround(coord) {
        
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);


        function flipCell(a, b) {
            // if this coord is actually on board, flip it

            if (a >= 0 && b < ncols && b >= 0 && a < nrows) {
                board[a][b] = !board[a][b];
            }
        }

        // TODO: flip this cell and the cells around it
        flipCell(y, x);

        // win when every cell is turned off
        // TODO: determine is the game has been won

        // this.setState({board, hasWon});
    }


    /** Render game board or winning message. */

    render() {
        let tblBoard = [];


        for (let i = 0; i < this.props.nrows; i++) {
            let currentrow = [];
            for (let j = 0; j < this.props.ncols; j++) {
                let coord = `${i}-${j}`;
                currentrow.push(<Cell key={coord} isLit={this.state.board[i][j]} flipCellsAroundMe={ () => this.flipCellsAround(coord)}/>)
        
            }
            tblBoard.push(<tr key={i}>{ currentrow}</tr>);
        }


        return (
            <table className="Board">
                <tbody>
                    {tblBoard}
                </tbody>
            </table>
        );
    }
}


export default Board;