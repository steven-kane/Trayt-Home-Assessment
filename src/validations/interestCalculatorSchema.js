import * as Yup from 'yup';

const interestCalculatorSchema = Yup.object().shape({
  accountNumber: Yup.string()
    .matches(/^\d{8,17}$/, 'Account number must be 8-17 whole numbers')
    .required('Account number is required'),
  routingNumber: Yup.string()
    .matches(
      /^(00[0-9]|0[1-9]|1[0-2]|2[1-9]|3[0-2]|6[1-9]|7[0-2]|80)[0-9]{7}$/,
      'Invalid routing number',
    )
    .required('Routing number is required'),
  amount: Yup.number()
    .min(0.01, 'Amount must be greater than 0')
    .required('Amount is required'),
  frequency: Yup.string().required('Frequency is required'),
});

export default interestCalculatorSchema;
