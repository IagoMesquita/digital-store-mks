import { createSlice, current  } from '@reduxjs/toolkit';
import { ICart } from '../interface/ICart';

import { IProduct } from '../interface/IProduct';


export const productCartSlice = createSlice({
  name: 'productCart',
  initialState: [] as ICart[],
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
          qtd: 1,
        },
      ];
    },
    addQtdProduct(state, { payload }) {
      return state.forEach((el) => {
        if (el.id === payload.id) {
          el.qtd += 1
        }
      })
    }
  },

});

// Action creators are generated for each case reducer function
export const { addProduct, addQtdProduct } = productCartSlice.actions;

export default productCartSlice.reducer;