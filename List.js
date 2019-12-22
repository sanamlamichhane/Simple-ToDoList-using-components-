import React from 'react';



const List = (props) => (
  
  <div>
    
       <p>Hello, Welcome to Cogent Health!</p>
       {props.items.map((item, index) =>
       <ul>
       <li key={index}>{item}
      <button onClick = {() => props.edit(index)} className="myListButton">Edit</button>
      <button onClick = {() => props.delete(index)} className="myListButton" >Delete</button>
       </li>
    
  </ul>
   
  )}
  
  </div>
)


export default List;