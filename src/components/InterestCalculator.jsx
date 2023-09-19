import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import {
  Typography,
  Button,
  Grid,
  CardContent,
  Box,
  Card,
} from '@mui/material';

function InterestCalculator() {
  const location = useLocation();
  const { values } = location.state || {}; // Access the form values from location state
  const [interest, setInterest] = useState(null);
  const [date, setDate] = useState(dayjs());

  const calculateInterest = () => {
    const { amount, frequency } = values;

    const currentDate = dayjs();
    const monthsDiff = date.diff(currentDate, 'month') + 1; // Add 1 to account for the current month

    // Convert frequency to a multiplier (e.g., 'Twice per Month' => 24, 'Once per Month' => 12)
    const frequencyMultiplier = frequency === 'Twice per Month' ? 24 : 12;

    // Calculate interest based on the simplified formula: Amount = Principal * Interest Rate * Time
    // Using 5% interest rate for the first 36 months, and 2% thereafter
    const interestRate = monthsDiff <= 36 ? 0.05 : 0.02;
    const totalAmount = amount * ((1 + interestRate / frequencyMultiplier) ** monthsDiff);

    setInterest(totalAmount.toFixed(2));
  };

  return (
    <>
      <Typography variant="h4" alignContent="center">
        Compound Interest Calculator
      </Typography>

      <Grid>
        <Card>
          <CardContent>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </LocalizationProvider>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" m={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={calculateInterest}
            disabled={!values}
          >
            Calculate
          </Button>
        </Box>
      </Grid>
      <Typography variant="h1" alignContent="center">
        $
        {interest}
      </Typography>
    </>
  );
}

export default InterestCalculator;
