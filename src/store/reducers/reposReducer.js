import {REPOSACTIONSUCCESS, SINGLREPOSACTIONSUCCESS, LOADING } from "../actions/reposAction";

const initialState = {
  repos: {
    total_count: 0,
    items: []
  },
  singleRepo: {},
  resultsFlag: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REPOSACTIONSUCCESS: {
      return {
          ...state ,
          resultsFlag: false,
          repos : {
          ...state.repos,
          total_count: payload.repos.total_count,
          items: payload.repos.items
      }
    }
  }


  case SINGLREPOSACTIONSUCCESS : {
    return { 
       ...state,
       singleRepo:payload.repo
    }
  }

    case LOADING: {
    return {
       ...state,
       resultsFlag: true
    }
  }
    default:
      return state;
  }
};


