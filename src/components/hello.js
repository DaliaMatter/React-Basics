import React, { Component } from "react";

class Hello extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
    }

    state = {
        user: {
            first_name: "Doda",
            last_name: "Dody",
            age: 24,
        },
    };
    decrement = () => {
        this.setState({ age: this.state.user.age-- });
    };

    increment1() {
        this.setState({ age: this.state.user.age++ });
    }
    increment() {
        this.setState({ age: this.state.user.age++ });
    }
    render(props) {
        return (
            <div>
                hello from class Component{" "}
                {this.props.name + " " + this.props.children}.
                <h1>
                    {this.state.user.first_name +
                        " " +
                        this.state.user.last_name}
                    <br></br>
                    {this.state.user.age}
                </h1>
                <button
                    onClick={() => {
                        this.setState({ age: this.state.user.age++ });
                    }}
                >
                    Increment
                </button>
                <button onClick={this.decrement}>Decrement</button> 
                <button onClick={this.increment1.bind(this)}>
                    Increment with fun,bind
                </button>
                <button onClick={this.increment}>
                    Increment with Fun,const
                </button>
            </div>
        );
    }
}

export default Hello;