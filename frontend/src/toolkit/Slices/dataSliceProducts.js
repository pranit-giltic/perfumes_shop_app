import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: null,
    isLoading: false,
}

export const fetchData = createAsyncThunk("products/fetchData" ,async(product) =>{
    try {
        const response = await fetch("/perfumes")
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json()
        console.log("✅ Данные получены:", data);
        return data
    } catch (error) {
        console.error("❌ Ошибка запроса:", error);
        throw error;
    }
})

const dataSliceProducts = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchData.fulfilled, (state, action) => {
            state.error = null;
            state.products = action.payload;
            state.isLoading = false;
            console.log("🎯 Товары в Redux:", state.products);
        })
        .addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            console.log("⏳ Запрос в процессе...");
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            console.error("🚨 Ошибка при загрузке:", action.error.message);
        })
    }
})
export const dataSliceProductsReducer = dataSliceProducts.reducer;