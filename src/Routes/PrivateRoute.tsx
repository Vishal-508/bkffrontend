// import React ,{ ReactNode }from 'react'
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { JsxElement } from 'typescript'

// const PrivateRoute: React.FunctionComponent<{ children: ReactNode }> = ({ children }): ReactNode => {
  
//   const token:string = useSelector((state: any) => state.AuthReducer.token);
//  if(!token){
//   return <Navigate to="/UserLogin" />
//  }
//  return children;
// }

// export default PrivateRoute
import React, { ReactElement, ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute : React.FunctionComponent<{
  children: ReactNode;
}> = ({ children }): ReactElement<any, any> | null => {
  
  const token:string = useSelector((state: any) => state.AuthReducer.token);
 if(!token){
  return <Navigate to="/UserLogin" replace />
 }
 return <React.Fragment>{children}</React.Fragment>;
}

export default PrivateRoute;

