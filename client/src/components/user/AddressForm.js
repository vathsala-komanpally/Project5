import React,{useState} from 'react';
import {TextField, Typography, FormControlLabel, Grid, Checkbox} from '@material-ui/core';

export default function AddressForm(props) {
  const [customerDetails, setCustomerDetails] = useState({
    firstname: '',
    lastname: '',
    address1: '',
    address2: '',
    city: '', state:'', country:'',
    zip:''
});

  props.getCustomerDetails(customerDetails);

const handleChange = (e) => {
  const newCustomerState = { ...customerDetails, [e.target.name]: e.target.value };
  setCustomerDetails(newCustomerState);
}
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth onChange={handleChange}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}