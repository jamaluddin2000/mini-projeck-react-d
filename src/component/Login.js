import {useEffect, useState} from 'react'
import {gql, useLazyQuery} from '@apollo/client'
import { useNavigate } from 'react-router-dom';
import LoginStyle from './pages/LoginStyle';
import Cookies from 'universal-cookie'; 
import Loading  from "./pages/Loading"





const QueryLogin =gql`
query MyQuery($username: String , $password: String ) {
  Login(where: {username: {_eq: $username}, password: {_eq: $password}}) {
    username
    level
  }
}
`; 

export default function Login() {
    const [getQueryLogin, {data,loading,error}] = useLazyQuery(QueryLogin)
    const [nama, setNama] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()
    const cookies = new Cookies()
    
    useEffect(() => {
      if (!!data?.Login.length && !loading){
        cookies.set("auth",true,{path: "/"})
        navigate("/Home")
      }
    },[data,loading]) 

    const _onChangUsername = (e) => {
      setNama(e.target.value)
    }
    const _onChangPassword = (e) => {
      setPassword(e.target.value)
    }
    
    const handleSumbid = () => {
      getQueryLogin({variables : {username : nama, password:password   }})
      
    }

   
    if (loading) return(
      <div>
      <Loading />
      <div className='text-center text-6xl '>Tunggu ya!! Lagi Loading...</div>
      </div>
    ) 
    if (error) return `Error! ${error}`;
  

    return( 
      <div>
      <LoginStyle 
      onChangeUsername = {_onChangUsername} 
      onChangePassword= {_onChangPassword} 
      handleSumbid= {handleSumbid}
      data={data} />
      </div>
  )
    }