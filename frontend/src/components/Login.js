import {  Button, Container, Icon, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState,useContext } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const Login = () => {
    let {loginUser} = useContext(AuthContext)
    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [visible,setVisible] = useState(false)


    const handleVisibility = () =>{
        setVisible((prevState) => !prevState)
    }

  return (
    
    <>
    <div style={{height:'150px'}}></div>
      <Container maxWidth='xs' sx={{minHeight:400}}>
      <br/>
            <Typography variant='h4' textAlign='center'>Login</Typography>
            <div style={{height:'50px'}}></div>
                <form onSubmit = { loginUser }>
                    <Stack direction='column' spacing={2} >
                        <TextField variant='standard' label='Username' type='text' autoComplete='off' name='username'
                            value={username} onChange={(e)=>setUsername(e.target.value)} />
                        <TextField variant='standard' label='Password' type={ visible?'text' : 'password'} value={password} name='password'
                            onChange={(e)=>setPassword(e.target.value)}
                            InputProps={{
                                endAdornment:(
                                    <InputAdornment position='end'>
                                        <IconButton onClick={handleVisibility}>
                                            {visible?<Visibility/>:<VisibilityOff/>}
                                            
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        
                        <Typography variant='body1'>Didn't have an account? <Link to='/register'>Signup !</Link> </Typography>
                        <Stack alignItems='center'>
                            <Button variant='contained' type='submit' >Login</Button>
                        </Stack>
                    </Stack>
                </form>
                
                <div style={{height:'50px'}}></div>
      </Container>
      <div style={{height:'200px'}}></div>
    </>
  )
}

export default Login
