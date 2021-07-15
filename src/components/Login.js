import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const onHandleSubmit = () => {
      history.push('/profile')
    }
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                  Log-in to your account
                </Header>
        <Form size='large'>
            <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
            />

            <Button color='teal' fluid size='large' onClick={() =>{onHandleSubmit()}}>
                Login
            </Button>
            </Segment>
        </Form>
        <Message onClick={() =>{history.push('/')}}>
            New to us? <a href='#'>Sign Up</a>
        </Message>
        </Grid.Column>
    </Grid>
    )
}

export default Signup






