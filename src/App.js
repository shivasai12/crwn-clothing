import './App.css';
import React from "react";
import  HomePage  from "./pages/homepage/homepage.component.jsx";
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-sign-up.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from "./redux/user/user.actions";

const HatsPage =() =>(
  <div>
     <h1>Hats Page</h1>
  </div>
)

class App extends React.Component{
  
  unSubscribeFromAuth= null;
  

  componentDidMount(){
     const {setCurrentUser}=this.props;

    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
            
              id: snapshot.id,
              ...snapshot.data()
            
          });
        });
        
      }
      setCurrentUser(userAuth);

    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();


  }
  render(){

    return (  
      <div>
      <Header/> 
       <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}
const mapDispatchToProps =  dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
