import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div style={{height:'150px'}}></div>
      <Container maxWidth='xs' sx={{minHeight:400}}>
      <br/>
      <Typography variant='h4' textAlign='center'>Welcome</Typography>
      <div style={{height:'100px'}}></div>
      <Stack  spacing={2} justifyContent='center' direction='row' >
        <Button variant='contained' size='large' component={Link} to='/login' >Login</Button>
        <Button variant='outlined' size='large' component={Link} to='/register'>Signup</Button>
      </Stack>
      </Container>
      <div style={{height:'200px'}}></div>
    </>
  )
}

export default Home
