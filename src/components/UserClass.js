import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            userInfo: {
                name:"dummy",
                location:"default",
                avatar_url:"http://dummyurl/"
            }
        };
        //console.log(this.props.name +"Child Constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name +"Child component did Mount");
        //API CALL COMES HERE

        const data = await fetch("https://api.github.com/users/laksh2005");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
;    }

    render() { 
        //console.log("Child Render");
        const {avatar_url, name,location, login} = this.state.userInfo;

        return (
            <div className="user-card m-4 p-4">
                <img className="github-pfp border border-black border-dotted w-24" src={avatar_url} />
               <h2 className="text-2xl">Name: {name}</h2>
               <h3 className="text-2xl">Location: {location}</h3>
               <h3 className="text-2xl">GitHub: {login}</h3>
               <h4 className="text-2xl">Contact: lakshnijhawan18@gmail.com</h4>
           </div>
           )
    }
}

export default UserClass;