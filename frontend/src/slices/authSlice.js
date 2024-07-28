import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')) : null
}  


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{  
        setCredentials:(state, action)=>{
              state.userInfo = action.payload  // action is user data (name,email,id)
              localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout:(state, action)=>{ // clear credientials
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    }
})

export const { setCredentials, logout} = authSlice.actions  // when you call setCredentials or logout slice that is an action

export default authSlice.reducer   // when changes the state that's the reducer 