import React, { Component } from 'react';
import fire from '../config/fire';
import { Button , Breadcrumb , MenuItem } from 'react-materialize';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import TodoList from './todolist';
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
          <div>
               
               <RaisedButton onClick={()=>this.logout()} label="Logout" secondary={true}  />

                  <TodoList />
                   
            </div>

        );

    }

}
export default Home;