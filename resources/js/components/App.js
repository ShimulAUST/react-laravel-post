import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";
function App() {
    return (
        <>

            <div className="App">
                <h1>Welcome to React Router!</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </div>

        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
