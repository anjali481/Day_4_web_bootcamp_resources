import React,{Component} from "react";

class Name extends Component{


constructor(){
super()
this.state={


    text:"How are you?"
}


}
//this method accepts the object which is nothing but the new state of the component

changename(){

this.setState({


text:"I am Fine"

})



}




render(){




    return (
        <>
    <h3> {this.state.text} </h3>
    <button onClick={()=>this.changename()}   type="button">Change  text</button>
    </>
    );
}





}

export default Name;