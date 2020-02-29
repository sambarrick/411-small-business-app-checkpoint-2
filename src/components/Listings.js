import React from 'react'
import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow, 
  Button,
  DeleteIcon
} from "@material-ui/core";
import {checkAuth} from '../Router'
import AddBusiness from '../components/AddBusiness'

const Listings = () => {
    return(
        <Container maxWidth="md" className="container">
      <div>
      <div className="loggedin-header">
      { checkAuth() &&
        <AddBusiness />
    }
       
      </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        { checkAuth() &&
                            <TableCell>Delete</TableCell>
                          }
                          
                    </TableRow>
                </TableHead>
                </Table>
                
                </div>
        </Container>
    )
}

export default Listings