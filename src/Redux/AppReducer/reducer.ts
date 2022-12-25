import React from "react";
import { AppActions } from "./action";
import { App_ActionType } from "./action_types";

interface IstateProps {
  isLoading: boolean;
  isError: boolean;
  sdata: any;
  AllProductData: IproductData[];
  cartData: Icart_wishlistData[];
  wishlistData: Icart_wishlistData[];
  addressData: IaddressData[];
}

const initialState = {
  isLoading: false,
  isError: false,
  AllProductData: [],
  cartData: [],
  wishlistData: [],
  addressData: [],
  sdata: {},
};

const reducer = (state: IstateProps = initialState, action: AppActions) => {
  switch (action.type) {
    case App_ActionType.LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case App_ActionType.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case App_ActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        AllProductData: action.payload,
        isloading: false,
        isError: false,
      };
    case App_ActionType.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        sdata: action.payload,
        isloading: false,
        isError: false,
      };
    case App_ActionType.GET_CART_SUCCESS:
      return {
        ...state,
        cartData: action.payload,
        isloading: false,
        isError: false,
      };
    case App_ActionType.GET_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistData: action.payload,
        isloading: false,
        isError: false,
      };
    case App_ActionType.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        addressData: action.payload,
        isloading: false,
        isError: false,
      };
    case App_ActionType.POST_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case App_ActionType.DELETE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case App_ActionType.POST_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case App_ActionType.DELETE_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case App_ActionType.POST_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case App_ActionType.DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export { reducer };

// Address start
export interface IaddressData {
  pin_code: number;
  city: string;
  state: string;
  flat_street_name: string;
  area_locality: string;
  landmark: string;
  address_as: string;
  name: string;
  number: number;
  userId ?: string;
}

// Wishlist and Cart start
export interface Icart_wishlistData {
    Pid:string;
    _id?:any;
  id: number;
  all_offer_price: number;
  category: string;
  display_image: string;
//   stock_status: number;
  member_price: number;
  mrp: number;
  name: string;
  offer_type ?: string;
  product_sizes: string;
  price: number;
  gender: string;
  quantity: number;
  offer: string;
  member_discount: string;
  product_discount: string;
  manufacturer_brand: string;
  userId ?: string;
}

// allProductData start
export interface IproductData {
  other_images ?: IotherImages[];
  id: number;
  all_offer_price: number;
  description?: string;
  category: string;
  color: string[];
  display_image: string;
  flip_image?: string;
  product_sizes: IsubProduct_size[];
//   stock_status ?: string;
  member_price: number;
  mrp: number;
  name: string;
  offer_type?: string;
  price: number;
  url: string;
  brand?: string;
  status: boolean;
  in_stock: boolean;
  gender: string;
  limited_edition: boolean;
  category_info?: IcategoryInfo;
  offer: string;
  average_rating?: number;
  member_discount: string;
  product_discount: string;
  manufacturer_brand: string;
  userId ?: string;
  _id: string;
}

interface IotherImages {
  id: number;
  url: string;
}

interface IsubProduct_size {
  id: number;
  name: string;
  stock_status: boolean;
}

interface IcategoryInfo {
  gender: string;
  subclass?: string;
  id: number;
  name: string;
  url?: string;
}

// allProductData ends
