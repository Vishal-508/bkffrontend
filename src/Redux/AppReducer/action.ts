// https://smiling-jade-fly.cyclic.app

import { App_ActionType } from "./action_types";
import { IaddressData, Icart_wishlistData } from "./reducer";

export interface IgetProductData{
    other_images ?: IotherImages[],
    quantity ?:number,
    _id: string,
    id: number,
    all_offer_price: number,
    description ?: string,
    category: string,
    color:string[],
    design ?: string,
    display_image: string,
    flip_image ?: string,
    parent_category ?: string,
    product_sizes: IsubProduct_size[],
    // stock_status ?: number,
    member_price: number,
    mrp: number,
    name: string,
    custom_name ?: string,
    offer_type ?: string,
    price: number,
    ptype ?: string,
    subclass ?:string,
    url : string,
    brand ?: string,
    model ?: string,
    material ?:string,
    status: number,
    color_name ?: string,
    tribe_text ?: string,
    tribe_image_url ?: string,
    designer ?: string,
    cat_designer ?: string,
    in_stock: number,
    gender: string,
    experiment_id ?: string,
    limited_edition: boolean,
    group_count ?: number,
    category_info ?: IcategoryInfo,
    child_category ?: IcategoryInfo,
    sp ?: string,
    offer: string,
    coin_statement ?: string,
    average_rating ?: number,
    tag ?: Itags[],
    tribe_header ?: string,
    upgraded_dimension ?: boolean,
    member_discount: string,
    product_discount: string,
    manufacturer_brand:string
}

interface Itags{
    type:string,
    label:string,
    bgColor:string,
    textColor:string
}

interface IotherImages{
    id:number,
    url:string
}

interface IsubProduct_size{
    id:number;
    name:string;
    stock_status:boolean;
}

interface IcategoryInfo{
    gender:string,
    subclass?:string,
    id:number,
    name:string,
    url?:string
}


// GET ALLPRODUCTS
interface IgetProductSuccess{
type:App_ActionType.GET_PRODUCT_SUCCESS;
payload:IgetProductData;
} 
interface IgetProductFailure{
    type:App_ActionType.FAILURE;
}
interface IgetProductLoading{
    type:App_ActionType.LOADING;
}
// GET ALLPRODUCTS
interface IgetSingleProductSuccess{
type:App_ActionType.GET_SINGLE_PRODUCT_SUCCESS;
payload:IgetProductData;
} 
interface IgetSingleProductFailure{
    type:App_ActionType.FAILURE;
}
interface IgetSingleProductLoading{
    type:App_ActionType.LOADING;
}

// yha se appActions me add krna hai mujhe

// SEND PRODUCTS IN CART

interface IsendProductCartSuccess{
    type:App_ActionType.POST_CART_SUCCESS; 
}
interface IsendProductCartFailure{
    type:App_ActionType.FAILURE; 
}
interface IsendProductCartLoading{
    type:App_ActionType.LOADING; 
}

// GET PRODUCTS IN CART
interface IgetProductCartSuccess{
    type:App_ActionType.GET_CART_SUCCESS;
    payload:Icart_wishlistData;
}
interface IgetProductCartFailure{
    type:App_ActionType.FAILURE; 
}
interface IgetProductCartLoading{
    type:App_ActionType.LOADING; 
}

// DELETE PRODUCTS IN CART
interface IDeleteProductCartSuccess{
    type:App_ActionType.DELETE_CART_SUCCESS;
}
interface IDeleteProductCartFailure{
    type:App_ActionType.FAILURE; 
}
interface IDeleteProductCartLoading{
    type:App_ActionType.LOADING; 
}

// SEND PRODUCTS IN WISHLIST

interface IsendProductWishlistSuccess{
    type:App_ActionType.POST_WISHLIST_SUCCESS; 
}
interface IsendProductWishlistFailure{
    type:App_ActionType.FAILURE; 
}
interface IsendProductWishlistLoading{
    type:App_ActionType.LOADING; 
}

// GET PRODUCTS IN WISHLIST
interface IgetProductWishlistSuccess{
    type:App_ActionType.GET_WISHLIST_SUCCESS;
    payload:Icart_wishlistData;
}
interface IgetProductWishlistFailure{
    type:App_ActionType.FAILURE; 
}
interface IgetProductWishlistLoading{
    type:App_ActionType.LOADING; 
}

// DELETE PRODUCTS IN WISHLIST
interface IDeleteProductWishlistSuccess{
    type:App_ActionType.DELETE_WISHLIST_SUCCESS;
}
interface IDeleteProductWishlistFailure{
    type:App_ActionType.FAILURE; 
}
interface IDeleteProductWishlistLoading{
    type:App_ActionType.LOADING; 
}

// SEND DATA IN ADDRESS

interface IsendAddressDataSuccess{
    type:App_ActionType.POST_ADDRESS_SUCCESS; 
}
interface IsendAddressDataFailure{
    type:App_ActionType.FAILURE; 
}
interface IsendAddressDataLoading{
    type:App_ActionType.LOADING; 
}

// GET DATA FROM ADDRESS
interface IgetAddressDataSuccess{
    type:App_ActionType.GET_ADDRESS_SUCCESS; 
    payload:IaddressData
}
interface IgetAddressDataFailure{
    type:App_ActionType.FAILURE; 
}
interface IgetAddressDataLoading{
    type:App_ActionType.LOADING; 
}

// DELETE ADDRESS DATA
interface IDeleteAddressDataSuccess{
    type:App_ActionType.DELETE_ADDRESS_SUCCESS; 
}
interface IDeleteAddressDataFailure{
    type:App_ActionType.FAILURE; 
}
interface IDeleteAddressDataLoading{
    type:App_ActionType.LOADING; 
}



export type AppActions= IgetProductLoading | IgetProductSuccess | IgetProductFailure | IgetSingleProductSuccess | IgetSingleProductLoading | IgetSingleProductFailure | IsendProductCartSuccess | IsendProductCartFailure | IsendProductCartLoading | IgetProductCartSuccess | IgetProductCartFailure | IgetProductCartLoading | IDeleteProductCartSuccess | IDeleteProductCartLoading | IDeleteProductCartFailure | IsendProductWishlistFailure | IsendProductWishlistSuccess | IsendProductWishlistLoading | IgetProductWishlistSuccess | IgetProductWishlistLoading | IgetProductWishlistFailure | IDeleteProductWishlistSuccess |IDeleteProductWishlistLoading |IDeleteProductWishlistFailure | IsendAddressDataSuccess | IsendAddressDataLoading | IsendAddressDataFailure | IgetAddressDataSuccess | IgetAddressDataLoading | IgetAddressDataFailure | IDeleteAddressDataSuccess | IDeleteAddressDataLoading | IDeleteAddressDataFailure