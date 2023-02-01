import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    client : {toggleForm : false}
}
export const ReducerSlice = createSlice({
    name: "crudApp",
    initialState , 
    reducers: {
        toggleAction : (state)=>{
            state.client.toggleForm = !state.client.toggleForm
        }
    }
})
export const { toggleAction} = ReducerSlice.actions ; 
export default ReducerSlice.reducer ; 