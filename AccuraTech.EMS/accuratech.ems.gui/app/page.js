import Employee from './components/employee.component'
import styles from './page.module.css'
import EmployeeService from './services/employee.service';

export default async function Home() {
  const employeeService = new EmployeeService();

  const employees = await employeeService.Get();
  console.log(employees);
  return (
    <main className={styles.main}>
      <div className="container mt-5">
        <div className="row flex-lg-nowrap">
          <div className="col-12 col-lg-auto mb-3">
            <div className="card p-3">
              <div className="e-navlist e-navlist--active-bg">AccureTech EMS</div>
            </div>
          </div>
          <div className="col">
            <div className="e-tabs mb-0 px-3">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Employees</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Departments</a>
                </li>
              </ul>
            </div>
            <div className="row flex-lg-nowrap">
              <div className="col mb-3">
                <div className="e-panel card">
                  <div className="card-body">
                    <div className="card-title">
                      <h6 className="mr-2">
                        <span>Employees</span>
                        <small className="px-1 text-right">[1021]</small>
                      </h6>
                    </div>
                    <div className="e-table">
                      <div className="table-responsive table-lg mt-3">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th className="align-top">Id</th>
                              <th className="max-width">Details</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              employees.map((employee, i) => {  
                                return <Employee key={i} data={{employee}} />
                              })
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
