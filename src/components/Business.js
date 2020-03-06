import React from 'react'
import { Link } from "react-router-dom";
import {
    Container,
  } from "@material-ui/core";

  const Business = (props) =>  {
    const name = props.match.params.name
    const business = props.business.find(c => c.name == name)
    
    return(
        <Container className="listing-container">
     
        <h2>{business.name}</h2>
        <h4><span className="listing-description-span">Address: </span>{business.address}</h4>
        <h4><span className="listing-description-span">Hours: </span>{business.hours}</h4>
        <h4><span className="listing-description-span">Description: </span>{business.description}</h4>
        </Container>
    )
  }

export default Business