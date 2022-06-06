import React,{createContext , useReducer} from "react";
import AppReducer from '../context/AppReducer.js';

//initial state
const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(AppReducer , initialState);

  //actions
  function deleteTransaction(id){
    dispatch({
      type : 'DELETE_TRANSACTION',
      payload: id })
  }

  function addTransaction(transaction){
    dispatch({
      type : 'ADD_TRANSACTION',
      payload: transaction })
  }

  return(<GlobalContext.Provider value={{
      transactions:state.transactions,
      deleteTransaction,
      addTransaction
  }
 }>

      {children}
  </GlobalContext.Provider>)
}