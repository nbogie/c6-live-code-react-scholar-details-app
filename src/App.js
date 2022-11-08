import "./App.css";
import React from "react"

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
    },
    {
        name: "Tinashe",
        interests: "chess, anime",
        location: "tokyo"
    }
];



function App() {
    return (
        <div className="App">
            <h1>Hello Cohort 6</h1>

            {
                scholarDetails.map((oneScholar) => (
                    <ScholarView
                        key={oneScholar.name}
                        scholar={oneScholar}
                    />
                ))
            }

        </div>
    );
}
function ScholarView(props) {
    const scholar = props.scholar;

    // console.log("what is my properties", props);
    return (
        <div className="scholar">
            <div className="scholarName">{scholar.name}</div>
            <div className="scholarInterests">{scholar.interests}</div>
            <div className="scholarLocation">{scholar.location}</div>
        </div>
    );
}

export default App;
