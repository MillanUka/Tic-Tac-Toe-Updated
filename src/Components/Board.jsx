import React, { Component } from "react";
import Tile from "./Tile";

class Board extends Component {
    constructor(props) {
        super(props);

        
        const { board } = this.props;
        this.state = {
            board : board
        }
        this.tiles = [];
    }

    render() {
        console.log(this.state.board);
        return (
            <div>
                <div>
                <Tile index={0} playerChar={this.state.board[0][0]} board={this.state.board} parent={this}/>
                <Tile index={1} playerChar={this.state.board[0][1]} board={this.state.board} parent={this}/>
                <Tile index={2} playerChar={this.state.board[0][2]} board={this.state.board} parent={this}/>
                </div>
                <div>
                <Tile index={3} playerChar={this.state.board[1][0]} board={this.state.board} parent={this}/>
                <Tile index={4} playerChar={this.state.board[1][1]} board={this.state.board} parent={this}/>
                <Tile index={5} playerChar={this.state.board[1][2]} board={this.state.board} parent={this}/>
                </div>
                <div>
                <Tile index={6} playerChar={this.state.board[2][0]} board={this.state.board} parent={this}/>
                <Tile index={7} playerChar={this.state.board[2][1]} board={this.state.board} parent={this}/>
                <Tile index={8} playerChar={this.state.board[2][2]} board={this.state.board} parent={this}/>
                </div>
            </div>
        );
    }
}

export default Board;
