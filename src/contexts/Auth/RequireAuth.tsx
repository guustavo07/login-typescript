import { AuthContext } from "./AuthContext"
import {useContext} from 'react'
import {Login} from '../../pages/Login'

export const RequireAuth = ({children}: {children: JSX.Element}) =>{
  const auth = useContext(AuthContext)

  if(!auth.user){
    return <Login/>
  }

  return children
}