import { createSlice } from "@reduxjs/toolkit";
import { M_ITEMS, COLORS } from "@/constants";

const initialState = {
    [M_ITEMS.PENCIL]: {
        color: COLORS.BLACK,
        size: 3
    },
    [M_ITEMS.ERASER]: {
        color: COLORS.WHITE,
        size: 3
    },
    [M_ITEMS.UNDO]: {},
    [M_ITEMS.REDO]: {},
    [M_ITEMS.DOWNLOAD]: {}
}

export const toolboxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state[action.payload.item].color = action.payload.color;
        },
        changeBrushSize: (state, action) => {
            state[action.payload.item].size = action.payload.size;
        }
    }
})

export const { changeColor, changeBrushSize } = toolboxSlice.actions

export default toolboxSlice.reducer