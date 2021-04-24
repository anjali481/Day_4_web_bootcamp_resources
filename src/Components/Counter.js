import React,{Component} from "react";


class Counter extends Component{

constructor(props){

super(props)



    this.state={
        count:0
            }



}

increment(){


/* this.setState({
   count:this.state.count+1
   
})
  */






 this.setState(prevState=>({


count:prevState.count+1

    }))
 


console.log(this.state.count)


}


incrementthrice(){
this.increment()
this.increment()
this.increment()

}


render(){
    return(


    <div>


        <div>

            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>this.incrementthrice()}>Increment</button>
        </div>



    </div>

    )
}




}

export default Counter;