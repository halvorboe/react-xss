import React from 'react'

export default () => {
    const href = fetchLink();
    return (
        <div>
            <a href={href}>Click me!</a>
        </div>
    )
}

const fetchLink = () => {
    // User can set this link.
    return "javascript:alert('Hello world');"; 
}