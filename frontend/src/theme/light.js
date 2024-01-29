import { createTheme } from "@mui/material";
import day from '../images/day.png'

const light = createTheme({
    
    shadows : ['none'],
    typography:{
        fontFamily:'Segoe UI'
    },
    palette:{
        primary:{
            main:'#f57c00',
        },
        
    },
    
    components:{
        MuiContainer:{
            styleOverrides:{
                root:{
                    border:'solid 1px grey',
                    backdropFilter: 'blur(5px)',
                    backgroundColor:'rgb(255,255,255,0.3)',
                    borderRadius:5,
                    
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    maxWidth:'100px'
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

export default light