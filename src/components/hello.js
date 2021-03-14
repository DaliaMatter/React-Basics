import React, { Component } from "react";

class Hello extends Component {
    state = { 
        user: {
            first_name: "Doda",
            last_name: "Dody",
            age: 24,
        }
    }
    render (props) {
        return (
            <div>
                hello from class Component{" "}
                {this.props.name + " " + this.props.children}.
                <h1>
                    {this.state.user.first_name +
                        " " +
                        this.state.user.last_name
                    }
                    <br></br>
                    {this.state.user.age}
                </h1>
            </div>
        );
    }
}

export default Hello;