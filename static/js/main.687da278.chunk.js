(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),s=(a(14),a(15),a(1)),l=a(2),c=a(5),h=a(4),d=a(6),u=a(3);function f(e){for(var t=0;t<3;++t)for(var a=0;a<3;++a)if("-"===e[t][a])return!0;return!1}function b(e){for(var t=0;t<3;++t)for(var a=0;a<3;++a)if(e[t][0]===e[t][1]&&e[t][1]===e[t][2]){if("X"===e[t][0])return 10;if("O"===e[t][0])return-10}for(t=0;t<3;++t)for(a=0;a<3;++a)if(e[0][a]===e[1][a]&&e[1][a]===e[2][a]){if("X"===e[0][a])return 10;if("O"===e[0][a])return-10}for(t=0;t<3;++t)for(a=0;a<3;++a){if(e[0][0]===e[1][1]&&e[1][1]===e[2][2]){if("X"===e[0][0])return 10;if("O"===e[0][0])return-10}}for(t=0;t<3;++t)for(a=0;a<3;++a){if(e[2][0]===e[1][1]&&e[1][1]===e[0][2]){if("X"===e[2][0])return 10;if("O"===e[2][0])return-10}}return 0}function p(e,t,a){var r=b(e);if(10===r||-10===r)return r;if(!f(e))return 0;if(a){for(var n=-1/0,o=0;o<3;++o)for(var i=0;i<3;++i)if("-"===e[o][i]){e[o][i]="X";var s=p(e,t+1,!a);n=Math.max(n,s),e[o][i]="-"}return n}for(n=1/0,o=0;o<3;++o)for(i=0;i<3;++i)if("-"===e[o][i]){e[o][i]="O";s=p(e,t+1,!a);n=Math.min(n,s),e[o][i]="-"}return n}var v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={isDisabled:!1},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.playerChar;return n.a.createElement("button",{id:this.index,onClick:this.handleClick,disabled:this.state.isDisabled},e)}},{key:"getPlayerChar",value:function(){return this.playerChar}},{key:"handleClick",value:function(){var e=this.props,t=e.index,a=e.board,r=e.parent,n=(e.playerChar,Math.floor(t/3)),o=Math.floor(t%3);if("-"===a[n][o]){a[n][o]="O",this.setState({isDisabled:!0}),this.playerChar="O";var i=function(e){for(var t=-1e3,a={row:null,col:null},r=0;r<3;++r)for(var n=0;n<3;++n)if("-"===e[r][n]){e[r][n]="X";var o=p(e,0,!1);console.log(o),e[r][n]="-",o>t&&(a.row=r,a.col=n,t=o)}return a}(a);console.log(i);var s=0;switch(null!==i.row&&(a[i.row][i.col]="X",s=b(a)),r.setState({board:a}),s){case 10:alert("X wins!");break;case-10:alert("You win!");break;case 0:console.log(a),f(a)||alert("It's a tie.")}console.table(a)}else alert("You can't place one there!")}}]),t}(r.Component),m=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).props.board;return a.state={board:r},a.tiles=[],a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.board),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(v,{index:0,playerChar:this.state.board[0][0],board:this.state.board,parent:this}),n.a.createElement(v,{index:1,playerChar:this.state.board[0][1],board:this.state.board,parent:this}),n.a.createElement(v,{index:2,playerChar:this.state.board[0][2],board:this.state.board,parent:this})),n.a.createElement("div",null,n.a.createElement(v,{index:3,playerChar:this.state.board[1][0],board:this.state.board,parent:this}),n.a.createElement(v,{index:4,playerChar:this.state.board[1][1],board:this.state.board,parent:this}),n.a.createElement(v,{index:5,playerChar:this.state.board[1][2],board:this.state.board,parent:this})),n.a.createElement("div",null,n.a.createElement(v,{index:6,playerChar:this.state.board[2][0],board:this.state.board,parent:this}),n.a.createElement(v,{index:7,playerChar:this.state.board[2][1],board:this.state.board,parent:this}),n.a.createElement(v,{index:8,playerChar:this.state.board[2][2],board:this.state.board,parent:this})))}}]),t}(r.Component);var y=function(){var e=function(){for(var e=new Array(2),t=0;t<3;++t){e[t]=new Array(2);for(var a=0;a<3;++a)e[t][a]="-"}return e}();return n.a.createElement(n.a.Fragment,{className:"content"},n.a.createElement(m,{board:e}),n.a.createElement("footer",null,"Made my ",n.a.createElement("a",{href:"https://github.com/MillanUka"},"Millan Uka")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.687da278.chunk.js.map