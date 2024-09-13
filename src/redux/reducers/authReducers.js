// redux/reducers/authReducer.js

const initialState = {
    accessToken: null,
    refreshToken: null,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_TOKENS':
        return {
          ...state,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          userDetails: action.payload.userDetails
        };
        case 'RESET_STORE':
          return initialState; // Reset the state to initial values
    
      default:
        return state;
    }
  }
  