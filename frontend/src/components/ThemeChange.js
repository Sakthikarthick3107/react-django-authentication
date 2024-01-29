import React, { useContext} from 'react'
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from '@mui/material'

import AuthContext from '../context/AuthContext'

const ThemeChange = ({setImage , setTheme}) => {
    const {user , logoutUser} = useContext(AuthContext)
  return (
    <>
    <AppBar color='transparent' elevation={0}>
        <Toolbar>
            <Box sx={{flexGrow:1}}></Box>
            {user && <Typography variant='h6' color='white'>Hello {user.username} &nbsp;</Typography> }
            {user ? 
            <Button variant='contained' color='primary' onClick={logoutUser}>Logout</Button>  :''
            }
            <Avatar src={setImage} alt='' onClick={setTheme} />
        </Toolbar>
    </AppBar>
    </>
  )
}

export default ThemeChange
