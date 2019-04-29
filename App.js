/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login/login';
import EmpList from './components/EmployeeList/EmpList';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import { createStackNavigator,createAppContainer } from 'react-navigation';

//Store setup for redux
const initialState={
            username:'',
            password:'',
            
}
const reducer = (state = initialState,action) => {
  console.log(action.text)
   switch(action.type)
   {
     case  'UserNameChange': return { ...state, username:action.text }
     case  'PasswordChange': return { ...state, password:action.text }
     case 'getUserName': return { username: store.getState.username }  
   }
   return state
}
const store = createStore(reducer)

//Stack navigator for navigation 
MainNavigator =  createStackNavigator({
  
  Login: { screen:Login },
  Employee: { screen: EmpList }


})

const Application = createAppContainer(MainNavigator);


class App extends Component<Props> {
  render() {
    
    return (
      <Provider store={store}>
        <Application/>
      </Provider>
    );
  }
}

export default App;


//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
