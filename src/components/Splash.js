import React, { Component } from 'react';
import "../css/splash.css"

class SplashPage extends Component {

    constructor(){
        super();
        this.state = {
            list: [
                ["Whether it's through the lens of sustainability or investigating power structures or challenging them or designing for someone who doesn’t have the ability to turn a doorknob easily. There’s ethics in all of it. They may not always be overt, but none of it is without ethics.","— Anita Cooney"],
                ["My feeling about design education and my writing about it is more like, “It’s a wicked problem. You think you’re going to fix it, and you break it in these unknown ways and actually do all this damage.” If we take it as a problem to solve as opposed to a constant space for engagement and reflection and response, we will always be caught in that tangle.","— Jessica Wexler"],
                ["Purity tests are a trap. No one can pass them, so what’s the point in implementing one on yourself? Do what you can, when you can, and be sure to cut yourself some slack.","— Rob Blair"],
                ["By creating students that are thinking critically about information and then are able to process that and put it into work, it prepares them for a lot of different kinds of jobs. That’s why we’re stressing thinking and not just skills-based learning.","— Sally Thurer"],
                ["We don’t talk about what design is or where within the context design is situated and what designers do and how it is part of this larger socioeconomic conversation. I think designers see themselves as super precious makers, and they’re not.","— Nida Abdullah"],
                ["One of the things that one of my teachers said at the Sandberg was, “The only way to really contribute to design is to first be ready to abandon it, to be ready to say ‘this is not a thing.’” Which to me means that if you do think that it's a [set] thing, then you’re trapped, you’re trapped in inheriting these existing vague assumptions.","— Chris Lee"]
            ],
            visible: true
        };
    }

    componentDidMount(){
        if (localStorage.getItem("splashShown") === "yes" ) {
            this.setState({ visible: false })
        };
        this.setState({
            selectedItems: this.state.list[Math.floor(Math.random() * this.state.list.length)]
        });
        this.interval = setInterval(() =>
        this.setState({
            selectedItems: this.state.list[Math.floor(Math.random() * this.state.list.length)]
        }), 15000);
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