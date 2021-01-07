import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Divider } from '@material-ui/core';



const Announcements = (props) => {
  const data = {
    columns: [
      {
        label: 'Date',
        field: 'date',
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
        label: 'Announcement',
        field: 'announcement',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Teacher Name',
        field: 'teacher',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      {
        date: '2011/04/25',
        class: 'Metric',
        announcement: 'Result will be announced on Friday',
        teacher:'Ms. Meg Lanning',
      },
      {
        date: '2011/04/25',
        class: 'Metric',
        announcement: 'Result will be announced on Friday',
        teacher:'Ms. Meg Lanning',
      },
      {
        date: '2011/04/25',
        class: 'Metric',
        announcement: 'Result will be announced on Friday',
        teacher:'Ms. Meg Lanning',
      },
      {
        date: '2011/04/25',
        class: 'Metric',
        announcement: 'Result will be announced on Friday',
        teacher:'Ms. Meg Lanning',
      },
      {
        date: '2011/04/25',
        class: 'Metric',
        announcement: 'Result will be announced on Friday',
        teacher:'Ms. Meg Lanning',
      },
      {
        date: '2011/04/25',
        class: 'Metric',
        announcement: 'Result will be announced on Friday',
        teacher:'Ms. Meg Lanning',
      },    
    ]
  };

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>Teacher Announcements</h2></div>
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

export default Announcements;