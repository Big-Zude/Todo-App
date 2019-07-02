import React, {Component} from 'react';

class Notes extends Component {
    render() {
        return (
            <div className="note" onClick={this.props.deleteMethod}>
                {this.props.text}
            </div>

        );
    }
}

export default Notes;
