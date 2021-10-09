import React, { Component } from 'react';
import { init } from 'ityped';




export default class Hello1 extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['for Artificial Intelligence & Computing (PIAIC)', ' ' ] })
        // init(myElement, { showCursor: false, strings: [`${<p>The mission of PIAIC is to reshape Pakistan by revolutionizing education,
        //          research, and business by adopting latest, cutting-edge technologies.
        //          Experts are calling this the 4th industrial revolution.
        //          We want Pakistan to become a global hub for AI, data science,
        //          cloud native computing, edge computing, blockchain, augmented reality,
        //          and internet of things.</p>}`, 'Yeah!' ] })
    }
    render() {
        return <div id="myElement"></div>
    }
}