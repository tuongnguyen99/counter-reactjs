import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() {
        const {counters, onIncrement, onDelete, onReset} = this.props;
        return (
            <div className="Counters">
                <div className="btn btn-warning m-2" onClick={onReset}>Reset</div>
                {
                    this.props.counters.map((counter) => {
                        return <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDelete={onDelete} />
                    })
                }
            </div>
        );
    }
}

export default Counters;