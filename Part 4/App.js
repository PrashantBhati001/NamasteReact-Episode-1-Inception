/**
  How we will create the below code in react

   <div id="heading">
        <div id="child1">
            <h1>h1 heading</h1>
            <h2>h2 heading</h2>
        </div>
        <div id="child2">
            <h1>h1 heading</h1>
            <h1>h1 heading</h1>
        </div>
  </div>
  
 */



 const heading=React.createElement("div",{id:"heading"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"h1 heading"),React.createElement("h1",{},"h1 heading")]),React.createElement("div",{id:"child1"},[React.createElement("h1",{},"h1 heading"),React.createElement("h1",{},"h1 heading")])])

 const root=ReactDOM.createRoot(document.getElementById("root"))

 root.render(heading)


//  The problem over here is that we cannot write such complex code using the above syntax,so comes the concept of JSX