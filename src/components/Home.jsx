import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

function Home() {
  const navigate = useNavigate();

  const gotoDepositEnrollment = () => {
    navigate('/deposit-enrollment-from');
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Welcome to Bank of Trayt
      </Typography>
      <Typography variant="body1" paragraph>
        Initiate a new Direct Deposit to earn 5% for 36 Months!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={gotoDepositEnrollment}
      >
        Learn More
      </Button>
    </>
  );
}

export default Home;
