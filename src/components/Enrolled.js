import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import SideNavBar from "./SideNavBar";

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from '../img/img_avatar.jpg';
import { Divider } from '@material-ui/core';

import EnrolledView from './ViewEnrolled';

export class Enrolled extends Component {
    constructor(){
        super();

        this.state = {
            course: 0, 
            redirect:false
        }
    }
    handleCourse = () =>{
        if(this.state.course){
            this.setState({
                redirect:true
            })
        }
        else{
            alert('Please Select a Course');
        }

    }
    static propTypes = {}

    render() {
        if(this.state.redirect && this.state.course){
            console.log(this.state.course);
            return(<EnrolledView course={this.state.course} />)
        }
        else{

            return (
                <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                <div style={{ textAlign: 'center' }}><h2>Select Your Course</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="course">
                                <Form.Label>Course</Form.Label>
                                <Form.Control as="select" onChange={(e)=>this.setState({course:e.target.value})} required>
                                    <option value={0}>-- Select Course --</option>
                                    <option value={1}>one</option>
                                    <option value={2}>two</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="success" onClick={()=>this.handleCourse()} type="button">Submit </Button>
                        </Form>
                    </div>
                </>
            )
        }
    }
}

export default Enrolled;