// External Dependencies
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import { colors } from '../../utils/presets';

// Local Variables
const useStyles = makeStyles({
  root: {
    height: 3,
    background: 'darkred',
  },
  red: {
    background: colors.texasFlagRed,
  },
});

// Component Definition
const FormHr = (props) => {
  const { red } = props;
  const classes = useStyles(props);

  return (
    <hr
      className={
        clsx(
          classes.root,
          red && classes.red,
        )
      }
    />
  );
};

FormHr.propTypes = {
  red: PropTypes.bool,
};

FormHr.defaultProps = {
  red: false,
};

export default FormHr;
