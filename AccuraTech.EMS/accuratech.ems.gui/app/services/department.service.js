import Cors from 'cors';
import { BASE_URL } from "./configurations";

export default class DepartmentService {
    constructor() {
        this.EndPoint = `${BASE_URL}Department/`;
    }

    async getDepartmentNameById(departmentId) {
        try {
            const res = await fetch(`${this.EndPoint}${departmentId}`, );
            return await res.json();
        } catch (err) {
            console.log(err);
        }
    }
}