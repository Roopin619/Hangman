import React, { Component } from 'react';
import './AlphaButtons.css';

class AlphaButtons extends Component {
    render() {
        return (
            <div className="AlphaButtons">
                {this.props.buttonValues.split("").map(ltr => (
                    <button
                        key={ltr}
                        value={ltr}
                        onClick={this.props.handleGuess}
                        disabled={this.props.guessed.has(ltr)}
                    >
                        {ltr}
                    </button>
                ))}
            </div>
        );
    }
}

export default AlphaButtons;