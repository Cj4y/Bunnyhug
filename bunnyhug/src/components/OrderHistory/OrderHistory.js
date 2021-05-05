import React from 'react';
//import table components from material-ui
import {TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell
} from '@material-ui/core';
//use moment dependency for formatting date
import moment from 'moment';
import { useHistory } from 'react-router-dom';

//declare column names
const columns = [
  {
    id: 'orderCreatedDate',
    label: 'Order Date'
  },
  {
    id: 'documentID',
    label: 'Order ID'
  },
  {
    id: 'orderTotal',
    label: 'Amount'
  }
];

const styles = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%'
};

// format the text based on value
const formatText = (columnName, columnValue) => {
  switch (columnName) {
    case 'orderTotal':
      // append dollar sign
      return `$${columnValue}`;

    case 'orderCreatedDate':
      //use moment extension to format date
      return moment(columnValue.nano).format('DD/MM/YYYY')
    default:
      //if neither of above cases, string format needs no change
      return columnValue;
  }
};

const OrderHistory = ({ orders }) => {
  const history = useHistory();

  return (
    <TableContainer>
      <Table>

        <TableHead>
          <TableRow>
            {columns.map((column, position) => {
              const { label } = column;

              return (
                <TableCell
                  key={position}
                  style={styles}
                >
                  {label}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody>

          {(Array.isArray(orders) && orders.length > 0) && orders.map((row, position) => {
            const { documentID } = row;

            return (
              <TableRow
                key={position}
                // redirect to address with orderid
                onClick={() => history.push(`/order/${documentID}`)}
              >

                {columns.map((column, position) => {
                  {/* column id */}
                  const columnName = column.id;
                  {/* value from data we are mapping */}
                  const columnValue = row[columnName];
                  {/* must format before used */}
                  const formattedText = formatText(columnName, columnValue);

                  return (

                    <TableCell
                    // map the position
                      key={position}

                      style={styles}
                    >
                      {formattedText}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}

        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default OrderHistory;
