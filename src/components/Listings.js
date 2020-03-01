import React from "react";
import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { checkAuth } from "../Router";
import AddBusiness from "../components/AddBusiness";

const Listings = (props) => {
  return (
    <Container maxWidth="md" className="container">
      <div>
        <div className="loggedin-header">{checkAuth() && <AddBusiness />}</div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              {checkAuth() && <TableCell>Delete</TableCell>}
            </TableRow>
          </TableHead>
          
          {/*<TableBody>
            {props.business.map((business, idx) => (
              <TableRow key={business.id}>
                <TableCell component="th" scope="row">
                  {business.id}
                </TableCell>
                <TableCell>{business["name"]}</TableCell>
                <TableCell>{business["description"]}</TableCell>
                <TableCell>{business["hours"]}</TableCell>
                <TableCell>{business["address"]}</TableCell>
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeBusiness(idx)}
                    className="icon text-red"
                  />
                </TableCell>
              </TableRow>
            ))}
            </TableBody>*/}  {/**/}
        </Table>
      </div>
    </Container>
  );
};

export default Listings;
