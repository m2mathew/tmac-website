// External Dependencies
import {
  IconButton,
  Tooltip,
} from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import PropTypes from 'prop-types';
import React, { Fragment, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { makeStyles } from '@material-ui/styles';

// Internal Dependencies
import Invoice from '../../../components/register/invoice';

// Local Variables
const propTypes = {
  user: PropTypes.shape({
    PaymentOption: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: null,
};

const useStyles = makeStyles({
  icon: {
    height: 24,
    width: 24,
  },
});

// Component Definition
const MemberTableRowActionElements = ({ user }) => {
  const classes = useStyles();

  const componentRef = useRef();

  const hasReceipt = user && user.PaymentOption && user.PaymentOption.toLowerCase() === 'paypal';
  const hasInvoice = user && user.PaymentOption && user.PaymentOption.toLowerCase() === 'invoiced';

  if (hasReceipt) {
    return (
      <Fragment key={`print-receipt-${user.userId}`}>
        <ReactToPrint
          content={() => componentRef.current}
          trigger={() => (
            <Tooltip title="Print receipt">
              <IconButton aria-label="Print receipt">
                <ReceiptIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
          )}
        />

        <div css={{ display: 'none' }}>
          <Invoice
            amount={user.AmountPaid}
            form={user}
            isActive={user.MemberType === 'Active'}
            isInvoice={false}
            receiptId={user.receiptId}
            ref={componentRef}
          />
        </div>
      </Fragment>
    );
  }

  if (hasInvoice) {
    return (
      <Fragment key={`print-invoice-${user.userId}`}>
        <ReactToPrint
          content={() => componentRef.current}
          trigger={() => (
            <Tooltip title="Print invoice">
              <IconButton aria-label="Print invoice">
                <PrintIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
          )}
        />

        <div css={{ display: 'none' }}>
          <Invoice
            amount={user.AmountPaid}
            form={user}
            invoiceId={user.invoiceId || 1}
            isActive={user.MemberType === 'Active'}
            isInvoice
            ref={componentRef}
          />
        </div>
      </Fragment>
    );
  }
  return null;
};

MemberTableRowActionElements.propTypes = propTypes;
MemberTableRowActionElements.defaultProps = defaultProps;

export default MemberTableRowActionElements;
