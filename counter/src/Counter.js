import React from 'react'
import Count from './Count.js'

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handlePlusClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleMinusClick() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    render() {
        return (
            <div>
                <Count num={this.state.count}/>
                <button onClick={this.handlePlusClick.bind(this)}>+</button>
                <button onClick={this.handleMinusClick.bind(this)}>-</button>
            </div>
        )
    }
}

export default Counter