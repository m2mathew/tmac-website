// External Dependencies
import {
  Card,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core';
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Local Typings
interface Props {
  activeStep: number;
  isAuthenticated: boolean;
  isViewingSponsors?: boolean;
}

// Local Functions
function getSteps(
  isAuthenticated = false,
  isViewingSponsors = false,
): string[] {
  return [
    // We show a different message if the user is already logged in
    isAuthenticated
      ? 'Sign in to the TMAC members area'
      : 'Sign up for TMAC website login',
    'Complete registration form',
    isViewingSponsors
      ? 'Choose Sponsorship level and make payment'
      : 'Pay TMAC dues',
  ];
}

// Local Variables
const useStyles = makeStyles((theme) => ({
  stepLabel: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
}));

// Component Definition
const RegisterStepper: FC<Props> = ({
  activeStep,
  isAuthenticated,
  isViewingSponsors = false,
}) => {
  const classes = useStyles();
  const steps = getSteps(isAuthenticated, isViewingSponsors);

  return (
    <Card variant="outlined">
      <Stepper
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel
                classes={{
                  label: classes.stepLabel,
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Card>
  );
};

export default RegisterStepper;
