import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';


const ClassSchdule = (props) => {
  const [show, setShow] = React.useState(false);
  const { history } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/testfile/edit');
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
        label: 'Class',
        field: 'class',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Time',
        field: 'time',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Day',
        field: 'action',
        width: 100
      }
    ],
    rows: [
      {
        course: 'Math',
        class: 'VII',
        time: '11.30 a.m',
        date: '2011/04/25',
        action: 'Monday',
      },
      {
        course: 'Science',
        class: 'VII',
        time: '9.30 a.m',
        date: '2011/04/25',
        action: 'Monday',
      },
      {
        course: 'Socail Studies',
        class: 'VII',
        time: '10.30 a.m',
        date: '2011/04/25',
        action: 'Monday',
      },
      {
        course: 'Science',
        class: 'VII',
        time: '10.30 a.m',
        date: '2011/04/25',
        action: 'Monday',
      },
      {
        course: 'Biology',
        class: 'VII',
        time: '8.30 a.m',
        date: '2011/04/25',
        action: 'Monday',
      },
      {
        course: 'Science',
        class: 'VII',
        time: '10.30 a.m',
        date: '2011/04/25',
        action: 'Monday',
      },
      {
        course: 'Computer',
        class: 'VII',
        time: '12.30 p.m',
        date: '2011/04/25',
        action: 'Tuesday',
      },
      {
        course: 'Science',
        class: 'VII',
        time: '10.30 a.m',
        date: '2011/04/25',
        action: 'Friday',
      },
      {
        course: 'Science',
        class: 'VII',
        time: '10.30 a.m',
        date: '2011/04/25',
        action: 'Monday',
      },      
      
    ]
  };

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>Schdule of Class-VII</h2></div>
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

export default ClassSchdule;