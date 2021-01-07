import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import SideNavBar from "./SideNavBar";

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from '../img/img_avatar.jpg';
import ResultView from './ViewResult';
import { Divider } from '@material-ui/core';


export class Result extends Component {
    constructor(){
        super();

        this.state = {
            regno: 0, 
            redirect:false
        }
    }
    handleStd = () =>{
        if(this.state.regno){
            this.setState({
                redirect:true
            })
        }
        else{
            alert('Please Select a Student');
        }

    }
    static propTypes = {}

    render() {
        if(this.state.redirect && this.state.regno){
            console.log(this.state.regno);
            return(<ResultView regno={this.state.regno} />)
        }
        else{

            return (
                <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                <div style={{ textAlign: 'center' }}><h2>Check Results</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="regno">
                                <Form.Label>Student I'd</Form.Label>
                                <Form.Control as="select" onChange={(e)=>this.setState({regno:e.target.value})} required>
                                    <option value={0}>-- Select Student I'd To Check the Results --</option>
                                    <option value={1}>0001</option>
                                    <option value={2}>0002</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="success" onClick={()=>this.handleStd()} type="button">Submit </Button>
                        </Form>
                    </div>
                </>
            )
        }
    }
}

export default Result;