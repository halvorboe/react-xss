import React from 'react'

export default () => {
    const html = fetchHtml();
    return (
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}


const fetchHtml = () => {
    // User can set this link.
    return "<button onclick=\"alert('Hello world')\">Click me</Button>"; 
}
