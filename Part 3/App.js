const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from react")

// {} in  the above is used to give the attribute to a tag.Please note that heading over here is an object.
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)

// The object created in heading is converted into that h1 tag(HTML) by render method
        