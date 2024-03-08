

import Datatable from "@/components/Datatable";

export default function Home() {
  return (
    <main>

      <div className="d-flex mb-3 text-center gap-2 justify-content-between">
        <div className="countBox flex-fill">
          <p className="mb-0"><span className="material-symbols-outlined smallIcon">person</span>Total Users</p>
          <h4 className="h1 mb-0 text-dark">26</h4>
          <p className="mb-0"><small><strong className="text-success"><span className="material-symbols-outlined">arrow_drop_up</span>0%</strong> From last Week</small></p>
        </div>

        <div className="countBox flex-fill">
          <p className="mb-0"><span className="material-symbols-outlined smallIcon">manage_accounts</span>Total SystemUser</p>
          <h4 className="h1 mb-0 text-dark">9</h4>
          <p className="mb-0"><small><strong className="text-danger"><span className="material-symbols-outlined">arrow_drop_down</span>0%</strong> From last Week</small></p>
        </div>

        <div className="countBox flex-fill">
          <p className="mb-0"><span className="material-symbols-outlined smallIcon">personal_injury</span>Total Patients</p>
          <h4 className="h1 mb-0 text-dark">17</h4>
          <p className="mb-0"><small><strong className="text-success"><span className="material-symbols-outlined">arrow_drop_up</span>0%</strong> From last Week</small></p>
        </div>

        <div className="countBox flex-fill">
          <p className="mb-0"><span className="material-symbols-outlined smallIcon">male</span>Total Males Patients</p>
          <h4 className="h1 mb-0 text-dark">20</h4>
          <p className="mb-0"><small><strong className="text-danger"><span className="material-symbols-outlined">arrow_drop_down</span>0%</strong> From last Week</small></p>
        </div>

        <div className="countBox flex-fill">
          <p className="mb-0"><span className="material-symbols-outlined smallIcon">female</span>Total Females Patients</p>
          <h4 className="h1 mb-0 text-dark">16</h4>
          <p className="mb-0"><small><strong className="text-success"><span className="material-symbols-outlined">arrow_drop_up</span>0%</strong> From last Week</small></p>
        </div>
        <div className="countBox flex-fill">
          <p className="mb-0"><span className="material-symbols-outlined smallIcon">recent_patient</span>Total Active User</p>
          <h4 className="h1 mb-0 text-dark">24</h4>
          <p className="mb-0"><small><strong className="text-success"><span className="material-symbols-outlined">arrow_drop_up</span>0%</strong> From last Week</small></p>
        </div>
      </div>


      <div className="row mb-3 gx-2 align-items-stretch">
        <div className="col-md-6 col-lg-3">
          <div className="cardBox">
            <div className="cardBoxTitle bg-light">
              <h6 className="fw-semibold mb-0">My Team Caseloads</h6>
            </div>
            <div className="cardBoxBody">
              <table className="table mb-0 smallTable">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>No Of Patients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Tiger</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Tiger</td>
                    <td>30</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="cardBox">
            <div className="cardBoxTitle bg-light">
              <h6 className="fw-semibold mb-0">My Caseloads</h6>
            </div>
            <div className="cardBoxBody">
              <table className="table mb-0 smallTable">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>No Of Patients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Tiger</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Tiger</td>
                    <td>30</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="cardBox">
            <div className="cardBoxTitle bg-light">
              <h6 className="fw-semibold mb-0">Upcoming Appointments</h6>
            </div>
            <div className="cardBoxBody">
              <table className="table mb-0 smallTable">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Appoinment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>06/3/2024</td>
                    <td>872382bsdksdj</td>
                  </tr>
                  <tr>
                    <td>06/3/2024</td>
                    <td>872382bsdksdj</td>
                  </tr>
                  <tr>
                    <td>06/3/2024</td>
                    <td>872382bsdksdj</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="cardBox">
            <div className="cardBoxTitle bg-light">
              <h6 className="fw-semibold mb-0">Reminder</h6>
            </div>
            <div className="cardBoxBody">
              <table className="table mb-0 smallTable mb-2">
                <thead>
                  <tr>
                    <th>Reminder</th>
                    <th width='30' className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger</td>
                    <td className="text-center"><span className="material-symbols-outlined smallIcon text-danger">delete_forever</span></td>
                  </tr>
                </tbody>
              </table>
              <form>
                <div className="mb-1"><input type="text" id="reminder" name="reminder" className="form-control" placeholder="Enter Reminders" /></div>
                <div className="d-grid"><button type="submit" className="btn btn-sm btn-light">Add</button></div>
              </form>
            </div>


          </div>
        </div>
      </div>

      <div className='cardBox'>
        <div className="cardBoxTitle cardBoxTitleSmall bg-light">
          <div className='d-flex align-items-center justify-content-between'>
            <div><h6 className="fw-semibold mb-0">Patient Listing</h6></div>
          </div>
        </div>

        <div className='cardBoxBody'>
          <Datatable />
        </div>

      </div>
     


    </main>
  );
}
