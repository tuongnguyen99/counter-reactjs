import React, { Component } from 'react';
import classNames from 'classnames';

class Counter extends Component {
    formatCount = () => {
        const value = this.props.counter.value;
        return value !== 0 ? value : 'Zero';
    }
    render() {
        const { counter, onIncrement, onDelete } = this.props;
        return (
            <div className="Counter row">
                <div className="col-1">
                    <span className={classNames('badge', 'm-2', { 'badge-success': counter.value !== 0, 'badge-danger': counter.value === 0 })}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button className="btn btn-secondary m-2" onClick={() => onIncrement(counter)}>Increment</button>
                    <div className="btn btn-danger m-2" onClick={() => onDelete(counter.id)}>Delete</div>
                </div>
            </div>
        );
    }
}

export default Counter;