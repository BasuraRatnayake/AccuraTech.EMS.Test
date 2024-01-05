export default class EmployeeModel {
    constructor(data) {
        this.Id = data?.id;
        this.FirstName = data?.firstName;
        this.LastName = data?.lastName;
        this.Gender = data?.gender;
        this.DateOfBirth = data?.dateOfBirth;
        this.Address = data?.address;
        this.Salary = data?.salary;
        this.Department = data?.department;
        this.DepartmentName = data?.departmentName
    }
    
    getAge() {
        return new Date().getFullYear() - new Date(this.DateOfBirth).getFullYear();;
    }
    getGender() {
        return (this.Gender) ? "Female" : "Male";
    }
    getSalary(show = false) {
        if (show) return `Rs. ${this.Salary}`;
        return "**Salary Hidden**"
    }
    getFullName() {
        return `${this.FirstName} ${this.LastName}`;
    }
}