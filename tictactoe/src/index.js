import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/**
 */
class Square extends React.Component {
/**
 * @return {void}
 */
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

/**
 *
 */
class Board extends React.Component {
  /**
   * @param {number} i
   * @return {void}
   */
  renderSquare(i) {
    return <Square />;
  }

  /**
   * @return {void}
   */
  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

/**
 */
class Game extends React.Component {
  /**
   * @return {void}
   */
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root'),
);

