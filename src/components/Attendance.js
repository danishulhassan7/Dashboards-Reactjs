import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';



const Attendance = (props) => {
  const [show, setShow] = React.useState(false);
  const { history } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/Attendance/edit');
    // console.log(history.path);
  }
  const data = {
    columns: [
      {
        label: 'Course',
        field: 'course',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Teacher',
        field: 'teacher',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Month',
        field: 'month',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Present',
        field: 'present',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Absent',
        field: 'attendance',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Compaints',
        field: 'complaints',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      {
        present: '19',
        teacher: 'Sarah Taylor',
        month: 'December',
        attendance: '3',
        complaints:'00',
        course: 'History',
      },
      {
        present: '19',
        teacher: 'Meg Lanning',
        month: 'Novemeber',
        attendance: '3',
        complaints:'00',
        course: 'Chemistry',

      },
      {
        present: '19',
        teacher: 'Joe Root',
        month: 'October',
        attendance: '3',
        complaints:'00',
        course: 'Science',
      },
      {
        present: '19',
        teacher: 'Harmenjef Hardy',
        month: 'January',
        attendance: '3',
        complaints:'00',
        course: 'Physics',
      },
      {
        present: '19',
        teacher: 'Leesa Healy',
        month: 'February',
        attendance: '3',
        complaints:'00',
        course: 'English',
      },
      {
        present: '19',
        teacher: 'Marnus Shane',
        month: 'March',
        attendance: '3',
        complaints:'00',
        course: 'Math',
      },
      {
        present: '19',
        teacher: 'Johnson Smith',
        month: 'April',
        attendance: '3',
        complaints:'00',
        course: 'Computer',
      },
      {
        present: '19',
        teacher: 'Pat Cummins',
        month: 'May',
        attendance: '3',
        complaints:'00',
        course: 'Biology',
      },
      
      
    ]
  };

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>Student Attendance</h2>
        <h5>(Monthly Report of Attendance)</h5>
      </div>
                    <Divider /><br />
    <MDBDataTable style={{backgroundColor:'white'}}
      // striped
      // bordered
      noBottomColumns
      responsive
      hover
      data={data}
    />
    </div>
  );
}

export default Attendance;