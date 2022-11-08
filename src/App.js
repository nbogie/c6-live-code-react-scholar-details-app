import "./App.css";

function App() {

    const scholarDetails = [
        {
            name: "María",
            interests: "reading classic books, travelling",
            location: "edinburgh"
        },
        {
            name: 'Zac',
            interests: "chess codewars",
            location: "rekjyjyjyavk"
        },
        {
            name: "Maghfoor",
            interests: "Video Games, Mountain Biking",
            location: "birmingham"
        },
        {
            name: "Grace",
            interests: "volleyball, reading",
            location: "london"
        },
        {
            name: "Ben",
            interests: "breakdancing, board-breaking",
            location: "egypt"
        }
    ];


    return (
        <div className="App">
            <h1>Hello Cohort 6</h1>

            <ScholarView name={"Aneesah"} interests={"yoga, watercolor"} location={"paris"} />

            <ScholarView name={"Alice"} interests={"video games, music"} location={"rome"} />

            <ScholarView
                name={"Ben"}
                interests={"breakdancing, board-breaking"}
                location={"egypt"}
            />
        </div>
    );
}

function ScholarView(props) {

    // console.log("what is my properties", props);
    return (
        <div className="scholar">
            <div className="scholarName">{props.name}</div>
            <div className="scholarInterests">{props.interests}</div>
        </div>
    );
}

export default App;
