import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const querySlice = createSlice({
    name: 'query',
    initialState: {
        query: {},
    },
    reducers: {
        setQueryStore: (state, action: PayloadAction<Record<string, any>>) => {
            state.query = {
                city: action.payload.city,
                priceTo: action.payload.priceTo ? Number(action.payload.priceTo) : 0,
                priceFrom: action.payload.priceFrom ? Number(action.payload.priceFrom) : 0,
            }
        },
    },
})

export const { setQueryStore } = querySlice.actions
export default querySlice.reducer
