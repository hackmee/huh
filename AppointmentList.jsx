import React , {useState} from 'react';
import AppointmentService from '../services/AppointmentService';

const AppointmentList = () => {
    const[appointments, setAppointments] = useState([])
    

    useEffect(() => {
      AppointmentService.getAllAppointment().
        then((response)=> { setAppointments(response.data)
            console.log(response.data);
        }).catch(error =>{
console.log(error);
        })
    }, [])
  return (
        <div className="appointment-list">
            <table className ="table table-bordered ta">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Appt. No/ID</th>
                        <th>Patient Name</th>
                        <th>Appt. Date & Time</th>
                        <th>Doctor Name</th>
                        <th>Appt. Type</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Appt. Slip</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    appointments.map((appointments) => (
                        <tr key ={appointments.id}>
                      <td>{appointments.id}</td>
            <td>{appointments.apptNo}</td>
            <td>{appointments.patientName}</td>
            <td>{appointments.apptDateTime}</td>
            <td>{appointments.doctorName}</td>
            <td>{appointments.apptType}</td>
            <td>{appointments.status}</td>
            </tr>
                   ))}
                </tbody>
            </table>
        </div>
    );
};

export default  AppointmentList;
