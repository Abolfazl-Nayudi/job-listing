export const reducer = (state, action) => {
  switch (action.type) {
    case 'job/add':
      // return [...state, action.payload];
      return {
        ...state,
        jobFilter: [...state.jobFilter, action.payload],
      };
    case 'job/remove':
      // return state.filter((job) => job !== action.payload);
      return {
        ...state,
        jobFilter: state.jobFilter.filter((job) => job !== action.payload),
      };
    case 'job/data':
      return {
        ...state,
        data: action.payload,
      };
  }
};
