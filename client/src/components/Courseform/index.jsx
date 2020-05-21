import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import "../Courseform/style.css";
import Typography from "@material-ui/core/Typography";
import NavBar from "../Navbar";




const useStyles = makeStyles({
   root: {
     width: 400,
   },
});

export default class CourseForm extends React.Component{
    state = {
        courseName: "",
        unitName: "",
        description: "",
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        this.onSubmit(this.state);
        this.setState({
            courseName: "",
            unitName: "",
            description: "",
        });
    };


    render() {
        return (
        <div center flex-container>
        <div id="form">
           <form>
            <br />
            <br />
            <input id="form1"
                name="courseName"
                placeholder="Course Name" 
                value={this.state.courseName} 
                onChange={e => this.setState(e)} 
            />
            <br />
            <br />
            <input id="form2"
                name="unitName"
                placeholder="Unit Name" 
                value={this.state.unitName} 
                onChange={e => this.setState(e)} 
            />
            <br />
            <br />
            <input id="form3"
                name="description"
                placeholder="Course Description"
                input value={this.state.description} 
                onChange={e => this.setState(e)} 
            />
           <br />
           <br /> 
           <div id="buttons">
          <button class="submit" variant="outlined">Submit</button>
          <br />
          <br />
          <button class="submit" variant="outlined">+ Add Unit</button>
          </div>
      </form>  
      </div> 
      </div>     
        );
    };


}

