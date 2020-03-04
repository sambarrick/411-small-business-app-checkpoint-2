import React from 'react'
import { Link } from "react-router-dom";
import {
    Container,
  } from "@material-ui/core";

  const AnyReactComponent = ({ text }) => <div>{text}</div>

  const Business = (props) =>  {
    const name = props.match.params.name
    
    const business = props.business.find(c => c.name == name)
    
    return(
        <div>
     
        <h2>Name: {business.name}</h2>
        <h4>Address: {business.address}</h4>
        <h4>Hours: {business.hours}</h4>
        <h4>Description: {business.description}</h4>
        </div>
    )
  }

export default Business