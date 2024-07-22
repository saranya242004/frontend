import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UpdateTimesheet from './components/UpdateTimesheet';
import ViewTimesheet from './components/ViewTimesheet';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/update-timesheet" element={<UpdateTimesheet />} />
                    <Route exact path="/view-timesheet" element={<ViewTimesheet />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
