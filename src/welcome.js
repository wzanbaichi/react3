import React from "react";

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
        setInterval(()=>{
            this.setState({
                date:new Date()
            })
        })
    }


    render(){
        return (
            <div>
            <h1>hello,world</h1>
            <h2>{this.state.date.toString()}</h2>
        </div>
        )
    }
}
export default Welcome