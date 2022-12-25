import React from 'react'
import { AuthActions } from './action';
import { Auth_Action_Type } from './action_types';

interface IstateProps{
isAuth:boolean;
isError:boolean;
isLoading:boolean;
customerUsers:Iusers[];
merchantUsers:Iusers[];
token:string;
user:Iusers[];
username:string;
}
interface Iaction{
types:string
}

const initialState={
    isAuth:false,
    isError:false,
    token:localStorage.getItem("token") || "",
    isLoading:false, 
    customerUsers:[],
    merchantUsers:[],
    user:[],
    username: localStorage.getItem("UName") || "",
}

const reducer = (state:IstateProps=initialState,action:AuthActions) => {
  switch(action.type){
    case Auth_Action_Type.LOADING:
      return {
        ...state, isLoading:true, isError:false 
      }
      case Auth_Action_Type.FAILURE:
      return {
        ...state, isLoading:false, isError:true 
      }
      case Auth_Action_Type.USER_LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("UName", action.payload.name);
        return {
          
          ...state, isAuth:true, token:action.payload.token, username:action.payload.name

        }
    default:
        return state;
  }
}

export {reducer}

interface Iusers{
    email:string,
    name:string,
    number:number,
    password:string,
    role:string,
    userId:string
}