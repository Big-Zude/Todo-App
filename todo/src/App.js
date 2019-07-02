import React,{Component} from 'react';
import Notes from './Notes';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      noteText:"",
      notes:[],
    }
  }

updateNoteText(noteText){
  this.setState({noteText: noteText.target.value})
}

addNote(){
  if(this.state.noteText==='')
  {return}
     let notesArr=this.state.notes
     notesArr.push(this.state.noteText)
     this.setState({noteText:''})
     this.textInput.focus();
}

handleKeyPress=(event)=>{
  if(event.key==='Enter'){
      let notesArr = this.state.notes
      notesArr.push(this.state.noteText)
      this.setState({noteText: ''
      })
  }
}

deleteNote(index){
    let notesArr=this.state.notes;
    notesArr.splice(index, 1)
    this.setState({notes:notesArr})
}
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res=>res.json())
     .then((todos)=>{
      this.setState({notes:todos})
      console.log(this.state.notes)
     })
     .catch(console.log)
    }

  render(){
         
          let notes = this.state.notes.map((val, key) => {
                return <Notes key = {key} text = {val} 
                deleteMethod = {() => this.deleteNote(key)}/>
              })

    return ( 
      <React.Fragment>
      <div className = "container" >
          <div className = "header" > 
          <h1>Simple Todo App</h1>
            <input type="text"
              ref={((input) => { this.textInput = input })}
              className="textInput" placeholder="enter todo..."
              value={this.state.noteText}
              onChange={noteText => this.updateNoteText(noteText)}
              onKeyPress={this.handleKeyPress.bind(this)} />
            <div className="btn" onClick={this.addNote.bind(this)}>Add
        {this.state.notes.map((todos) => (
          <div>
                <ul>
                  <li>{todos.title}</li>
                </ul>
          
            <h6 className="linethrough">
              {todos.completed &&
                <span>
                    <del>{todos.title}</del>  <span>Completed</span>
                </span>
                
              }
              {!todos.completed &&
                <span>
                  Pending
                </span>
              } 
              </h6></div>
        ))}
        </div>
        </div>
        </div>
        </React.Fragment> 
    );
  }
}  
export default App;