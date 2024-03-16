import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance : 0,
    fullName : "praveen",
    mobile : 123456
}

const transactionState = []
const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        updateMobile : (state,action) => {
            state.mobile = action.payload
        },
        updateName : (state,action) => {
            state.fullName = action.payload
        },
        withdraw : (state,action) => {
            state.balance = state.balance  - action.payload
        },
        deposit : (state,action) => {
            state.balance = state.balance  + +action.payload
        }
    }
})

const transactionSlice = createSlice({
    name: "transactions",
    initialState : transactionState,
    reducers : {
        addTransaction : (state,action) => {
            state.push(action.payload)
        }
    }
})

const store = configureStore({
    reducer : {
        user : userSlice.reducer,
        transaction : transactionSlice.reducer
    }
})

export const {updateName, updateMobile, withdraw, deposit} = userSlice.actions 

export const {addTransaction} = transactionSlice.actions 

export default store