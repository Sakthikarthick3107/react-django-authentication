import { createTheme } from "@mui/material";


const dark = createTheme({
    shadows : ['none'],
    typography:{
        fontFamily:'Segoe UI',
    },
    palette:{
        primary:{
            main:'#512da8',
        },
        background:{
            default:'#f0f0f0'
        }        
    },
    
    components:{
        
        MuiContainer:{
            styleOverrides:{
                root:{
                    border:'solid 1px grey',
                    backdropFilter: 'blur(5px)',
                    backgroundColor:'rgb(0,0,0,0.3)',
                    borderRadius:5,
                    
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    maxWidth:'100px',
                    
                }
            }
        },
        MuiInputLabel:{
            styleOverrides:{
                root:{
                        color:'white'
                    }
            }
        },
        MuiInput:{
            styleOverrides:{
                input:{
                    color:'whitesmoke'
                }
            }
        },
        MuiAvatar:{
            styleOverrides:{
                root:{
                    height:50,
                    width:50
                }
            }
        }
        
    },

})

export default dark