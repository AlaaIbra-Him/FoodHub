import { createSlice } from "@reduxjs/toolkit"

const counSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        inc: (state) => { 
            state.value += 1 
        },
        dec: (state) => { 
            if (state.value > 0) {
                state.value -= 1 
            }
        },
        reset: (state) => { 
            state.value = 0;
        }
    }
})

export const { inc, dec, reset } = counSlice.actions;
export default counSlice.reducer;






// =========================================================================

// import { createSlice } from "@reduxjs/toolkit"
// const counSlice = createSlice({
//     name: "counter",
//     initialState: { value: 0 },
//     reducers: {
//         inc: (state) => { state.value += 1 },
//         dec: (state) => { state.value -= 1 },
//         reset: (state) => { state.value = 0;}
//     }
// })
// export const { inc, dec , reset} = counSlice.actions;
// export default counSlice.reducer;
