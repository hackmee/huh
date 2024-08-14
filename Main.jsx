import { useState } from "react";
import { fetchData } from "../api/axios";
// import AppointmentList from "./AppointmentList";

const Main = () => {
    const [appointmentList, setAppointmentList] = useState([{ "id": 1, "apptRefId": 98235923985, "patientName": "Mr x", "doctorName": "Dr Suraj", "apptType": "Telemedicine", "status": "Due", "createdBy": 1, "createdAt": "2024-08-03T12:45:43.748107", "updatedBy": 1, "updatedAt": "2024-08-03T12:45:43.748107" }, { "id": 2, "apptRefId": 98235986768, "patientName": "Mr y", "doctorName": "Dr Sharma", "apptType": "Telemedicine", "status": "Due", "createdBy": 3, "createdAt": "2024-08-03T13:06:34.582014", "updatedBy": 3, "updatedAt": "2024-08-03T13:06:34.582014" }, { "id": 3, "apptRefId": 98235986768, "patientName": "Mr y", "doctorName": "Dr Sharma", "apptType": "Telemedicine", "status": "Due", "createdBy": 3, "createdAt": "2024-08-03T15:03:30.585805", "updatedBy": 3, "updatedAt": "2024-08-03T15:03:30.586805" }, { "id": 4, "apptRefId": 98235986768, "patientName": "Anshika", "doctorName": "Dr Kapoor", "apptType": "In Person", "status": "Cancel", "createdBy": 2, "createdAt": "2024-08-03T15:06:22.198368", "updatedBy": 2, "updatedAt": "2024-08-03T15:06:22.198368" }, { "id": 5, "apptRefId": 98235986768, "patientName": "Anshika", "doctorName": "Dr Kapoor", "apptType": "In Person", "status": "Cancel", "createdBy": 2, "createdAt": "2024-08-06T11:45:46.589149", "updatedBy": 2, "updatedAt": "2024-08-06T11:45:46.590149" }, { "id": 6, "apptRefId": 98235986768, "patientName": "Anshika", "doctorName": "Dr Kapoor", "apptType": "In Person", "status": "Cancel", "createdBy": 2, "createdAt": "2024-08-07T11:26:07.242482", "updatedBy": 2, "updatedAt": "2024-08-07T11:26:07.242482" }, { "id": 7, "apptRefId": 98235986768, "patientName": "Anshika", "doctorName": "Dr Kapoor", "apptType": "In Person", "status": "Cancel", "createdBy": 2, "createdAt": "2024-08-07T15:16:18.786699", "updatedBy": 2, "updatedAt": "2024-08-07T15:16:18.78721" }, { "id": 8, "apptRefId": 9823, "patientName": "Anshika", "doctorName": "Dr Kapoor", "apptType": "In Person", "status": "Pending", "createdBy": 2, "createdAt": "2024-08-10T15:36:18.454827", "updatedBy": 2, "updatedAt": "2024-08-10T15:36:18.455755" }, {
        "id": 9, "apptRefId": 9823, "patientName": "Anshika", "doctorName": "Dr Kapoor", "apptType": "In Person",
        "status": "Pending", "createdBy": 2, "createdAt": "2024-08-10T17:34:36.802078", "updatedBy": 2, "updatedAt": "2024-08-10T17:34:36.803081"
    }]);
    const [appointmentLoaded, setAppointmentLoaded] = useState(false);
    const [backupData, setBackupData] = useState([])
    const [patientName, setPatientName] = useState("")
    const [patientId, setPatientId] = useState("")
    if (!appointmentLoaded) {
        console.log("here");
        const fetchAppointment = async () => {
            const response = await fetchData("/get-appointments");
            setAppointmentList(response.data);
            setBackupData(response.data)
        }
        fetchAppointment();
        setAppointmentLoaded(true);


    } function filterdata(item) {
        console.log(appointmentList, 'items data')
        if (item == "Cancel") {
            let x = backupData.filter((row) => row.status == "Cancel")
            console.log(x, "Cancelledleddata")
            setAppointmentList(x)

        } if (item == "In Person") {
            let x = backupData.filter((row) => row.apptType == "In Person")
            console.log(x, "Cancelledleddata")
            setAppointmentList(x)

        }
        if (item == "Telemedicine") {
            let x = backupData.filter((row) => row.apptType == "Telemedicine")
            setAppointmentList(x)

        }
        if (item == 'Pending') {
            let x = backupData.filter((row) => row.status == 'Pending');
            setAppointmentList(x)
        }

        if (item == "All") {

            setAppointmentList(backupData)

        }
    }

    function updateNameAndId(row) {
        setPatientName(row.patientName);
        setPatientId(row.apptRefId)

    }
    return (
        <>
            <div className="main-content">
                <div className="header-wrapper">
                    <div className="header-title">
                        <span className="spin">FAQs</span>
                    </div>
                </div>

                <li className="menu">
                    <a href="#" style={{ color: "black" }}>
                        {/* <i className="fas fa-tachometer-alt"></i> */}
                        <img width="15" height="15" src="https://img.icons8.com/fluency-systems-regular/48/dashboard-layout.png" className="dashbord" alt="dashboard-layout"/>
                        <span>Dashboard</span>
                    </a>
                    <i class='fas fa-angle-right' style={{ fontSize: "20px", padding: "2px" }}></i>
                    <a href="#">
                        {/* <i className="fa fa-calendar" style={{ color: "yellow" }}></i> */}
                        <i class="fa-solid fa-calendar-days"></i>
                        <span style={{ color: "hwb(167 4% 24%)" }}>My Appointments</span>
                    </a>
                </li>
            </div>
            
            <div class="profile-card">
                <div class="profile-background"></div>
                <div class="profile-content">
                    <img src="image.jpg" alt="Anshika" class="profile-image" />
                    <div class="profile-name">{patientName}</div>
                    <div class="profile-details">
                        Patient ID: {patientId}<br />
                        Female • 25 Years
                    </div>
                </div>
            </div>

            <div className="container">
                <h1>My Appoinments</h1>
                <hr />
                <div className="panel">
                    <div className="all" onClick={() => filterdata("All")}>All

                        <div className="all">{appointmentList.length}</div>
                    </div>
                    <div className="upcoming" onClick={() => filterdata("Pending")}>Upcoming {appointmentList.length}</div>
                    <div className="person" onClick={() => filterdata("In Person")} >In Person </div>
                    <div className="telemedicine" onClick={() => filterdata("Telemedicine")}>Telemedicine</div>
                    <div className="cancel" onClick={() => filterdata("Cancel")} >Cancelledled </div>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead className="h1">
                        <tr >
                            <th>S.No</th>
                            <th>Appt. Ref ID</th>
                            <th>Patient Name</th>
                            <th>Appt Date & Time</th>
                            <th>Doctor Name</th>
                            <th>Appt Type</th>
                            <th>Status</th>
                            <th style={{ paddingLeft: "40px" }}>Action</th>
                            <th>Appt. Slip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointmentList.map((row, index) =>
                            <tr key={index} onClick={() => updateNameAndId(row)}>
                                <td className="fixcenter">{row.id}</td>
                                <td className="fixcenter ">{row.apptRefId}</td>
                                <td className="fixcenter">{row.patientName}</td>
                                <td className="fixcenter">{row.createdAt}</td>
                                <td className="fixcenter">{row.doctorName}</td>
                                <td className="fixcenter" style={{ marginLeft: "30px" }}>{row.apptType}</td>
                                <td className="fixcenter">{row.status}</td>
                                <td>                                 
                                 <button className="calendar"><i class="fa fa-calendar" style={{ fontSize: "10px" }}></i></button>
                                       <button className="clos"><i class="fa fa-close"></i></button>                                  
                                </td>
                                <td>
                                <button className="dld"><i class="fas fa-eye" id="togglePassword"></i></button>
                                         <button className="download"><i class="fa fa-download" ></i></button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Main;