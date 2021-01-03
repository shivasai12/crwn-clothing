import './App.css';
import React from "react";
import  HomePage  from "./pages/homepage/homepage.component.jsx";
import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-sign-up.component";
import {auth} from './firebase/firebase.utils'


const HatsPage =() =>(
  <div>
     <h1>Hats Page</h1>
  </div>
)

class App extends React.Component{
  constructor(){
    super();

    this.state={
      currentUser:null,
      unSubscribeFromAuth: null
    }
  }
  

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();

  }
  render(){

    return (  
      <div>
      <Header currentUser={this.state.currentUser}/> 
       <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
