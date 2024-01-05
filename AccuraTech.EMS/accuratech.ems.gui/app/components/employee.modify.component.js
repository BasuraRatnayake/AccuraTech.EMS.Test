'use client'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmployeeModel from '../models/employee.model';
import { useState } from 'react';
import EmployeeService from '../services/employee.service';

export default function EmployeeModify(props) {
    const IS_NEW_EMPLOYEE = props.data ? false : true;
    
    const [employee, setEmployee] = useState(IS_NEW_EMPLOYEE ? new EmployeeModel(null) : props.data);
    const [isEmployeeDataInvalid, setIsEmployeeDataInvalid] = useState(false);

    const EMPLOYEE_SERVICE = new EmployeeService();

    const REGEX = {
        FirstName: /^[A-Z]{3,20}$/i
    };
    
    const ModifyData = (value, field) => {
        let _employee = employee;
        _employee[field] = value;

        setEmployee(emp => ({
            ...emp,
            ..._employee
        }));
    };
    const ValidateData = () => {
        setIsEmployeeDataInvalid(false);

        const fields = Object.getOwnPropertyNames(employee);
        const fieldsLen = fields.length;

        for (let i=0;i<fieldsLen;i++) {
            let field = fields[i];

            if (field == "Id" || field == "DepartmentName") continue;

            let regex = REGEX[field];
            let value = employee[field];

            if (!regex.test(value)) {
                setIsEmployeeDataInvalid(true);
                return false;
            }
        }

        return true;
    };

    const SaveChange = () => {
        //if (ValidateData()) return;
        let response = null;

        if (!IS_NEW_EMPLOYEE) response = EMPLOYEE_SERVICE.Update(employee);
        else response = EMPLOYEE_SERVICE.Add(employee);

        response.then(res => {
            console.log(res);
        })
    };

    return (
        <Modal show={props.show}>
            <Modal.Body>
                <div className="row mb-1">
                    <div className="col">
                        <div className="form-group">
                            <input type="text" value={employee.FirstName} onChange={(e) => ModifyData(e.target.value, "FirstName")} placeholder="First Name" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <input type="text" value={employee.LastName} onChange={(e) => ModifyData(e.target.value, "LastName")} placeholder="Last Name" className="form-control form-control-sm" />
                        </div>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col">
                        <div className="form-group">
                            <input type="date" value={employee.DateOfBirth} onChange={(e) => ModifyData(e.target.value, "DateOfBirth")} placeholder="Date Of Birth" className="form-control form-control-sm" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <select value={employee.Gender} onChange={(e) => ModifyData(e.target.value, "Gender")}  className="form-control form-control-sm">
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col">
                        <div className="form-group">
                            <input type="text" value={employee.Address} onChange={(e) => ModifyData(e.target.value, "Address")} placeholder="Address" className="form-control form-control-sm" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <select value={employee.Department} onChange={(e) => ModifyData(e.target.value, "Department")} className="form-control form-control-sm">
                                <option value="1">IT</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <input type="text" value={employee.Salary} onChange={(e) => ModifyData(e.target.value, "Salary")}  className="form-control form-control-sm" />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" disabled={isEmployeeDataInvalid} onClick={SaveChange}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}