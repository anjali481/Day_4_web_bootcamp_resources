
import React,{Component} from "react";
import './App.css';
import Message from './Components/Message';
import Name from './State_example'
import Click from './Components/Eventhandling'
import Counter from './Components/Counter';

import Eventh from './Components/eventbinding';





class App extends Component{

  render(){

      const msg="Welcome to the Bootcamp";


      return (

      <>

{/* <Message mymsg={msg} ></Message> */}
 

  
     {/*    <h1> Counter</h1>

        <Counter/>  */}
       

        
        {/*  <h1>Click function</h1>

        <Click></Click> */}


        <h2>Event</h2>

        <Eventh></Eventh>









        </>
      )
      }


}

export default App;
