
// const initailState={
//     todos:[],

import { combineReducers } from "redux";
import { cartItems } from "./cartReducer";

// };
// const rootReducer=(state=initailState,action)=>{
// switch(action.type){
//     case "AddTodo":
//         return {
//             ...state,
//            todos: [...state,action.payload],

//         }
//         // case DeleteTodo:
//         //     return 0;



    
// }
// }
const rootReducer = combineReducers({
  cartItems });
export default rootReducer;