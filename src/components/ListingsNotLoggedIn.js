import React from 'react'
import {
  Container,
  Table,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const ListingsNotLoggedIn = () => {
    return(
        <Container maxWidth="md" className="car-container">
      <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                </Table>
                </div>
        </Container>
    )
}

export default ListingsNotLoggedIn