import React from 'react';

const AppointmentItem = ({ appointment }) => {
    return (
        <tr className="appointment-item">
            <td>{appointment.id}</td>
            <td>{appointment.apptNo}</td>
            <td>{appointment.patientName}</td>
            <td>{appointment.apptDateTime}</td>
            <td>{appointment.doctorName}</td>
            <td>{appointment.apptType}</td>
            <td>{appointment.status}</td>
            <td><button>Action</button></td>
            <td><button>Slip</button></td>
        </tr>
    );
};

export default AppointmentItem;
