// UserForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const UserForm = ({ onSubmit , defaultValues  }) => {
  const classes = useStyles();
  const { register, handleSubmit, formState: { errors } , reset ,formState,formState: { isSubmitSuccessful }} = useForm();

    // Reset the form when defaultValues change (for edit case)
    React.useEffect(() => {
      reset(defaultValues);
    }, [reset, defaultValues, onSubmit]); 
  const handleFormSubmit = (data) => {
    let obj;
    if (defaultValues) {
      obj = {
        _id: data._id, 
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
            street: data.street,
            suite: data.suite,
            city: data.city,
            zipcode: data.zipcode,
            geo: {
                lat: data.lat,
                lng: data.lng
            }
        },
        phone: data.phone,
        website: data.website,
        company: {
            name: data.company_name,
            catchPhrase: data.company_catchPhrase,
            bs: data.company_bs
        }
    }
    }else{
      obj = { 
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
            street: data.street,
            suite: data.suite,
            city: data.city,
            zipcode: data.zipcode,
            geo: {
                lat: data.lat,
                lng: data.lng
            }
        },
        phone: data.phone,
        website: data.website,
        company: {
            name: data.company_name,
            catchPhrase: data.company_catchPhrase,
            bs: data.company_bs
        }
    }
    } 
    onSubmit(obj);  
    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <label>Name</label>
          <TextField
            variant="outlined"
            fullWidth
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <label>Username</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('username', { required: 'Username is required' })}
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ''} 
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <label>Email</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('email', { required: 'Email is required' })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <label>Street</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('street', { required: 'Street is required' })}
            error={!!errors.street}
            helperText={errors.street ? errors.street.message : ''} 
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <label>Suite</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('suite', { required: 'Suite is required' })}
            error={!!errors.suite}
            helperText={errors.suite ? errors.suite.message : ''} 
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <label>City</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('city', { required: 'city is required' })}
            error={!!errors.city}
            helperText={errors.city ? errors.city.message : ''} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <label>Zipcode</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('zipcode', { required: 'Zipcode is required' })}
            error={!!errors.zipcode}
            helperText={errors.zipcode ? errors.zipcode.message : ''} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <label>Lat</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('lat', { required: 'Lat is required' })}
            error={!!errors.lat}
            helperText={errors.lat ? errors.lat.message : ''} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <label>Lng</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('lng', { required: 'Lng is required' })}
            error={!!errors.lng}
            helperText={errors.lng ? errors.lng.message : ''}  
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <label>Phone</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('phone', { required: 'Phone is required' })}
            error={!!errors.phone}
            helperText={errors.phone ? errors.phone.message : ''} 
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <label>website</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('website', { required: 'Website is required' })}
            error={!!errors.website}
            helperText={errors.website ? errors.website.message : ''} 
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <label>company name</label>
          <TextField
            variant="outlined"
            fullWidth
            {...register('company_name', { required: 'company name is required' })}
            error={!!errors.company_name}
            helperText={errors.company_name ? errors.company_name.message : ''} 
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <label>company catchPhrase</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('company_catchPhrase', { required: 'company catchPhrase is required' })}
            error={!!errors.company_catchPhrase}
            helperText={errors.company_catchPhrase ? errors.company_catchPhrase.message : ''} 
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <label>company bs</label>
          <TextField
            variant="outlined"
            fullWidth 
            {...register('company_bs', { required: 'company bs is required' })}
            error={!!errors.company_bs}
            helperText={errors.company_bs ? errors.company_bs.message : ''} 
          />
        </Grid>
       
      </Grid>
      <Button
        type="submit" 
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Submit
      </Button> 
    </form>
  );
};

export default UserForm;
