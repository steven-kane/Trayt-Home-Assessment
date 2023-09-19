import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  CardContent,
  Box,
  Card,
} from '@mui/material';

import interestCalculatorSchema from '../validations/interestCalculatorSchema';

function DepositEnrollmentForm() {
  const navigate = useNavigate();

  const initialValues = {
    accountNumber: '',
    routingNumber: '',
    amount: '',
    frequency: '',
  };

  const frequencyOptions = [
    { value: 'twicePerMonth', label: 'Twice per Month' },
    { value: 'oncePerMonth', label: 'Once per Month' },
  ];

  return (
    <>
      <Typography variant="h4" alignContent="center">
        New Direct Deposit Enrollment
      </Typography>
      <Grid>
        <Card style={{ backgroundColor: '#f2f2f2' }}>
          <CardContent>
            <Grid item xs={12}>
              <Formik
                initialValues={initialValues}
                validationSchema={interestCalculatorSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  navigate('/interest-calculator', { state: { values } });
                }}
              >
                {({
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography>Account Number:</Typography>
                        <TextField
                          name="accountNumber"
                          id="standard-error-helper-text"
                          onChange={handleChange}
                          error={
                            touched.accountNumber
                            && Boolean(errors.accountNumber)
                          }
                          helperText={
                            Boolean(errors.accountNumber)
                            && errors.accountNumber
                          }
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Routing Number:</Typography>
                        <TextField
                          name="routingNumber"
                          onChange={handleChange}
                          error={
                            touched.routingNumber
                            && Boolean(errors.routingNumber)
                          }
                          helperText={
                            Boolean(touched.routingNumber)
                            && errors.routingNumber
                          }
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Amount:</Typography>
                        <TextField
                          name="amount"
                          onChange={handleChange}
                          error={touched.amount && Boolean(errors.amount)}
                          helperText={Boolean(touched.amount) && errors.amount}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Frequency:</Typography>
                        <TextField
                          name="frequency"
                          select
                          onChange={handleChange}
                          error={touched.frequency && Boolean(errors.frequency)}
                          helperText={
                            Boolean(touched.frequency) && errors.frequency
                          }
                          fullWidth
                        >
                          {frequencyOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                          >
                            Submit
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default DepositEnrollmentForm;
