import {combineReducers} from "redux";
import {banhMiReducer} from "../redux/banhMiReducer"

// TAO STORE TONG UNG DUNG
export const rootRecuder = combineReducers({
    // noi chua cac recuder cho nghiep vu store con 
    banhMiReducer
})
