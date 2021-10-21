
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
    case false: {
 

      return state;
    }
   

    default:
      return state;
  }
};