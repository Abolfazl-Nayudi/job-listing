export const reducer = (state, action) => {
  switch (action.type) {
    case 'job/addFilterCriteria':
      // return [...state, action.payload];
      return {
        ...state,
        jobFilter: [...state.jobFilter, action.payload],
      };
    case 'job/removeFilterCriteria':
      // return state.filter((job) => job !== action.payload);
      return {
        ...state,
        jobFilter: state.jobFilter.filter((job) => job !== action.payload),
      };

    case 'job/removeAllFilterCriteria':
      return {
        ...state,
        jobFilter: [],
      };
    case 'job/addData':
      return {
        ...state,
        data: action.payload,
      };
    case 'job/removeData':
      return {
        ...state,
        data: action.payload,
      };
  }
};
