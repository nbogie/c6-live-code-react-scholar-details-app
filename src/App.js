import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Hello Cohort 6</h1>

            <ScholarView name={"Aneesah"} interests={"yoga, watercolor"} />

            <ScholarView name={"Alice"} interests={"video games, music"} />

            <ScholarView
                name={"Ben"}
                interests={"breakdancing, board-breaking"}
            />
        </div>
    );
}

function ScholarView(props) {
    console.log("what is my properties", props);
    return (
        <div className="scholar">
            <div className="scholarName">{props.name}</div>
            <div className="scholarInterests">{props.interests}</div>
        </div>
    );
}

export default App;
