import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProfile } from "features/users/interfaces"
import { RootState } from "store"

interface UserState {
  profile: IProfile | null
  collapsed: boolean
}

const initialState: UserState = {
  profile: null,
  collapsed: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<Partial<UserState>>) {
      return {
        ...state,
        ...payload,
      }
    },
    signOut() {
      localStorage.clear()
      return { ...initialState }
    },
    toggleSidebar(state) {
      state.collapsed = !state.collapsed
    },
  },
})

export const userSelector = (state: RootState) => state.user
export const { setUser, signOut, toggleSidebar } = userSlice.actions
export const userReducer = userSlice.reducer
