import React from 'react'
import './First.css'

const para = {
    color: 'green',
    backgroundColor: 'black'
}

function First() {
    return (
        <div>
            <h1 className="heading">Hello World</h1>
            <p id="footer">This is the Footer</p>
            <p style={para}>This is my name</p>
        </div>
    )
}
export default First
