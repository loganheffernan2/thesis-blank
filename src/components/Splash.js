import React, { Component } from 'react';
import "../css/splash.css"

class SplashPage extends Component {

    constructor(){
        super();
        this.state = {
            list: [
                ["Test One","Site One"],
                ["Test Two","Site Two"],
                ["Test Three","Site Three"]
            ],
            visible: true
        };
    }
    
    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
    }

    componentDidMount(){
        this.setState({
            selectedItems: this.state.list[Math.floor(Math.random() * this.state.list.length)]
        });
        this.interval = setInterval(() =>
        this.setState({
            selectedItems: this.state.list[Math.floor(Math.random() * this.state.list.length)]
        }), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){

        const { visible } = this.state;

        return (
        <div id="splashPage" style={{ display: (visible ? 'block' : 'none') }}>
        <p id="whereAreWe">Where Are We?</p>
        <div id="textPlacement">
          <p>{this.state.selectedItems && this.state.selectedItems[0]}</p>
          <p>{this.state.selectedItems && this.state.selectedItems[1]}</p>
        </div>
        <div id="closeButton" onClick={() => this.setState({ visible: !visible })}>
          <div id="leftSlash"></div>
          <div id="rightSlash"></div>
        </div>
        </div>
        )
    }
}

export default SplashPage