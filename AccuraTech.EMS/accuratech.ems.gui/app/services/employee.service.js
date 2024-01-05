import Cors from 'cors';
import { BASE_URL } from "./configurations";

export default class EmployeeService {
    constructor() {
        this.EndPoint = `${BASE_URL}Employee/`;
    }

    async Get() {
        try {
            const res = await fetch(`${this.EndPoint}`);
            return await res.json();
        } catch (err) {
            console.log(err);
        }
    }

    async Update(employeeData) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData)
        };
        const response = await fetch(this.EndPoint, requestOptions).then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            return Promise.reject(error);
        });
    }

    async Add(employeeData) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData)
        };
        const response = await fetch(this.EndPoint, requestOptions).then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            return Promise.reject(error);
        });
    }

    async Remove(employeeData) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData)
        };
        const response = await fetch(this.EndPoint, requestOptions).then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            return Promise.reject(error);
        });
    }
}