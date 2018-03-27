import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={props.onPlusClick}>+</button>
            <button onClick={props.onMinusClick}>-</button>
        </div>
    )
}