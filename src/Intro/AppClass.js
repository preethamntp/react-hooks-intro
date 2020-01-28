import React, { Component } from 'react';


class App extends Component {
    state = {
        count: 0,
        isOn: false,
        x: null,
        y: null
    }

    componentDidMount() {
        document.title = `You've been clicked ${this.state.count} times`;
        window.addEventListener('mousemove', this.handleMousePosition);
    }

    componentDidUpdate() {
        document.title = `You've been clicked ${this.state.count} times`;
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    toggleLight = () => {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }))
    }

    handleMousePosition = (event) => {
        this.setState({
            x: event.pageX,
            y: event.pageY
        })
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMousePosition);

    }

    render() {
        return (
            <>
                <h2>Counter</h2>
                <button onClick={this.incrementCount} > Click Me {this.state.count}  </button>
                <h2>Toggle Light</h2>
                {/* <div style={{
                    height: "50px",
                    width: '50px',
                    background: this.state.isOn ? "yellow" : "gray"
                }}
                    onClick={this.toggleLight}
                >

                </div> */}
                <img style={{
                    height: "50px",
                    width: '50px',
                }}
                    alt=""
                    src={this.state.isOn ? 'https://icon.now.sh/highlight/ff0' : 'https://icon.now.sh/highlight/aaa'}
                    onClick={this.toggleLight}
                />

                <h2>Mouse Position</h2>
                <p> X position: {this.state.x} </p>
                <p> Y position: {this.state.y} </p>

            </>
        );
    }
}

export default App;
