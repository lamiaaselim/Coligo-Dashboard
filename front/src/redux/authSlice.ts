// redux/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginFormData, SignupFormData, User } from '../types/auth.ts';
import { login, signup } from '../services/authService.ts';

interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: LoginFormData, { rejectWithValue }) => {
    try {
      const user = await login(data);
      localStorage.setItem('user', JSON.stringify(user)); //  save user in localStorage
      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (data: SignupFormData, { rejectWithValue }) => {
    try {
      const user = await signup(data);
      localStorage.setItem('user', JSON.stringify(user)); // save user in localStorage
      return user;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('user'); // remove user from localStorage
    },
    clearError(state) {
      state.error = null;
    },
    loadUserFromStorage(state) {
      const userData = localStorage.getItem('user');
      if (userData) {
        state.user = JSON.parse(userData); // load user from localStorage
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;