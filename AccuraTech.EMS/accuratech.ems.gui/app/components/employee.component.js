'use client'

import { useState } from "react";

import EmployeeModel from "../models/employee.model";
import EmployeeModify from "./employee.modify.component";

export default function Employee(props) {
    let employee = new EmployeeModel(props.data.employee)

    const [isSalaryVisible, setISalaryVisible] = useState(false);
    const [salary, setSalary] = useState(employee.getSalary(isSalaryVisible));

    const [showModal, setShowModal] = useState(false);

    const SalaryVisibility = () => {
        setISalaryVisible(!isSalaryVisible);
        setSalary(employee.getSalary(isSalaryVisible));
    };

    const EditEmployee = () => {
        setShowModal(true);
    };

    return (
        <>
            <tr>
                <td className="align-middle">{employee.Id}</td>
                <td className="align-middle">
                    <p className="mb-0 text-justify text-wrap p-1">
                        <strong>{employee.getFullName()}</strong> is a <strong>{employee.getGender()}</strong> born on <strong>{employee.DateOfBirth} ({employee.getAge()})</strong>, living in <strong>{employee.Address}</strong>. Currentyly working in the <strong>{employee.DepartmentName}</strong> department.</p><p className="mb-0 text-justify text-wrap p-1">Enjoying a salary of <strong className="text-primary" title="Show Salary">
                            <span className="show-sal" onClick={SalaryVisibility}>{salary}</span>
                        </strong>
                    </p>
                </td>
                <td className="text-center align-middle">
                    <button type="button" className="btn btn-sm btn-primary badge" onClick={EditEmployee}>Edit</button>
                </td>
            </tr>

            <EmployeeModify show={showModal} data={employee} />
        </>
    );
}