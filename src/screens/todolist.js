import React, { Component } from 'react'
import TodoItems from './todoitems';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Col , Card } from 'react-materialize';
class TodoList extends Component {
        constructor(props){
                
            super(props);

            this.state = {
                    items : []
            }
            

        }

    addItem(event){

            event.preventDefault();
            if(this._inputElement.value !== "")
            var newItem = {
                    text : this._inputElement.value,
                    key : Date.now()
            };
            this.setState((prevState) => {

                return {
                    items: prevState.items.concat(newItem)

                }

            })
            this._inputElement.value = " ";
           console.log(this.state.items);

    }
    deleteItem(key){
            var filteredItems = this.state.items.filter(function(item){

                    return (item.key !== key )

            })
            this.setState({

                    items : filteredItems

            })

    }
  render() {
    return (
      <div className="todoListMain">
        <div className="container">
        <Col m={6} s={12}>
            <Card> 
                    <div className="header">
                        <form onSubmit={this.addItem.bind(this)}>
                                <input ref={(a)=>this._inputElement = a } placeholder="enter task" />
                                <FloatingActionButton type="submit">
                                    <ContentAdd />
                                </FloatingActionButton>
                                {/* <button type="submit"> add </button> */}
                        </form>

                    </div>
                    <TodoItems entries={this.state.items} delete={this.deleteItem.bind(this)} />
            </Card>
        </Col>
            
        </div>
      </div>
    )
  }
}
export default TodoList;