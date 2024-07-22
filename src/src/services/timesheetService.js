import axios from 'axios';

const API_URL = 'http://localhost:8000/api/timesheet/';

const timesheetService = {
    addTimesheet: (empId, date, projectName, startTime, endTime, comments) => {
        return axios.post(API_URL, {
            emp: empId,
            date: date,
            project_name: projectName,
            start_time: startTime,
            end_time: endTime,
            comments: comments,
        }, {
            headers: {
                'Content-Type': 'application/json',  // Ensures data is sent as JSON
                'Accept': 'application/json'         // Indicates that the response should be JSON
            }
        });
    },
    getTimesheets: () => {
        return axios.get(API_URL, {
            headers: {
                'Accept': 'application/json'         // Indicates that the response should be JSON
            }
        });
    }
};

export default timesheetService;
