const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
    numberOfIceCreams: 20
}
const iceCreamSlice = createSlice({
    name:"ice",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCreams--;
        },
        restocked: (state,action) => {
            state.numberOfIceCreams += action.payload.count;
        }
    },
    // extraReducers: {
    //     ['cake/ordered'] : (state) => {
    //         state.numberOfIceCreams--;
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered,(state) => {
            state.numberOfIceCreams--;
        })
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;