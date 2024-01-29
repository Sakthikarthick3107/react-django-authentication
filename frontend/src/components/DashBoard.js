import { Container, TextField, Typography } from '@mui/material'
import React from 'react'

const DashBoard = () => {
  return (
    <>
    <div style={{height:'150px'}}></div>
      <Container maxWidth='xs' sx={{minHeight:400}}>
      <br/>
            <Typography variant='h4' textAlign='center'>Dashboard</Typography>
            <div style={{height:'50px'}}></div>
                <Typography variant='h6' textAlign='center'>Successfully logged in !</Typography>
                <div style={{height:'50px'}}></div>
      </Container>
      <div style={{height:'200px'}}></div>
    </>
  )
}

export default DashBoard
