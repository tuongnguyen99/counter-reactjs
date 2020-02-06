import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    handleIncrement = (counter) => {
        let counterArr = [...this.state.counters];
        const index  = counterArr.indexOf(counter)
        counterArr[index] = {...counter};
        counterArr[index].value ++;
        this.setState({counters: counterArr});
    }

    handleDelete = (counterId) => {
        console.log('Called!' + counterId);
        const updatedCounters = this.state.counters.filter((counter) => {
            return counter.id !== counterId;
        });
        this.setState({ counters: updatedCounters });
    };

    handleReset = () => {
        console.log(this.state.counters);
        const counterReset = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters: counterReset});
    };

    render() {
        return (
            <div className="Counters">
                <div className="btn btn-warning m-2" onClick={this.handleReset}>Reset</div>
                {
                    this.state.counters.map((counter) => {
                        return <Counter key={counter.id} counter={counter} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
                    })
                }
            </div>
        );
    }
}

export default App;