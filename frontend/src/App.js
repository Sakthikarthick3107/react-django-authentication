import { ThemeProvider } from '@emotion/react';
import Login from './components/Login';
import light from './theme/light';
import dark from './theme/dark';
import {  CssBaseline, createTheme } from '@mui/material';
import day from './images/day.png'
import night from './images/night.png'
import Register from './components/Register';
import Home from './components/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import ThemeChange from './components/ThemeChange';
import sun from './images/sun.svg'
import moon from './images/crescent-moon.svg'
import { useState } from 'react';
import DashBoard from './components/DashBoard';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';


function App() {
  const[darkMode ,  setDarkMode] = useState(false)
  const theme = createTheme(darkMode? dark :light)
  const image = darkMode ? sun : moon
  const bg =  darkMode ? night : day
  const setTheme = () =>{
    setDarkMode((prevMode) => !prevMode)
  }
  
  return (
      <div className="App"  style={{backgroundImage:`url(${bg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',
              backgroundPosition:'center',backgroundAttachment:'fixed'   }}>
        
        
        
        <Router>
        
        <ThemeProvider theme={theme}>
          <AuthProvider>
          <ThemeChange setImage={image}  setTheme={setTheme} />
          <CssBaseline/>
            
            <Routes>

              <Route path='/' element={<Home/>}/>

              <Route path='/login' element={<Login/>}/>

              <Route element = {<PrivateRoute/>}>
                <Route path='/dashboard' element={<DashBoard/>} />
              </Route>

              <Route path='/register' element={<Register/>}/>
              
              </Routes>
            </AuthProvider>
        </ThemeProvider>
        
        </Router>
       
      </div>
    
      
  );
}

export default App;


