import React, { Component } from "react";
import Tile from "./Tile";

class Board extends Component {
    constructor(props) {
        super(props);

        const { board } = this.props;
        this.board = board;
        this.tiles = [];

        this.getPlayerOfTile = this.getPlayerOfTile.bind(this);
    }

    render() {
        var index = -1;
        return (
            <div>
                {this.board.map((row) => {
                    return row.map((col) => {
                        ++index;
                        var tile = <Tile key={index} index={index} board={this.board} tiles={this.tiles} parent={this} />
                        this.tiles.push(tile);
                        return tile;
                    })
                })}
            </div>
        );
    }

    getPlayerOfTile(index) {
        var row = Math.floor(index / 3);
        var col = Math.floor(index % 3);
        return this.board[row][col];
    }

}

export default Board;