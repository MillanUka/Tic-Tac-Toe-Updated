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
        return (
            <div>
                <div>
                <Tile index={0} playerChar={this.board[0][0]} board={this.board} />
                <Tile index={1} playerChar={this.board[0][1]} board={this.board} />
                <Tile index={2} playerChar={this.board[0][2]} board={this.board} />
                </div>
                <div>
                <Tile index={3} playerChar={this.board[1][0]} board={this.board} />
                <Tile index={4} playerChar={this.board[1][1]} board={this.board} />
                <Tile index={5} playerChar={this.board[1][2]} board={this.board} />
                </div>
                <div>
                <Tile index={6} playerChar={this.board[2][0]} board={this.board} />
                <Tile index={7} playerChar={this.board[2][1]} board={this.board} />
                <Tile index={8} playerChar={this.board[2][2]} board={this.board} />
                </div>
            </div>
        );
    }
}

export default Board;
