import { AnyAction, Dispatch } from "redux";
import axios from "axios";
import { AppActions, IgetProductData } from "./action";
import { App_ActionType } from "./action_types";
import { IaddressData, Icart_wishlistData } from "./reducer";

// interface IsearchParamsProps {
//   limit?: number;
//   page?: number;
//   sort?: string;
//   category?: string[] | string;
//   gender?: string;
//   dispatch: Dispatch<AppActions>;
// }
// payload:IsearchParamsPropsr

//  GET ALL PRODUCT DATA

interface Iparams{
  limit ?:number,
  category ?:string[] | string,
  gender:string | null ,
  manufacturer_brand ?:string[] | string,
  sort:any ,
  color:string[] | string ,
  page:number
}
interface IsearchParamsProps{
  params:Iparams,
  dispatch: Dispatch<AppActions>;
}
export const getAllProducts = (payload: IsearchParamsProps) => {
  const { params,  dispatch } = payload;
  const{category,page,gender,sort,limit,manufacturer_brand,color}=params;
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .get(
      `https://smiling-jade-fly.cyclic.app/allproducts?limit=${limit}&page=${page}&sort=${sort}`,{params:{category:category, gender:gender,manufacturer_brand:manufacturer_brand,color:color}}
    )
    .then((res) =>
      dispatch({ type: App_ActionType.GET_PRODUCT_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};
// export const getAllProducts = (payload: IsearchParamsProps) => {
//   const { params, dispatch } = payload;
//   dispatch({ type: App_ActionType.LOADING });
//   return axios
//     .get("https://smiling-jade-fly.cyclic.app/allproducts/singleProduct",{params})
//     .then((res) =>
//       dispatch({ type: App_ActionType.GET_PRODUCT_SUCCESS, payload: res.data })
//     )
//     .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
// };



// GET SINGLE PRODUCT DATA
interface IsingleProduct {
  _id: any;
  dispatch: Dispatch<AppActions>;
}
export const getSingleProduct = (load: IsingleProduct) => {
  const { _id, dispatch } = load;

  dispatch({ type: App_ActionType.LOADING });
  return axios
    .get(
      `https://smiling-jade-fly.cyclic.app/allproducts/singleProduct?_id=${_id}`
    )
    .then((res) =>
      dispatch({
        type: App_ActionType.GET_SINGLE_PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};


// SEND PRODUCT IN TO CART

interface IpostCartData {
  PCdata: Icart_wishlistData;
  dispatch: Dispatch<AppActions>;
}
export const postCartProduct = (payload: IpostCartData) => {
  const { PCdata, dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .post("https://smiling-jade-fly.cyclic.app/addtocart/create", PCdata, {
      headers,
    })
    .then((res) => dispatch({ type: App_ActionType.POST_CART_SUCCESS }))
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};



interface IgetCartdata {
  dispatch: Dispatch<AppActions>;
}
export const getCartProduct = (payload: IgetCartdata) => {
  const { dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .get("https://smiling-jade-fly.cyclic.app/addtocart", { headers })
    .then((res) =>
      dispatch({ type: App_ActionType.GET_CART_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};



interface Ideletecartdata {
  _id: string;
  dispatch: Dispatch<AppActions>;
}
export const DeleteCartProduct = (payload: Ideletecartdata) => {
  const { _id, dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .delete(`https://smiling-jade-fly.cyclic.app/addtocart/${_id}`, { headers })
    .then((res) => dispatch({ type: App_ActionType.DELETE_CART_SUCCESS }))
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};




// SEND PRODUCT IN TO WISHLIST**********
interface IpostwishlistData {
  PCdata: Icart_wishlistData;
  dispatch: Dispatch<AppActions>;
}
export const postWishlistProduct = (payload: IpostwishlistData) => {
  const { PCdata, dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .post("https://smiling-jade-fly.cyclic.app/wishlist/create", PCdata, {
      headers,
    })
    .then((res) => dispatch({ type: App_ActionType.POST_WISHLIST_SUCCESS }))
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};


interface Igetwishlistdata {
    
  dispatch: Dispatch<AppActions>;
}
export const getWishlistProduct = (payload: Igetwishlistdata) => {
  const { dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .get("https://smiling-jade-fly.cyclic.app/wishlist", { headers })
    .then((res) =>
      dispatch({ type: App_ActionType.GET_WISHLIST_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};


interface Ideletewishlistdata {
  _id: string;
  dispatch: Dispatch<AppActions>;
}
export const DeleteWishlistProduct = (payload: Ideletewishlistdata) => {
  const { _id, dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .delete(`https://smiling-jade-fly.cyclic.app/wishlist/${_id}`, { headers })
    .then((res) => dispatch({ type: App_ActionType.DELETE_WISHLIST_SUCCESS }))
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};


// SEND ADDRESS DATA **********
interface Iaddressdatasend {
  addData: IaddressData;
  dispatch: Dispatch<AppActions>;
}
export const postAddressData = (payload: Iaddressdatasend) => {
  const { addData, dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .post("https://smiling-jade-fly.cyclic.app/address/create", addData, {
      headers,
    })
    .then((res) => dispatch({ type: App_ActionType.POST_ADDRESS_SUCCESS }))
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};


interface Igetaddressdata {
  dispatch: Dispatch<AppActions>;
}
export const getAddressData = (payload: Igetaddressdata) => {
  const { dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .get("https://smiling-jade-fly.cyclic.app/address/", { headers })
    .then((res) => dispatch({ type: App_ActionType.GET_ADDRESS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};


interface Ideleteaddressdata {
  _id: string;
  dispatch: Dispatch<AppActions>;
}

export const DeleteAddressData = (payload: Ideleteaddressdata) => {
  const { _id, dispatch } = payload;
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  dispatch({ type: App_ActionType.LOADING });
  return axios
    .delete(`https://smiling-jade-fly.cyclic.app/address/${_id}`, { headers })
    .then((res) => dispatch({ type: App_ActionType.DELETE_ADDRESS_SUCCESS }))
    .catch((err) => dispatch({ type: App_ActionType.FAILURE }));
};
