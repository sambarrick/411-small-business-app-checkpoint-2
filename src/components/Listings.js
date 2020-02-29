import React from 'react'
import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import {checkAuth} from '../Router'

const Listings = () => {
    return(
        <Container maxWidth="md" className="container">
      <div>
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