import {useEffect, useState} from 'react'
import {gql, useMutation} from '@apollo/client'
import { useNavigate } from 'react-router-dom';
import RegisterStyle from './pages/RegisterStyle'
import Loading  from "./pages/Loading"


const insertRegister = gql`
mutation MyMutation($username: String, $password: String) {
  insert_Login(objects: {username: $username, password: $password, level:"user"}){
  returning{
  username
}
    
  }
}
`

export default function Register() {
    const [register, {data, loading}] = useMutation(insertRegister)
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    let navigate = useNavigate()
    
    const _onChangUsername = (e) => {
      setUsername(e.target.value)
    }
    const _onChangPassword = (e) => {
      setPassword(e.target.value)
    }
    
    const handleSumbid = () => {

      register({variables : {username : Username, password : Password}})
      alert(`Berhasil Registrasi ${Username}`)
      navigate("/")
      console.log(" username "+ Username + " password " + Password) 
    }

   
    if (loading) return(
      <div>
      <Loading />
      <div className='text-center text-6xl '>Tunggu ya!! Lagi Loading...</div>
      </div>
    ) 

  

    return( 
      <div>
      <RegisterStyle  
      onChangeUsername = {_onChangUsername} 
      onChangePassword= {_onChangPassword} 
      handleSumbid= {handleSumbid}
      />
      </div>
  )
    }