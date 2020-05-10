import React from 'react'
import { Component } from 'react'
import '../css/footer.css'
import '../css/global.css'

class Footer extends Component {

    componentDidMount(){
        localStorage.setItem('splashShown', 'yes');
    }
    
    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

export default Footer