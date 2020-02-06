import React, { Component } from 'react';
import Counters from './Counters';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <div className="container">
                    <Counters />
                </div>
            </div>
        );
    }
}

export default App;