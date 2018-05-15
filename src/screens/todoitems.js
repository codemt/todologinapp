import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import { Icon } from 'react-materialize';
 class TodoItems extends Component {
     createTasks(item){

            return <ListItem onClick={()=>this.delete(item.key)} style={{backgroundColor:'rgb(0, 188, 212)',color:'white'}} key={item.key}> {item.text}</ListItem>
           
     }
     delete(key){
        this.props.delete(key);

     }
  render() {
      var todoEntries = this.props.entries;
      var ListItems = todoEntries.map(this.createTasks.bind(this));
    return (
     
                        <List className="theList">  
                        {ListItems}
                        
                      </List>
            
          
      
    )
  }
}
export default TodoItems;