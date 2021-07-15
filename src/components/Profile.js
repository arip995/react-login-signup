import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center'
  },
}));

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
    const onHandleSubmit = () => {
      alert('Thanks for submtting')
    }
  
  return (
    <div>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
          <Button color="inherit" onClick={()=>{history.push('/')}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>

    <div style={{marginLeft: 400,marginRight: 400,marginTop: 50}}>
    <Form  >
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Age'
        placeholder='Age'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
        placeholder='Gender'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
      
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='About Yourself'
      placeholder='Opinion'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Submit'
      onClick={() =>{onHandleSubmit()}}
    />
  </Form>
  </div>

  </div>
  )
}

export default Profile
