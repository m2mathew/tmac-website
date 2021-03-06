// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, withStyles } from '@material-ui/styles';

// Local Variables
const propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  active: {
    fontWeight: 700,
  },
});

const rows = [
  { id: 'FirstName', disablePadding: true, label: 'First Name' },
  { id: 'LastName', disablePadding: false, label: 'Last Name' },
  { id: 'District', disablePadding: false, label: 'District' },
  { id: 'Title', disablePadding: false, label: 'Title' },
  { id: 'Email', disablePadding: false, label: 'Email' },
];

// Local Components
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#EDF2F8',
    color: theme.palette.common.black,
    fontWeight: 500,
    '&:first-child': {
      paddingLeft: 24,
    },
  },
  body: {
    fontSize: 14,
    '&:first-child': {
      paddingLeft: 24,
    },
  },
}))(TableCell);

// Component Definition
const MemberTableHead = ({
  isAdmin,
  onRequestSort,
  order,
  orderBy,
}) => {
  const classes = useStyles();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  if (isAdmin && rows.length === 5) {
    rows.push(
      { id: 'Actions', disablePadding: false, label: 'Actions' },
    );
  }

  return (
    <TableHead>
      <TableRow key="table-head">
        {rows.map((row) => (
          <StyledTableCell
            key={`${row.id}=${row.label}`}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
          >
            <Tooltip
              enterDelay={300}
              placement="bottom-start"
              title="Sort"
            >
              <TableSortLabel
                active={orderBy === row.id}
                classes={{ active: classes.active }}
                direction={order}
                disabled={row.id === 'Actions'}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
              </TableSortLabel>
            </Tooltip>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

MemberTableHead.propTypes = propTypes;

export default MemberTableHead;
