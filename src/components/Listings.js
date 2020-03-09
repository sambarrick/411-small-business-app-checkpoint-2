import React from "react";
import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,

} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from "@material-ui/icons/Delete";
import { checkAuth } from "../Router";
import AddBusiness from "../containers/AddBusiness";
import { Link } from "react-router-dom";

const Listings = (props) => {
  return (
    <Container maxWidth="md" className="container">
      <div>
        <div className="loggedin-header">{checkAuth() && <AddBusiness />}</div>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              {checkAuth() && <TableCell>Delete</TableCell>}
            </TableRow>
          </TableHead>
          
         <TableBody>
            {props.business.map((business, index) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {business.id}
                </TableCell>
            <Link to={`/business/${business.name}`}><TableCell>{business["name"]}</TableCell></Link>
                <TableCell>{business["description"]}</TableCell>
                <TableCell>{business["hours"]}</TableCell>
                <TableCell>{business["address"]}</TableCell>
                <TableCell></TableCell>

                <Tooltip title="Delete"><TableCell>
                    {checkAuth() && <DeleteIcon onClick={() => props.removeBusiness(index)}
                            className="icon text-red" /> }</TableCell></Tooltip>
              </TableRow>
            ))}
            </TableBody>  
        </Table>
      </div>
    </Container>
  );
};

export default Listings;
