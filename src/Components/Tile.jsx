import React, { Component } from "react";
import { MIN_PLAYER, MAX_PLAYER } from "../Engine.js";

class Tile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: false,
            
        }

        this.playerChar =  "-"
        this.handleClick = this.handleClick.bind(this);
        this.getPlayerChar = this.getPlayerChar.bind(this);
    }

    render() {
        return (
            <button id={this.index} onClick={this.handleClick} disabled={this.state.isDisabled}>
                {this.playerChar}
            </button>
        )
    }

    getPlayerChar() {
        return this.playerChar;
    }

    handleClick() {
        const { index, board, tiles, parent} = this.props;

        var row = Math.floor(index / 3);
        var col = Math.floor(index % 3);

        board[row][col] = MIN_PLAYER;
        console.log(parent);
        this.setState({ isDisabled: true});
        this.playerChar = MIN_PLAYER;

        console.log(tiles);
    }
}

export default Tile;