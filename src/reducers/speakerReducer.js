function speakerReducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        speaker: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        speaker: {},
        error: 'Something Went Wrong',
      };
    default:
      return state;
  }
}

export default speakerReducer;
