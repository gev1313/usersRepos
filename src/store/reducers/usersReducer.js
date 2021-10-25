import { USERS_ACTION_TYPES } from "../actions/usersActions";

const initialState = {
  users: {
    total_count: 0,
    items: []
  },
  singleUser: {},
  resultsFlag: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_ACTION_TYPES.USERS_GET_REQUEST_SUCCESS: {
        return {
            ...state ,
            resultsFlag: false,
            users : {
            ...state.users,
            total_count: payload.users.total_count,
            items: payload.users.items
        }
      }
    }

    case USERS_ACTION_TYPES.LOADING : {
      return {
         ...state,
         error : null,
         resultsFlag: true
      }
    }

    case USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST_SUCCESS : {
      return { 
         ...state,
         error : null,
         singleUser:payload.user
      }
    }

    case USERS_ACTION_TYPES.ERROR : {
      return {
        ...state,
        resultsFlag: false,
        error : payload.error
      }
    }
   
    default:
      return state;
  }
};