import React, { Component } from 'react';
import { init } from 'ityped';




export default class Hello extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement');
        //const head3 = document.querySelector('#head3');

        // init(myElement, { showCursor: false, strings: [`${<h1>Presidential Initiative</h1>}`,
        //     `${<h3>for Artificial Intelligence & Computing (PIAIC)</h3>}`,
        //     `${<p>The mission of PIAIC is to reshape Pakistan by revolutionizing education,
        //     research, and business by adopting latest, cutting-edge technologies.
        //     Experts are calling this the 4th industrial revolution.
        //     We want Pakistan to become a global hub for AI, data science,
        //     cloud native computing, edge computing, blockchain, augmented reality,
        //   and internet of things.</p>}`, ' '] })
        
        init(myElement, { showCursor: false, strings: ['Presidential Initiative', ' ' ] });
        //init(head3, { showCursor: false, strings: ['for Artificial Intelligence & Computing (PIAIC)', ' ' ] });
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