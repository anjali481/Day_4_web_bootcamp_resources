
import { render } from "@testing-library/react";
import React,{Component} from "react";





//passing the class Components 
//in fun com they are receive via this instance
/* class Message extends Component{

render(){

    return(

            <h1> {this.props.mymsg}   </h1>

    )



   
}
}
 */



const Message=(props)=>{

return(
<div>
    <h1>we in functional component</h1>
    <h1>{props.mymsg}</h1>

</div>

    
)




}



//pssing to a functional component 






export default Message;