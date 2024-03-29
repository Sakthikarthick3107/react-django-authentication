import { createContext ,useState , useEffect} from 'react'
import jwt_decode from "jwt-decode" 
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    const [ user , setUser ] = useState(() =>  localStorage.getItem('authTokens') ? jwt_decode( localStorage.getItem('authTokens')) : null )
    const [authTokens , setAuthTokens] = useState( () => localStorage.getItem('authTokens') ? JSON.parse( localStorage.getItem('authTokens')) : null)
    const [ loading , setLoading ] = useState(true)

    let loginUser = async (e) =>{
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({'username' : e.target.username.value , 'password' : e.target.password.value})
        })
        let data = await response.json()
        // console.log('data : ',data)
        // console.log('response ; ',response)
        if ( response.status === 200){
            setAuthTokens(data)
            setUser( jwt_decode(data.access))
            localStorage.setItem('authTokens' , JSON.stringify(data))
            navigate('/dashboard')
            alert("Logged In Successfully")
        }
        else{
            alert('Something went wrong')
        }
    }

    let logoutUser = () =>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    let updateToken = async () =>{
        console.log( ' Update method called ')

        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/' , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({'refresh' : authTokens.refresh})
        })
        let data = await response.json()
        // console.log('data : ',data)
        // console.log('response ; ',response)
        if ( response.status === 200){
            setAuthTokens(data)
            setUser( jwt_decode(data.access))
            localStorage.setItem('authTokens' , JSON.stringify(data))
            
        }
        else{
            logoutUser()
        }
    }

   


    let contextData = {
        user : user ,
        loginUser : loginUser,
        logoutUser : logoutUser,
    }

    useEffect(()=>{
        let fourMinutes = 1000 *  4 * 60

        let interval = setInterval (() => {
            if(authTokens){
                updateToken()
            }
        } , fourMinutes)
        return () => clearInterval( interval )
    } , [authTokens , loading])

    return(
        <AuthContext.Provider  value={contextData} >
            {children}
        </AuthContext.Provider>
    )

}