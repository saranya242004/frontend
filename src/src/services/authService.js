import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const authService = {
    register: (empId, empName, emailId, password, confirmPassword) => {
        return axios.post(API_URL + 'register/', {
            emp_id: empId,
            emp_name: empName,
            email_id: emailId,
            password: password,
            confirm_password: confirmPassword,
        });
    },
    login: (empId, password) => {
        return axios.post(API_URL + 'login/', {
            emp_id: empId,
            password: password,
        });
    }
};

export default authService;
