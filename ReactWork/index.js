const parent=document.getElementById("root");
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:"red"}},"Hello reactjs");
// const li1=React.createElement("li",{style:{color:"red"}},"orange");
// const li2=React.createElement("li",{style:{color:"orange"}},"apple");
// const ul=React.createElement("ul",{},li1,li2);
// const div=React.createElement("div",{style:{backgroundColor:"#1212"}},h2,ul)



//JSX

const h2=React.createElement("h2",{},"Heading Tag");
const h21=<h2>Hello jsx</h2>;
const li1=<li>Orange</li>;
const li2=<li>apple</li>;
const li3=<li>mango</li>;
const li4=<li>banana</li>;

const ul=<ol style={{color:"red",backgroundColor:"#1212"}}>{li1}{li2}{li3}{li4}</ol>
const container=(
    <div>
        <div>{ul}</div>
        <div>{h2}</div>
    </div>
    
);
root.render(container);


