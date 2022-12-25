import { Auth_Action_Type } from "./action_types"


interface IloginData{
message:string;
token:string;
name:string
}

// USER LOGIN
interface IuserLoginLoading{
    type:Auth_Action_Type.LOADING;
}
interface IuserLoginSuccess{
    type:Auth_Action_Type.USER_LOGIN_SUCCESS;
    payload:IloginData
}
interface IuserLoginFailure{
    type:Auth_Action_Type.FAILURE;
}


// USER SIGNUP
interface IuserSignupLoading{
    type:Auth_Action_Type.LOADING;
}
interface IuserSignupSuccess{
    type:Auth_Action_Type.USER_SIGNUP_SUCCESS;
    
}
interface IuserSignupFailure{
    type:Auth_Action_Type.FAILURE;
}

// USER DELETE
interface IuserDeleteSuccess{
    type:Auth_Action_Type.USER_DELETE_SUCCESS;
}
interface IuserDeleteLoading{
    type:Auth_Action_Type.LOADING;
}
interface IuserDeleteFailure{
    type:Auth_Action_Type.FAILURE;
}

// GET USERS DATA
interface IgetUsersProps{
    email:string,
    name:string,
    number:number,
    password:string,
    role:string,
    _id:string,
    __v:number
}
interface IgetUserDataSuccess{
    type:Auth_Action_Type.GET_USER_SUCCESS;
    payload:IgetUsersProps[]
}
interface IgetUserDataFailure{
    type:Auth_Action_Type.FAILURE;
}
interface IgetUserDataLoading{
    type:Auth_Action_Type.LOADING;
}


export type AuthActions=IuserLoginLoading | IuserLoginSuccess | IuserLoginFailure | IuserSignupFailure | IuserSignupLoading | IuserSignupSuccess | IuserDeleteFailure | IuserDeleteLoading | IuserDeleteSuccess | IgetUserDataFailure | IgetUserDataLoading | IgetUserDataSuccess;


// MERCHANT USERS TYPES





