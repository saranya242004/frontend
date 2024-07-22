import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import timesheetService from '../services/timesheetService';
import './UpdateTimesheet.css';

function UpdateTimesheet() {
    const [timesheets, setTimesheets] = useState([]);
    const [date, setDate] = useState('');
    const [projectName, setProjectName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [comments, setComments] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation();
    const empId = location.state?.empId || '';

    useEffect(() => {
        if (empId) {
            loadTimesheets();
        } else {
            alert('Employee ID not found');
        }
    }, [empId]);

    const loadTimesheets = async () => {
        try {
            const response = await timesheetService.getTimesheets();
            setTimesheets(response.data);
        } catch (error) {
            alert("Error loading timesheets");
        }
    };

    const handleAddTimesheet = async (e) => {
        e.preventDefault();
        try {
            await timesheetService.addTimesheet(empId, date, projectName, startTime, endTime, comments);
            loadTimesheets();
            setShowPopup(false);
        } catch (error) {
            alert("Error adding timesheet");
        }
    };

    return (
        <div>
            <h2>Update Timesheet</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Project Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Total Hours</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {timesheets.map((timesheet) => (
                        <tr key={timesheet.id}> {/* Ensure `timesheet.id` is unique */}
                            <td>{timesheet.date}</td>
                            <td>{timesheet.project_name}</td>
                            <td>{timesheet.start_time}</td>
                            <td>{timesheet.end_time}</td>
                            <td>{timesheet.total_hours}</td>
                            <td>{timesheet.comments}</td>
                        </tr>
                    ))}
                    <tr>
                        <td><button onClick={() => setShowPopup(true)}>+</button></td>
                    </tr>
                </tbody>
            </table>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Add Timesheet</h3>
                        <form onSubmit={handleAddTimesheet}>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
                            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
                            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
                            <textarea placeholder="Comments" value={comments} onChange={(e) => setComments(e.target.value)} required></textarea>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setShowPopup(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UpdateTimesheet;
