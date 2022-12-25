import axios from "axios"
import { Dispatch } from "redux"
import { AuthActions } from "./action"
import { Auth_Action_Type } from "./action_types"

interface IloginProps{
    email:string,
    password:string,
    dispatch:Dispatch<AuthActions>
}
interface IsignupProps{
    email:string,
    password:string,
    name:string,
    number:number,
    dispatch:Dispatch<AuthActions>
}
interface Ipost{
    email:string,
    password:string
}
// export const userLogin = (payload:IloginProps)=>(dispatch:Dispatch<AuthActions>)=>{
//     dispatch({type:Auth_Action_Type.LOADING})
//     return axios.post("https://smiling-jade-fly.cyclic.app/user/login",payload).then((res)=> dispatch({type:Auth_Action_Type.USER_LOGIN_SUCCESS, payload:res.data })).catch((err)=>dispatch({type:Auth_Action_Type.FAILURE}))
// }
export const userLogin=(payload:IloginProps)=>{
    const {email,password,dispatch}=payload;
    var post:Ipost={email:email,
    password:password
    }
        dispatch({type:Auth_Action_Type.LOADING})
        return axios.post("https://smiling-jade-fly.cyclic.app/user/login",post).then((res)=>dispatch({type:Auth_Action_Type.USER_LOGIN_SUCCESS, payload:res.data })).catch((err)=>dispatch({type:Auth_Action_Type.FAILURE}))    
}

interface IpostSignup{
    email:string,
    password:string,
    name:string,
    number:number,
}
export const userSignup=(payload:IsignupProps)=>{
    const {email,password,name,number,dispatch}=payload;
    var post:IpostSignup={email:email,name:name,number:number,
    password:password
    }
        dispatch({type:Auth_Action_Type.LOADING})
        return axios.post("https://smiling-jade-fly.cyclic.app/user/signup",post).then((res)=>dispatch({type:Auth_Action_Type.USER_LOGIN_SUCCESS, payload:res.data })).catch((err)=>dispatch({type:Auth_Action_Type.FAILURE}))
}



// export const usersignup = (payload:IsignupProps)=>(dispatch:Dispatch<AuthActions>)=>{
//     dispatch({type:Auth_Action_Type.LOADING})
//     return axios.post("https://smiling-jade-fly.cyclic.app/user/signup",payload).then((res)=> dispatch({type:Auth_Action_Type.USER_SIGNUP_SUCCESS })).catch((err)=>dispatch({type:Auth_Action_Type.FAILURE}))
// }