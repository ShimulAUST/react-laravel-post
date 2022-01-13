import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPost from '../components/AddPost';
import Home from '../components/Home';
import EditPost from '../components/EditPost';
import Nav from './Nav';
function App() {
    return (
        <>

            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-post" element={<AddPost />} />
                    <Route path="edit-post" element={<EditPost />} />
                </Routes>

            </Router>

        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
