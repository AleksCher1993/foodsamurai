import { mainApi } from "../api/getDatas";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IHomeSlice, itemsType, loadingEnum, queryParams } from "./type";


export const getDatas = createAsyncThunk<itemsType[],queryParams>(
  "homeSlice/getDatas",
  async (params) => {
    let { sortBy, order, category,title } = params;
    const data = await mainApi.getDatas(sortBy, order, category,title);
    return data as itemsType[];
  }
);

const initialState:IHomeSlice = {
  items: [],
  query: { sortBy: "rating", order: "asc", category: "",title:"" },
  loading: loadingEnum.IDLE, //'idle' | 'pending' | 'succeeded' | 'failed'
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    changeQueryParams: (state, action:PayloadAction<{type:string,value:string}>) => {
      switch (action.payload.type) {
        case "order":
          state.query.order = action.payload.value;
          return;
        case "sortBy":
          state.query.sortBy = action.payload.value;
          return;
        case "category":
          state.query.category = action.payload.value;
          return;
          case "title":
          state.query.title = action.payload.value;
          return;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDatas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = loadingEnum.SUCCESS;
    });
    builder.addCase(getDatas.pending, (state) => {
      state.loading = loadingEnum.PENDING;
    });
    builder.addCase(getDatas.rejected, (state) => {
      state.loading = loadingEnum.FAILD;
    });
  },
});

export const {changeQueryParams} = homeSlice.actions
export const pizzaReducer= homeSlice.reducer
