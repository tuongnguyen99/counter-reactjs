import React, { Component } from 'react';
import Counters from './Counters';
import Navbar from './Navbar';

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
    const index = counterArr.indexOf(counter)
    counterArr[index] = { ...counter };
    counterArr[index].value++;
    this.setState({ counters: counterArr });
  }

  handleDelete = (counterId) => {
    const updatedCounters = this.state.counters.filter((counter) => {
      return counter.id !== counterId;
    });
    this.setState({ counters: updatedCounters });
  };

  handleReset = () => {
    const counterReset = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counterReset });
  };

  render() {
    const { counters } = this.state;
    return (
      <div className="App">
        <Navbar totalCount={counters.filter((counter) => {
          return counter.value !== 0;
        }).length} />
        <div className="container">
          <Counters counters={counters} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onReset={this.handleReset} />
        </div>
      </div>
    );
  }
}

export default App;