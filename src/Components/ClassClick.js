import React,{Component} from "react";



class ClassClick extends Component{





    clickhandler(){


console.log("Yess!! Button is clicked")

    }
    render(){

        return(

            <div>
<button onClick={this.clickhandler}>Click me</button>
            </div>
        )
    }





}

export default ClassClick