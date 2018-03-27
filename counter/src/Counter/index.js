import React from 'react'
import Count from './Count.js'
import Buttons from './Buttons.js'

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
                <Buttons 
                    onPlusClick={this.handlePlusClick.bind(this)} 
                    onMinusClick={this.handleMinusClick.bind(this)}
                />
            </div>
        )
    }
}

export default Counter