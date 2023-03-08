import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: false,
    name: '',
    id: "",
    type_account: '',
    last_name: '',
    email: '',
    avatar: '',
    darkMode: false
};


export const bolsilloPersist = createSlice({


    name: "bolsilloPersist",

    initialState,

    reducers: {
        oneUsers(state, action) {
            state.name = action.payload.name;
            state.type_account = action.payload.type_account;
            state.user = true;
            state.last_name = action.payload.last_name;
            state.avatar = action.payload.avatar;
            state.id = action.payload.id
            state.email = action.payload.email;
        },
        changeTheme(state) {
            state.darkMode = !state.darkMode
        }
    }
},);

export const { oneUsers, changeTheme } = bolsilloPersist.actions;
export default bolsilloPersist.reducer;