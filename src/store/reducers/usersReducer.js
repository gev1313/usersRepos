import { USERS_ACTION_TYPES } from "../actions/usersActions";

const initialState = {
  users: {
    total_count: 0,
    items: []
  },
  singleUser: {},
  resultsFlag: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_ACTION_TYPES.USERS_GET_REQUEST_SUCCESS: {
      return {
         ...state ,
         resultsFlag: false,
         users : {...state.users,items: payload.users.items,total_count: payload.users.total_count }
        }
    }

    case USERS_ACTION_TYPES.LOADING : {
      return {...state, resultsFlag: true}
    }

    case USERS_ACTION_TYPES.USERS_GET_SINGLE_REQUEST_SUCCESS : {
      return { ...state, singleUser: payload.user}
    }
   
    default:
      return state;
  }
};