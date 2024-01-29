import {  Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword ,setConfirmPassword] = useState('')
    const isPasswordEqual = password ===  confirmPassword 
    
    const navigate = useNavigate()

    const register = (e) =>{
        e.preventDefault()
        console.log('Register request sent')
    }

    let registerUser =async (e) => {
      e.preventDefault()

      const formData = {
          username : username,
          email : email,
          password :  password,
          
      }

      try{
          const response = await fetch ('http://127.0.0.1:8000/api/register/' , {
              method : 'POST',
              headers:{
                  'Content-Type' : 'application/json',
              },
              body : JSON.stringify(formData)
          })
          if (response.ok){
              const data = await response.json()
              console.log(data)
              navigate('/login')
              alert("User Registered Successfully")
          }else{
              throw new Error('Registration failed');
          }
      }
      catch (error) {
          console.error(error);
          // Handle error cases
        }
  }
  return (
    <>
      <div style={{height:'150px'}}></div>
      <Container maxWidth='xs' sx={{minHeight:400}}>
      <br/>
            <Typography variant='h4' textAlign='center'>Sign Up</Typography>
            <div style={{height:'50px'}}></div>
                <form onSubmit={registerUser}>
                    <Stack direction='column' spacing={2} >
                        <TextField variant='standard' label='Create Username' type='text' autoComplete='off' name='username'
                             value={username} onChange={(e)=>setUsername(e.target.value)} required />

                        <TextField variant='standard' label='Email Address' type='text' autoComplete='off' name='email'
                             value={email} onChange={(e)=>setEmail(e.target.value)} required />

                        <TextField variant='standard' label='Password' type='password' value={password}  name='password'
                            onChange={(e)=>setPassword(e.target.value)} required
                        />
                        <TextField variant='standard' label='Confirm Password' type= 'password' value={confirmPassword} name='confirmPassword'
                                onChange={(e)=>setConfirmPassword(e.target.value)} error={!isPasswordEqual}
                                helperText={!isPasswordEqual  ?"Both Password fields must be same":""} required
                        />
                        <Typography variant='body1'>Already have an account? <Link to='/login'>Login !</Link> </Typography>
                        <br/><br/>
                        <Stack alignItems='center'>
                            <Button variant='contained' disabled={!isPasswordEqual } type='submit' >Register</Button>
                        </Stack>
                    </Stack>
                </form>
                <div style={{height:'50px'}}></div>
      </Container>
      <div style={{height:'120px'}}></div>
    </>
  )
}

export default Register
