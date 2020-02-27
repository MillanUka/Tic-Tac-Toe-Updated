import React, { Component } from "react";
import { MIN_PLAYER, MAX_PLAYER, checkScore, getBestMove, checkIfTilesLeft, BLANK } from "../Engine.js";

class Tile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: false,

        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { playerChar } = this.props;
        return (
            <button id={this.index} onClick={this.handleClick} disabled={this.state.isDisabled}>
                {playerChar}
            </button>
        )
    }

    getPlayerChar() {
        return this.playerChar;
    }

    handleClick() {
        const { index, board, parent, playerChar } = this.props;

        var row = Math.floor(index / 3);
        var col = Math.floor(index % 3);

        if (board[row][col] !== BLANK) {
            alert("You can't place one there!")
            return;
        }

        board[row][col] = MIN_PLAYER;
        this.setState({ isDisabled: true });
        this.playerChar = MIN_PLAYER;

        var bestMove = getBestMove(board);
        console.log(bestMove);
        var score = 0;
        if (bestMove.row !== null) {
            board[bestMove.row][bestMove.col] = MAX_PLAYER;

            score = checkScore(board);
        }

        parent.setState({ board: board });
        switch (score) {
            case 10:
                alert(MAX_PLAYER + " wins!");
                break;
            case -10:
                alert("You win!");
                break;
            case 0:
                console.log(board);
                if (!checkIfTilesLeft(board))
                    alert("It's a tie.");
                break;
        }

        console.table(board);
    }
}

export default Tile;