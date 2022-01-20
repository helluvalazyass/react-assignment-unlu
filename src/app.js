import React from "react";
import Account from "./components/Account.jsx";
import Register from "./components/Register.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return <>
        <div>My React app is hot</div>
        <Router>
            <Routes>
                <Route path="/account" element={<Account />} />
                <Route path="/" element={<Register />} />
            </Routes>
        </Router>
    </>
}

export default App;