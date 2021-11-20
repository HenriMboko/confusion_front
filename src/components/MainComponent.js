
import { Component } from 'react';
import Menu from './Menu';
import {Dishes} from '../shared/dishes';
import Dishdetail from './DishesDetailsComponent';
import {Comments} from '../shared/comment';
import Header from './HeaderComponent';
import Footer from './Footer';
import Home from './HomeComponent';
import {Switch, Route , Redirect} from 'react-router-dom';




  class MainComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        dishes : Dishes,
        comments : Comments,

      }
    }

    render(){
     
      const HomePage = () =>{
        return(
          <Home />
        );
      }

      return (
        <div>
          <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={() =><Menu dishes={this.state.dishes}/>} />
              <Redirect to="/home" />
            </Switch>
           <Footer />
        </div>
 
      );
    }
  }

export default MainComponent;
