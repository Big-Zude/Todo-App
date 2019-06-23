import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: [],
    }
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value })
  }

  addNote() {
    if (this.state.noteText === '') { return }
    let notesArr = this.state.notes
    notesArr.push(this.state.noteText)
    this.setState({ noteText: '' })
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let notesArr = this.state.notes
      notesArr.push(this.state.noteText)
      this.setState({
        noteText: ''
      })
    }
  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1)
    this.setState({ notes: notesArr })
  }
  //   checkComplete(){


  //  }

  render() {
    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val}
        deleteMethod={() => this.deleteNote(key)} />
    })


    return (
      <div className="container" >
        <div className="header" > Simple Todo App </div>

        {/* <div className = "btn" onClick={this.addNote.bind(this)}>Add</div>
            <input type = "text"
                  ref = {((input) => {this.textInput = input})}
                  className="textInput" placeholder="enter todo..."
                  value={this.state.noteText}
                  onChange={noteText=>this.updateNoteText(noteText)}
                  onKeyPress={this.handleKeyPress.bind(this)}
                  /> */}
        <ul>
          <li>Cars
                        <label>
              <input type="checkbox" id="mainList" />
            </label>
            <ol>
              <li>BMW M6<input type="checkbox" className="Option" /></li>
              <li>BMW M3<input type="checkbox" className="Option" /></li>
            </ol>
          </li>

        </ul>

        <ul>
          <li>Games <input type="checkbox" />
            <ol>
              <li><input type="checkbox" className="Option" />Football</li>
              <li><input type="checkbox" className="Option" />Monopoly</li>
            </ol>
          </li>

        </ul>

      </div>

    );
  }
}
export default App;
