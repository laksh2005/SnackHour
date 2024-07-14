import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);
        //console.log("Parent Contructor")
    }

    componentDidMount(){
        //console.log("Parent component did Mount")
    }

    render(){
        //console.log("Parent Render")
        return(
        <div>
            <h1>About 📋</h1>
            <h2>This is me learning Routing in React JS</h2>
            <UserClass name={"Laksh Nijhawan (class)"} location={"New Delhi (class)"}/>
        </div>
    );
    }
}


export default About;