import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  signupStepInfo: SignupStepInfoType;
  emailAuthenticated: boolean | null;
  emailVerifierInfo: EmailVerifierInfoType;
  signupFormData: SignupFormDataType;
}

const initialState: CounterState = {
  signupStepInfo: {
    step: 1,
    range: 33,
  },
  emailAuthenticated: null,
  emailVerifierInfo: {
    email: null,
    uuid: null,
  },
  signupFormData: {
    email: null,
    emailToken: null,
    password: null,
    passwordConfirm: null,
    nickname: null,
  },
};

export const signupSlice = createSlice({
  name: 'SIGNUP',
  initialState,
  reducers: {
    setSingnupStepInfo: (state, action: PayloadAction<SignupStepInfoType>) => {
      state.signupStepInfo = action.payload;
    },
    setEmailAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.emailAuthenticated = action.payload;
    },
    setEmailVerifierInfo: (
      state,
      action: PayloadAction<EmailVerifierInfoType>,
    ) => {
      Object.assign(state.emailVerifierInfo, action.payload);
    },
    setSignupFormData: (state, action: PayloadAction<SignupFormDataType>) => {
      state.signupFormData = action.payload;
    },
    resetSignupInfo: (state) => {
      state.emailAuthenticated = null;
      state.signupStepInfo = {
        step: 1,
        range: 33,
      };
      state.emailVerifierInfo = {
        email: null,
        uuid: null,
      };
    },
  },
});

interface SignupStepInfoType {
  step: 1 | 2 | 3;
  range: 33 | 66 | 100;
}

export interface EmailVerifierInfoType {
  email: string | null;
  uuid: string | null;
}

export interface SignupFormDataType {
  email?: string | null;
  emailToken?: string | null;
  password?: string | null;
  passwordConfirm?: string | null;
  nickname?: string | null;
}

export const {
  actions: signupSliceAction, //
  reducer: signupSliceReducer,
} = signupSlice;

export default signupSlice;
