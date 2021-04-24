import React,{Component} from "react";


class Eventh extends Component{

constructor(){

super()
this.state={
text:"we are here"
}

this.increment=this.increment.bind(this)


}

increment(){

this.setState({

text:"welcome"

 })


}


render(){
    return(


<div>
    <div>

        <h1>Message: {this.state.text}</h1>
            {/* <button onClick={this.increment.bind(this)}>Change the text</button> */}

            <button onClick={this.increment}> Change the text</button>
    </div>
</div>


    )
}




}

export default Eventh;