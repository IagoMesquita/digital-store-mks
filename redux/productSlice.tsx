import { createSlice  } from '@reduxjs/toolkit';
import { IProduct } from '../interface/IProduct';


export const productCartSlice = createSlice({
  name: 'productCart',
  initialState: [] as IProduct[],
  reducers: {
    addProduct(state, { payload }) {
      return [
        ...state,
        {
          id: payload.id,
          brand: payload.brand,
          name: payload.name,
          description: payload.description,
          price: payload.price,
          photo: payload.photo,
        },
      ];
    },
  },

});

// Action creators are generated for each case reducer function
export const { addProduct } = productCartSlice.actions;

export default productCartSlice.reducer;