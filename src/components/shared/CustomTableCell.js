// External Dependencies
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

// Component Definition
const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#EDF2F8',
    color: theme.palette.common.black,
    fontWeight: 600,
    '&:first-child': {
      paddingLeft: theme.spacing(2),
    },
    '&:nth-child(2)': {
      paddingRight: theme.spacing(2),
    },
  },
  body: {
    fontSize: 14,
    '&:first-child': {
      paddingLeft: theme.spacing(2),
    },
    '&:nth-child(2)': {
      paddingRight: theme.spacing(2),
    },
  },
}))(TableCell);

export default CustomTableCell;
