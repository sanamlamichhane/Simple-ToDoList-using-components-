import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      term: '',
      items: [],
      actionEdit:''
    };
  }
  
 

  onChange = (event) => {
    
    this.setState({ term: event.target.value });
  }
  

  onSubmit = (event) => {
    event.preventDefault();
    
    const {actionEdit,term} = this.state;  //destructuring 
    console.log(actionEdit);
    if(actionEdit.toString()){
      let newItems =[...this.state.items]
      newItems[actionEdit]=term;
      this.setState({
        items:[...newItems],
        actionEdit:'',
        term:''
      });
    }
    else{
      
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
      actionEdit:''
    });
  }
  }
  

    
  

  delete= (index)=>
  {
    let items =this.state.items;

    console.log(this.state.items);
    console.log(index);

    items.splice(index,1);

    console.log("changed",items)
    this.setState({
      items:items
    });
  }

  edit =(index)=>
  {
      let item = this.state.items[index];
    
      
    console.log("edititititit");
    
     this.setState({
       
      term:item,
      actionEdit: index
      
      
       
   });

}

  
 

  render() {
    return (
      <div>
        <h2>A simple todolist .</h2>
        <form className="App" onSubmit={this.onSubmit}>
          <label className ="mytask" >Task</label>
          <input value={this.state.term} className="your"  placeholder ="Enter your Task"  onChange={this.onChange} /><br/>
          
          <button className="mybutton" >Add Task</button>
        </form>
        <List items={this.state.items}
       
        edit={this.edit} 
        delete= {this.delete}
        className="myListButton"
        >
        </List>
      </div>
    );
  }
}