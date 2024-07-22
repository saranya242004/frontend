import React, { useState, useEffect } from 'react';
import timesheetService from '../services/timesheetService';
import './ViewTimesheet.css'; 

function ViewTimesheet() {
    const [timesheets, setTimesheets] = useState([]);

    useEffect(() => {
        loadTimesheets();
    }, []);

    const loadTimesheets = async () => {
        const response = await timesheetService.getTimesheets();
        setTimesheets(response.data);
    };

    return (
        <div>
            <h2>View Timesheet</h2>
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
                        <tr key={timesheet.id}>
                            <td>{timesheet.date}</td>
                            <td>{timesheet.project_name}</td>
                            <td>{timesheet.start_time}</td>
                            <td>{timesheet.end_time}</td>
                            <td>{timesheet.total_hours}</td>
                            <td>{timesheet.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewTimesheet;
