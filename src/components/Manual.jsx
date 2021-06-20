import React, {useEffect} from 'react'

export default () => {
    useEffect(() => {
        document.getElementById("manual").innerHTML = fetchHtml();
    })
    return (
        <div id="manual"></div>
    )
}



const fetchHtml = () => {
    // User can set this link.
    return "<button onclick=\"alert('Hello world')\">Click me</Button>"; 
}
