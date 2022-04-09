import React from 'react'
import { InputLabel,Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
const AddressForm = () => {
    const methods = useForm();
  return (
    <>   
          
        <Typography  style={{ fontSize: "16px", fontWeight: 600, marginBottom: 15 }} varient="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit=''>
                <Grid container spacing={3} 
>                  
                   <FormInput required name='firstName' label='First Name'/> 
                   <FormInput required name='lastName' label='Last Name'/> 
                   <FormInput required name='email' label='Email'/> 
                   <FormInput required name='addressline1' label='Address Line 1'/> 
                   <FormInput required name='addressline2' label='Address Line 1 (optional)'/> 
                   <FormInput required name='zipcode' label='Zip Code'/> 
                   <FormInput required name='state' label='State'/> 
                   <FormInput required name='city' label='City'/> 
                   <FormInput required name='country' label='Country'/> 
                   <FormInput required name='phone' label='Phone Number'/> 
                </Grid>

            </form>
        </FormProvider>
        
    </>
  )
}

export default AddressForm
